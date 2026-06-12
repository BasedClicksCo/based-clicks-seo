import { useEffect, useRef } from "react";

/**
 * CrawlerField — the site's signature interaction.
 * A faint grid of nodes (pages) sits behind hero sections. The cursor acts
 * like a search crawler: nearby nodes light up gold and link to their
 * neighbors like an internal-linking graph, and the activation lingers and
 * fades behind the cursor, leaving a temporary trace of where it crawled.
 * Idle "pulses" keep it alive on touch devices. Respects reduced motion.
 */
export function CrawlerField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const SPACING = 46;
    const RADIUS = 170;
    const LINK_DIST = SPACING * 1.6;
    const DECAY = reduced ? 1 : 0.965; // lingering trace fade

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let heat: Float32Array = new Float32Array(0);
    const mouse = { x: -9999, y: -9999, inside: false };

    // idle pulses so the field breathes without a cursor (mobile)
    let pulse = { x: 0, y: 0, t: 0, active: false };
    let nextPulseAt = 1200;
    let elapsed = 0;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      cols = Math.ceil(width / SPACING) + 1;
      rows = Math.ceil(height / SPACING) + 1;
      heat = new Float32Array(cols * rows);
    };

    const gold = (a: number) => `oklch(0.8 0.13 85 / ${a})`;
    const dim = (a: number) => `oklch(0.95 0.01 250 / ${a})`;

    const draw = (now: number) => {
      if (!running) return;
      const dt = Math.min(now - last, 50);
      last = now;
      elapsed += dt;

      // schedule ambient pulses
      if (!reduced && elapsed > nextPulseAt) {
        pulse = {
          x: (0.15 + Math.random() * 0.7) * width,
          y: (0.15 + Math.random() * 0.7) * height,
          t: 0,
          active: true,
        };
        nextPulseAt = elapsed + 2600 + Math.random() * 2600;
      }
      if (pulse.active) {
        pulse.t += dt;
        if (pulse.t > 1600) pulse.active = false;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const pulseR = pulse.active ? (pulse.t / 1600) * 220 : 0;
      const pulseA = pulse.active ? Math.sin((pulse.t / 1600) * Math.PI) * 0.55 : 0;

      // update heat + draw dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          const i = r * cols + c;

          let h = heat[i] * DECAY;

          if (mouse.inside) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < RADIUS) {
              const target = 1 - d / RADIUS;
              if (target > h) h = h + (target - h) * 0.35;
            }
          }
          if (pulse.active) {
            const d = Math.hypot(x - pulse.x, y - pulse.y);
            const band = Math.abs(d - pulseR);
            if (band < 40) {
              const target = (1 - band / 40) * pulseA;
              if (target > h) h = target;
            }
          }

          heat[i] = h;

          const base = 0.07;
          if (h > 0.02) {
            ctx.fillStyle = gold(base + h * 0.85);
            const size = 1.1 + h * 1.9;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = dim(base);
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
      }

      // link activated neighbors — the internal-linking graph
      ctx.lineWidth = 0.7;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const h = heat[i];
          if (h < 0.12) continue;
          const x = c * SPACING;
          const y = r * SPACING;
          // right + down + diagonal neighbors only (no double-draw)
          const neighbors = [
            [c + 1, r],
            [c, r + 1],
            [c + 1, r + 1],
          ] as const;
          for (const [nc, nr] of neighbors) {
            if (nc >= cols || nr >= rows) continue;
            const ni = nr * cols + nc;
            const nh = heat[ni];
            if (nh < 0.12) continue;
            const nx = nc * SPACING;
            const ny = nr * SPACING;
            if (Math.hypot(nx - x, ny - y) > LINK_DIST) continue;
            ctx.strokeStyle = gold(Math.min(h, nh) * 0.4);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.inside =
        mouse.x >= 0 && mouse.y >= 0 && mouse.x <= rect.width && mouse.y <= rect.height;
    };
    const onLeave = () => {
      mouse.inside = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // pause when offscreen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    window.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    />
  );
}
