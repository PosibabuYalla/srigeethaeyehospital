import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "accent" | "glass" | "outline";
}) {
  const variants = {
    brand: "bg-brand-500 text-white",
    accent: "bg-accent-400 text-white",
    glass: "glass text-brand-900",
    outline: "border border-brand-300 text-brand-600 bg-white/60",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
