import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Reveal, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BasedClicksCo | SEO Experts" },
      { name: "description", content: "Request a free SEO audit from BasedClicksCo. Our team helps businesses increase online visibility and traffic with expert SEO services." },
      { property: "og:title", content: "Contact BasedClicksCo | SEO Experts" },
      { property: "og:description", content: "Get your free SEO consultation from search engine optimization experts." },
      { property: "og:url", content: "https://elevare-seo.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://elevare-seo.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://elevare-seo.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://elevare-seo.lovable.app/contact" },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});

const industries = ["Restaurants", "eCommerce", "Tech / SaaS", "Healthcare", "Legal", "Real Estate", "Local services", "Other"];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div>
      <section className="gradient-navy py-24 text-navy-foreground md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Get Your Free <span className="text-gold">SEO Consultation</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">Talk to search engine optimization experts about your goals. We'll deliver a free technical SEO audit and a plan to increase website traffic — usually within one business day.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-navy">Get in touch directly</h2>
            <p className="mt-3 text-muted-foreground">Prefer to talk? We do too. Reach us through any of the channels below.</p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg gradient-navy text-gold"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                  <a href="tel:+18189636728" className="font-serif text-lg text-navy hover:text-gold">+1 (818) 963-6728</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg gradient-navy text-gold"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:ElevareSEO@gmail.com" className="font-serif text-lg text-navy hover:text-gold">ElevareSEO@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg gradient-navy text-gold"><MapPin className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Where</div>
                  <div className="font-serif text-lg text-navy">California · Local SEO company serving clients worldwide</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6">
              <div className="font-serif text-lg text-navy">Free Technical SEO Audit</div>
              <p className="mt-1 text-sm text-muted-foreground">Mention "free audit" in your message and we'll include a personalized technical SEO audit with our reply.</p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-navy">Thank you — message received.</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">A member of our team will reach out within one business day to schedule your audit and discovery call.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-navy">Request a free audit</h2>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Field label="Name" name="name" required error={errors.name} />
                    <Field label="Email" name="email" type="email" required error={errors.email} />
                    <Field label="Company" name="company" error={errors.company} />
                    <Field label="Website" name="website" placeholder="https://" error={errors.website} />
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industry</label>
                      <select name="industry" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30">
                        <option value="">Select an industry…</option>
                        {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">How can we help? <span className="text-destructive">*</span></label>
                      <textarea name="message" rows={5} maxLength={1500} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30" placeholder="Briefly describe your goals, current SEO status, and what you'd like help with." />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>
                  </div>
                  <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5">
                    Send message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, error, placeholder }: { label: string; name: string; type?: string; required?: boolean; error?: string; placeholder?: string; }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
