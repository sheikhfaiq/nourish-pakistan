import { Apple, Baby, Activity, HeartPulse, Salad, Dumbbell, Sprout, Droplet, Flame, Scale, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  duration: string;
  icon: LucideIcon;
  benefits: string[];
  outcomes: string[];
};

export const SERVICES: Service[] = [
  { slug: "weight-loss", title: "Weight Loss", short: "Sustainable fat loss with meals you actually enjoy.", duration: "45 min", icon: Scale,
    benefits: ["Personalised calorie & macro plan", "Homemade Pakistani meal ideas", "Weekly check-ins"], outcomes: ["Steady 2–4 kg loss per month", "Better energy", "No crash dieting"] },
  { slug: "weight-gain", title: "Weight Gain", short: "Healthy, muscle-friendly weight gain — not just calories.", duration: "45 min", icon: Dumbbell,
    benefits: ["Nutrient-dense meal plans", "Snack & shake strategies", "Strength-friendly nutrition"], outcomes: ["Lean weight gain", "Improved appetite", "Better stamina"] },
  { slug: "diabetes", title: "Diabetes Nutrition", short: "Blood-sugar friendly meals rooted in desi kitchens.", duration: "60 min", icon: Droplet,
    benefits: ["HbA1c-focused plans", "Roti & rice guidance", "Glycemic-load education"], outcomes: ["Stable sugar levels", "Reduced cravings", "Fewer sugar spikes"] },
  { slug: "pcos", title: "PCOS Nutrition", short: "Hormone-balancing nutrition for PCOS & irregular cycles.", duration: "60 min", icon: Sprout,
    benefits: ["Insulin-sensitising meals", "Inflammation-lowering foods", "Cycle-tracked plans"], outcomes: ["Regular cycles", "Better skin & mood", "Healthy weight"] },
  { slug: "thyroid", title: "Thyroid Support", short: "Gentle nutrition for hypo & hyperthyroid conditions.", duration: "45 min", icon: Sun,
    benefits: ["Iodine & selenium focus", "Gut-thyroid axis care", "Energy-boosting meals"], outcomes: ["More energy", "Balanced weight", "Better sleep"] },
  { slug: "pregnancy", title: "Pregnancy Nutrition", short: "Warm, safe nutrition for every trimester.", duration: "60 min", icon: HeartPulse,
    benefits: ["Trimester-wise plans", "Iron, folate & calcium focus", "Nausea-friendly meals"], outcomes: ["Healthy pregnancy", "Comfortable digestion", "Baby's optimal growth"] },
  { slug: "child", title: "Child Nutrition", short: "Fussy eaters? We build joyful, balanced habits.", duration: "45 min", icon: Baby,
    benefits: ["Age-appropriate meals", "Lunchbox ideas", "Growth tracking"], outcomes: ["Better appetite", "Balanced growth", "Fewer picky-eater battles"] },
  { slug: "sports", title: "Sports Nutrition", short: "Fuel your training, recovery & performance.", duration: "60 min", icon: Activity,
    benefits: ["Pre/post-workout meals", "Hydration & electrolytes", "Body-composition plans"], outcomes: ["Stronger performance", "Faster recovery", "Lean muscle"] },
  { slug: "gut-health", title: "Gut Health", short: "Calm bloating, IBS & digestion issues naturally.", duration: "45 min", icon: Salad,
    benefits: ["Low-FODMAP guidance", "Prebiotic & probiotic focus", "Trigger-food mapping"], outcomes: ["Less bloating", "Regular digestion", "Better mood & skin"] },
  { slug: "heart", title: "Heart Health", short: "Nutrition for cholesterol, BP & long-term heart care.", duration: "45 min", icon: Flame,
    benefits: ["DASH-inspired meals", "Healthy fats focus", "Sodium-smart cooking"], outcomes: ["Better cholesterol", "Healthier BP", "More vitality"] },
  { slug: "lifestyle", title: "Healthy Lifestyle Coaching", short: "Habits, mindset & routines for lifelong wellness.", duration: "45 min", icon: Apple,
    benefits: ["Habit-stacking plans", "Sleep & stress support", "Family-friendly guidance"], outcomes: ["Consistent routines", "Balanced energy", "Whole-family wellness"] },
];
