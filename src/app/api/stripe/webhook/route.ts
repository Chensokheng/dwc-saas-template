import Stripe from "stripe";
import { headers } from "next/headers";

import { buffer } from "node:stream/consumers";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

const stripe = new Stripe(process.env.STRIPE_SK!);

export async function POST(req: any) {
  const rawBody = await buffer(req.body);
  try {
    const sig = headers().get("stripe-signature");
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err: any) {
      return Response.json({ error: `Webhook Error ${err?.message!} ` });
    }
    switch (event.type) {
      case "invoice.payment_succeeded":
        const data = event.data.object;
        const customer_id = data.customer as string;
        const subscription_id = data.subscription as string;
        const email = data.customer_email as string;
        const end_at = new Date(data.lines.data[0].period.end * 1000).toISOString();

        await onCheckoutSuccessfully(email, subscription_id, customer_id, end_at);

      // onCheckoutSuccessfully(email, subscription_id, customer_id);

      case "customer.subscription.deleted":
        const deleteSubscription = event.data.object;
        // await onCacnelSubscription(deleteSubscription.status === "active", deleteSubscription.id);
        break;
      case "customer.updated":
        const customer = event.data.object;
        const subscription = await stripe.subscriptions.list({
          customer: customer.id,
        });
        if (subscription.data.length) {
          const sub = subscription.data[0];
          //   await onSuccessSubscription(
          //     sub.id,
          //     customer.id,
          //     sub.status === "active",
          //     customer.email!,
          //   );
        }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return Response.json({});
  } catch (e) {
    return Response.json({ error: `Webhook Error}` });
  }
}

const onCheckoutSuccessfully = async (
  email: string,
  stripeSubscriptionId: string,
  stripeCustomerId: string,
  endAt: string,
) => {
  const supabaseAdmin = createSupabaseAdmin();
  await supabaseAdmin.rpc("on_checkout_successfully", {
    arg_email: email,
    arg_stripe_customer_id: stripeCustomerId,
    arg_stripe_subscription_id: stripeSubscriptionId,
    arg_end_at: endAt,
  });
};

// const onSuccessSubscription = async (
//   subscription_id: string,
//   customer_id: string,
//   status: boolean,
//   email: string,
// ) => {
//   const supabase = await createSupbaseAdmin();
//   const { data } = await supabase
//     .from("users")
//     .update({
//       stripe_subscriptoin_id: subscription_id,
//       stripe_customer_id: customer_id,
//       subscription_status: status,
//     })
//     .eq("email", email)
//     .select("id")
//     .single();
//   await supabase.auth.admin.updateUserById(data?.id!, {
//     user_metadata: { stripe_customer_id: null },
//   });
// };

// const onCacnelSubscription = async (status: boolean, subscription_id: string) => {
//   const supabase = await createSupbaseAdmin();
//   const { data, error } = await supabase
//     .from("users")
//     .update({
//       stripe_subscriptoin_id: null,
//       stripe_customer_id: null,
//       subscription_status: status,
//     })
//     .eq("stripe_subscriptoin_id", subscription_id)
//     .select("id")
//     .single();

//   await supabase.auth.admin.updateUserById(data?.id!, {
//     user_metadata: { stripe_customer_id: null },
//   });
// };
