import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nourish with Dn. Minahal Farrukh, Dietitian in Pakistan" },
      { name: "description", content: "Get in touch with Dn. Minahal Farrukh for nutrition consultations, questions or collaborations. WhatsApp, email and clinic address." },
      { property: "og:title", content: "Contact Nourish with Dn. Minahal Farrukh" },
      { property: "og:description", content: "Reach out via WhatsApp, email or visit our Faisalabad clinic." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(10, "Please write a bit more").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <div className="bg-background">
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">Let's talk about your goals</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have a question before booking? Message me directly — I read every note personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Full name</span>
                  <input name="name" required maxLength={80} className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Sara Ahmed" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Phone / WhatsApp</span>
                  <input name="phone" required maxLength={20} className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="+92 300 1234567" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-sm font-medium">Email</span>
                <input name="email" type="email" required maxLength={160} className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@email.com" />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-medium">Your message</span>
                <textarea name="message" required maxLength={1000} rows={5} className="mt-1.5 w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell me a bit about what you're looking for…" />
              </label>
              <button disabled={submitting} className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer">
                <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: MessageCircle, title: "WhatsApp", body: "+92 300 1234567", href: "https://wa.me/923001234567", cta: "Chat now" },
                { icon: Phone, title: "Phone", body: "+92 300 1234567", href: "tel:+923001234567", cta: "Call" },
                { icon: Mail, title: "Email", body: "info@nourishpakistan.com", href: "mailto:info@nourishpakistan.com", cta: "Email me" },
                { icon: MapPin, title: "Clinic", body: "Move Better Clinic, East Canal Road, Faisalabad", href: "#map", cta: "See map" },
              ].map((c) => (
                <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-start sm:items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><c.icon className="h-6 w-6" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="font-medium text-sm sm:text-base break-words whitespace-pre-line mt-0.5 leading-snug">{c.body}</p>
                  </div>
                  <span className="hidden text-sm font-semibold text-primary sm:inline shrink-0">{c.cta} →</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <div className="border-b border-border bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Find the clinic</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Move Better Clinic, Faisalabad</h2>
              <p className="text-sm text-muted-foreground">East Canal Road · Free parking · Ground floor · Wheelchair accessible</p>
            </div>
            <div className="w-full h-[320px] sm:h-[450px]">
              <iframe
                title="Clinic location — Move Better Clinic, East Canal Road, Faisalabad"
                src="https://www.google.com/maps?q=Move+Better+Clinic,+East+Canal+Road,+Faisalabad,+Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
