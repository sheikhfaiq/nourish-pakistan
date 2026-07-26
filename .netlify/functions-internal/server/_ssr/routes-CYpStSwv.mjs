import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal, t as Counter } from "./Reveal-CLB-s_EP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Calendar, F as CircleAlert, N as Clock, O as Flame, P as CircleCheck, T as HeartPulse, U as ArrowRight, a as Users, f as Sparkles, h as Scale, i as UtensilsCrossed, p as ShieldCheck, u as Star, w as Info, z as Check } from "../_libs/lucide-react.mjs";
import { a as SERVICES, i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-bGyU_r4k.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CYpStSwv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var hero_nutritionist_default = "/assets/hero-nutritionist-MGAqb5-1.jpg";
var foodSwaps = [
	{
		id: "breakfast",
		name: "🍳 Desi Breakfast",
		original: {
			title: "Traditional Breakfast",
			details: [
				"2 Oily Parathas",
				"2 Eggs fried in ghee",
				"1 Cup Sweet Chai (2 tsp sugar)"
			],
			calories: "~850 kcal",
			cons: "Heavy in trans fats, quick blood sugar spike & energy crash."
		},
		swapped: {
			title: "Smart Desi Swap",
			details: [
				"1 Multi-grain Paratha (1 tsp olive oil)",
				"2 Scrambled Eggs (whites + 1 whole)",
				"1 Cup Chai (Stevia or 1/2 tsp honey)"
			],
			calories: "~420 kcal",
			pros: "Rich in fiber and protein, sustains energy for 4+ hours."
		},
		benefit: "Saves ~430 calories & avoids sluggish morning fatigue!"
	},
	{
		id: "biryani",
		name: "🍛 Lunch / Dinner",
		original: {
			title: "Oily Beef Biryani",
			details: [
				"Large plate of greasy Biryani",
				"No salad",
				"1 Can of regular Soda"
			],
			calories: "~980 kcal",
			cons: "High glycemic index, excess oil, empty sugar calories."
		},
		swapped: {
			title: "Smart Biryani Swap",
			details: [
				"1 Cup Basmati Rice + Lean Chicken",
				"Large bowl of Kachumar Salad",
				"Mint Raita + Cold Lemon Water"
			],
			calories: "~510 kcal",
			pros: "Adds high-quality protein, fiber, and controls starch portion."
		},
		benefit: "Saves ~470 calories while keeping your favorite Biryani flavor!"
	},
	{
		id: "snack",
		name: "☕ Evening Snack",
		original: {
			title: "Chai & Samosa",
			details: ["2 Deep-fried Samosas / Pakoras", "1 Cup Tea with full-fat milk & sugar"],
			calories: "~620 kcal",
			cons: "Fried in reused oil (high inflammatory risk), refined carbs."
		},
		swapped: {
			title: "Smart Tea-Time Swap",
			details: [
				"1 Handful Roasted Black Chana",
				"1 Apple or 8 Almonds",
				"1 Cup Chai (skimmed milk, Stevia)"
			],
			calories: "~240 kcal",
			pros: "High fiber, heart-healthy fats, zero inflammatory oils."
		},
		benefit: "Saves ~380 calories and curbs late-night junk cravings!"
	}
];
var portionGoals = [
	{
		id: "weight-loss",
		name: "⚖️ Weight Loss & PCOS",
		desc: "Designed to balance hormones and reduce body fat sustainably.",
		carbs: "1.5 Small Rotis or 1 Cup Cooked Rice (Complex Carbs)",
		carbsPercent: 30,
		protein: "2 Palm-sized portions (Chicken, Fish, Eggs, Daal)",
		proteinPercent: 40,
		veggies: "Unlimited raw/steamed salad (Cucumber, Spinach)",
		veggiesPercent: 80,
		fats: "2-3 Teaspoons of cold-pressed oil + 6 almonds",
		fatsPercent: 20,
		tip: "PCOS needs low glycemic index carbs. Never skip protein; it curbs sweet cravings."
	},
	{
		id: "diabetes",
		name: "🩸 Blood Sugar Control",
		desc: "Aims to prevent insulin spikes and manage HbA1c levels.",
		carbs: "1 Roti (Barley/Oat mix) or 3/4 Cup Brown Basmati",
		carbsPercent: 25,
		protein: "2.5 Palm-sized portions of lean proteins & legumes",
		proteinPercent: 45,
		veggies: "Large bowl of non-starchy green vegetables",
		veggiesPercent: 85,
		fats: "2 tsp Olive/Canola oil + 2 Walnuts (omega-3s)",
		fatsPercent: 25,
		tip: "Always eat veggies and proteins FIRST, and carbs last. This slows down sugar absorption."
	},
	{
		id: "active",
		name: "⚡ Active & Family Health",
		desc: "For general energy, muscle support, and family nutrition.",
		carbs: "2 Rotis or 1.5 Cups Cooked Rice (Whole grains)",
		carbsPercent: 45,
		protein: "2 Palm-sized portions of fresh chicken, meat, or lentils",
		proteinPercent: 35,
		veggies: "1.5 Cups of seasonal colorful sabzi or salad",
		veggiesPercent: 60,
		fats: "3 tsp oil in cooking + mixed raw nuts",
		fatsPercent: 30,
		tip: "Make your family plates colorful. More color means a wider range of essential vitamins."
	}
];
function HeroInteractiveWidget() {
	const [activeSwap, setActiveSwap] = (0, import_react.useState)("breakfast");
	const [activeGoal, setActiveGoal] = (0, import_react.useState)("weight-loss");
	const [swapApplied, setSwapApplied] = (0, import_react.useState)(false);
	const [mobileSwapTab, setMobileSwapTab] = (0, import_react.useState)("before");
	const selectedSwap = foodSwaps.find((s) => s.id === activeSwap) || foodSwaps[0];
	const selectedGoal = portionGoals.find((g) => g.id === activeGoal) || portionGoals[0];
	const handleSwapChange = (id) => {
		setActiveSwap(id);
		setSwapApplied(false);
		setMobileSwapTab("before");
	};
	const handleApplySwap = () => {
		setSwapApplied(true);
		setMobileSwapTab("after");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto w-full max-w-lg lg:max-w-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[2.5rem] bg-leaf-gradient opacity-20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-glow backdrop-blur-sm sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "meet",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "grid w-full grid-cols-3 gap-1 rounded-xl bg-muted/80 p-1 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "meet",
								className: "py-2 text-xs sm:text-sm font-semibold rounded-lg",
								children: "Meet Dn. Minahal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "swap",
								className: "py-2 text-xs sm:text-sm font-semibold rounded-lg",
								children: "Food Swaps"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "portions",
								className: "py-2 text-xs sm:text-sm font-semibold rounded-lg",
								children: "Portion Guide"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "meet",
						className: "mt-0 focus-visible:ring-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.5rem] bg-muted/30 border border-muted/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_nutritionist_default,
									alt: "Certified Pakistani dietitian Dn. Minahal Farrukh",
									width: 600,
									height: 600,
									className: "h-[280px] sm:h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-relaxed italic text-white/90",
										children: "\"Guiding real Pakistani families to healthy living, without sacrificing their favorite desi meals.\""
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 top-4 animate-float rounded-2xl border border-white/20 bg-white/90 p-2.5 shadow-soft backdrop-blur hover:scale-105 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-none font-semibold",
											children: "Experience"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm font-bold text-foreground",
											children: "3+ Years"
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-4 top-16 animate-float-slower rounded-2xl border border-white/20 bg-white/90 p-2.5 shadow-soft backdrop-blur hover:scale-105 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground leading-none font-semibold",
											children: "Happy Clients"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm font-bold text-foreground",
											children: "50+"
										})] })]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between gap-4 px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Clinical Nutritionist & Dietitian"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display font-bold text-foreground",
								children: "Dn. Minahal Farrukh"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
								children: ["Read Bio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "swap",
						className: "mt-0 focus-visible:ring-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display font-bold text-lg text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "h-5 w-5 text-primary" }), " Interactive Desi Food Swap"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Choose a meal below to see how minor swaps cut major calories without losing taste."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2",
									children: foodSwaps.map((swap) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleSwapChange(swap.id),
										className: `flex-1 py-2 px-1 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${activeSwap === swap.id ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-muted/40 hover:bg-muted text-muted-foreground border-transparent"}`,
										children: swap.name
									}, swap.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-destructive/20 bg-destructive/[0.02] p-4 flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-destructive uppercase tracking-wider",
													children: "Before"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }),
														" ",
														selectedSwap.original.calories
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display font-semibold text-sm mt-2 text-foreground",
												children: selectedSwap.original.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside",
												children: selectedSwap.original.details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, i))
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-destructive/10 text-[11px] text-destructive/90 flex gap-1 items-start leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedSwap.original.cons })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-xl border transition-all duration-300 p-4 flex flex-col justify-between ${swapApplied ? "border-emerald-500 bg-emerald-50/50 shadow-soft" : "border-primary/20 bg-primary/[0.02]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-primary uppercase tracking-wider",
													children: "After Swap"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }),
														" ",
														selectedSwap.swapped.calories
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display font-semibold text-sm mt-2 text-foreground",
												children: selectedSwap.swapped.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside",
												children: selectedSwap.swapped.details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, i))
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-primary/10 text-[11px] text-primary flex gap-1 items-start leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedSwap.swapped.pros })]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "block sm:hidden space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex rounded-xl bg-muted p-1 border border-border/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setMobileSwapTab("before"),
											className: `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${mobileSwapTab === "before" ? "bg-white text-destructive shadow-sm" : "text-muted-foreground"}`,
											children: "Traditional (Before)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setMobileSwapTab("after"),
											className: `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${mobileSwapTab === "after" ? "bg-white text-primary shadow-sm" : "text-muted-foreground"}`,
											children: "Smart Swap (After)"
										})]
									}), mobileSwapTab === "before" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-destructive/20 bg-destructive/[0.02] p-4 flex flex-col justify-between min-h-[180px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-destructive uppercase tracking-wider",
													children: "Before Swap"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }),
														" ",
														selectedSwap.original.calories
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display font-semibold text-sm mt-2 text-foreground",
												children: selectedSwap.original.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside",
												children: selectedSwap.original.details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, i))
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-destructive/10 text-[11px] text-destructive/90 flex gap-1 items-start leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedSwap.original.cons })]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-xl border transition-all duration-300 p-4 flex flex-col justify-between min-h-[180px] ${swapApplied ? "border-emerald-500 bg-emerald-50/50 shadow-soft" : "border-primary/20 bg-primary/[0.02]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-primary uppercase tracking-wider",
													children: "After Swap"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }),
														" ",
														selectedSwap.swapped.calories
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display font-semibold text-sm mt-2 text-foreground",
												children: selectedSwap.swapped.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside",
												children: selectedSwap.swapped.details.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, i))
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-primary/10 text-[11px] text-primary flex gap-1 items-start leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedSwap.swapped.pros })]
										})]
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-secondary/60 p-3.5 text-center flex flex-col sm:flex-row items-center justify-between gap-3 border border-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-bold text-primary flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Healthy Result"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-0.5 font-medium leading-tight",
											children: selectedSwap.benefit
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleApplySwap,
										className: `w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg shadow-soft transition-all cursor-pointer ${swapApplied ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-primary hover:bg-primary/95 text-primary-foreground"}`,
										children: swapApplied ? "✓ Swap Applied!" : "Apply Swap"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "portions",
						className: "mt-0 focus-visible:ring-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display font-bold text-lg text-foreground flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "h-5 w-5 text-primary" }), " Interactive Portion Planner"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Select a clinical target to view daily portion recommendations for Pakistani diets."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col sm:flex-row gap-1.5",
									children: portionGoals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveGoal(goal.id),
										className: `flex-1 py-2 px-2 text-xs font-semibold rounded-xl border transition-all text-left cursor-pointer ${activeGoal === goal.id ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-muted/40 hover:bg-muted text-muted-foreground border-transparent"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold leading-none",
											children: [
												goal.name.split(" ")[0],
												" ",
												goal.name.split(" ").slice(1).join(" ")
											]
										})
									}, goal.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-muted/10 p-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold text-muted-foreground leading-none mb-1",
											children: selectedGoal.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-amber-800",
														children: "🌾 Carbohydrates"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground font-medium",
														children: "Portion Limit"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 w-full bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-amber-500 rounded-full transition-all duration-500",
														style: { width: `${selectedGoal.carbsPercent}%` }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: selectedGoal.carbs
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-indigo-800",
														children: "🍗 Proteins & Daal"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground font-medium",
														children: "Target Portion"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 w-full bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-indigo-500 rounded-full transition-all duration-500",
														style: { width: `${selectedGoal.proteinPercent}%` }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: selectedGoal.protein
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-emerald-800",
														children: "🥗 Vegetables & Greens"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground font-medium",
														children: "Recommended Volume"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 w-full bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-emerald-500 rounded-full transition-all duration-500",
														style: { width: `${selectedGoal.veggiesPercent}%` }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: selectedGoal.veggies
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-amber-700",
														children: "🥑 Healthy Fats"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground font-medium",
														children: "Moderate Cooking Oil"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-2 w-full bg-muted rounded-full overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-amber-600 rounded-full transition-all duration-500",
														style: { width: `${selectedGoal.fatsPercent}%` }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: selectedGoal.fats
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-primary/10 bg-primary/[0.02] p-3 flex gap-2 items-start leading-snug",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 shrink-0 text-primary mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-primary block leading-none",
										children: "Minahal's Nutrition Tip"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground mt-1 block",
										children: selectedGoal.tip
									})] })]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 pt-4 border-t border-border flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Consultation via Google Meet" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book",
					className: "inline-flex items-center gap-1.5 rounded-full bg-leaf-gradient px-4 py-2 text-xs font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
					children: ["Get Custom Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})]
		})]
	});
}
var healthy_meal_default = "/assets/healthy-meal-BMcGdXYr.jpg";
var whyChoose = [
	{
		icon: ShieldCheck,
		title: "Certified & Evidence-Based",
		text: "Registered dietitian with 3+ years guiding real Pakistani families."
	},
	{
		icon: HeartPulse,
		title: "Rooted in Desi Food",
		text: "Plans built around roti, daal, sabzi and your everyday kitchen."
	},
	{
		icon: Clock,
		title: "Truly Personalised",
		text: "No copy-paste plans. Every consultation is built around you."
	},
	{
		icon: Users,
		title: "For the Whole Family",
		text: "From kids to elders, we care for every stage of life."
	}
];
var process = [
	{
		step: "01",
		title: "Book & Assess",
		text: "Fill a friendly health assessment so we understand you fully before we meet."
	},
	{
		step: "02",
		title: "Video Consultation",
		text: "A warm 45–60 min Google Meet — we discuss goals, habits and reports."
	},
	{
		step: "03",
		title: "Personalised Plan",
		text: "You receive a custom Pakistani meal plan within 48 hours."
	},
	{
		step: "04",
		title: "Follow-Up & Support",
		text: "Weekly check-ins over WhatsApp so you actually see results."
	}
];
var testimonials = [
	{
		name: "Sara A.",
		city: "Lahore",
		text: "I lost 11 kg in 5 months without giving up roti. Dn. Minahal made it feel doable — not a punishment.",
		rating: 5
	},
	{
		name: "Bilal K.",
		city: "Karachi",
		text: "My HbA1c dropped from 8.7 to 6.2. She actually understands how Pakistani households eat.",
		rating: 5
	},
	{
		name: "Hina M.",
		city: "Islamabad",
		text: "PCOS symptoms improved within 3 months. My cycles are regular and my skin is clearer.",
		rating: 5
	}
];
var faqs = [
	{
		q: "Are consultations online or in-person?",
		a: "Consultations happen online over Google Meet, so you can join from anywhere in Pakistan or overseas. In-person visits are available at Move Better Clinic, East Canal Road, Faisalabad, by appointment."
	},
	{
		q: "What happens after I book?",
		a: "You'll receive a Google Meet link and calendar invite. Complete a short health assessment before the call so we can spend our time solving your specific concerns."
	},
	{
		q: "Do I need to send my medical reports?",
		a: "If you have recent blood work (CBC, HbA1c, thyroid, vitamin D, lipid profile), please upload them during booking. It helps us build a safer, sharper plan."
	},
	{
		q: "How long until I see results?",
		a: "Most clients feel more energetic within 2 weeks and see visible changes in 4–6 weeks with consistent follow-through."
	},
	{
		q: "Is the diet plan very restrictive?",
		a: "Not at all. Plans are built around desi food you already eat — with smart swaps, portioning and timing. Occasional treats are always accommodated."
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-hero-gradient",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance",
									children: [
										"Nutrition that fits your ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "real life"
										}),
										", not a spreadsheet."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 160,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg",
									children: "Personalised online consultations for weight loss, diabetes, PCOS, pregnancy and family nutrition — rooted in the Pakistani foods you already love."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 240,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/book",
										className: "group inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 animate-pulse-glow",
										children: ["Book Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary",
										children: "Explore Services"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 340,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-yellow-500 text-yellow-500" }), " 4.9 / 5 from 50+ clients"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " 3+ years of experience"]
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							className: "relative mx-auto max-w-md lg:max-w-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroInteractiveWidget, {})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Why choose me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Warm, honest care — with real accountability."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4",
					children: whyChoose.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group h-full flex flex-col items-center text-center rounded-2xl border border-border bg-white p-4 sm:p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 sm:mt-5 font-display text-sm sm:text-lg font-semibold",
									children: w.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-normal",
									children: w.text
								})
							]
						})
					}, w.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-wider text-primary",
								children: "Featured services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
								children: "Nutrition care for every stage & goal"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
							children: ["View all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3",
						children: SERVICES.slice(0, 6).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "group flex flex-col items-center text-center h-full rounded-2xl border border-border bg-white p-4 sm:p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-12 w-12 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 sm:mt-5 font-display text-sm sm:text-lg font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-normal",
										children: s.short
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 sm:mt-5 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						}, s.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-[2rem] shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: healthy_meal_default,
							alt: "Healthy Pakistani meal plate",
							width: 1280,
							height: 960,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "A simple, warm 4-step journey"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-5",
						children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:border-primary/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary font-display text-lg font-bold text-primary",
									children: p.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: p.text
									})]
								})]
							})
						}, p.step))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-leaf-gradient py-16 text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8",
					children: [
						{
							n: 50,
							s: "+",
							l: "Clients guided"
						},
						{
							n: 98,
							s: "%",
							l: "Satisfaction rate"
						},
						{
							n: 3,
							s: "+",
							l: "Years experience"
						},
						{
							n: 5,
							s: "+",
							l: "Pakistani cities"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 80,
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-bold sm:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.s
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm opacity-90",
							children: s.l
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Client love"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Real journeys. Real results."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex overflow-x-auto gap-5 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth",
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						className: "snap-start shrink-0 w-[290px] sm:w-[360px] h-auto flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:shadow-glow flex flex-col justify-between flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-yellow-500",
								children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 text-sm leading-relaxed text-foreground",
								children: [
									"\"",
									t.text,
									"\""
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-leaf-gradient font-display text-sm font-bold text-primary-foreground",
									children: t.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.city
								})] })]
							})]
						})
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-primary",
							children: "FAQs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
							children: "Everything you were wondering"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "space-y-3",
							children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `i-${i}`,
								className: "overflow-hidden rounded-2xl border border-border bg-white px-5 shadow-soft data-[state=open]:border-primary/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "py-5 text-left font-display text-base font-semibold hover:no-underline",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "pb-5 text-sm text-muted-foreground",
									children: f.a
								})]
							}, i))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-leaf-gradient p-10 text-primary-foreground shadow-glow sm:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold text-balance sm:text-4xl",
								children: "Ready to feel better in your body?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 opacity-90",
								children: "Book a warm 45-minute video consultation. Walk out with clarity, a plan and real support."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/book",
									className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5",
									children: ["Book Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Ask a question"]
								})]
							})
						]
					})]
				}) })
			})
		]
	});
}
//#endregion
export { HomePage as component };
