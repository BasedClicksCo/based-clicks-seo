import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/80 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)} aria-label="BasedClicksCo — SEO services home">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/30 bg-gold/10 font-serif text-lg text-gold transition-colors group-hover:bg-gold/20">B</span>
          <span className="font-serif text-xl font-medium text-foreground">
            BasedClicks<span className="text-gold">Co</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="nav-link text-sm font-normal text-foreground/65 transition-colors hover:text-foreground"
              activeProps={{ className: "nav-active text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold"
          >
            Free SEO Audit
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-ink lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-normal text-foreground/75 hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "bg-white/5 text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold"
            >
              Free SEO Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
