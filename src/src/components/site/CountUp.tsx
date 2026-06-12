import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates stat values like "+312%", "180+", "94%", "$47M"
 * from zero when they scroll into view. Falls back to static text
 * for reduced motion or unparseable values.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (Number.isNaN(target)) return;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const useCommas = numStr.includes(",");

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          let n = (target * eased).toFixed(decimals);
          if (useCommas) n = Number(n).toLocaleString("en-US");
          setDisplay(`${prefix}${n}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
