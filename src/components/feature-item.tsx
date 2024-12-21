import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function FeatureItem({ title, description, icon: Icon, className }: FeatureItemProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Icon size={29} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
