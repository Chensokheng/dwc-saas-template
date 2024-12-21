import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeatureItemProps {
  text: string;
  className?: string;
}

export function PricingFeatureItem({ text, className }: PricingFeatureItemProps) {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <div className="flex size-7 items-center justify-center rounded-[0.5rem] bg-secondary">
        <Check size={20} className="text-primary" />
      </div>
      <span className="font-semibold text-muted-foreground">{text}</span>
    </li>
  );
}
