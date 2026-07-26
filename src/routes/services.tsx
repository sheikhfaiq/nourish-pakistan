import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/data/services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Personalised Nutrition Care in Pakistan" },
      { name: "description", content: "Weight loss, diabetes, PCOS, pregnancy, sports and child nutrition — see all services offered by Nourish with Dn. Minahal Farrukh." },
      { property: "og:title", content: "Nutrition Services in Pakistan" },
      { property: "og:description", content: "Explore personalised nutrition services for every stage and goal." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">Care built for you & your goals</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every consultation is personalised. Tap any service to see benefits, expected outcomes and duration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 6) * 60}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                <Accordion type="single" collapsible>
                  <AccordionItem value={s.slug} className="border-0">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-110">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-primary">
                        <Clock className="h-3 w-3" /> {s.duration}
                      </span>
                      <h3 className="mt-4 sm:mt-5 font-display text-sm sm:text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-normal">{s.short}</p>
                    </div>
                    <AccordionTrigger className="border-t border-border bg-muted/40 px-4 py-3 text-xs sm:text-sm font-medium text-primary hover:no-underline justify-center gap-1">
                      See details
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-6 pt-4 text-left border-t border-border/50">
                      <div className="grid gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">What's included</p>
                          <ul className="mt-2 space-y-1.5 text-xs">
                            {s.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {b}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Expected outcomes</p>
                          <ul className="mt-2 space-y-1.5 text-xs">
                            {s.outcomes.map((b) => (
                              <li key={b} className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center">
                        <Link to="/book" className="inline-flex items-center gap-1.5 rounded-full bg-leaf-gradient px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
                          Book Consultation <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
