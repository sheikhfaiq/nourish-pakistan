import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  HeartPulse, 
  Users, 
  ArrowRight, 
  UtensilsCrossed, 
  Flame, 
  Scale, 
  Check, 
  AlertCircle, 
  Sparkles,
  Info,
  Calendar
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImg from "@/assets/hero-nutritionist.jpg";

interface SwapItem {
  id: string;
  name: string;
  original: {
    title: string;
    details: string[];
    calories: string;
    cons: string;
  };
  swapped: {
    title: string;
    details: string[];
    calories: string;
    pros: string;
  };
  benefit: string;
}

const foodSwaps: SwapItem[] = [
  {
    id: "breakfast",
    name: "🍳 Desi Breakfast",
    original: {
      title: "Traditional Breakfast",
      details: ["2 Oily Parathas", "2 Eggs fried in ghee", "1 Cup Sweet Chai (2 tsp sugar)"],
      calories: "~850 kcal",
      cons: "Heavy in trans fats, quick blood sugar spike & energy crash."
    },
    swapped: {
      title: "Smart Desi Swap",
      details: ["1 Multi-grain Paratha (1 tsp olive oil)", "2 Scrambled Eggs (whites + 1 whole)", "1 Cup Chai (Stevia or 1/2 tsp honey)"],
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
      details: ["Large plate of greasy Biryani", "No salad", "1 Can of regular Soda"],
      calories: "~980 kcal",
      cons: "High glycemic index, excess oil, empty sugar calories."
    },
    swapped: {
      title: "Smart Biryani Swap",
      details: ["1 Cup Basmati Rice + Lean Chicken", "Large bowl of Kachumar Salad", "Mint Raita + Cold Lemon Water"],
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
      details: ["1 Handful Roasted Black Chana", "1 Apple or 8 Almonds", "1 Cup Chai (skimmed milk, Stevia)"],
      calories: "~240 kcal",
      pros: "High fiber, heart-healthy fats, zero inflammatory oils."
    },
    benefit: "Saves ~380 calories and curbs late-night junk cravings!"
  }
];

interface PortionGoal {
  id: string;
  name: string;
  desc: string;
  carbs: string;
  carbsPercent: number;
  protein: string;
  proteinPercent: number;
  veggies: string;
  veggiesPercent: number;
  fats: string;
  fatsPercent: number;
  tip: string;
}

const portionGoals: PortionGoal[] = [
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

export function HeroInteractiveWidget() {
  const [activeSwap, setActiveSwap] = useState<string>("breakfast");
  const [activeGoal, setActiveGoal] = useState<string>("weight-loss");
  const [swapApplied, setSwapApplied] = useState<boolean>(false);
  const [mobileSwapTab, setMobileSwapTab] = useState<"before" | "after">("before");

  const selectedSwap = foodSwaps.find(s => s.id === activeSwap) || foodSwaps[0];
  const selectedGoal = portionGoals.find(g => g.id === activeGoal) || portionGoals[0];

  const handleSwapChange = (id: string) => {
    setActiveSwap(id);
    setSwapApplied(false);
    setMobileSwapTab("before");
  };

  const handleApplySwap = () => {
    setSwapApplied(true);
    setMobileSwapTab("after");
  };

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Background soft glow decoration */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-leaf-gradient opacity-20 blur-3xl" />

      {/* Main card wrapper */}
      <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 p-4 shadow-glow backdrop-blur-sm sm:p-6">
        <Tabs defaultValue="meet" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-1 rounded-xl bg-muted/80 p-1 mb-6">
            <TabsTrigger value="meet" className="py-2 px-1 sm:px-3 text-[10px] min-[375px]:text-xs sm:text-sm font-semibold rounded-lg">
              <span className="hidden min-[380px]:inline">Meet </span>Dn. Minahal
            </TabsTrigger>
            <TabsTrigger value="swap" className="py-2 px-1 sm:px-3 text-[10px] min-[375px]:text-xs sm:text-sm font-semibold rounded-lg">
              Food Swaps
            </TabsTrigger>
            <TabsTrigger value="portions" className="py-2 px-1 sm:px-3 text-[10px] min-[375px]:text-xs sm:text-sm font-semibold rounded-lg">
              Portion Guide
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: MEET DN. MINHAL */}
          <TabsContent value="meet" className="mt-0 focus-visible:ring-0">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-muted/30 border border-muted/50">
              <img 
                src={heroImg} 
                alt="Certified Pakistani dietitian Dn. Minahal Farrukh" 
                width={600} 
                height={600} 
                className="h-[280px] sm:h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105" 
              />
              
              {/* Overlay statement */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <p className="text-sm font-medium leading-relaxed italic text-white/90">
                  "Guiding real Pakistani families to healthy living, without sacrificing their favorite desi meals."
                </p>
              </div>

              {/* Floating Badge 1 - Experience */}
              <div className="absolute left-4 top-4 animate-float rounded-2xl border border-white/20 bg-white/90 p-2.5 shadow-soft backdrop-blur hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary">
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-none font-semibold">Experience</p>
                    <p className="font-display text-sm font-bold text-foreground">3+ Years</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Clients */}
              <div className="absolute right-4 top-16 animate-float-slower rounded-2xl border border-white/20 bg-white/90 p-2.5 shadow-soft backdrop-blur hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-none font-semibold">Happy Clients</p>
                    <p className="font-display text-sm font-bold text-foreground">50+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs text-muted-foreground">Clinical Nutritionist & Dietitian</p>
                <h4 className="font-display font-bold text-foreground">Dn. Minahal Farrukh</h4>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Read Bio <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </TabsContent>

          {/* TAB 2: FOOD SWAPS */}
          <TabsContent value="swap" className="mt-0 focus-visible:ring-0">
            <div className="space-y-4">
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-1.5">
                  <UtensilsCrossed className="h-5 w-5 text-primary" /> Interactive Desi Food Swap
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Choose a meal below to see how minor swaps cut major calories without losing taste.
                </p>
              </div>

              {/* Selector buttons */}
              <div className="flex gap-2">
                {foodSwaps.map((swap) => (
                  <button
                    key={swap.id}
                    onClick={() => handleSwapChange(swap.id)}
                    className={`flex-1 py-2 px-1 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      activeSwap === swap.id
                        ? "bg-primary text-primary-foreground border-primary shadow-soft"
                        : "bg-muted/40 hover:bg-muted text-muted-foreground border-transparent"
                    }`}
                  >
                    {swap.name}
                  </button>
                ))}
              </div>

              {/* Swap Panels */}
              <div>
                {/* Desktop View: Side-by-Side Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-3">
                  {/* Traditional */}
                  <div className="rounded-xl border border-destructive/20 bg-destructive/[0.02] p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-destructive uppercase tracking-wider">Before</span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">
                          <Flame className="h-3 w-3" /> {selectedSwap.original.calories}
                        </span>
                      </div>
                      <h4 className="font-display font-semibold text-sm mt-2 text-foreground">
                        {selectedSwap.original.title}
                      </h4>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                        {selectedSwap.original.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-destructive/10 text-[11px] text-destructive/90 flex gap-1 items-start leading-snug">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      <span>{selectedSwap.original.cons}</span>
                    </div>
                  </div>

                  {/* Swapped */}
                  <div className={`rounded-xl border transition-all duration-300 p-4 flex flex-col justify-between ${
                    swapApplied 
                      ? "border-emerald-500 bg-emerald-50/50 shadow-soft" 
                      : "border-primary/20 bg-primary/[0.02]"
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">After Swap</span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          <Flame className="h-3 w-3" /> {selectedSwap.swapped.calories}
                        </span>
                      </div>
                      <h4 className="font-display font-semibold text-sm mt-2 text-foreground">
                        {selectedSwap.swapped.title}
                      </h4>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                        {selectedSwap.swapped.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-primary/10 text-[11px] text-primary flex gap-1 items-start leading-snug">
                      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                      <span>{selectedSwap.swapped.pros}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile View: Toggle Layout */}
                <div className="block sm:hidden space-y-3">
                  {/* Toggle Selector */}
                  <div className="flex rounded-xl bg-muted p-1 border border-border/20">
                    <button
                      onClick={() => setMobileSwapTab("before")}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        mobileSwapTab === "before"
                          ? "bg-white text-destructive shadow-sm"
                          : "text-muted-foreground"
                      }`}
                    >
                      Traditional (Before)
                    </button>
                    <button
                      onClick={() => setMobileSwapTab("after")}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        mobileSwapTab === "after"
                          ? "bg-white text-primary shadow-sm"
                          : "text-muted-foreground"
                      }`}
                    >
                      Smart Swap (After)
                    </button>
                  </div>

                  {/* Render single card based on active state */}
                  {mobileSwapTab === "before" ? (
                    <div className="rounded-xl border border-destructive/20 bg-destructive/[0.02] p-4 flex flex-col justify-between min-h-[180px]">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-destructive uppercase tracking-wider">Before Swap</span>
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">
                            <Flame className="h-3 w-3" /> {selectedSwap.original.calories}
                          </span>
                        </div>
                        <h4 className="font-display font-semibold text-sm mt-2 text-foreground">
                          {selectedSwap.original.title}
                        </h4>
                        <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                          {selectedSwap.original.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 pt-3 border-t border-destructive/10 text-[11px] text-destructive/90 flex gap-1 items-start leading-snug">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                        <span>{selectedSwap.original.cons}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`rounded-xl border transition-all duration-300 p-4 flex flex-col justify-between min-h-[180px] ${
                      swapApplied 
                        ? "border-emerald-500 bg-emerald-50/50 shadow-soft" 
                        : "border-primary/20 bg-primary/[0.02]"
                    }`}>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">After Swap</span>
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                            <Flame className="h-3 w-3" /> {selectedSwap.swapped.calories}
                          </span>
                        </div>
                        <h4 className="font-display font-semibold text-sm mt-2 text-foreground">
                          {selectedSwap.swapped.title}
                        </h4>
                        <ul className="mt-2 space-y-1 text-xs text-muted-foreground list-disc list-inside">
                          {selectedSwap.swapped.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 pt-3 border-t border-primary/10 text-[11px] text-primary flex gap-1 items-start leading-snug">
                        <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                        <span>{selectedSwap.swapped.pros}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA / applied state */}
              <div className="rounded-xl bg-secondary/60 p-3.5 text-center flex flex-col sm:flex-row items-center justify-between gap-3 border border-secondary">
                <div className="text-left">
                  <p className="text-xs font-bold text-primary flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" /> Healthy Result
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium leading-tight">
                    {selectedSwap.benefit}
                  </p>
                </div>
                <button
                  onClick={handleApplySwap}
                  className={`w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg shadow-soft transition-all cursor-pointer ${
                    swapApplied
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-primary hover:bg-primary/95 text-primary-foreground"
                  }`}
                >
                  {swapApplied ? "✓ Swap Applied!" : "Apply Swap"}
                </button>
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: PORTION CALCULATOR */}
          <TabsContent value="portions" className="mt-0 focus-visible:ring-0">
            <div className="space-y-4">
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-1.5">
                  <Scale className="h-5 w-5 text-primary" /> Interactive Portion Planner
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Select a clinical target to view daily portion recommendations for Pakistani diets.
                </p>
              </div>

              {/* Selector buttons */}
              <div className="flex flex-col sm:flex-row gap-1.5">
                {portionGoals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setActiveGoal(goal.id)}
                    className={`flex-1 py-2 px-2 text-xs font-semibold rounded-xl border transition-all text-left cursor-pointer ${
                      activeGoal === goal.id
                        ? "bg-primary text-primary-foreground border-primary shadow-soft"
                        : "bg-muted/40 hover:bg-muted text-muted-foreground border-transparent"
                    }`}
                  >
                    <p className="font-bold leading-none">{goal.name.split(" ")[0]} {goal.name.split(" ").slice(1).join(" ")}</p>
                  </button>
                ))}
              </div>

              {/* Portion bars */}
              <div className="rounded-xl border border-border bg-muted/10 p-4 space-y-3">
                <p className="text-[11px] font-semibold text-muted-foreground leading-none mb-1">
                  {selectedGoal.desc}
                </p>
                
                {/* Carbs */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-amber-800">🌾 Carbohydrates</span>
                    <span className="text-muted-foreground font-medium">Portion Limit</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                      style={{ width: `${selectedGoal.carbsPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{selectedGoal.carbs}</p>
                </div>

                {/* Proteins */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-indigo-800">🍗 Proteins & Daal</span>
                    <span className="text-muted-foreground font-medium">Target Portion</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
                      style={{ width: `${selectedGoal.proteinPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{selectedGoal.protein}</p>
                </div>

                {/* Veggies */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-emerald-800">🥗 Vegetables & Greens</span>
                    <span className="text-muted-foreground font-medium">Recommended Volume</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                      style={{ width: `${selectedGoal.veggiesPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{selectedGoal.veggies}</p>
                </div>

                {/* Fats */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-amber-700">🥑 Healthy Fats</span>
                    <span className="text-muted-foreground font-medium">Moderate Cooking Oil</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-600 rounded-full transition-all duration-500" 
                      style={{ width: `${selectedGoal.fatsPercent}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{selectedGoal.fats}</p>
                </div>
              </div>

              {/* Doctor tip */}
              <div className="rounded-xl border border-primary/10 bg-primary/[0.02] p-3 flex gap-2 items-start leading-snug">
                <Info className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-primary block leading-none">Minahal's Nutrition Tip</span>
                  <span className="text-[11px] text-muted-foreground mt-1 block">{selectedGoal.tip}</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Universal Mini CTA */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>Consultation via Google Meet</span>
          </div>
          <Link 
            to="/book" 
            className="inline-flex items-center gap-1.5 rounded-full bg-leaf-gradient px-4 py-2 text-xs font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Custom Plan <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
