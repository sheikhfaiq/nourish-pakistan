import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Upload, X, Calendar as CalendarIcon, Video, CheckCircle2, Download, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Nourish with Ayesha" },
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
};

const steps = [
  "Personal", "Medical", "Lifestyle", "Eating", "Goals", "Reports", "Appointment", "Review",
] as const;

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

  const progress = ((step + 1) / steps.length) * 100;

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((p) => ({ ...p, [k]: v }));
  const toggleArr = (k: "conditions" | "goals", v: string) =>
    setData((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const canNext = () => {
    if (step === 0) return data.fullName && data.email && data.phone && data.city;
    if (step === 6) return data.date && data.slot;
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
    <div className="bg-hero-gradient">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Health assessment</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl">Let's build your consultation together</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Takes about 5 minutes. Your information is private and only used to prepare for our session.
            </p>
          </div>
        </Reveal>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>Step {step + 1} of {steps.length}</span>
            <span className="text-primary">{steps[step]}</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-leaf-gradient transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-4 hidden gap-1 sm:flex">
            {steps.map((s, i) => (
              <div key={s} className={cn("flex-1 rounded-full py-1 text-center text-[10px] font-semibold uppercase tracking-wider transition",
                i < step ? "bg-primary/10 text-primary" : i === step ? "bg-leaf-gradient text-primary-foreground" : "bg-white text-muted-foreground border border-border")}>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div key={step} className="mt-8 animate-rise-in rounded-[1.75rem] border border-border bg-white p-6 shadow-glow sm:p-10">
          {step === 0 && <StepPersonal data={data} update={update} bmi={bmi} age={age} />}
          {step === 1 && <StepMedical data={data} update={update} toggle={toggleArr} />}
          {step === 2 && <StepLifestyle data={data} update={update} />}
          {step === 3 && <StepEating data={data} update={update} />}
          {step === 4 && <StepGoals data={data} update={update} toggle={toggleArr} />}
          {step === 5 && <StepReports data={data} update={update} />}
          {step === 6 && <StepAppointment data={data} update={update} />}
          {step === 7 && <StepReview data={data} bmi={bmi} age={age} goto={setStep} />}
        </div>

        {/* Nav */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button onClick={prev} disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary hover:text-primary disabled:opacity-40">
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          {step < steps.length - 1 ? (
            <button onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button onClick={submit}
              className="inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
              Confirm booking <Check className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prefer to chat first? <Link to="/contact" className="text-primary underline-offset-2 hover:underline">Message me</Link>.
        </p>
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
      className={cn("rounded-full border px-4 py-2 text-sm font-medium transition",
        active ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-primary")}>
      {children}
    </button>
  );
}

/* ------------ Steps ------------ */

function StepPersonal({ data, update, bmi, age }: { data: FormState; update: any; bmi: number | null; age: number | null }) {
  const bmiCat = bmi ? (bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy" : bmi < 30 ? "Overweight" : "Obese") : "";
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Personal information</h2>
      <p className="mt-1 text-sm text-muted-foreground">The basics so I can prepare for our call.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required><Input value={data.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="e.g. Ayesha Khan" maxLength={80} /></Field>
        <Field label="Gender"><Select value={data.gender} onChange={(e) => update("gender", e.target.value)}><option value="">Select</option><option>Female</option><option>Male</option><option>Prefer not to say</option></Select></Field>
        <Field label="Date of birth"><Input type="date" value={data.dob} onChange={(e) => update("dob", e.target.value)} /></Field>
        <Field label="Age"><Input value={age ?? ""} readOnly placeholder="Auto-calculated" /></Field>
        <Field label="Height (cm)"><Input type="number" min={80} max={230} value={data.height} onChange={(e) => update("height", e.target.value)} placeholder="e.g. 165" /></Field>
        <Field label="Current weight (kg)"><Input type="number" min={20} max={300} value={data.weight} onChange={(e) => update("weight", e.target.value)} placeholder="e.g. 72" /></Field>
        <Field label="Goal weight (kg)"><Input type="number" min={20} max={300} value={data.goalWeight} onChange={(e) => update("goalWeight", e.target.value)} placeholder="e.g. 65" /></Field>
        <Field label="City" required><Input value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Lahore" maxLength={60} /></Field>
        <Field label="Occupation"><Input value={data.occupation} onChange={(e) => update("occupation", e.target.value)} placeholder="e.g. Teacher" maxLength={80} /></Field>
        <Field label="Marital status"><Select value={data.marital} onChange={(e) => update("marital", e.target.value)}><option value="">Select</option><option>Single</option><option>Married</option><option>Other</option></Select></Field>
        <Field label="Email" required><Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" maxLength={160} /></Field>
        <Field label="Phone" required><Input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+92 300 1234567" maxLength={20} /></Field>
        <Field label="WhatsApp number"><Input value={data.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+92 300 1234567" maxLength={20} /></Field>
      </div>

      {bmi !== null && (
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-primary/30 bg-secondary p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Live BMI</p>
            <p className="mt-1 font-display text-2xl font-bold">{bmi} <span className="text-sm font-medium text-muted-foreground">· {bmiCat}</span></p>
          </div>
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
      )}
    </div>
  );
}

function StepMedical({ data, update, toggle }: { data: FormState; update: any; toggle: (k: "conditions" | "goals", v: string) => void }) {
  const conds = ["Diabetes", "PCOS", "Thyroid Disorders", "Hypertension", "High Cholesterol", "Fatty Liver", "Heart Disease", "Kidney Disease", "IBS", "Other"];
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Medical history</h2>
      <p className="mt-1 text-sm text-muted-foreground">Select anything that applies — no judgement.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {conds.map((c) => <Chip key={c} active={data.conditions.includes(c)} onClick={() => toggle("conditions", c)}>{c}</Chip>)}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Current medications"><Textarea rows={3} value={data.medications} onChange={(e) => update("medications", e.target.value)} placeholder="List any medicines you take" /></Field>
        <Field label="Food allergies"><Textarea rows={3} value={data.allergies} onChange={(e) => update("allergies", e.target.value)} placeholder="e.g. nuts, seafood" /></Field>
        <Field label="Previous surgeries"><Textarea rows={3} value={data.surgeries} onChange={(e) => update("surgeries", e.target.value)} placeholder="Optional" /></Field>
        <Field label="Family medical history"><Textarea rows={3} value={data.familyHistory} onChange={(e) => update("familyHistory", e.target.value)} placeholder="e.g. diabetes, heart disease" /></Field>
      </div>
    </div>
  );
}

function StepLifestyle({ data, update }: { data: FormState; update: any }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Lifestyle assessment</h2>
      <p className="mt-1 text-sm text-muted-foreground">Your day-to-day rhythm shapes your plan.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Working hours"><Input value={data.workingHours} onChange={(e) => update("workingHours", e.target.value)} placeholder="e.g. 9am – 6pm" /></Field>
        <Field label="Wake-up time"><Input type="time" value={data.wakeTime} onChange={(e) => update("wakeTime", e.target.value)} /></Field>
        <Field label="Sleep time"><Input type="time" value={data.sleepTime} onChange={(e) => update("sleepTime", e.target.value)} /></Field>
        <Field label="Average sleep (hours)"><Input type="number" min={0} max={16} value={data.avgSleep} onChange={(e) => update("avgSleep", e.target.value)} placeholder="e.g. 6" /></Field>
        <Field label="Physical activity"><Select value={data.activity} onChange={(e) => update("activity", e.target.value)}><option value="">Select</option><option>Sedentary</option><option>Lightly active</option><option>Moderately active</option><option>Very active</option></Select></Field>
        <Field label="Exercise frequency"><Select value={data.exercise} onChange={(e) => update("exercise", e.target.value)}><option value="">Select</option><option>Never</option><option>1–2x / week</option><option>3–4x / week</option><option>5+ / week</option></Select></Field>
        <Field label="Water intake (glasses/day)"><Input type="number" min={0} max={20} value={data.water} onChange={(e) => update("water", e.target.value)} placeholder="e.g. 6" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Smoking"><Select value={data.smoking} onChange={(e) => update("smoking", e.target.value)}><option value="no">No</option><option value="occasional">Occasional</option><option value="yes">Yes</option></Select></Field>
          <Field label="Alcohol"><Select value={data.alcohol} onChange={(e) => update("alcohol", e.target.value)}><option value="no">No</option><option value="occasional">Occasional</option><option value="yes">Yes</option></Select></Field>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-muted p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Current stress level</span>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary">{data.stress}/10</span>
        </div>
        <input type="range" min={1} max={10} value={data.stress} onChange={(e) => update("stress", parseInt(e.target.value))}
          className="mt-3 w-full accent-[color:var(--primary)]" />
        <div className="mt-1 flex justify-between text-[11px] text-muted-foreground"><span>Calm</span><span>Very stressed</span></div>
      </div>
    </div>
  );
}

function StepEating({ data, update }: { data: FormState; update: any }) {
  const diets = ["Everything", "Vegetarian", "Vegan", "Pescatarian", "Halal only"];
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Eating habits</h2>
      <p className="mt-1 text-sm text-muted-foreground">Be honest — this is where the magic starts.</p>

      <div className="mt-6">
        <p className="text-sm font-medium">Dietary preference</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {diets.map((d) => <Chip key={d} active={data.diet === d} onClick={() => update("diet", d)}>{d}</Chip>)}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Meals per day"><Select value={data.mealsPerDay} onChange={(e) => update("mealsPerDay", e.target.value)}><option value="">Select</option><option>2</option><option>3</option><option>4</option><option>5+</option></Select></Field>
        <Field label="Breakfast habits"><Select value={data.breakfast} onChange={(e) => update("breakfast", e.target.value)}><option value="">Select</option><option>Skip breakfast</option><option>Light (tea + toast)</option><option>Traditional desi</option><option>Balanced (protein + carbs)</option></Select></Field>
        <Field label="Fast-food frequency"><Select value={data.fastFood} onChange={(e) => update("fastFood", e.target.value)}><option value="">Select</option><option>Rarely</option><option>1x / week</option><option>2–3x / week</option><option>Daily</option></Select></Field>
        <Field label="Eating-out frequency"><Select value={data.eatingOut} onChange={(e) => update("eatingOut", e.target.value)}><option value="">Select</option><option>Rarely</option><option>1x / week</option><option>2–3x / week</option><option>Daily</option></Select></Field>
        <Field label="Tea / Coffee (cups/day)"><Input type="number" min={0} max={20} value={data.tea} onChange={(e) => update("tea", e.target.value)} /></Field>
        <Field label="Soft drinks (per week)"><Input type="number" min={0} max={50} value={data.softDrinks} onChange={(e) => update("softDrinks", e.target.value)} /></Field>
        <Field label="Sweet consumption"><Select value={data.sweets} onChange={(e) => update("sweets", e.target.value)}><option value="">Select</option><option>Rarely</option><option>Weekly</option><option>Daily</option></Select></Field>
        <Field label="Daily snacks"><Input value={data.snacks} onChange={(e) => update("snacks", e.target.value)} placeholder="e.g. biscuits, chips, fruit" /></Field>
        <Field label="Favourite Pakistani foods"><Input value={data.favFoods} onChange={(e) => update("favFoods", e.target.value)} placeholder="e.g. biryani, nihari" /></Field>
        <Field label="Foods you dislike"><Input value={data.dislikes} onChange={(e) => update("dislikes", e.target.value)} placeholder="e.g. karela, mushrooms" /></Field>
      </div>
    </div>
  );
}

function StepGoals({ data, update, toggle }: { data: FormState; update: any; toggle: (k: "conditions" | "goals", v: string) => void }) {
  const goals = ["Lose Weight", "Gain Weight", "Muscle Gain", "Diabetes Control", "PCOS Management", "Healthy Eating", "Pregnancy Nutrition", "Child Nutrition", "Sports Performance", "Improve Digestion", "Better Energy", "Better Sleep"];
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Your health goals</h2>
      <p className="mt-1 text-sm text-muted-foreground">Pick everything that matters to you.</p>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {goals.map((g) => (
          <button key={g} type="button" onClick={() => toggle("goals", g)}
            className={cn("rounded-2xl border p-3 text-sm font-medium transition text-center",
              data.goals.includes(g) ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary")}>
            {g}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Goal timeline"><Select value={data.timeline} onChange={(e) => update("timeline", e.target.value)}><option value="">Select</option><option>1 month</option><option>3 months</option><option>6 months</option><option>1 year</option></Select></Field>
        <Field label="Biggest challenges"><Input value={data.challenges} onChange={(e) => update("challenges", e.target.value)} placeholder="e.g. late-night cravings" /></Field>
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-muted p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Motivation level</span>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary">{data.motivation}/10</span>
        </div>
        <input type="range" min={1} max={10} value={data.motivation} onChange={(e) => update("motivation", parseInt(e.target.value))} className="mt-3 w-full accent-[color:var(--primary)]" />
      </div>
      <Field label="Anything else I should know?"><Textarea rows={4} value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Optional — share anything relevant" /></Field>
    </div>
  );
}

function StepReports({ data, update }: { data: FormState; update: any }) {
  const [dragOver, setDragOver] = useState(false);
  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const additions = Array.from(list).map((f) => ({ name: f.name, size: f.size }));
    update("files", [...data.files, ...additions]);
  };
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Upload your reports</h2>
      <p className="mt-1 text-sm text-muted-foreground">Blood work, prescriptions or previous diet plans — helpful but optional.</p>
      <label
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
        className={cn("mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition",
          dragOver ? "border-primary bg-secondary" : "border-border bg-muted hover:border-primary/50")}>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-soft">
          <Upload className="h-6 w-6" />
        </span>
        <p className="mt-4 text-sm font-semibold">Drag & drop files here, or click to browse</p>
        <p className="mt-1 text-xs text-muted-foreground">PDF, JPG or PNG · max 10MB each</p>
        <input type="file" multiple hidden onChange={(e) => addFiles(e.target.files)} />
      </label>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {["CBC", "HbA1c", "Lipid Profile", "Thyroid", "Vitamin D", "LFTs", "Prescriptions"].map((t) => (
          <span key={t} className="rounded-full border border-border bg-white px-3 py-1">{t}</span>
        ))}
      </div>
      {data.files.length > 0 && (
        <ul className="mt-5 space-y-2">
          {data.files.map((f, i) => (
            <li key={i} className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3">
              <div className="min-w-0"><p className="truncate text-sm font-medium">{f.name}</p><p className="text-xs text-muted-foreground">{(f.size / 1024).toFixed(0)} KB</p></div>
              <button type="button" onClick={() => update("files", data.files.filter((_: any, j: number) => j !== i))} className="text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepAppointment({ data, update }: { data: FormState; update: any }) {
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
    <div>
      <h2 className="font-display text-2xl font-bold">Pick your appointment</h2>
      <p className="mt-1 text-sm text-muted-foreground">All sessions are on Google Meet. You'll receive a calendar invite.</p>

      <div className="mt-6">
        <p className="text-sm font-medium">Consultation type</p>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {[
            { v: "video", t: "Video call (Google Meet)", d: "Most popular · anywhere in Pakistan" },
            { v: "inperson", t: "In-person (Lahore clinic)", d: "Gulberg III · by appointment" },
          ].map((o) => (
            <button key={o.v} type="button" onClick={() => update("consultType", o.v)}
              className={cn("flex items-start gap-3 rounded-2xl border p-4 text-left transition",
                data.consultType === o.v ? "border-primary bg-secondary shadow-soft" : "border-border bg-white hover:border-primary/40")}>
              <span className={cn("grid h-10 w-10 place-items-center rounded-xl", data.consultType === o.v ? "bg-leaf-gradient text-primary-foreground" : "bg-secondary text-primary")}>
                <Video className="h-5 w-5" />
              </span>
              <div><p className="text-sm font-semibold">{o.t}</p><p className="text-xs text-muted-foreground">{o.d}</p></div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium">Choose a date</p>
        <div className="mt-2 -mx-1 flex snap-x gap-2 overflow-x-auto pb-2">
          {days.map((d) => (
            <button key={d.iso} type="button" onClick={() => update("date", d.iso)}
              className={cn("min-w-[80px] shrink-0 snap-start rounded-2xl border p-3 text-center transition",
                data.date === d.iso ? "border-primary bg-leaf-gradient text-primary-foreground shadow-soft" : "border-border bg-white hover:border-primary/40")}>
              <p className={cn("text-xs font-medium", data.date === d.iso ? "opacity-90" : "text-muted-foreground")}>{d.day}</p>
              <p className="font-display text-lg font-bold">{d.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium">Available time slots</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {slots.map((s) => (
            <button key={s} type="button" onClick={() => update("slot", s)}
              className={cn("rounded-xl border py-3 text-sm font-semibold transition",
                data.slot === s ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary")}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepReview({ data, bmi, age, goto }: { data: FormState; bmi: number | null; age: number | null; goto: (n: number) => void }) {
  const row = (label: string, value: React.ReactNode) => (
    <div className="grid grid-cols-[140px_1fr] gap-3 border-b border-border py-2 last:border-0 text-sm">
      <span className="text-muted-foreground">{label}</span><span className="font-medium">{value || <span className="text-muted-foreground">—</span>}</span>
    </div>
  );
  const Card = ({ title, step, children }: { title: string; step: number; children: React.ReactNode }) => (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <button onClick={() => goto(step)} className="text-xs font-semibold text-primary hover:underline">Edit</button>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
  return (
    <div>
      <h2 className="font-display text-2xl font-bold">Review your details</h2>
      <p className="mt-1 text-sm text-muted-foreground">Confirm everything is right, then submit your booking.</p>
      <div className="mt-6 grid gap-4">
        <Card title="Personal" step={0}>
          {row("Name", data.fullName)}
          {row("Age", age ?? "")}
          {row("City", data.city)}
          {row("Height/Weight", `${data.height || "—"} cm · ${data.weight || "—"} kg${bmi ? ` · BMI ${bmi}` : ""}`)}
          {row("Contact", `${data.email} · ${data.phone}`)}
        </Card>
        <Card title="Medical" step={1}>
          {row("Conditions", data.conditions.join(", "))}
          {row("Allergies", data.allergies)}
          {row("Medications", data.medications)}
        </Card>
        <Card title="Lifestyle" step={2}>
          {row("Activity", data.activity)}
          {row("Sleep", data.avgSleep ? `${data.avgSleep} hrs` : "")}
          {row("Stress", `${data.stress}/10`)}
        </Card>
        <Card title="Goals" step={4}>
          {row("Goals", data.goals.join(", "))}
          {row("Timeline", data.timeline)}
          {row("Motivation", `${data.motivation}/10`)}
        </Card>
        <Card title="Appointment" step={6}>
          {row("Type", data.consultType === "video" ? "Video (Google Meet)" : "In-person (Lahore)")}
          {row("Date", data.date)}
          {row("Time", data.slot)}
        </Card>
      </div>
    </div>
  );
}

function SuccessScreen({ data }: { data: FormState }) {
  return (
    <div className="bg-hero-gradient">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24 lg:px-8">
        <Reveal>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-glow animate-pulse-ring">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-balance sm:text-5xl">You're all set, {data.fullName.split(" ")[0] || "friend"}!</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Your consultation is booked. I've sent a confirmation with your Google Meet link and calendar invite to <span className="font-semibold text-foreground">{data.email}</span>.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-[1.75rem] border border-border bg-white p-8 text-left shadow-glow">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><CalendarIcon className="h-6 w-6" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Your appointment</p>
                <p className="mt-1 font-display text-xl font-bold">{data.date} · {data.slot}</p>
                <p className="text-sm text-muted-foreground">{data.consultType === "video" ? "Video call · Google Meet" : "In-person · Gulberg III, Lahore"}</p>
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
