import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  text: string;
  href: string;
  className?: string;
}

export function CtaButton({ text, href, className }: CtaButtonProps) {
  return (
    <Link href={href} className={className}>
      <Button
        size="lg"
        asChild={false}
        className="group w-full cursor-pointer gap-2 bg-gradient-to-br from-accent via-primary via-60% to-primary transition-transform hover:scale-95 hover:opacity-90 sm:h-14 sm:px-10 sm:text-base"
      >
        {text}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  );
}
