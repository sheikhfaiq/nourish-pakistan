import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal, t as Counter } from "./Reveal-CLB-s_EP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as HeartPulse, f as Sparkles, s as TrendingDown, u as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-stories-DvoJx8rS.js
var import_jsx_runtime = require_jsx_runtime();
var stories = [
	{
		name: "Sara A.",
		city: "Lahore",
		initials: "SA",
		before: "82 kg · low energy",
		after: "71 kg · energetic",
		body: "I lost 11 kg in 5 months without giving up roti. Dn. Minahal made it feel doable — not a punishment. My skin, sleep and mood all improved.",
		rating: 5,
		tag: "Weight Loss"
	},
	{
		name: "Bilal K.",
		city: "Karachi",
		initials: "BK",
		before: "HbA1c 8.7",
		after: "HbA1c 6.2",
		body: "My HbA1c dropped from 8.7 to 6.2 in 6 months. She understands how Pakistani households eat — no unrealistic swaps.",
		rating: 5,
		tag: "Diabetes"
	},
	{
		name: "Hina M.",
		city: "Islamabad",
		initials: "HM",
		before: "Irregular cycles, acne",
		after: "Regular cycles, clearer skin",
		body: "PCOS symptoms improved within 3 months. My cycles are regular, my skin is clearer, and I finally feel in control of my body.",
		rating: 5,
		tag: "PCOS"
	},
	{
		name: "Ayaan R.",
		city: "Rawalpindi",
		initials: "AR",
		before: "58 kg, low stamina",
		after: "66 kg lean gain",
		body: "Gained 8 kg of lean weight in 4 months without junk food. Strength in the gym doubled.",
		rating: 5,
		tag: "Weight Gain"
	},
	{
		name: "Fatima Z.",
		city: "Faisalabad",
		initials: "FZ",
		before: "Constant bloating",
		after: "Comfortable digestion",
		body: "Dn. Minahal helped me identify trigger foods for my IBS. I'm calm, comfortable and eating a wider variety of food than before.",
		rating: 5,
		tag: "Gut Health"
	},
	{
		name: "Nida S.",
		city: "Multan",
		initials: "NS",
		before: "Pregnancy nausea",
		after: "Healthy 2nd trimester",
		body: "Warm, safe nutrition support through my pregnancy. Nausea reduced and my energy came back.",
		rating: 5,
		tag: "Pregnancy"
	}
];
function SuccessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-hero-gradient",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-primary",
							children: "Success stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-bold text-balance sm:text-5xl",
							children: "Real people. Real change. Real food."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Every story below is a real Pakistani client who trusted the process — and rebuilt their relationship with food."
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
											" ",
											s.tag
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-yellow-500",
										children: Array.from({ length: s.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid grid-cols-2 gap-3 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-muted p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
											children: "Before"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold",
											children: s.before
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-primary/30 bg-secondary p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-wider text-primary",
											children: "After"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-semibold text-primary",
											children: s.after
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-5 flex-1 text-sm leading-relaxed text-foreground",
									children: [
										"\"",
										s.body,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-3 border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 place-items-center rounded-full bg-leaf-gradient text-sm font-bold text-primary-foreground",
										children: s.initials
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: s.city
									})] })]
								})
							]
						})
					}, s.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-leaf-gradient py-16 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8",
					children: [
						{
							n: 50,
							s: "+",
							l: "Clients helped",
							i: HeartPulse
						},
						{
							n: 98,
							s: "%",
							l: "Satisfaction",
							i: Star
						},
						{
							n: 3,
							s: "+",
							l: "Years experience",
							i: Sparkles
						},
						{
							n: 95,
							s: "%",
							l: "Success rate",
							i: TrendingDown
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "mx-auto h-6 w-6 opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.n,
									suffix: s.s
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm opacity-90",
								children: s.l
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-white p-10 text-center shadow-soft sm:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Your story could be next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Start with a warm consultation — no pressure, no crash diets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "mt-8 inline-flex rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5",
							children: "Book Consultation"
						})
					]
				}) })
			})
		]
	});
}
//#endregion
export { SuccessPage as component };
