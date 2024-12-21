"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AUTH_TRIGGER } from "@/constants";
import useSession from "@/hooks/users/useSession";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/global";

export default function CheckoutButton({
  text,
  priceId,
  className,
}: {
  text: string;
  priceId: string;
  className?: string;
}) {
  const { data: user } = useSession();
  const setPriceId = useGlobalStore((state) => state.setPriceId);
  const router = useRouter();

  const handleCheckout = () => {
    if (!user?.id) {
      setPriceId(priceId);
      document.getElementById(AUTH_TRIGGER)?.click();
    } else if (user?.subscription?.status) {
      router.push("/dashboard");
    } else {
      router.push("/checkout/" + priceId);
    }
  };

  return (
    <Button
      size="lg"
      asChild={false}
      className={cn(
        "group w-full cursor-pointer gap-2 bg-gradient-to-br from-accent via-primary via-60% to-primary transition-transform hover:scale-95 hover:opacity-90 sm:h-14 sm:px-10 sm:text-base",
        className,
      )}
      onClick={handleCheckout}
    >
      {text}
      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
