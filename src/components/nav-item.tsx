import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
}

export function NavItem({ href, label, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {label}
    </Link>
  );
}