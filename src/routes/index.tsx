import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Search, TrendingUp, Target, BarChart3, MapPin, FileText, CheckCircle2, Star, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.webp";
import analyticsImg from "@/assets/analytics.webp";
import { Reveal, Eyebrow } from "@/components/site/Section";

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

function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="SEO services for small businesses and enterprise SEO solutions by BasedClicksCo" width={1920} height={1080} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float-slow" />

        <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Search Engine Optimization Experts
            </div>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Premium SEO Services <br className="hidden md:block" />
              to Grow Your Business <span className="gold-shimmer">Online</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              From SEO services for small businesses to enterprise SEO solutions, BasedClicksCo is an SEO agency based in Simi Valley helping you increase website traffic with data-driven strategy and transparent reporting.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5">
                Get a Free SEO Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                Explore SEO Services
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm text-white/70">
              <div><div className="font-serif text-2xl text-gold">+312%</div>Traffic growth</div>
              <div><div className="font-serif text-2xl text-gold">180+</div>Brands served</div>
              <div><div className="font-serif text-2xl text-gold">94%</div>Retention</div>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gold/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-elegant backdrop-blur">
                <img src={analyticsImg} alt="SEO analytics dashboard showing keyword rankings and organic traffic growth" width={1200} height={900} loading="eager" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl py-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Trusted by ambitious teams worldwide</p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["NorthPeak", "Atlas", "Lumen", "Verdant", "Helio", "Forge"].map((n) => (
              <div key={n} className="text-center font-serif text-xl text-navy/70">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Search Engine Optimization for All Business Sizes</h2>
            <p className="mt-4 text-muted-foreground">From technical SEO audits to content marketing and SEO, every lever pulled to boost your online visibility.</p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                  <div className="grid h-12 w-12 place-items-center rounded-lg gradient-navy text-gold transition-transform group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-secondary/40 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Boost Your Online Visibility in Any Industry</h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Whether you're a neighborhood restaurant or a global SaaS company, our local SEO company expertise and enterprise SEO solutions adapt to your audience, market, and goals.
              </p>
              <Link to="/industries" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
                See industries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {industries.map((i) => (
                <div key={i} className="rounded-lg border border-border bg-background px-4 py-4 text-center text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold">
                  {i}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="gradient-navy py-20 text-navy-foreground">
        <div className="container-px mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-5xl text-gold">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal className="text-center">
            <Eyebrow>Client voices</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Results clients talk about</h2>
          </Reveal>

          <div className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-elegant md:p-14">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-all duration-700 ${i === active ? "opacity-100" : "pointer-events-none absolute inset-0 m-10 opacity-0 md:m-14"}`}
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-6 font-serif text-2xl leading-relaxed text-navy md:text-3xl">"{t.quote}"</p>
                <div className="mt-8 text-sm">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-gold" : "w-4 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl gradient-navy p-12 text-navy-foreground md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl">Ready to increase website traffic?</h2>
                <p className="mt-4 max-w-lg text-white/75">Request a free technical SEO audit. Our search engine optimization experts show you exactly where the opportunity is.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
                  Get my free SEO audit <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+18189636728" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gold">
                  <CheckCircle2 className="h-4 w-4" /> Or call +1 (818) 963-6728
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
