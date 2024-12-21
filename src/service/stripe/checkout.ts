"use server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK!);

export async function checkout(email: string, redirectTo: string, priceId: string) {
  const supabase = createSupabaseAdmin();

  const { data, error } = await supabase.rpc("get_user_subscription", {
    arg_email: email,
  });

  if (error) {
    redirect("/subscription/error");
  }

  if (data[0].arg_status) {
    redirect("/dashboard");
  }

  const checkoutObject: any = {
    success_url: redirectTo || process.env.APP_URL,
    cancel_url: process.env.APP_URL,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
  };

  if (data[0]?.arg_stripe_customer_id) {
    checkoutObject["customer"] = data[0]?.arg_stripe_customer_id;
  } else {
    checkoutObject["customer_email"] = email;
  }

  return await stripe.checkout.sessions.create(checkoutObject);
}
