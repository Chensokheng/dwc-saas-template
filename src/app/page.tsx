import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <Faq />
      <Pricing />
      <CtaSection />
      <Footer />
    </>
  );
}
