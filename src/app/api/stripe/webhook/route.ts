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
        break;

      case "customer.subscription.deleted":
        const deleteSubscription = event.data.object;
        await onCacnelSubscription(deleteSubscription.id);
        break;

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

const onCacnelSubscription = async (subscription_id: string) => {
  const supabase = createSupabaseAdmin();
  await supabase.rpc("on_cancel_subscription", {
    arg_stripe_subscription_id: subscription_id,
  });
};
