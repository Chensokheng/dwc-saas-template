import Link from "next/link";
import { BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <BarChart size={32} className="text-primary" />
      <span className="font-heading text-2xl font-extrabold">DWC</span>
    </Link>
  );
}
