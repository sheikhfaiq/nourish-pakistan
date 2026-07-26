import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal } from "./Reveal-CLB-s_EP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Calendar, I as ChevronRight, L as ChevronLeft, M as Download, P as CircleCheck, b as MapPin, f as Sparkles, n as X, o as Upload, r as Video, v as MessageCircle, z as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-7lnKueG_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	fullName: "",
	gender: "",
	dob: "",
	height: "",
	weight: "",
	goalWeight: "",
	city: "",
	occupation: "",
	email: "",
	phone: "",
	whatsapp: "",
	marital: "",
	conditions: [],
	medications: "",
	allergies: "",
	surgeries: "",
	familyHistory: "",
	workingHours: "",
	wakeTime: "",
	sleepTime: "",
	avgSleep: "",
	stress: 5,
	activity: "",
	exercise: "",
	water: "",
	smoking: "no",
	alcohol: "no",
	diet: "",
	mealsPerDay: "",
	breakfast: "",
	fastFood: "",
	favFoods: "",
	dislikes: "",
	tea: "",
	softDrinks: "",
	sweets: "",
	eatingOut: "",
	snacks: "",
	goals: [],
	timeline: "",
	challenges: "",
	motivation: 7,
	notes: "",
	files: [],
	date: "",
	slot: "",
	consultType: "video"
};
var steps = [
	"Welcome",
	"Identity",
	"Contact",
	"Demographics",
	"Metrics",
	"Conditions",
	"Medical Details",
	"Lifestyle Rhythm",
	"Activity & Stress",
	"Dietary Habits",
	"Health Goals",
	"Reports",
	"Schedule",
	"Review"
];
var stepDetails = [
	{
		title: "Welcome",
		desc: "Let's prepare for your personalized consultation with Dn. Minahal Farrukh.",
		quote: "Your health is an investment, not an expense."
	},
	{
		title: "Identity",
		desc: "Let's start by getting your name and location.",
		quote: "Every journey begins with a single step. Let's make it personal."
	},
	{
		title: "Contact Info",
		desc: "How can we reach you to confirm your appointment?",
		quote: "Good communication is the bridge between confusion and clarity."
	},
	{
		title: "About You",
		desc: "A few details to help customize your nutritional strategy.",
		quote: "Age is just a number, but vitality is a choice."
	},
	{
		title: "Body Metrics",
		desc: "Your height and weight help calculate clinical baselines.",
		quote: "Progress is not about a number on a scale, it's about how you feel."
	},
	{
		title: "Medical History",
		desc: "Any clinical conditions help us customize safe, effective nutrition plans.",
		quote: "Your body's history guides our future path."
	},
	{
		title: "Clinical Details",
		desc: "Any current medications, allergies, or previous surgeries.",
		quote: "Detailing clinical parameters ensures the highest standard of care."
	},
	{
		title: "Daily Schedule",
		desc: "Your sleep patterns and working hours guide meal timing.",
		quote: "A plan that doesn't fit your daily rhythm won't last."
	},
	{
		title: "Activity & Habits",
		desc: "How active are you, and how do you handle stress?",
		quote: "Physical activity is a celebration of what your body can do."
	},
	{
		title: "Dietary Preferences",
		desc: "Share your preferences so we can suggest foods you love.",
		quote: "Nourishing yourself is a love letter to your body."
	},
	{
		title: "Wellness Goals",
		desc: "What are your primary targets, and what is your motivation level?",
		quote: "Setting goals is the first step in turning the invisible into the visible."
	},
	{
		title: "Medical Reports",
		desc: "Upload blood work or previous prescriptions if you have them (optional).",
		quote: "Data-driven decisions yield the best clinical outcomes."
	},
	{
		title: "Choose Appointment",
		desc: "Select a date and slot for your session (Google Meet or Faisalabad).",
		quote: "Time is our most valuable asset. Let's make it count."
	},
	{
		title: "Review Details",
		desc: "Double check all parameters before submitting.",
		quote: "Accuracy is key to tailoring a perfect routine."
	}
];
function BookPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [data, setData] = (0, import_react.useState)(initial);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const bmi = (0, import_react.useMemo)(() => {
		const h = parseFloat(data.height);
		const w = parseFloat(data.weight);
		if (!h || !w) return null;
		const m = h / 100;
		return +(w / (m * m)).toFixed(1);
	}, [data.height, data.weight]);
	const age = (0, import_react.useMemo)(() => {
		if (!data.dob) return null;
		const d = new Date(data.dob);
		if (isNaN(d.getTime())) return null;
		const diff = Date.now() - d.getTime();
		return Math.floor(diff / (1e3 * 60 * 60 * 24 * 365.25));
	}, [data.dob]);
	const progress = step === 0 ? 0 : step / (steps.length - 1) * 100;
	const update = (k, v) => setData((p) => ({
		...p,
		[k]: v
	}));
	const toggleArr = (k, v) => setData((p) => ({
		...p,
		[k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v]
	}));
	const canNext = () => {
		if (step === 1) return data.fullName && data.city;
		if (step === 2) return data.email && data.phone;
		if (step === 12) return data.date && data.slot;
		return true;
	};
	const next = () => {
		if (!canNext()) {
			toast.error("Please fill the required fields");
			return;
		}
		setStep((s) => Math.min(steps.length - 1, s + 1));
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const prev = () => setStep((s) => Math.max(0, s - 1));
	const submit = () => {
		setSubmitted(true);
		toast.success("Booking confirmed! Check your email for the Google Meet link.");
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessScreen, { data });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero-gradient min-h-[calc(100vh-80px)] flex flex-col justify-center py-6 md:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_1.8fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex flex-col h-[650px] justify-between bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-[2.5rem] p-8 border border-primary/15 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider",
									children: "Health Assessment"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-extrabold text-foreground tracking-tight leading-tight transition-all duration-300",
								children: stepDetails[step].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed mt-2 min-h-[48px]",
								children: stepDetails[step].desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 relative pl-6 border-l-2 border-border/80 space-y-3 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin",
								children: stepDetails.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center h-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-white z-10", i < step ? "border-primary bg-primary text-white" : i === step ? "border-primary bg-white scale-110 shadow-glow" : "border-border bg-white"),
										children: i < step && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3] text-white" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-xs font-semibold tracking-wide transition-colors duration-300", i === step ? "text-primary font-bold" : i < step ? "text-foreground" : "text-muted-foreground"),
										children: s.title
									})]
								}, i))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto pt-6 border-t border-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 bg-white/60 p-4 rounded-xl backdrop-blur-sm border border-white/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs italic text-muted-foreground leading-snug",
								children: [
									"\"",
									stepDetails[step].quote,
									"\""
								]
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-xl mx-auto lg:mx-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:hidden mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-primary text-center",
									children: "Health Assessment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 font-display text-2xl font-bold text-foreground text-center",
									children: stepDetails[step].title
								}),
								step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Step ",
										step,
										" of 13"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-primary",
										children: [Math.round(progress), "% Complete"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-leaf-gradient transition-[width] duration-500 ease-out",
										style: { width: `${progress}%` }
									})
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise-in rounded-[2rem] border border-border bg-white p-6 shadow-glow sm:p-8 md:p-10 min-h-[360px] flex flex-col justify-center",
							children: [
								step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWelcome, { next }),
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIdentity, {
									data,
									update
								}),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepContact, {
									data,
									update
								}),
								step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDemographics, {
									data,
									update
								}),
								step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMetrics, {
									data,
									update,
									bmi,
									age
								}),
								step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedicalConditions, {
									data,
									toggle: toggleArr
								}),
								step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedicalDetails, {
									data,
									update
								}),
								step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepLifestyleRhythm, {
									data,
									update
								}),
								step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepLifestyleActivity, {
									data,
									update
								}),
								step === 9 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDietaryHabits, {
									data,
									update
								}),
								step === 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGoalsTargets, {
									data,
									update,
									toggle: toggleArr
								}),
								step === 11 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReportsUpload, {
									data,
									update
								}),
								step === 12 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepAppointmentSchedule, {
									data,
									update
								}),
								step === 13 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReviewDetails, {
									data,
									bmi,
									age,
									goto: setStep
								})
							]
						}, step),
						step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: prev,
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:border-primary hover:text-primary cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Back"]
							}), step < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: next,
								className: "inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 cursor-pointer",
								children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: submit,
								className: "inline-flex items-center gap-2 rounded-full bg-leaf-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 cursor-pointer",
								children: ["Confirm booking ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-center text-xs text-muted-foreground",
							children: [
								"Prefer to chat first? ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-primary underline-offset-2 hover:underline",
									children: "Message me"
								}),
								"."
							]
						})
					]
				})]
			})
		})
	});
}
function Field({ label, children, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-sm font-medium text-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5",
			children
		})]
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className)
	});
}
function Select({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		className: cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className),
		children
	});
}
function Textarea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: cn("w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20", props.className)
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer", active ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-primary"),
		children
	});
}
function StepWelcome({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 text-primary" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 font-display text-2xl md:text-3xl font-extrabold text-foreground leading-tight",
				children: "Your Health Journey Starts Here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed",
				children: "This health assessment takes about 3-5 minutes. It helps Dn. Minahal Farrukh understand your clinical baselines and dietary preferences before your consultation."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: next,
					className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 cursor-pointer",
					children: ["Start Assessment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })]
				})
			})
		]
	});
}
function StepIdentity({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "What is your name and location?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full name",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.fullName,
						onChange: (e) => update("fullName", e.target.value),
						placeholder: "e.g. Sara Ahmed",
						maxLength: 80,
						autoFocus: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "City",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.city,
						onChange: (e) => update("city", e.target.value),
						placeholder: "e.g. Faisalabad",
						maxLength: 60
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Occupation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.occupation,
						onChange: (e) => update("occupation", e.target.value),
						placeholder: "e.g. Teacher (optional)",
						maxLength: 80
					})
				})
			]
		})]
	});
}
function StepContact({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "How can we reach you?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email Address",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						value: data.email,
						onChange: (e) => update("email", e.target.value),
						placeholder: "you@email.com",
						maxLength: 160,
						autoFocus: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone / Contact Number",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.phone,
						onChange: (e) => update("phone", e.target.value),
						placeholder: "+92 300 1234567",
						maxLength: 20
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "WhatsApp Number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.whatsapp,
						onChange: (e) => update("whatsapp", e.target.value),
						placeholder: "Leave empty if same as phone (optional)",
						maxLength: 20
					})
				})
			]
		})]
	});
}
function StepDemographics({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "Tell us a bit about yourself"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Date of birth",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					value: data.dob,
					onChange: (e) => update("dob", e.target.value),
					autoFocus: true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Gender",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.gender,
						onChange: (e) => update("gender", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Female" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Male" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Prefer not to say" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Marital status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.marital,
						onChange: (e) => update("marital", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Single" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Married" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					})
				})]
			})]
		})]
	});
}
function StepMetrics({ data, update, bmi, age }) {
	const bmiCat = bmi ? bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy" : bmi < 30 ? "Overweight" : "Obese" : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "What are your body metrics?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Height (cm)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 80,
						max: 230,
						value: data.height,
						onChange: (e) => update("height", e.target.value),
						placeholder: "e.g. 165",
						autoFocus: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Current Weight (kg)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 20,
						max: 300,
						value: data.weight,
						onChange: (e) => update("weight", e.target.value),
						placeholder: "e.g. 72"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Goal Weight (kg)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 20,
						max: 300,
						value: data.goalWeight,
						onChange: (e) => update("goalWeight", e.target.value),
						placeholder: "e.g. 65"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Age (years)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: age ?? "",
						readOnly: true,
						placeholder: "Calculated from DOB",
						className: "bg-muted text-muted-foreground"
					})
				})]
			}),
			bmi !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between rounded-2xl border border-primary/30 bg-secondary p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Live BMI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 font-display text-xl font-bold",
					children: [
						bmi,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium text-muted-foreground",
							children: ["· ", bmiCat]
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6 text-primary" })]
			})
		]
	});
}
function StepMedicalConditions({ data, toggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Do you have any medical conditions?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Select all that apply to you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 pt-2",
				children: [
					"Diabetes",
					"PCOS",
					"Thyroid Disorders",
					"Hypertension",
					"High Cholesterol",
					"Fatty Liver",
					"Heart Disease",
					"Kidney Disease",
					"IBS",
					"Other"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: data.conditions.includes(c),
					onClick: () => toggle("conditions", c),
					children: c
				}, c))
			})
		]
	});
}
function StepMedicalDetails({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "Medications & history"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Current medications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: data.medications,
						onChange: (e) => update("medications", e.target.value),
						placeholder: "List any regular medicines (optional)"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Food allergies",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: data.allergies,
						onChange: (e) => update("allergies", e.target.value),
						placeholder: "e.g. nuts, dairy (optional)"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Previous surgeries",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: data.surgeries,
						onChange: (e) => update("surgeries", e.target.value),
						placeholder: "Mention any surgeries (optional)"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Family history",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						value: data.familyHistory,
						onChange: (e) => update("familyHistory", e.target.value),
						placeholder: "Diabetes, blood pressure, etc. (optional)"
					})
				})
			]
		})]
	});
}
function StepLifestyleRhythm({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Your daily rhythm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Wake-up time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "time",
						value: data.wakeTime,
						onChange: (e) => update("wakeTime", e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Sleep time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "time",
						value: data.sleepTime,
						onChange: (e) => update("sleepTime", e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Average sleep (hours)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						max: 16,
						value: data.avgSleep,
						onChange: (e) => update("avgSleep", e.target.value),
						placeholder: "e.g. 7"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Working hours",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.workingHours,
						onChange: (e) => update("workingHours", e.target.value),
						placeholder: "e.g. 9am – 5pm"
					})
				})]
			})
		]
	});
}
function StepLifestyleActivity({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Activity & stress level"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Physical activity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.activity,
						onChange: (e) => update("activity", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sedentary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Lightly active" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Moderately active" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Very active" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Exercise frequency",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.exercise,
						onChange: (e) => update("exercise", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Never" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1–2x / week" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3–4x / week" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "5+ / week" })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Water intake (glasses)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						max: 20,
						value: data.water,
						onChange: (e) => update("water", e.target.value),
						placeholder: "e.g. 8"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Smoking habits",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.smoking,
						onChange: (e) => update("smoking", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "no",
								children: "No"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "occasional",
								children: "Occasional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "yes",
								children: "Yes"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-muted p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-foreground",
							children: "Current stress level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary",
							children: [data.stress, "/10"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 1,
						max: 10,
						value: data.stress,
						onChange: (e) => update("stress", parseInt(e.target.value)),
						className: "mt-2 w-full accent-[color:var(--primary)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Calm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Very stressed" })]
					})
				]
			})
		]
	});
}
function StepDietaryHabits({ data, update }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Dietary preferences"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold text-muted-foreground block mb-2",
				children: "Preference"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					"Everything",
					"Vegetarian",
					"Vegan",
					"Pescatarian",
					"Halal only"
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: data.diet === d,
					onClick: () => update("diet", d),
					children: d
				}, d))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Meals per day",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.mealsPerDay,
						onChange: (e) => update("mealsPerDay", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "5+" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Breakfast habits",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.breakfast,
						onChange: (e) => update("breakfast", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Skip breakfast" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Light (tea + toast)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Traditional desi" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Balanced" })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Favorite Pakistani foods",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.favFoods,
						onChange: (e) => update("favFoods", e.target.value),
						placeholder: "e.g. biryani, daal chawal"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Daily snacks",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.snacks,
						onChange: (e) => update("snacks", e.target.value),
						placeholder: "e.g. fruit, biscuits"
					})
				})]
			})
		]
	});
}
function StepGoalsTargets({ data, update, toggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "What are your health goals?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 max-h-[150px] overflow-y-auto pr-1",
				children: [
					"Lose Weight",
					"Gain Weight",
					"Muscle Gain",
					"Diabetes Control",
					"PCOS Management",
					"Healthy Eating",
					"Pregnancy Nutrition",
					"Improve Digestion",
					"Better Energy",
					"Better Sleep"
				].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggle("goals", g),
					className: cn("rounded-xl border p-2 text-xs font-semibold transition text-center cursor-pointer", data.goals.includes(g) ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"),
					children: g
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Timeline goal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: data.timeline,
						onChange: (e) => update("timeline", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1 month" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3 months" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6 months" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1 year" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Biggest challenge",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.challenges,
						onChange: (e) => update("challenges", e.target.value),
						placeholder: "e.g. sugar cravings"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-muted p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-foreground",
						children: "Motivation level"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary",
						children: [data.motivation, "/10"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 10,
					value: data.motivation,
					onChange: (e) => update("motivation", parseInt(e.target.value)),
					className: "mt-2 w-full accent-[color:var(--primary)]"
				})]
			})
		]
	});
}
function StepReportsUpload({ data, update }) {
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const addFiles = (list) => {
		if (!list) return;
		const additions = Array.from(list).map((f) => ({
			name: f.name,
			size: f.size
		}));
		update("files", [...data.files, ...additions]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "Upload your reports"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "Blood work, prescriptions or previous diet plans — helpful but optional."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			onDragOver: (e) => {
				e.preventDefault();
				setDragOver(true);
			},
			onDragLeave: () => setDragOver(false),
			onDrop: (e) => {
				e.preventDefault();
				setDragOver(false);
				addFiles(e.dataTransfer.files);
			},
			className: cn("mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition", dragOver ? "border-primary bg-secondary" : "border-border bg-muted hover:border-primary/50"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm font-semibold",
					children: "Drag & drop files here, or click to browse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: "PDF, JPG or PNG · max 10MB each"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					multiple: true,
					hidden: true,
					onChange: (e) => addFiles(e.target.files)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground justify-center",
			children: [
				"CBC",
				"HbA1c",
				"Lipid Profile",
				"LFTs"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full border border-border bg-white px-2.5 py-0.5",
				children: t
			}, t))
		}),
		data.files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-1.5 max-h-[120px] overflow-y-auto pr-1",
			children: data.files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between rounded-xl border border-border bg-white px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs font-medium",
						children: f.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] text-muted-foreground",
						children: [(f.size / 1024).toFixed(0), " KB"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => update("files", data.files.filter((_, j) => j !== i)),
					className: "text-muted-foreground hover:text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}, i))
		})
	] });
}
function StepAppointmentSchedule({ data, update }) {
	const days = (0, import_react.useMemo)(() => {
		const arr = [];
		const now = /* @__PURE__ */ new Date();
		for (let i = 1; i <= 10; i++) {
			const d = new Date(now);
			d.setDate(now.getDate() + i);
			arr.push({
				iso: d.toISOString().split("T")[0],
				label: d.toLocaleDateString("en-GB", {
					day: "2-digit",
					month: "short"
				}),
				day: d.toLocaleDateString("en-GB", { weekday: "short" })
			});
		}
		return arr;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold",
				children: "Pick your appointment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-muted-foreground",
				children: "Consultation type"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 grid gap-2 grid-cols-2",
				children: [{
					v: "video",
					t: "Video Call",
					d: "Google Meet",
					icon: Video
				}, {
					v: "inperson",
					t: "In-Person",
					d: "Faisalabad clinic",
					icon: MapPin
				}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => update("consultType", o.v),
					className: cn("flex items-start gap-2.5 rounded-xl border p-3 text-left transition cursor-pointer", data.consultType === o.v ? "border-primary bg-secondary shadow-soft" : "border-border bg-white hover:border-primary/40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-8 w-8 place-items-center rounded-lg shrink-0", data.consultType === o.v ? "bg-leaf-gradient text-primary-foreground" : "bg-secondary text-primary"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold",
						children: o.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: o.d
					})] })]
				}, o.v))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-muted-foreground",
				children: "Choose a date"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 -mx-1 flex snap-x gap-2 overflow-x-auto pb-1.5 scrollbar-thin",
				children: days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => update("date", d.iso),
					className: cn("min-w-[70px] shrink-0 snap-start rounded-xl border p-2 text-center transition cursor-pointer", data.date === d.iso ? "border-primary bg-leaf-gradient text-primary-foreground shadow-soft" : "border-border bg-white hover:border-primary/40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-[10px] font-medium", data.date === d.iso ? "opacity-90" : "text-muted-foreground"),
						children: d.day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-bold",
						children: d.label
					})]
				}, d.iso))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-muted-foreground",
				children: "Available time slots"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4 max-h-[110px] overflow-y-auto pr-1",
				children: [
					"10:00 AM",
					"11:30 AM",
					"1:00 PM",
					"3:00 PM",
					"4:30 PM",
					"6:00 PM",
					"7:30 PM"
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => update("slot", s),
					className: cn("rounded-lg border py-2 text-xs font-semibold transition cursor-pointer", data.slot === s ? "border-primary bg-secondary text-primary shadow-soft" : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"),
					children: s
				}, s))
			})] })
		]
	});
}
function StepReviewDetails({ data, bmi, age, goto }) {
	const row = (label, value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-0.5 sm:gap-2 border-b border-border py-1.5 last:border-0 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		})]
	});
	const Card = ({ title, step, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-white p-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between pb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-sm font-bold text-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => goto(step),
				className: "text-[10px] font-bold text-primary hover:underline cursor-pointer",
				children: "Edit"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-bold",
			children: "Review your details"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 max-h-[280px] overflow-y-auto pr-1.5 scrollbar-thin",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Personal",
					step: 1,
					children: [
						row("Name", data.fullName),
						row("City", data.city),
						row("Height/Weight", `${data.height || "—"} cm · ${data.weight || "—"} kg${bmi ? ` · BMI ${bmi}` : ""}`),
						row("Contact", `${data.email} · ${data.phone}`)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Medical",
					step: 5,
					children: [
						row("Conditions", data.conditions.join(", ")),
						row("Allergies", data.allergies),
						row("Medications", data.medications)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Lifestyle",
					step: 7,
					children: [row("Sleep", data.avgSleep ? `${data.avgSleep} hrs` : ""), row("Stress", `${data.stress}/10`)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Goals",
					step: 10,
					children: [row("Goals", data.goals.join(", ")), row("Timeline", data.timeline)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Appointment",
					step: 12,
					children: [
						row("Type", data.consultType === "video" ? "Video (Google Meet)" : "In-person (Faisalabad)"),
						row("Date", data.date),
						row("Time", data.slot)
					]
				})
			]
		})]
	});
}
function SuccessScreen({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero-gradient min-h-[calc(100vh-80px)] flex flex-col justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 lg:py-16 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-gradient text-primary-foreground shadow-glow animate-pulse-ring",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-4xl font-bold text-balance sm:text-5xl",
						children: [
							"You're all set, ",
							data.fullName.split(" ")[0] || "friend",
							"!"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-4 max-w-xl text-muted-foreground text-sm",
						children: [
							"Your consultation is booked. I've sent a confirmation with your Google Meet link and calendar invite to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: data.email
							}),
							"."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-[1.75rem] border border-border bg-white p-8 text-left shadow-glow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary",
										children: "Your appointment"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-display text-xl font-bold",
										children: [
											data.date,
											" · ",
											data.slot
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: data.consultType === "video" ? "Video call · Google Meet" : "In-person · Move Better Clinic, Faisalabad"
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-2 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4" }), " Google Meet link"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), " Add to calendar"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download summary"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/923001234567?text=Salam!%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(data.date + " " + data.slot)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Send me a WhatsApp reminder"]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex text-sm font-semibold text-primary hover:underline",
						children: "Back to home"
					})
				})
			]
		})
	});
}
//#endregion
export { BookPage as component };
