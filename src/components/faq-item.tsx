import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export function FaqItem({ question, answer, className }: FaqItemProps) {
  return (
    <AccordionItem
      value={question}
      className={cn("rounded-3xl border-b-0 bg-card px-8 py-3", className)}
    >
      <AccordionTrigger className="gap-3 text-left text-lg font-semibold hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg>path:first-child]:rotate-90">
        {question}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-[0.5rem] bg-secondary">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6 text-primary"
          >
            <path
              d="M12 5v14"
              className="origin-center transition-transform duration-300 ease-out"
            />
            <path d="M5 12h14" />
          </svg>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-lg text-muted-foreground">{answer}</AccordionContent>
    </AccordionItem>
  );
}
