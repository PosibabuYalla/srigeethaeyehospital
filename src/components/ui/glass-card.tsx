"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
  gradientBorder = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradientBorder?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "glass-card relative rounded-3xl p-6 sm:p-8",
        gradientBorder && "gradient-border",
        hover && "transition-shadow duration-500 hover:shadow-glass-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
