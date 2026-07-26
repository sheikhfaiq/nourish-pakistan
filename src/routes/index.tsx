import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Star, ShieldCheck, Clock, Users, HeartPulse, ChevronDown } from "lucide-react";
import { Reveal, Counter } from "@/components/site/Reveal";
import { SERVICES } from "@/data/services";
import heroImg from "@/assets/hero-nutritionist.jpg";
import mealImg from "@/assets/healthy-meal.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nourish with Ayesha — Certified Nutritionist in Pakistan" },
      { name: "description", content: "Personalised online nutrition consultations across Pakistan — weight loss, diabetes, PCOS, pregnancy & family nutrition." },
      { property: "og:title", content: "Nourish with Ayesha — Certified Nutritionist in Pakistan" },
      { property: "og:description", content: "Warm, evidence-based nutrition care rooted in Pakistani lifestyles. Book your consultation." },
    ],
  }),
  component: HomePage,
});

const whyChoose = [
  { icon: ShieldCheck, title: "Certified & Evidence-Based", text: "Registered dietitian with 8+ years guiding real Pakistani families." },
  { icon: HeartPulse, title: "Rooted in Desi Food", text: "Plans built around roti, daal, sabzi and your everyday kitchen." },
  { icon: Clock, title: "Truly Personalised", text: "No copy-paste plans. Every consultation is built around you." },
  { icon: Users, title: "For the Whole Family", text: "From kids to elders, we care for every stage of life." },
];

const process = [
  { step: "01", title: "Book & Assess", text: "Fill a friendly health assessment so we understand you fully before we meet." },
  { step: "02", title: "Video Consultation", text: "A warm 45–60 min Google Meet — we discuss goals, habits and reports." },
  { step: "03", title: "Personalised Plan", text: "You receive a custom Pakistani meal plan within 48 hours." },
  { step: "04", title: "Follow-Up & Support", text: "Weekly check-ins over WhatsApp so you actually see results." },
];

const testimonials = [
  { name: "Sara A.", city: "Lahore", text: "I lost 11 kg in 5 months without giving up roti. Ayesha made it feel doable — not a punishment.", rating: 5 },
  { name: "Bilal K.", city: "Karachi", text: "My HbA1c dropped from 8.7 to 6.2. She actually understands how Pakistani households eat.", rating: 5 },
  { name: "Hina M.", city: "Islamabad", text: "PCOS symptoms improved within 3 months. My cycles are regular and my skin is clearer.", rating: 5 },
];

const faqs = [
  { q: "Are consultations online or in-person?", a: "Consultations happen online over Google Meet, so you can join from anywhere in Pakistan or overseas. In-person visits are available in Lahore by appointment." },
  { q: "What happens after I book?", a: "You'll receive a Google Meet link and calendar invite. Complete a short health assessment before the call so we can spend our time solving your specific concerns." },
  { q: "Do I need to send my medical reports?", a: "If you have recent blood work (CBC, HbA1c, thyroid, vitamin D, lipid profile), please upload them during booking. It helps us build a safer, sharper plan." },
  { q: "How long until I see results?", a: "Most clients feel more energetic within 2 weeks and see visible changes in 4–6 weeks with consistent follow-through." },
  { q: "Is the diet plan very restrictive?", a: "Not at all. Plans are built around desi food you already eat — with smart swaps, portioning and timing. Occasional treats are always accommodated." },
];

function HomePage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Certified Nutritionist · Serving all of Pakistan
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground text-balance sm:text-5xl lg:text-6xl">
                Nutrition that fits your <span className="bg-leaf-gradient bg-clip-text text-transparent">real life</span>, not a spreadsheet.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                Personalised online consultations for weight loss, diabetes, PCOS, pregnancy and family nutrition — rooted in the Pakistani foods you already love.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/book" className="group inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
                  Book Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  Explore Services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> 4.9 / 5 from 1,200+ clients</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 8+ years of experience</div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-leaf-gradient opacity-20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-glow">
                <img src={heroImg} alt="Certified Pakistani nutritionist holding fresh vegetables" width={1280} height={1280} className="h-full w-full object-cover" />
              </div>
              {/* floating cards */}
              <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-border bg-white/90 p-4 shadow-soft backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary"><HeartPulse className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs text-muted-foreground">Avg. weight loss</p>
                    <p className="font-display text-lg font-bold">2–4 kg / month</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-10 hidden animate-float-slower rounded-2xl border border-border bg-white/90 p-4 shadow-soft backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary"><Users className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs text-muted-foreground">Clients guided</p>
                    <p className="font-display text-lg font-bold">1,200+</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why choose me</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Warm, honest care — with real accountability.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:scale-110">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Featured services</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Nutrition care for every stage & goal</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link to="/services" className="group block h-full rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + meal image alternate */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
              <img src={mealImg} alt="Healthy Pakistani meal plate" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A simple, warm 4-step journey</h2>
            </Reveal>
            <div className="mt-8 space-y-5">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <div className="flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-primary/30">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary font-display text-lg font-bold text-primary">{p.step}</div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-leaf-gradient py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { n: 1200, s: "+", l: "Clients guided" },
            { n: 98, s: "%", l: "Satisfaction rate" },
            { n: 8, s: "+", l: "Years experience" },
            { n: 15, s: "+", l: "Pakistani cities" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <p className="font-display text-4xl font-bold sm:text-5xl">
                <Counter to={s.n} suffix={s.s} />
              </p>
              <p className="mt-2 text-sm opacity-90">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Client love</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Real journeys. Real results.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-gradient font-display text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQs</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Everything you were wondering</h2>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`} className="overflow-hidden rounded-2xl border border-border bg-white px-5 shadow-soft data-[state=open]:border-primary/30">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-leaf-gradient p-10 text-primary-foreground shadow-glow sm:p-14">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Ready to feel better in your body?</h2>
              <p className="mt-4 opacity-90">Book a warm 45-minute video consultation. Walk out with clarity, a plan and real support.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  <CheckCircle2 className="h-4 w-4" /> Ask a question
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
