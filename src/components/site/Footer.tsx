import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-gold/30 bg-gold/10 font-serif text-lg text-gold">B</span>
              <span className="font-serif text-xl font-medium text-foreground">
                BasedClicks<span className="text-gold">Co</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/55">
              Search engine optimization experts delivering SEO services for small businesses and enterprise SEO solutions across every industry.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground/60">
              <li><Link to="/" className="transition-colors hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-gold">SEO Services</Link></li>
              <li><Link to="/industries" className="transition-colors hover:text-gold">Industries</Link></li>
              <li><Link to="/case-studies" className="transition-colors hover:text-gold">Case Studies</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-gold">Free SEO Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/60">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+18189636728" className="transition-colors hover:text-gold">+1 (818) 963-6728</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:elevareseoforyou@gmail.com" className="transition-colors hover:text-gold">elevareseoforyou@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> California · Local SEO company serving clients worldwide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold">Get Started</h4>
            <p className="mt-5 text-sm leading-relaxed text-foreground/60">Request a complimentary technical SEO audit and learn how to increase website traffic.</p>
            <Link
              to="/contact"
              className="btn-gold mt-5 inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold"
            >
              Free SEO Audit
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/8 pt-6 text-xs text-foreground/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BasedClicksCo. All rights reserved.</p>
          <p>Search engine optimization experts crafting measurable growth.</p>
        </div>
      </div>
    </footer>
  );
}
