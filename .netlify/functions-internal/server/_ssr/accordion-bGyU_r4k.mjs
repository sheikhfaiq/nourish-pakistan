import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_react, a as Trigger2, g as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Dumbbell, G as Activity, O as Flame, R as ChevronDown, T as HeartPulse, V as Baby, W as Apple, d as Sprout, g as Salad, h as Scale, j as Droplet, l as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accordion-bGyU_r4k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		slug: "weight-loss",
		title: "Weight Loss",
		short: "Sustainable fat loss with meals you actually enjoy.",
		duration: "45 min",
		icon: Scale,
		benefits: [
			"Personalised calorie & macro plan",
			"Homemade Pakistani meal ideas",
			"Weekly check-ins"
		],
		outcomes: [
			"Steady 2–4 kg loss per month",
			"Better energy",
			"No crash dieting"
		]
	},
	{
		slug: "weight-gain",
		title: "Weight Gain",
		short: "Healthy, muscle-friendly weight gain — not just calories.",
		duration: "45 min",
		icon: Dumbbell,
		benefits: [
			"Nutrient-dense meal plans",
			"Snack & shake strategies",
			"Strength-friendly nutrition"
		],
		outcomes: [
			"Lean weight gain",
			"Improved appetite",
			"Better stamina"
		]
	},
	{
		slug: "diabetes",
		title: "Diabetes Nutrition",
		short: "Blood-sugar friendly meals rooted in desi kitchens.",
		duration: "60 min",
		icon: Droplet,
		benefits: [
			"HbA1c-focused plans",
			"Roti & rice guidance",
			"Glycemic-load education"
		],
		outcomes: [
			"Stable sugar levels",
			"Reduced cravings",
			"Fewer sugar spikes"
		]
	},
	{
		slug: "pcos",
		title: "PCOS Nutrition",
		short: "Hormone-balancing nutrition for PCOS & irregular cycles.",
		duration: "60 min",
		icon: Sprout,
		benefits: [
			"Insulin-sensitising meals",
			"Inflammation-lowering foods",
			"Cycle-tracked plans"
		],
		outcomes: [
			"Regular cycles",
			"Better skin & mood",
			"Healthy weight"
		]
	},
	{
		slug: "thyroid",
		title: "Thyroid Support",
		short: "Gentle nutrition for hypo & hyperthyroid conditions.",
		duration: "45 min",
		icon: Sun,
		benefits: [
			"Iodine & selenium focus",
			"Gut-thyroid axis care",
			"Energy-boosting meals"
		],
		outcomes: [
			"More energy",
			"Balanced weight",
			"Better sleep"
		]
	},
	{
		slug: "pregnancy",
		title: "Pregnancy Nutrition",
		short: "Warm, safe nutrition for every trimester.",
		duration: "60 min",
		icon: HeartPulse,
		benefits: [
			"Trimester-wise plans",
			"Iron, folate & calcium focus",
			"Nausea-friendly meals"
		],
		outcomes: [
			"Healthy pregnancy",
			"Comfortable digestion",
			"Baby's optimal growth"
		]
	},
	{
		slug: "child",
		title: "Child Nutrition",
		short: "Fussy eaters? We build joyful, balanced habits.",
		duration: "45 min",
		icon: Baby,
		benefits: [
			"Age-appropriate meals",
			"Lunchbox ideas",
			"Growth tracking"
		],
		outcomes: [
			"Better appetite",
			"Balanced growth",
			"Fewer picky-eater battles"
		]
	},
	{
		slug: "sports",
		title: "Sports Nutrition",
		short: "Fuel your training, recovery & performance.",
		duration: "60 min",
		icon: Activity,
		benefits: [
			"Pre/post-workout meals",
			"Hydration & electrolytes",
			"Body-composition plans"
		],
		outcomes: [
			"Stronger performance",
			"Faster recovery",
			"Lean muscle"
		]
	},
	{
		slug: "gut-health",
		title: "Gut Health",
		short: "Calm bloating, IBS & digestion issues naturally.",
		duration: "45 min",
		icon: Salad,
		benefits: [
			"Low-FODMAP guidance",
			"Prebiotic & probiotic focus",
			"Trigger-food mapping"
		],
		outcomes: [
			"Less bloating",
			"Regular digestion",
			"Better mood & skin"
		]
	},
	{
		slug: "heart",
		title: "Heart Health",
		short: "Nutrition for cholesterol, BP & long-term heart care.",
		duration: "45 min",
		icon: Flame,
		benefits: [
			"DASH-inspired meals",
			"Healthy fats focus",
			"Sodium-smart cooking"
		],
		outcomes: [
			"Better cholesterol",
			"Healthier BP",
			"More vitality"
		]
	},
	{
		slug: "lifestyle",
		title: "Healthy Lifestyle Coaching",
		short: "Habits, mindset & routines for lifelong wellness.",
		duration: "45 min",
		icon: Apple,
		benefits: [
			"Habit-stacking plans",
			"Sleep & stress support",
			"Family-friendly guidance"
		],
		outcomes: [
			"Consistent routines",
			"Balanced energy",
			"Whole-family wellness"
		]
	}
];
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
//#endregion
export { SERVICES as a, AccordionTrigger as i, AccordionContent as n, AccordionItem as r, Accordion as t };
