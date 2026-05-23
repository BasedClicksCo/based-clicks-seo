import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Target, FileText, MapPin, BarChart3, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import analyticsImg from "@/assets/analytics.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Services | BasedClicksCo" },
      { name: "description", content: "Discover professional SEO services at BasedClicksCo. From technical SEO audits to content marketing, we help your business rank higher." },
      { property: "og:title", content: "SEO Services | BasedClicksCo" },
      { property: "og:description", content: "Comprehensive SEO services — technical SEO audits, on-page SEO, content marketing, link building, and local SEO solutions." },
      { property: "og:url", content: "https://elevare-seo.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://elevare-seo.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Search Engine Optimization",
          provider: { "@type": "Organization", name: "BasedClicksCo", url: "https://elevare-seo.lovable.app" },
          areaServed: "Worldwide",
          description: "SEO services for small businesses, enterprise SEO solutions, technical SEO audits, content marketing and SEO, and local SEO company services.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elevare-seo.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://elevare-seo.lovable.app/services" },
          ],
        }),
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Target,
    title: "SEO Strategy & Consultation",
    text: "We start with deep discovery — your goals, audience, competition, and current performance. Our search engine optimization experts deliver a prioritized roadmap to increase website traffic.",
    points: ["Market & competitor analysis", "Keyword opportunity mapping", "Quarterly strategy reviews"],
  },
  {
    icon: Search,
    title: "Technical SEO Audits & On-Page SEO",
    text: "A complete technical SEO audit engineers your site for performance and discoverability — fast, crawlable, indexable, and aligned with search intent at every URL.",
    points: ["Core Web Vitals optimization", "Schema & structured data", "Site architecture & internal linking"],
  },
  {
    icon: FileText,
    title: "Content Marketing & SEO Link Building",
    text: "Editorial-grade content marketing and SEO paired with ethical, authority-building backlinks that move rankings and drive qualified traffic.",
    points: ["Topical authority planning", "In-house editorial team", "Outreach & digital PR"],
  },
  {
    icon: MapPin,
    title: "Local SEO Solutions",
    text: "From a single storefront to hundreds of locations, our local SEO company wins local packs and Google Business profiles at scale.",
    points: ["Google Business optimization", "Citations & reviews", "Multi-location architecture"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    text: "Transparent dashboards connect SEO services for small businesses and enterprise SEO solutions to real revenue. You'll always know what's working — and what's next.",
    points: ["Custom GA4 & GSC dashboards", "Attribution modeling", "Monthly executive reporting"],
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Growth",
    text: "Rankings are only half the story. We optimize the experience to turn organic visitors into customers and increase website traffic that converts.",
    points: ["Landing page optimization", "CRO experiments", "Funnel diagnostics"],
  },
];

function Services() {
  return (
    <div>
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Our SEO services</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Our <span className="text-gold">SEO Services</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">A full-spectrum SEO offering — from technical SEO audits to content marketing and SEO — modular enough to fit any business and engineered to increase website traffic over time.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid items-center gap-12 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-lg gradient-navy text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl text-navy md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold/20 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
                    <img src={analyticsImg} alt={`${s.title} — BasedClicksCo SEO analytics`} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground">Get a free technical SEO audit from our search engine optimization experts — delivered in 5 business days. Explore <Link to="/industries" className="text-navy underline hover:text-gold">industries we serve</Link> or <Link to="/case-studies" className="text-navy underline hover:text-gold">recent case studies</Link>.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
            Request your free SEO audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
