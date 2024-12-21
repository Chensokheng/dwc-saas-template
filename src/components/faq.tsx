import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary via-70% to-background pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <span className="text-left font-heading font-bold italic text-primary">Faq</span>
          <h2 className="text-balance text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-6 flex w-full max-w-3xl flex-col gap-4">
          <FaqItem
            answer="The goal of the DWC community is to create a welcoming space for anyone learning to code or actively coding, providing a place to connect, share knowledge, collaborate, and grow together as developers."
            question="What's the main purpose of DWC community?"
          />
        </Accordion>
        <undefined href="#" text="Get Started" className="mt-4" />
      </div>
    </section>
  );
}
