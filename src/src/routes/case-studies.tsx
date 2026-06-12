import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { CrawlerField } from "@/components/site/CrawlerField";
import { CountUp } from "@/components/site/CountUp";
import caseImg from "@/assets/case-study.webp";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "SEO Case Studies | BasedClicksCo" },
      { name: "description", content: "See how BasedClicksCo has increased traffic, rankings, and ROI for businesses across industries with technical SEO audits and content marketing." },
      { property: "og:title", content: "SEO Case Studies | BasedClicksCo" },
      { property: "og:description", content: "Proven SEO results — organic traffic growth, ranking improvements, and ROI from BasedClicksCo campaigns." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/case-studies" },
      { property: "og:image", content: "/src/assets/case-study.webp" },
    ],
    links: [{ rel: "canonical", href: "https://based-clicks-seo.arshamsobbi.workers.dev/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://based-clicks-seo.arshamsobbi.workers.dev/case-studies" },
          ],
        }),
      },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    tag: "eCommerce",
    title: "Atlas Outfitters: +287% organic revenue in 9 months",
    summary: "Rebuilt category architecture, deployed product schema, and launched 60+ buyer-guide pieces to triple category-level visibility.",
    metrics: [
      { label: "Organic revenue", value: "+287%" },
      { label: "Non-brand keywords (top 10)", value: "+1,240" },
      { label: "Avg. session value", value: "+38%" },
    ],
  },
  {
    tag: "Healthcare",
    title: "NorthPeak Health: 2.4× qualified patient leads",
    summary: "Local SEO, location-page templating, and trust-signal content unlocked dominant positions across 14 metros.",
    metrics: [
      { label: "Qualified leads", value: "2.4×" },
      { label: "GBP calls", value: "+196%" },
      { label: "Local pack visibility", value: "+74%" },
    ],
  },
  {
    tag: "B2B SaaS",
    title: "Lumen Platform: From $0 to $1.1M attributed pipeline",
    summary: "Bottom-funnel content, programmatic SEO, and competitor takedowns drove pipeline in under 12 months.",
    metrics: [
      { label: "Attributed pipeline", value: "$1.1M" },
      { label: "Demo requests / mo", value: "+412%" },
      { label: "Top-3 keywords", value: "+318" },
    ],
  },
];

function CaseStudies() {
  return (
    <div>
      <section className="gradient-ink relative overflow-hidden py-24 md:py-32">
        <CrawlerField />
        <div className="container-px pointer-events-none relative mx-auto max-w-7xl">
          <div className="rise-in"><Eyebrow>Case studies</Eyebrow></div>
          <h1 className="rise-in rise-delay-1 mt-5 max-w-3xl font-serif text-5xl md:text-6xl">Proven <span className="gold-shimmer">SEO Results</span></h1>
          <p className="rise-in rise-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65">Real client wins from technical SEO audits, content marketing and SEO, and local SEO company campaigns — see how we increase website traffic and revenue.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          {cases.map((c, i) => (
            <Reveal key={c.title}>
              <article className={`panel panel-hover grid gap-10 rounded-2xl p-8 md:p-12 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="frame-glow relative overflow-hidden">
                    <img src={caseImg} alt={`${c.tag} SEO case study — ${c.title}`} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-navy">{c.tag}</span>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-serif text-2xl md:text-3xl">{c.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{c.summary}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="flex items-center gap-1.5 font-serif text-2xl text-gold md:text-3xl">
                          <TrendingUp className="h-4 w-4" />
                          <CountUp value={m.value} />
                        </div>
                        <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/45">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-white/[0.02] py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">Your story could be next.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">See our <Link to="/services" className="text-foreground underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold">SEO services</Link> or learn more <Link to="/about" className="text-foreground underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold">about BasedClicksCo</Link>.</p>
            <Link to="/contact" className="btn-gold mt-9 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
              Get a free SEO audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
