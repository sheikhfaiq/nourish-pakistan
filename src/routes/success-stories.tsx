import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, TrendingDown, HeartPulse, Sparkles } from "lucide-react";
import { Reveal, Counter } from "@/components/site/Reveal";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real Results with Nourish with Ayesha" },
      { name: "description", content: "Before & after stories from Pakistani clients — weight loss, diabetes control, PCOS relief and lifestyle transformations." },
      { property: "og:title", content: "Client Success Stories" },
      { property: "og:description", content: "Real journeys, real results, real Pakistani families." },
    ],
  }),
  component: SuccessPage,
});

const stories = [
  { name: "Sara A.", city: "Lahore", initials: "SA", before: "82 kg · low energy", after: "71 kg · energetic", body: "I lost 11 kg in 5 months without giving up roti. Ayesha made it feel doable — not a punishment. My skin, sleep and mood all improved.", rating: 5, tag: "Weight Loss" },
  { name: "Bilal K.", city: "Karachi", initials: "BK", before: "HbA1c 8.7", after: "HbA1c 6.2", body: "My HbA1c dropped from 8.7 to 6.2 in 6 months. She understands how Pakistani households eat — no unrealistic swaps.", rating: 5, tag: "Diabetes" },
  { name: "Hina M.", city: "Islamabad", initials: "HM", before: "Irregular cycles, acne", after: "Regular cycles, clearer skin", body: "PCOS symptoms improved within 3 months. My cycles are regular, my skin is clearer, and I finally feel in control of my body.", rating: 5, tag: "PCOS" },
  { name: "Ayaan R.", city: "Rawalpindi", initials: "AR", before: "58 kg, low stamina", after: "66 kg lean gain", body: "Gained 8 kg of lean weight in 4 months without junk food. Strength in the gym doubled.", rating: 5, tag: "Weight Gain" },
  { name: "Fatima Z.", city: "Faisalabad", initials: "FZ", before: "Constant bloating", after: "Comfortable digestion", body: "Ayesha helped me identify trigger foods for my IBS. I'm calm, comfortable and eating a wider variety of food than before.", rating: 5, tag: "Gut Health" },
  { name: "Nida S.", city: "Multan", initials: "NS", before: "Pregnancy nausea", after: "Healthy 2nd trimester", body: "Warm, safe nutrition support through my pregnancy. Nausea reduced and my energy came back.", rating: 5, tag: "Pregnancy" },
];

function SuccessPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Success stories</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">Real people. Real change. Real food.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every story below is a real Pakistani client who trusted the process — and rebuilt their relationship with food.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                    <Sparkles className="h-3 w-3" /> {s.tag}
                  </span>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: s.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl border border-border bg-muted p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Before</p>
                    <p className="mt-1 text-sm font-semibold">{s.before}</p>
                  </div>
                  <div className="rounded-xl border border-primary/30 bg-secondary p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">After</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{s.after}</p>
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground">"{s.body}"</blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-gradient text-sm font-bold text-primary-foreground">{s.initials}</span>
                  <div>
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.city}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-leaf-gradient py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { n: 1200, s: "+", l: "Clients helped", i: HeartPulse },
            { n: 98, s: "%", l: "Satisfaction", i: Star },
            { n: 8, s: "+", l: "Years experience", i: Sparkles },
            { n: 95, s: "%", l: "Success rate", i: TrendingDown },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <s.i className="mx-auto h-6 w-6 opacity-90" />
              <p className="mt-3 font-display text-4xl font-bold sm:text-5xl"><Counter to={s.n} suffix={s.s} /></p>
              <p className="mt-2 text-sm opacity-90">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-white p-10 text-center shadow-soft sm:p-14">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Your story could be next.</h2>
            <p className="mt-3 text-muted-foreground">Start with a warm consultation — no pressure, no crash diets.</p>
            <Link to="/book" className="mt-8 inline-flex rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
