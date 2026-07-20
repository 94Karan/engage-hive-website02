import { useState } from "react";
import { 
  Search, 
  Compass, 
  Cpu, 
  Gauge, 
  TrendingUp, 
  CheckCircle,
  Hexagon,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProcessStep } from "../types";

export default function Process() {
  const [activeStepId, setActiveStepId] = useState<string>("discover");

  const steps: ProcessStep[] = [
    {
      id: "discover",
      phase: "01",
      title: "Discover & Audit",
      description: "We scrape complete competitive landscapes, analyze your target demographic's scroll habits, audit your current asset performance, and define absolute baseline CPA metrics.",
      iconName: "Search",
      duration: "Week 1",
      highlight: "Advanced Demographic Scrapes"
    },
    {
      id: "strategy",
      phase: "02",
      title: "Tactical Blueprinting",
      description: "Our core strategists design a customized multi-channel roadmap. We layout exact scripting directions, budget splits, paid funnel wireframes, and platform-specific tone manuals.",
      iconName: "Compass",
      duration: "Week 2",
      highlight: "Audience Target Mapping"
    },
    {
      id: "create",
      phase: "03",
      title: "High-Fidelity Creation",
      description: "We deploy field creators and motion editors to produce high-retention short form videos, conversion-optimized carousels, and thumb-stopping visual templates.",
      iconName: "Cpu",
      duration: "Ongoing",
      highlight: "Viral Hooks Engineering"
    },
    {
      id: "optimize",
      phase: "04",
      title: "Algorithmic Tuning",
      description: "We test multiple custom audience lookalikes, audit scroll-stop percentages, perform multivariate ad asset testing, and optimize active bid pacing in real-time.",
      iconName: "Gauge",
      duration: "Daily",
      highlight: "A/B Multivariate Funnels"
    },
    {
      id: "grow",
      phase: "05",
      title: "Omnipresent Scale",
      description: "With stable baseline CPA margins, we scale budgets, establish strategic creator collabs, secure media integrations, and turn your brand into an industry category authority.",
      iconName: "TrendingUp",
      duration: "Scale Phase",
      highlight: "4.8x ROI Budget Multiplier"
    }
  ];

  const getStepIcon = (name: string, isActive: boolean) => {
    const cls = `w-5 h-5 transition-all duration-300 ${isActive ? 'text-brand-black' : 'text-brand-gold'}`;
    switch (name) {
      case "Search": return <Search className={cls} />;
      case "Compass": return <Compass className={cls} />;
      case "Cpu": return <Cpu className={cls} />;
      case "Gauge": return <Gauge className={cls} />;
      case "TrendingUp": return <TrendingUp className={cls} />;
      default: return <CheckCircle className={cls} />;
    }
  };

  const activeStep = steps.find(s => s.id === activeStepId) || steps[0];

  return (
    <section
      id="process"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FFC107] opacity-[0.02] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // Algorithmic Flow Chart
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
            HOW WE DEPLOY <br />
            <span className="text-brand-gold glow-text-gold">THE HIVE METHOD</span>
          </h2>
          <p className="text-sm text-white/50 font-sans mt-4 max-w-lg leading-relaxed">
            Our modular structure guarantees predictable, iterative growth. We combine strict testing protocols with creative freedom.
          </p>
        </div>

        {/* Timeline Grid (Left Side Selection / Right Side Display Cockpit) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Step Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStepId === step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`w-full relative rounded-2xl p-5 border text-left flex items-center justify-between group transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-[#121212] border-brand-gold shadow-[0_0_20px_rgba(255,193,7,0.08)]" 
                      : "bg-[#121212]/30 border-white/5 hover:border-white/10 hover:bg-[#121212]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Phase Number Indicator */}
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${
                      isActive ? "text-brand-gold" : "text-white/35"
                    }`}>
                      {step.phase}
                    </span>

                    {/* Circular Icon Holder */}
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-gold border-brand-gold shadow-[0_0_15px_rgba(255,193,7,0.3)]" 
                        : "bg-white/5 border-white/5 group-hover:border-brand-gold/30"
                    }`}>
                      {getStepIcon(step.iconName, isActive)}
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase mb-0.5">
                        {step.duration}
                      </span>
                      <h3 className={`font-display font-bold text-sm tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? "text-brand-gold translate-x-0" : "text-white/10 -translate-x-2 group-hover:text-white/45 group-hover:translate-x-0"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Interactive Cockpit Display */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-white/5 bg-[#121212]/40 backdrop-blur-md p-6 sm:p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
              
              {/* Glassmorphic aesthetic design details */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107] opacity-[0.03] rounded-full filter blur-[30px] pointer-events-none" />
              
              {/* Cockpit Grid Interface Overlay */}
              <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1 text-[8px] font-mono text-white/30 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span>ACTIVE PROCESSOR FEED // MODE: ONLINE</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/15">
                      Phase {activeStep.phase}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                      {activeStep.duration} Execution Block
                    </span>
                  </div>

                  {/* Massive headline of step */}
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    {activeStep.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed max-w-xl">
                    {activeStep.description}
                  </p>

                  {/* Structured Core Outputs */}
                  <div className="mt-4 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <span className="block text-[8px] font-mono tracking-widest text-white/30 uppercase mb-1">
                        Key Strategic Output:
                      </span>
                      <span className="text-xs font-display font-medium text-brand-gold uppercase tracking-wider block">
                        {activeStep.highlight}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono tracking-widest text-white/30 uppercase mb-1">
                        Deployment Framework:
                      </span>
                      <span className="text-xs font-mono text-white/70 block">
                        Hive-System v4.6
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative grid visualization showing connection mapping */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[9px] font-mono text-white/20 uppercase">
                <div className="flex items-center gap-1">
                  <Hexagon className="w-3.5 h-3.5 text-brand-gold/30" />
                  <span>Interactive Node: {activeStep.id.toUpperCase()}</span>
                </div>
                <span>Status: Fully Calibrated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
