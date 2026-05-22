import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Target, FileText, MapPin, BarChart3, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import analyticsImg from "@/assets/analytics.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO Services — Elevare SEO" },
      { name: "description", content: "Comprehensive SEO services: strategy, technical, content, link building, local SEO, analytics, and conversion optimization." },
      { property: "og:title", content: "SEO Services — Elevare SEO" },
      { property: "og:description", content: "Comprehensive SEO services for brands of every size and industry." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Target,
    title: "SEO Strategy & Consultation",
    text: "We start with deep discovery — your goals, audience, competition, and current performance. The result is a prioritized roadmap with clear outcomes.",
    points: ["Market & competitor analysis", "Keyword opportunity mapping", "Quarterly strategy reviews"],
  },
  {
    icon: Search,
    title: "On-Page & Technical SEO",
    text: "We engineer your site for performance and discoverability — fast, crawlable, indexable, and aligned with search intent at every URL.",
    points: ["Core Web Vitals optimization", "Schema & structured data", "Site architecture & internal linking"],
  },
  {
    icon: FileText,
    title: "Content Marketing & Link Building",
    text: "Editorial-grade content paired with ethical, authority-building backlinks that move rankings and drive qualified traffic.",
    points: ["Topical authority planning", "In-house editorial team", "Outreach & digital PR"],
  },
  {
    icon: MapPin,
    title: "Local & Multi-Location SEO",
    text: "From a single storefront to hundreds of locations, we win local packs and Google Business profiles at scale.",
    points: ["Google Business optimization", "Citations & reviews", "Multi-location architecture"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    text: "Transparent dashboards that connect SEO activity to revenue. You'll always know what's working — and what's next.",
    points: ["Custom GA4 & GSC dashboards", "Attribution modeling", "Monthly executive reporting"],
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Growth",
    text: "Rankings are only half the story. We optimize the experience to turn organic visitors into customers.",
    points: ["Landing page optimization", "CRO experiments", "Funnel diagnostics"],
  },
];

function Services() {
  return (
    <div>
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Our services</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Everything you need to <span className="text-gold">win in search</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">A full-spectrum SEO offering — modular enough to fit any business, integrated enough to compound over time.</p>
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
                    <img src={analyticsImg} alt={s.title} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
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
          <p className="mt-3 text-muted-foreground">Get a free, personalized audit of your search performance — delivered in 5 business days.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
            Request your audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
