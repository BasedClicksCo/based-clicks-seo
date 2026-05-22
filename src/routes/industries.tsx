import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, ShoppingBag, Rocket, Stethoscope, Scale, Home as HomeIcon, Store, Building2, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Elevare SEO" },
      { name: "description", content: "Custom SEO solutions for restaurants, eCommerce, tech startups, healthcare, law firms, real estate, and local businesses." },
      { property: "og:title", content: "Industries We Serve — Elevare SEO" },
      { property: "og:description", content: "Custom SEO solutions for every industry." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const items = [
  { icon: UtensilsCrossed, name: "Restaurants & Hospitality", desc: "Fill seats and drive reservations with local search, reviews, and on-brand content." },
  { icon: ShoppingBag, name: "eCommerce & Retail", desc: "Category authority, product schema, and faceted-nav strategy that scales catalogs." },
  { icon: Rocket, name: "Tech Startups & SaaS", desc: "Programmatic SEO, comparison content, and topical authority for growth stages." },
  { icon: Stethoscope, name: "Healthcare & Wellness", desc: "Compliant, trustworthy content that ranks for high-intent patient queries." },
  { icon: Scale, name: "Law Firms & Professional Services", desc: "Practice-area pages, local pack dominance, and reputation-led growth." },
  { icon: HomeIcon, name: "Real Estate", desc: "Neighborhood, listing, and agent-page strategies that capture buyer intent." },
  { icon: Store, name: "Local Shops & Service Businesses", desc: "Google Business optimization and hyper-local content that fills your calendar." },
  { icon: Building2, name: "B2B & Enterprise", desc: "Account-aligned content, technical excellence, and complex multi-region SEO." },
];

function Industries() {
  return (
    <div>
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Industries we serve</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Tailored for <span className="text-gold">your industry</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">No template playbooks. Every engagement is shaped around your buyers, sales cycle, and competitive landscape.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.name} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-gold/15 text-gold transition-transform group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-navy">{it.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 rounded-2xl border border-border bg-secondary/40 p-10 text-center md:p-14">
            <h2 className="font-serif text-3xl text-navy md:text-4xl">Don't see your industry?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Our methodology adapts. We've delivered results for niche markets you've never heard of — and we'd love to do the same for you.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
