import { useReveal } from "@/hooks/use-reveal";
import type { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("reveal", className)} {...rest}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </span>
  );
}
