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
    <span className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
      <span className="h-px w-8 bg-gold/70" />
      {children}
    </span>
  );
}
