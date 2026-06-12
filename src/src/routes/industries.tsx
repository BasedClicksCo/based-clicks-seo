import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, ShoppingBag, Rocket, Stethoscope, Scale, Home as HomeIcon, Store, Building2, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { CrawlerField } from "@/components/site/CrawlerField";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "SEO for Any Business | BasedClicksCo" },
      { name: "description", content: "BasedClicksCo delivers customized SEO solutions for all industries, boosting traffic and visibility for law firms, eCommerce, tech, healthcare, and more." },
      { property: "og:title", content: "SEO for Any Business | BasedClicksCo" },
      { property: "og:description", content: "Customized SEO solutions for every industry — local SEO company expertise and enterprise SEO solutions." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/industries" },
    ],
    links: [{ rel: "canonical", href: "https://based-clicks-seo.arshamsobbi.workers.dev/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
          ],
        }),
      },
    ],
  }),
  component: Industries,
});

const items = [
  { icon: UtensilsCrossed, name: "Restaurants", desc: "Local SEO company services that fill seats — search rankings, reviews, and on-brand content that drives reservations." },
  { icon: ShoppingBag, name: "eCommerce", desc: "Category authority, product schema, and faceted-nav strategy to increase website traffic across large catalogs." },
  { icon: Rocket, name: "Tech Startups", desc: "Programmatic SEO, comparison content, and topical authority — enterprise SEO solutions tuned for growth-stage teams." },
  { icon: Stethoscope, name: "Healthcare", desc: "Compliant, trustworthy content marketing and SEO that ranks for high-intent patient queries." },
  { icon: Scale, name: "Law Firms", desc: "Practice-area pages, local pack dominance, and reputation-led SEO services for professional firms." },
  { icon: HomeIcon, name: "Real Estate", desc: "Neighborhood, listing, and agent-page strategies engineered by search engine optimization experts." },
  { icon: Store, name: "Small Local Shops", desc: "SEO services for small businesses — Google Business optimization and hyper-local content that fills your calendar." },
  { icon: Building2, name: "B2B & Enterprise", desc: "Enterprise SEO solutions with account-aligned content, technical excellence, and multi-region architecture." },
];

function Industries() {
  return (
    <div>
      <section className="gradient-ink relative overflow-hidden py-24 md:py-32">
        <CrawlerField />
        <div className="container-px pointer-events-none relative mx-auto max-w-7xl">
          <div className="rise-in"><Eyebrow>Industries we serve</Eyebrow></div>
          <h1 className="rise-in rise-delay-1 mt-5 max-w-3xl font-serif text-5xl md:text-6xl">SEO Solutions for <span className="gold-shimmer">Every Industry</span></h1>
          <p className="rise-in rise-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65">Customized SEO services for law firms, med spas, dental offices and more across Simi Valley and Los Angeles— shaped around your buyers, sales cycle, and competitive landscape.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.name} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="panel panel-hover group h-full rounded-xl p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/25 bg-gold/8 text-gold transition-transform duration-500 group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl">{it.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="panel mt-20 rounded-2xl p-10 text-center md:p-14">
            <h2 className="font-serif text-3xl md:text-4xl">Don't see your industry?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">Our methodology adapts. We've delivered results for niche markets you've never heard of — and we'd love to do the same for you.</p>
            <Link to="/contact" className="btn-gold mt-9 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
