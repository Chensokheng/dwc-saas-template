"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK!);

export async function manageBillingPortal() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const customer_id = data.user?.user_metadata?.stripe_customer_id;

  if (!customer_id) {
    redirect("/#pricing");
  }

  const res = await stripe.billingPortal.sessions.create({
    customer: customer_id,
    return_url: process.env.APP_URL,
  });

  redirect(res.url);
}
