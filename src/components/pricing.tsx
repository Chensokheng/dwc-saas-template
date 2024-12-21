import { PricingCard } from "@/components/pricing-card";
import useSession from "@/hooks/users/useSession";

export function Pricing() {
  useSession();

  return (
    <section className="container flex flex-col items-center gap-6 pb-40 pt-24 sm:gap-7">
      <div className="flex flex-col items-center gap-3">
        <span className="text-left font-heading font-bold italic text-primary">Pricing</span>
        <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Simple pricing
        </h2>
      </div>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing
        praesent velit viverra sit.
      </p>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <PricingCard
          name="Startup"
          price={19}
          feature1="Unlimited projects"
          feature2="Unlimited storage"
          feature3="24/7 support"
          feature4="API access"
          feature5="Custom branding"
          description="For small companies and teams."
          isMostPopular={false}
        />
        <PricingCard
          name="Growth"
          price={39}
          feature1="Everything in Basic"
          feature2="Priority support"
          feature3="Advanced analytics"
          feature4="Unlimited users"
          feature5="Custom domain"
          description="For larger companies and teams."
          isMostPopular
          className="border-2 border-primary"
        />
        <PricingCard
          name="Enterprise"
          price={99}
          feature1="Everything in Pro"
          feature2="Single sign-on"
          feature3="Custom SLA"
          feature4="Custom integrations"
          feature5="Custom reporting"
          description="For very large businesses."
          isMostPopular={false}
        />
      </div>
    </section>
  );
}
