import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/site/Section";
import aboutImg from "@/assets/about.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | BasedClicksCo" },
      { name: "description", content: "Learn about BasedClicksCo, your trusted SEO experts helping businesses grow online with technical SEO audits, content marketing and SEO, and local SEO." },
      { property: "og:title", content: "About Us | BasedClicksCo" },
      { property: "og:description", content: "Search engine optimization experts delivering SEO services for small businesses and enterprise SEO solutions." },
      { property: "og:url", content: "https://based-clicks-seo.arshamsobbi.workers.dev/about" },
    ],
    links: [{ rel: "canonical", href: "https://based-clicks-seo.arshamsobbi.workers.dev/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://based-clicks-seo.arshamsobbi.workers.dev/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://based-clicks-seo.arshamsobbi.workers.dev/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Expertise", text: "A senior-only team with decades of combined experience across industries." },
  { icon: HeartHandshake, title: "Client-first", text: "We measure our success by yours — never by activity or vanity metrics." },
  { icon: Sparkles, title: "Premium craft", text: "Strategy and execution at a standard our clients are proud to associate with." },
  { icon: Users, title: "True partnership", text: "We embed with your team, share context openly, and move at your pace." },
];

function About() {
  return (
    <div>
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>About BasedClicksCo</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">About <span className="text-gold">BasedClicksCo</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">We are search engine optimization experts delivering SEO services for small businesses, mid-size companies, and enterprise SEO solutions — transparent, strategic, and genuinely invested in client outcomes.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={aboutImg} alt="BasedClicksCo SEO experts in a strategy session" width={1200} height={900} loading="lazy" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">SEO experts helping businesses of every size grow online</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>BasedClicksCo was founded by senior practitioners tired of watching great brands receive cookie-cutter SEO. We deliver the same craft as great engineering — applied to search.</p>
              <p>Today we work with single-location shops, fast-growing startups, and global enterprises. From <Link to="/services" className="text-navy underline hover:text-gold">technical SEO audits</Link> to content marketing and SEO and local SEO company services, every engagement is custom — and the standard is always premium.</p>
              <p>Every client gets a senior team, transparent reporting, and a partner committed to helping you increase website traffic and revenue. See our <Link to="/case-studies" className="text-navy underline hover:text-gold">case studies</Link> for proof.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Our values</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-lg gradient-navy text-gold">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Let's build something measurable together.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
