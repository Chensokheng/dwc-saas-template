"use server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SK!);

export async function checkout(email: string, redirectTo: string, priceId: string) {
  return await stripe.checkout.sessions.create({
    success_url: redirectTo || process.env.APP_URL,
    cancel_url: process.env.APP_URL,
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
  });
}
