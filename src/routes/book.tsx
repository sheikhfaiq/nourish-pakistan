import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Upload, X, Calendar as CalendarIcon, Video, CheckCircle2, Download, MessageCircle, Sparkles, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Book a Consultation — Nourish with Dn. Minahal Farrukh" },
      { name: "description", content: "Book your personalised online nutrition consultation. A friendly step-by-step health assessment to help us prepare for your session." },
      { property: "og:title", content: "Book a Nutrition Consultation" },
      { property: "og:description", content: "Complete a short health assessment and pick a time that works for you." },
    ],
  }),
  component: BookPage,
});

type FormState = {
  fullName: string; gender: string; dob: string; height: string; weight: string; goalWeight: string;
  city: string; occupation: string; email: string; phone: string; whatsapp: string; marital: string;
  conditions: string[]; medications: string; allergies: string; surgeries: string; familyHistory: string;
  workingHours: string; wakeTime: string; sleepTime: string; avgSleep: string; stress: number;
  activity: string; exercise: string; water: string; smoking: string; alcohol: string;
  diet: string; mealsPerDay: string; breakfast: string; fastFood: string; favFoods: string; dislikes: string;
  tea: string; softDrinks: string; sweets: string; eatingOut: string; snacks: string;
  goals: string[]; timeline: string; challenges: string; motivation: number; notes: string;
  files: { name: string; size: number }[];
  date: string; slot: string; consultType: string;
};

const initial: FormState = {
  fullName: "", gender: "", dob: "", height: "", weight: "", goalWeight: "",
  city: "", occupation: "", email: "", phone: "", whatsapp: "", marital: "",
  conditions: [], medications: "", allergies: "", surgeries: "", familyHistory: "",
  workingHours: "", wakeTime: "", sleepTime: "", avgSleep: "", stress: 5,
  activity: "", exercise: "", water: "", smoking: "no", alcohol: "no",
  diet: "", mealsPerDay: "", breakfast: "", fastFood: "", favFoods: "", dislikes: "",
  tea: "", softDrinks: "", sweets: "", eatingOut: "", snacks: "",
  goals: [], timeline: "", challenges: "", motivation: 7, notes: "",
  files: [],
  date: "", slot: "", consultType: "video",
}; const steps = [
  "Welcome", "Identity", "Contact", "Demographics", "Metrics", "Conditions", "Medical Details", "Lifestyle Rhythm", "Activity & Stress", "Dietary Habits", "Health Goals", "Reports", "Schedule", "Review",
] as const;

const stepDetails = [
  { title: "Welcome", desc: "Let's prepare for your personalized consultation with Dn. Minahal Farrukh.", quote: "Your health is an investment, not an expense." },
  { title: "Identity", desc: "Let's start by getting your name and location.", quote: "Every journey begins with a single step. Let's make it personal." },
  { title: "Contact Info", desc: "How can we reach you to confirm your appointment?", quote: "Good communication is the bridge between confusion and clarity." },
  { title: "About You", desc: "A few details to help customize your nutritional strategy.", quote: "Age is just a number, but vitality is a choice." },
  { title: "Body Metrics", desc: "Your height and weight help calculate clinical baselines.", quote: "Progress is not about a number on a scale, it's about how you feel." },
  { title: "Medical History", desc: "Any clinical conditions help us customize safe, effective nutrition plans.", quote: "Your body's history guides our future path." },
  { title: "Clinical Details", desc: "Any current medications, allergies, or previous surgeries.", quote: "Detailing clinical parameters ensures the highest standard of care." },
  { title: "Daily Schedule", desc: "Your sleep patterns and working hours guide meal timing.", quote: "A plan that doesn't fit your daily rhythm won't last." },
  { title: "Activity & Habits", desc: "How active are you, and how do you handle stress?", quote: "Physical activity is a celebration of what your body can do." },
  { title: "Dietary Preferences", desc: "Share your preferences so we can suggest foods you love.", quote: "Nourishing yourself is a love letter to your body." },
  { title: "Wellness Goals", desc: "What are your primary targets, and what is your motivation level?", quote: "Setting goals is the first step in turning the invisible into the visible." },
  { title: "Medical Reports", desc: "Upload blood work or previous prescriptions if you have them (optional).", quote: "Data-driven decisions yield the best clinical outcomes." },
  { title: "Choose Appointment", desc: "Select a date and slot for your session (Google Meet or Faisalabad).", quote: "Time is our most valuable asset. Let's make it count." },
  { title: "Review Details", desc: "Double check all parameters before submitting.", quote: "Accuracy is key to tailoring a perfect routine." },
];

function BookPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const bmi = useMemo(() => {
    const h = parseFloat(data.height); const w = parseFloat(data.weight);
    if (!h || !w) return null;
    const m = h / 100;
    return +(w / (m * m)).toFixed(1);
  }, [data.height, data.weight]);

  const age = useMemo(() => {
    if (!data.dob) return null;
    const d = new Date(data.dob); if (isNaN(d.getTime())) return null;
    const diff = Date.now() - d.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }, [data.dob]);

  const progress = step === 0 ? 0 : (step / (steps.length - 1)) * 100;

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((p) => ({ ...p, [k]: v }));
  const toggleArr = (k: "conditions" | "goals", v: string) =>
    setData((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const canNext = () => {
    if (step === 1) return data.fullName && data.city;
    if (step === 2) return data.email && data.phone;
    if (step === 12) return data.date && data.slot;
    return true;
  };

  const next = () => {
    if (!canNext()) { toast.error("Please fill the required fields"); return; }
    setStep((s) => Math.min(steps.length - 1, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    setSubmitted(true);
    toast.success("Booking confirmed! Check your email for the Google Meet link.");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) return <SuccessScreen data={data} />;

  return (
    <div className="bg-hero-gradient min-h-[calc(100vh-80px)] flex flex-col justify-center py-6 md:py-12">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr] items-center">
          {/* Left Column: Immersive Guide & dynamic quotes (Desktop only) */}
          <div className="hidden lg:flex flex-col h-[650px] justify-between bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-[2.5rem] p-8 border border-primary/15 overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                  Health Assessment
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground tracking-tight leading-tight transition-all duration-300">
                {stepDetails[step].title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2 min-h-[48px]">
                {stepDetails[step].desc}
              </p>

              {/* Vertical Steps Timeline */}
              <div className="mt-6 relative pl-6 border-l-2 border-border/80 space-y-3 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                {stepDetails.map((s, i) => (
                  <div key={i} className="relative flex items-center h-6">
                    {/* Glowing bullet */}
                    <div className={cn(
                      "absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-white z-10",
                      i < step
                        ? "border-primary bg-primary text-white"
                        : i === step
                          ? "border-primary bg-white scale-110 shadow-glow"
                          : "border-border bg-white"
                    )}>
                      {i < step && <Check className="h-2.5 w-2.5 stroke-[3] text-white" />}
                    </div>
                    <span className={cn(
                      "text-xs font-semibold tracking-wide transition-colors duration-300",
                      i === step ? "text-primary font-bold" : i < step ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-primary/10">
              <div className="flex items-start gap-3 bg-white/60 p-4 rounded-xl backdrop-blur-sm border border-white/50">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs italic text-muted-foreground leading-snug">
                  "{stepDetails[step].quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Immersive card container */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Mobile Header (Hidden on Desktop) */}
            <div className="lg:hidden mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary text-center">Health Assessment</p>
              <h1 className="mt-1 font-display text-2xl font-bold text-foreground text-center">
                {stepDetails[step].title}
              </h1>
              {step > 0 && (
                <>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Step {step} of 13</span>
                    <span className="font-semibold text-primary">{Math.round(progress)}% Complete</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-leaf-gradient transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
                  </div>
                </>
              )}
            </div>

            {/* Immersive form card */}
            <div key={step} className="animate-rise-in rounded-[2rem] border border-border bg-white p-6 shadow-glow sm:p-8 md:p-10 min-h-[360px] flex flex-col justify-center">
              {step === 0 && <StepWelcome next={next} />}
              {step === 1 && <StepIdentity data={data} update={update} />}
              {step === 2 && <StepContact data={data} update={update} />}
              {step === 3 && <StepDemographics data={data} update={update} />}
              {step === 4 && <StepMetrics data={data} update={update} bmi={bmi} age={age} />}
              {step === 5 && <StepMedicalConditions data={data} toggle={toggleArr} />}
              {step === 6 && <StepMedicalDetails data={data} update={update} />}
              {step === 7 && <StepLifestyleRhythm data={data} update={update} />}
              {step === 8 && <StepLifestyleActivity data={data} update={update} />}
              {step === 9 && <StepDietaryHabits data={data} update={update} />}
              {step === 10 && <StepGoalsTargets data={data} update={update} toggle={toggleArr} />}
              {step === 11 && <StepReportsUpload data={data} update={update} />}
              {step === 12 && <StepAppointmentSchedule data={data} update={update} />}
              {step === 13 && <StepReviewDetails data={data} bmi={bmi} age={age} goto={setStep} />}
            </div>

            {/* Navigation controls */}
            {step > 0 && (
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={prev}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary hover:text-primary cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 cursor-pointer"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    className="inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 cursor-pointer"
                  >
                    Confirm booking <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Prefer to chat first? <Link to="/contact" className="text-primary underline-offset-2 hover:underline">Message me</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------ shared field primitives ------------ */

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className)} />;
}
function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className)}>{children}</select>;
}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className)} />;
}
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className={cn("rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer",
        active ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-primary")}>
      {children}
    </button>
  );
}

/* ------------ Steps ------------ */

function StepWelcome({ next }: { next: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mt-6 font-display text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        Your Health Journey Starts Here
      </h2>
      <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
        This health assessment takes about 3-5 minutes. It helps Dn. Minahal Farrukh understand your clinical baselines and dietary preferences before your consultation.
      </p>
      <div className="mt-8">
        <button
          type="button"
          onClick={next}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 cursor-pointer"
        >
          Start Assessment <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function StepIdentity({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">What is your name and location?</h2>
      <div className="space-y-4">
        <Field label="Full name" required>
          <Input
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="e.g. Sara Ahmed"
            maxLength={80}
            autoFocus
          />
        </Field>
        <Field label="City" required>
          <Input
            value={data.city}
            onChange={(e) => update("city", e.target.value)}
            placeholder="e.g. Faisalabad"
            maxLength={60}
          />
        </Field>
        <Field label="Occupation">
          <Input
            value={data.occupation}
            onChange={(e) => update("occupation", e.target.value)}
            placeholder="e.g. Teacher (optional)"
            maxLength={80}
          />
        </Field>
      </div>
    </div>
  );
}

function StepContact({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">How can we reach you?</h2>
      <div className="space-y-4">
        <Field label="Email Address" required>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            maxLength={160}
            autoFocus
          />
        </Field>
        <Field label="Phone / Contact Number" required>
          <Input
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+92 300 1234567"
            maxLength={20}
          />
        </Field>
        <Field label="WhatsApp Number">
          <Input
            value={data.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="Leave empty if same as phone (optional)"
            maxLength={20}
          />
        </Field>
      </div>
    </div>
  );
}

function StepDemographics({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Tell us a bit about yourself</h2>
      <div className="space-y-4">
        <Field label="Date of birth">
          <Input
            type="date"
            value={data.dob}
            onChange={(e) => update("dob", e.target.value)}
            autoFocus
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Gender">
            <Select value={data.gender} onChange={(e) => update("gender", e.target.value)}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </Select>
          </Field>
          <Field label="Marital status">
            <Select value={data.marital} onChange={(e) => update("marital", e.target.value)}>
              <option value="">Select</option>
              <option>Single</option>
              <option>Married</option>
              <option>Other</option>
            </Select>
          </Field>
        </div>
      </div>
    </div>
  );
}

function StepMetrics({ data, update, bmi, age }: { data: FormState; update: any; bmi: number | null; age: number | null }) {
  const bmiCat = bmi ? (bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy" : bmi < 30 ? "Overweight" : "Obese") : "";
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">What are your body metrics?</h2>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Height (cm)">
          <Input
            type="number"
            min={80}
            max={230}
            value={data.height}
            onChange={(e) => update("height", e.target.value)}
            placeholder="e.g. 165"
            autoFocus
          />
        </Field>
        <Field label="Current Weight (kg)">
          <Input
            type="number"
            min={20}
            max={300}
            value={data.weight}
            onChange={(e) => update("weight", e.target.value)}
            placeholder="e.g. 72"
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Goal Weight (kg)">
          <Input
            type="number"
            min={20}
            max={300}
            value={data.goalWeight}
            onChange={(e) => update("goalWeight", e.target.value)}
            placeholder="e.g. 65"
          />
        </Field>
        <Field label="Age (years)">
          <Input
            value={age ?? ""}
            readOnly
            placeholder="Calculated from DOB"
            className="bg-muted text-muted-foreground"
          />
        </Field>
      </div>

      {bmi !== null && (
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-primary/30 bg-secondary p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Live BMI</p>
            <p className="mt-0.5 font-display text-xl font-bold">{bmi} <span className="text-sm font-medium text-muted-foreground">· {bmiCat}</span></p>
          </div>
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
      )}
    </div>
  );
}

function StepMedicalConditions({ data, toggle }: { data: FormState; toggle: any }) {
  const conds = ["Diabetes", "PCOS", "Thyroid Disorders", "Hypertension", "High Cholesterol", "Fatty Liver", "Heart Disease", "Kidney Disease", "IBS", "Other"];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Do you have any medical conditions?</h2>
      <p className="text-xs text-muted-foreground">Select all that apply to you.</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {conds.map((c) => (
          <Chip key={c} active={data.conditions.includes(c)} onClick={() => toggle("conditions", c)}>
            {c}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function StepMedicalDetails({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Medications & history</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Current medications">
          <Textarea
            rows={2}
            value={data.medications}
            onChange={(e) => update("medications", e.target.value)}
            placeholder="List any regular medicines (optional)"
          />
        </Field>
        <Field label="Food allergies">
          <Textarea
            rows={2}
            value={data.allergies}
            onChange={(e) => update("allergies", e.target.value)}
            placeholder="e.g. nuts, dairy (optional)"
          />
        </Field>
        <Field label="Previous surgeries">
          <Textarea
            rows={2}
            value={data.surgeries}
            onChange={(e) => update("surgeries", e.target.value)}
            placeholder="Mention any surgeries (optional)"
          />
        </Field>
        <Field label="Family history">
          <Textarea
            rows={2}
            value={data.familyHistory}
            onChange={(e) => update("familyHistory", e.target.value)}
            placeholder="Diabetes, blood pressure, etc. (optional)"
          />
        </Field>
      </div>
    </div>
  );
}

function StepLifestyleRhythm({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Your daily rhythm</h2>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Wake-up time">
          <Input type="time" value={data.wakeTime} onChange={(e) => update("wakeTime", e.target.value)} />
        </Field>
        <Field label="Sleep time">
          <Input type="time" value={data.sleepTime} onChange={(e) => update("sleepTime", e.target.value)} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Average sleep (hours)">
          <Input
            type="number"
            min={0}
            max={16}
            value={data.avgSleep}
            onChange={(e) => update("avgSleep", e.target.value)}
            placeholder="e.g. 7"
          />
        </Field>
        <Field label="Working hours">
          <Input
            value={data.workingHours}
            onChange={(e) => update("workingHours", e.target.value)}
            placeholder="e.g. 9am – 5pm"
          />
        </Field>
      </div>
    </div>
  );
}

function StepLifestyleActivity({ data, update }: { data: FormState; update: any }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Activity & stress level</h2>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Physical activity">
          <Select value={data.activity} onChange={(e) => update("activity", e.target.value)}>
            <option value="">Select</option>
            <option>Sedentary</option>
            <option>Lightly active</option>
            <option>Moderately active</option>
            <option>Very active</option>
          </Select>
        </Field>
        <Field label="Exercise frequency">
          <Select value={data.exercise} onChange={(e) => update("exercise", e.target.value)}>
            <option value="">Select</option>
            <option>Never</option>
            <option>1–2x / week</option>
            <option>3–4x / week</option>
            <option>5+ / week</option>
          </Select>
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Water intake (glasses)">
          <Input
            type="number"
            min={0}
            max={20}
            value={data.water}
            onChange={(e) => update("water", e.target.value)}
            placeholder="e.g. 8"
          />
        </Field>
        <Field label="Smoking habits">
          <Select value={data.smoking} onChange={(e) => update("smoking", e.target.value)}>
            <option value="no">No</option>
            <option value="occasional">Occasional</option>
            <option value="yes">Yes</option>
          </Select>
        </Field>
      </div>
      <div className="rounded-2xl border border-border bg-muted p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Current stress level</span>
          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary">{data.stress}/10</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={data.stress}
          onChange={(e) => update("stress", parseInt(e.target.value))}
          className="mt-2 w-full accent-[color:var(--primary)]"
        />
        <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
          <span>Calm</span>
          <span>Very stressed</span>
        </div>
      </div>
    </div>
  );
}

function StepDietaryHabits({ data, update }: { data: FormState; update: any }) {
  const diets = ["Everything", "Vegetarian", "Vegan", "Pescatarian", "Halal only"];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Dietary preferences</h2>
      <div>
        <span className="text-xs font-semibold text-muted-foreground block mb-2">Preference</span>
        <div className="flex flex-wrap gap-2">
          {diets.map((d) => (
            <Chip key={d} active={data.diet === d} onClick={() => update("diet", d)}>
              {d}
            </Chip>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Meals per day">
          <Select value={data.mealsPerDay} onChange={(e) => update("mealsPerDay", e.target.value)}>
            <option value="">Select</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </Select>
        </Field>
        <Field label="Breakfast habits">
          <Select value={data.breakfast} onChange={(e) => update("breakfast", e.target.value)}>
            <option value="">Select</option>
            <option>Skip breakfast</option>
            <option>Light (tea + toast)</option>
            <option>Traditional desi</option>
            <option>Balanced</option>
          </Select>
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Favorite Pakistani foods">
          <Input
            value={data.favFoods}
            onChange={(e) => update("favFoods", e.target.value)}
            placeholder="e.g. biryani, daal chawal"
          />
        </Field>
        <Field label="Daily snacks">
          <Input
            value={data.snacks}
            onChange={(e) => update("snacks", e.target.value)}
            placeholder="e.g. fruit, biscuits"
          />
        </Field>
      </div>
    </div>
  );
}

function StepGoalsTargets({ data, update, toggle }: { data: FormState; update: any; toggle: any }) {
  const goals = ["Lose Weight", "Gain Weight", "Muscle Gain", "Diabetes Control", "PCOS Management", "Healthy Eating", "Pregnancy Nutrition", "Improve Digestion", "Better Energy", "Better Sleep"];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">What are your health goals?</h2>
      <div className="grid grid-cols-2 gap-2 max-h-[150px] overflow-y-auto pr-1">
        {goals.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => toggle("goals", g)}
            className={cn("rounded-xl border p-2 text-xs font-semibold transition text-center cursor-pointer",
              data.goals.includes(g)
                ? "border-primary bg-secondary text-primary shadow-soft"
                : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"
            )}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Timeline goal">
          <Select value={data.timeline} onChange={(e) => update("timeline", e.target.value)}>
            <option value="">Select</option>
            <option>1 month</option>
            <option>3 months</option>
            <option>6 months</option>
            <option>1 year</option>
          </Select>
        </Field>
        <Field label="Biggest challenge">
          <Input
            value={data.challenges}
            onChange={(e) => update("challenges", e.target.value)}
            placeholder="e.g. sugar cravings"
          />
        </Field>
      </div>
      <div className="rounded-2xl border border-border bg-muted p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Motivation level</span>
          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary">{data.motivation}/10</span>
        </div>
        <input
          type="range"
          min={1}
          max={10}
          value={data.motivation}
          onChange={(e) => update("motivation", parseInt(e.target.value))}
          className="mt-2 w-full accent-[color:var(--primary)]"
        />
      </div>
    </div>
  );
}

function StepReportsUpload({ data, update }: { data: FormState; update: any }) {
  const [dragOver, setDragOver] = useState(false);
  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const additions = Array.from(list).map((f) => ({ name: f.name, size: f.size }));
    update("files", [...data.files, ...additions]);
  };
  return (
    <div>
      <h2 className="font-display text-xl font-bold">Upload your reports</h2>
      <p className="mt-1 text-xs text-muted-foreground">Blood work, prescriptions or previous diet plans — helpful but optional.</p>
      <label
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
        className={cn("mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition",
          dragOver ? "border-primary bg-secondary" : "border-border bg-muted hover:border-primary/50")}>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-soft">
          <Upload className="h-5 w-5" />
        </span>
        <p className="mt-3 text-sm font-semibold">Drag & drop files here, or click to browse</p>
        <p className="mt-0.5 text-xs text-muted-foreground">PDF, JPG or PNG · max 10MB each</p>
        <input type="file" multiple hidden onChange={(e) => addFiles(e.target.files)} />
      </label>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground justify-center">
        {["CBC", "HbA1c", "Lipid Profile", "LFTs"].map((t) => (
          <span key={t} className="rounded-full border border-border bg-white px-2.5 py-0.5">{t}</span>
        ))}
      </div>
      {data.files.length > 0 && (
        <ul className="mt-3 space-y-1.5 max-h-[120px] overflow-y-auto pr-1">
          {data.files.map((f, i) => (
            <li key={i} className="flex items-center justify-between rounded-xl border border-border bg-white px-3 py-2">
              <div className="min-w-0"><p className="truncate text-xs font-medium">{f.name}</p><p className="text-[10px] text-muted-foreground">{(f.size / 1024).toFixed(0)} KB</p></div>
              <button type="button" onClick={() => update("files", data.files.filter((_: any, j: number) => j !== i))} className="text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepAppointmentSchedule({ data, update }: { data: FormState; update: any }) {
  const days = useMemo(() => {
    const arr: { iso: string; label: string; day: string }[] = [];
    const now = new Date();
    for (let i = 1; i <= 10; i++) {
      const d = new Date(now); d.setDate(now.getDate() + i);
      arr.push({
        iso: d.toISOString().split("T")[0],
        label: d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
        day: d.toLocaleDateString("en-GB", { weekday: "short" }),
      });
    }
    return arr;
  }, []);
  const slots = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM", "7:30 PM"];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Pick your appointment</h2>

      <div>
        <p className="text-xs font-semibold text-muted-foreground">Consultation type</p>
        <div className="mt-1.5 grid gap-2 grid-cols-2">
          {[
            { v: "video", t: "Video Call", d: "Google Meet", icon: Video },
            { v: "inperson", t: "In-Person", d: "Faisalabad clinic", icon: MapPin },
          ].map((o) => (
            <button key={o.v} type="button" onClick={() => update("consultType", o.v)}
              className={cn("flex items-start gap-2.5 rounded-xl border p-3 text-left transition cursor-pointer",
                data.consultType === o.v ? "border-primary bg-secondary shadow-soft" : "border-border bg-white hover:border-primary/40")}>
              <span className={cn("grid h-8 w-8 place-items-center rounded-lg shrink-0", data.consultType === o.v ? "bg-leaf-gradient text-primary-foreground" : "bg-secondary text-primary")}>
                <o.icon className="h-4 w-4" />
              </span>
              <div><p className="text-xs font-semibold">{o.t}</p><p className="text-[10px] text-muted-foreground">{o.d}</p></div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-muted-foreground">Choose a date</p>
        <div className="mt-1.5 -mx-1 flex snap-x gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {days.map((d) => (
            <button key={d.iso} type="button" onClick={() => update("date", d.iso)}
              className={cn("min-w-[70px] shrink-0 snap-start rounded-xl border p-2 text-center transition cursor-pointer",
                data.date === d.iso ? "border-primary bg-leaf-gradient text-primary-foreground shadow-soft" : "border-border bg-white hover:border-primary/40")}>
              <p className={cn("text-[10px] font-medium", data.date === d.iso ? "opacity-90" : "text-muted-foreground")}>{d.day}</p>
              <p className="font-display text-sm font-bold">{d.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-muted-foreground">Available time slots</p>
        <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4 max-h-[110px] overflow-y-auto pr-1">
          {slots.map((s) => (
            <button key={s} type="button" onClick={() => update("slot", s)}
              className={cn("rounded-lg border py-2 text-xs font-semibold transition cursor-pointer",
                data.slot === s ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary")}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepReviewDetails({ data, bmi, age, goto }: { data: FormState; bmi: number | null; age: number | null; goto: (n: number) => void }) {
  const row = (label: string, value: React.ReactNode) => (
    <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-0.5 sm:gap-2 border-b border-border py-1.5 last:border-0 text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value || <span className="text-muted-foreground">—</span>}</span>
    </div>
  );
  const Card = ({ title, step, children }: { title: string; step: number; children: React.ReactNode }) => (
    <div className="rounded-xl border border-border bg-white p-3.5">
      <div className="flex items-center justify-between pb-1">
        <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
        <button onClick={() => goto(step)} className="text-[10px] font-bold text-primary hover:underline cursor-pointer">Edit</button>
      </div>
      <div>{children}</div>
    </div>
  );
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-bold">Review your details</h2>
      <div className="grid gap-3 max-h-[280px] overflow-y-auto pr-1.5 scrollbar-thin">
        <Card title="Personal" step={1}>
          {row("Name", data.fullName)}
          {row("City", data.city)}
          {row("Height/Weight", `${data.height || "—"} cm · ${data.weight || "—"} kg${bmi ? ` · BMI ${bmi}` : ""}`)}
          {row("Contact", `${data.email} · ${data.phone}`)}
        </Card>
        <Card title="Medical" step={5}>
          {row("Conditions", data.conditions.join(", "))}
          {row("Allergies", data.allergies)}
          {row("Medications", data.medications)}
        </Card>
        <Card title="Lifestyle" step={7}>
          {row("Sleep", data.avgSleep ? `${data.avgSleep} hrs` : "")}
          {row("Stress", `${data.stress}/10`)}
        </Card>
        <Card title="Goals" step={10}>
          {row("Goals", data.goals.join(", "))}
          {row("Timeline", data.timeline)}
        </Card>
        <Card title="Appointment" step={12}>
          {row("Type", data.consultType === "video" ? "Video (Google Meet)" : "In-person (Faisalabad)")}
          {row("Date", data.date)}
          {row("Time", data.slot)}
        </Card>
      </div>
    </div>
  );
}

function SuccessScreen({ data }: { data: FormState }) {
  return (
    <div className="bg-hero-gradient min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <section className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 lg:py-16 lg:px-8">
        <Reveal>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-glow animate-pulse-ring">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-balance sm:text-5xl">You're all set, {data.fullName.split(" ")[0] || "friend"}!</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm">
            Your consultation is booked. I've sent a confirmation with your Google Meet link and calendar invite to <span className="font-semibold text-foreground">{data.email}</span>.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-[1.75rem] border border-border bg-white p-8 text-left shadow-glow">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary shrink-0"><CalendarIcon className="h-6 w-6" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Your appointment</p>
                <p className="mt-1 font-display text-xl font-bold">{data.date} · {data.slot}</p>
                <p className="text-sm text-muted-foreground">{data.consultType === "video" ? "Video call · Google Meet" : "In-person · Move Better Clinic, Faisalabad"}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft"><Video className="h-4 w-4" /> Google Meet link</a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold"><CalendarIcon className="h-4 w-4" /> Add to calendar</a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold"><Download className="h-4 w-4" /> Download summary</a>
            </div>
            <a href={`https://wa.me/923001234567?text=Salam!%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(data.date + " " + data.slot)}`} target="_blank" rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft"><MessageCircle className="h-4 w-4" /> Send me a WhatsApp reminder</a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Link to="/" className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline">Back to home</Link>
        </Reveal>
      </section>
    </div>
  );
}
