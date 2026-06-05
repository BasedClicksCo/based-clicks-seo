import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gold/15 text-gold font-serif text-lg">B</span>
              <span className="font-serif text-xl font-semibold">
                BasedClicks<span className="text-gold">Co</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/65">
              Search engine optimization experts delivering SEO services for small businesses and enterprise SEO solutions across every industry.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold">SEO Services</Link></li>
              <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
              <li><Link to="/case-studies" className="hover:text-gold">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Free SEO Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+18189636728" className="hover:text-gold">+1 (818) 963-6728</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:elevareseoforyou@gmail.com
" className="hover:text-gold">elevareseoforyou@gmail.com
</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> California · Local SEO company serving clients worldwide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base text-gold">Get Started</h4>
            <p className="mt-4 text-sm text-white/70">Request a complimentary technical SEO audit and learn how to increase website traffic.</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center rounded-md gradient-gold px-4 py-2.5 text-sm font-semibold text-navy"
            >
              Free SEO Audit
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BasedClicksCo. All rights reserved.</p>
          <p>Search engine optimization experts crafting measurable growth.</p>
        </div>
      </div>
    </footer>
  );
}
