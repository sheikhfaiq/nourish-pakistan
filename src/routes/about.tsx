import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, HeartHandshake, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dn. Minahal Farrukh — Nutritionist & Dietitian in Pakistan" },
      { name: "description", content: "Meet Dn. Minahal Farrukh, a certified clinical dietitian with 3+ years of experience helping families across Pakistan build healthier lives." },
      { property: "og:title", content: "About Dn. Minahal Farrukh — Nutritionist & Dietitian" },
      { property: "og:description", content: "Personal story, philosophy and qualifications of Nourish with Dn. Minahal Farrukh." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2023", title: "BSc Human Nutrition & Dietetics", body: "Graduated with honors, majoring in clinical dietetics." },
  { year: "2024", title: "Dietitian, Move Better Clinic", body: "Joined Move Better Clinic in Faisalabad, guiding clients on metabolic health, weight management, and PCOS." },
  { year: "2025", title: "Expanded Online Practice", body: "Began consulting clients online across Pakistan and overseas, offering evidence-based nutritional care." },
  { year: "2026", title: "50+ Clients Guided", body: "Successfully guided over 50+ clients through personalized dietary interventions with proven results." },
];

const values = [
  { icon: HeartHandshake, title: "Compassion first", text: "You are heard, never judged. Nutrition is personal." },
  { icon: Target, title: "Realistic plans", text: "Built for your kitchen, budget and cultural table." },
  { icon: Sparkles, title: "Evidence-based", text: "Grounded in science, delivered with warmth." },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24 lg:px-8">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">About</p>
              <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">
                Hi, I'm <span className="text-primary">Dn. Minahal Farrukh</span> — your nutrition partner.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                I grew up in a Pakistani household where love was served on a plate — and I saw firsthand how food shapes health, energy and mood. For over 3 years I've helped families across Pakistan reconnect with real, homemade food while achieving very specific goals: weight, sugar, PCOS, pregnancy and beyond.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                My approach is simple — no crash diets, no imported superfoods you can't pronounce. Just clear science, meals you'll actually enjoy, and steady, honest support.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft"><Award className="h-4 w-4 text-primary" /> Clinical Dietitian</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft"><GraduationCap className="h-4 w-4 text-primary" /> BSc Human Nutrition & Dietetics</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-leaf-gradient opacity-20 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-glow">
                <img src={portrait} alt="Portrait of Dn. Minahal Farrukh, certified dietitian" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Mission & values</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Care that meets you where you are</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full flex flex-col items-center text-center rounded-2xl border border-border bg-white p-4 sm:p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><v.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 sm:mt-5 font-display text-sm sm:text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-normal">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Journey</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A decade of learning and care</h2>
          </Reveal>
          <div className="relative mt-14">
            <span className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 ? "sm:[&>*:first-child]:col-start-2" : ""}`}>
                    <div className={`ml-12 sm:ml-0 ${i % 2 ? "sm:pl-8" : "sm:pr-8 sm:text-right"}`}>
                      <div className="rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:shadow-glow">
                        <p className="font-display text-sm font-bold text-primary">{t.year}</p>
                        <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                      </div>
                    </div>
                    <span className="absolute left-4 top-5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-leaf-gradient shadow-soft sm:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] bg-leaf-gradient p-10 text-center text-primary-foreground shadow-glow sm:p-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's build a plan you'll love living with.</h2>
            <p className="mt-3 opacity-90">Book a warm, no-pressure video consultation today.</p>
            <Link to="/book" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
