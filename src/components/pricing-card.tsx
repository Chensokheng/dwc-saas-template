import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PricingFeatureItem } from "@/components/pricing-feature-item";
import { cn } from "@/lib/utils";
import CheckoutButton from "./checkout-button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  priceId: string;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  priceId,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn("relative border shadow-lg", className)}>
      <CardContent className="flex flex-col items-start p-8">
        <h4 className="font-heading text-3xl font-semibold text-foreground">{name}</h4>
        <div className="mt-5">
          <span className="font-heading text-5xl font-semibold">${price}</span>
          <span className="text-sm"> /month</span>
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <Separator orientation="horizontal" className="my-6" />
        <ul className="space-y-2">
          <PricingFeatureItem text={feature1} />
          <PricingFeatureItem text={feature2} />
          <PricingFeatureItem text={feature3} />
          <PricingFeatureItem text={feature4} />
          <PricingFeatureItem text={feature5} />
        </ul>
        <CheckoutButton text="Get Started" priceId={priceId} className=" mt-10" />
        <p className="mx-auto mt-4 text-balance text-center text-sm text-muted-foreground">
          No credit card required
        </p>
      </CardContent>
      {isMostPopular === true && (
        <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary bg-gradient-to-br from-accent px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
          Most popular
        </span>
      )}
    </Card>
  );
}
