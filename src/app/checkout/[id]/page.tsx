import { PRICE_IDS } from "@/constants";
import { createClient } from "@/lib/supabase/server";
import { checkout } from "@/service/stripe/checkout";
import { redirect } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user?.email) {
    redirect("/");
  }
  if (!PRICE_IDS.includes(params.id)) {
    return <h1>Invalid Price id</h1>;
  }

  const stripeRes = await checkout(data.user.email, process.env.APP_URL + "/dashboard", params.id);

  if (stripeRes.url) {
    redirect(stripeRes.url);
  }

  return (
    <div className="flex h-screen items-center justify-center">Fail to load stripe checkout</div>
  );
}
