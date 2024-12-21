import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 rounded-3xl bg-secondary p-6 p-8", className)}
    >
      <div className="font-heading text-4xl font-bold">{value}</div>
      <div className="text-center text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
