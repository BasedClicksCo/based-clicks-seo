import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import caseImg from "@/assets/case-study.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "SEO Case Studies | BasedClicksCo" },
      { name: "description", content: "See how BasedClicksCo has increased traffic, rankings, and ROI for businesses across industries with technical SEO audits and content marketing." },
      { property: "og:title", content: "SEO Case Studies | BasedClicksCo" },
      { property: "og:description", content: "Proven SEO results — organic traffic growth, ranking improvements, and ROI from BasedClicksCo campaigns." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/case-studies" },
      { property: "og:image", content: "/src/assets/case-study.jpg" },
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
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Proven <span className="text-gold">SEO Results</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">Real client wins from technical SEO audits, content marketing and SEO, and local SEO company campaigns — see how we increase website traffic and revenue.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          {cases.map((c, i) => (
            <Reveal key={c.title}>
              <article className={`grid gap-10 rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-12 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={caseImg} alt={`${c.tag} SEO case study — ${c.title}`} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">{c.tag}</span>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-serif text-2xl text-navy md:text-3xl">{c.title}</h2>
                  <p className="mt-4 text-muted-foreground">{c.summary}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="flex items-center gap-1 font-serif text-2xl text-navy md:text-3xl">
                          <TrendingUp className="h-4 w-4 text-gold" />
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Your story could be next.</h2>
          <p className="mt-3 text-muted-foreground">See our <Link to="/services" className="text-navy underline hover:text-gold">SEO services</Link> or learn more <Link to="/about" className="text-navy underline hover:text-gold">about BasedClicksCo</Link>.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
            Get a free SEO audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
