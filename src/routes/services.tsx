import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Target, FileText, MapPin, BarChart3, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { CrawlerField } from "@/components/site/CrawlerField";
import analyticsImg from "@/assets/analytics.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Services | BasedClicksCo" },
      { name: "description", content: "Discover professional SEO services at BasedClicksCo. From technical SEO audits to content marketing, we help your business rank higher." },
      { property: "og:title", content: "SEO Services | BasedClicksCo" },
      { property: "og:description", content: "Comprehensive SEO services — technical SEO audits, on-page SEO, content marketing, link building, and local SEO solutions." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/services" },
    ],
    links: [{ rel: "canonical", href: "https://based-clicks-seo.arshamsobbi.workers.dev/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Search Engine Optimization",
          provider: { "@type": "Organization", name: "BasedClicksCo", url: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
            { "@type": "ListItem", position: 2, name: "SEO Services", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
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
      <section className="gradient-ink relative overflow-hidden py-24 md:py-32">
        <CrawlerField />
        <div className="container-px pointer-events-none relative mx-auto max-w-7xl">
          <div className="rise-in"><Eyebrow>Our SEO services</Eyebrow></div>
          <h1 className="rise-in rise-delay-1 mt-5 max-w-3xl font-serif text-5xl md:text-6xl">Our <span className="gold-shimmer">SEO Services</span></h1>
          <p className="rise-in rise-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65">A full-spectrum SEO offering — from technical SEO audits to content marketing and SEO — modular enough to fit small businesses Across Simi Valley and Los Angeles, and capable enough to manage large businesses, engineered to increase website traffic over time.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid items-center gap-12 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-lg border border-gold/25 bg-gold/8 text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 font-serif text-3xl md:text-4xl">{s.title}</h2>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground/75">
                        <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-5">
                  <div className="frame-glow relative overflow-hidden">
                    <img src={analyticsImg} alt={`${s.title} — BasedClicksCo SEO analytics`} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-white/[0.02] py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">Not sure where to start?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Get a free technical SEO audit from our search engine optimization experts — delivered in 5 business days. Explore <Link to="/industries" className="text-foreground underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold">industries we serve</Link> or <Link to="/case-studies" className="text-foreground underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold">recent case studies</Link>.</p>
            <Link to="/contact" className="btn-gold mt-9 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
              Request your free SEO audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
