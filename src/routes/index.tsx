import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Search, TrendingUp, Target, BarChart3, MapPin, FileText, CheckCircle2, Star, Sparkles } from "lucide-react";
import analyticsImg from "@/assets/analytics.webp";
import { Reveal, Eyebrow } from "@/components/site/Section";
import { CrawlerField } from "@/components/site/CrawlerField";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BasedClicksCo | SEO Services for Small & Enterprise Businesses" },
      { name: "description", content: "Elevate your online presence with expert SEO services from BasedClicksCo. We optimize for small, mid-size, and enterprise businesses." },
      { property: "og:title", content: "BasedClicksCo | SEO Services for Small & Enterprise Businesses" },
      { property: "og:description", content: "Expert SEO services, technical SEO audits, and content marketing that increase website traffic for businesses of every size." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
    ],
    links: [{ rel: "canonical", href: "https://based-clicks-seo.arshamsobbi.workers.dev/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "BasedClicksCo",
          image: "https://based-clicks-seo.arshamsobbi.workers.dev/og-image.webp",
          url: "https://based-clicks-seo.arshamsobbi.workers.dev/",
          telephone: "+1-818-963-6728",
          email: "elevareseoforyou@gmail.com",
          priceRange: "$$$",
          address: { "@type": "PostalAddress", addressRegion: "California", addressCountry: "US" },
          areaServed: "Worldwide",
          description: "Local SEO company and search engine optimization experts providing SEO services for small businesses and enterprise SEO solutions.",
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Target, title: "SEO Strategy & Consultation", text: "Custom roadmaps grounded in keyword research, competitor analysis, and your business goals — built by search engine optimization experts." },
  { icon: Search, title: "Technical SEO Audit & On-Page SEO", text: "Site architecture, Core Web Vitals, schema, and crawl optimization that move rankings fast." },
  { icon: FileText, title: "Content Marketing & SEO", text: "Editorial content and authority backlinks that compound traffic and earn trust." },
  { icon: MapPin, title: "Local SEO Company Services", text: "Win local packs and scale Google Business profiles for every location you serve." },
  { icon: BarChart3, title: "Analytics & Reporting", text: "Transparent dashboards tying SEO services for small businesses to revenue, leads, and ROI." },
  { icon: TrendingUp, title: "Enterprise SEO Solutions", text: "Scalable optimization for complex sites and multi-region brands ready to increase website traffic." },
];

const industries = ["Restaurants", "eCommerce", "Tech Startups", "Healthcare", "Law Firms", "Real Estate", "Local Shops", "B2B SaaS"];

const stats = [
  { value: "+312%", label: "Avg organic traffic growth" },
  { value: "180+", label: "Brands elevated" },
  { value: "94%", label: "Client retention" },
  { value: "$47M", label: "Attributed revenue" },
];

const testimonials = [
  { quote: "BasedClicksCo doubled our qualified organic leads in six months. They became a true extension of our team.", name: "Sarah Chen", role: "CMO, NorthPeak Health" },
  { quote: "Their technical SEO audit alone uncovered six-figure opportunities. The execution was flawless.", name: "Marcus Reid", role: "Founder, Atlas eCommerce" },
  { quote: "Premium service with measurable outcomes. We finally have an SEO partner we trust.", name: "Priya Anand", role: "VP Marketing, Lumen SaaS" },
];

const logos = ["NorthPeak", "Atlas", "Lumen", "Verdant", "Helio", "Forge"];

function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="gradient-ink relative overflow-hidden">
        <CrawlerField />
        <div className="container-px pointer-events-none relative mx-auto grid max-w-7xl gap-12 py-28 md:py-36 lg:grid-cols-12 lg:items-center">
          <div className="pointer-events-auto lg:col-span-7">
            <div className="rise-in inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Search Engine Optimization Experts
            </div>
            <h1 className="rise-in rise-delay-1 mt-7 font-serif text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
              Premium SEO Services <br className="hidden md:block" />
              to Grow Your Business <span className="gold-shimmer">Online</span>
            </h1>
            <p className="rise-in rise-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-foreground/65">
              From SEO services for small businesses to enterprise SEO solutions, BasedClicksCo is an SEO agency based in Simi Valley helping you increase website traffic with data-driven strategy and transparent reporting.
            </p>
            <div className="rise-in rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-gold group inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
                Get a Free SEO Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-ghost inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-medium">
                Explore SEO Services
              </Link>
            </div>

            <div className="rise-in rise-delay-4 mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <div className="font-serif text-2xl text-gold"><CountUp value="+312%" /></div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">Traffic growth</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-gold"><CountUp value="180+" /></div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">Brands served</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-gold"><CountUp value="94%" /></div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">Retention</div>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto hidden lg:col-span-5 lg:block">
            <div className="rise-in rise-delay-2 relative">
              <div className="absolute -inset-6 rounded-3xl bg-gold/10 blur-3xl" />
              <div className="frame-glow animate-float-slow relative overflow-hidden bg-white/5 p-2 backdrop-blur">
                <img src={analyticsImg} alt="SEO analytics dashboard showing keyword rankings and organic traffic growth" width={1200} height={900} loading="eager" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl py-10">
          <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40">Trusted by ambitious teams worldwide</p>
          <div className="marquee-mask mt-7 overflow-hidden">
            <div className="marquee-track gap-16">
              {[...logos, ...logos].map((n, i) => (
                <div key={`${n}-${i}`} className="shrink-0 font-serif text-xl text-foreground/35 transition-colors hover:text-gold/70">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Search Engine Optimization for All Business Sizes</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">From technical SEO audits to content marketing and SEO, every lever pulled to boost your online visibility for businesses across Simi Valley and Los Angeles.</p>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="panel panel-hover group h-full rounded-xl p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/25 bg-gold/8 text-gold transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold">
              View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-white/8 bg-white/[0.02] py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">Boost Your Online Visibility in Any Industry</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                Whether you're a neighborhood restaurant or a global SaaS company, our local SEO company expertise and enterprise SEO solutions adapt to your audience, market, and goals.
              </p>
              <Link to="/industries" className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold">
                See industries <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((i) => (
                <div key={i} className="panel panel-hover rounded-lg px-4 py-4 text-center text-sm font-normal text-foreground/80">
                  {i}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="gradient-ink relative overflow-hidden py-24">
        <CrawlerField className="opacity-60" />
        <div className="container-px pointer-events-none relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="font-serif text-5xl text-gold md:text-6xl"><CountUp value={s.value} /></div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal className="text-center">
            <Eyebrow>Client voices</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Results clients talk about</h2>
          </Reveal>

          <Reveal className="mt-14">
            <div className="panel relative overflow-hidden rounded-2xl p-10 md:p-14">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-all duration-700 ${i === active ? "opacity-100" : "pointer-events-none absolute inset-0 m-10 opacity-0 md:m-14"}`}
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-7 font-serif text-2xl leading-relaxed md:text-3xl">"{t.quote}"</p>
                  <div className="mt-8 text-sm">
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="mt-0.5 text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              ))}
              <div className="mt-10 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-gold" : "w-4 bg-white/15 hover:bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="gradient-navy relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-5xl">Ready to increase website traffic?</h2>
                  <p className="mt-5 max-w-lg leading-relaxed text-foreground/65">Request a free technical SEO audit. Our search engine optimization experts show you exactly where the opportunity is.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                  <Link to="/contact" className="btn-gold inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold">
                    Get my free SEO audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+18189636728" className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold">
                    <CheckCircle2 className="h-4 w-4" /> Or call +1 (818) 963-6728
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
