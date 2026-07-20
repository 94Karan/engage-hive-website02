import { useState, useEffect } from "react";
import { TrendingUp, Users, Percent, UserCheck, Flame, ArrowUpRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { MetricItem } from "../types";

export default function Results() {
  const [activeMetricId, setActiveMetricId] = useState<string>("reach");
  const [counters, setCounters] = useState({ reach: 0, followers: 0, engagement: 0, retention: 0 });

  const metrics: MetricItem[] = [
    {
      id: "reach",
      label: "Organic reach",
      value: 320,
      suffix: "%",
      description: "Average expansion in organic brand exposure across target cohorts within the first 60 days of taking over editorial schedules.",
      iconName: "TrendingUp"
    },
    {
      id: "followers",
      label: "Follower acquisition",
      value: 180,
      suffix: "%",
      description: "High-intent organic follower increase. We avoid bot networks, focusing strictly on target consumers ready to purchase.",
      iconName: "Users"
    },
    {
      id: "engagement",
      label: "Engagement velocity",
      value: 250,
      suffix: "%",
      description: "Interactive conversation multipliers. Includes comments, saves, and shares—the high-tier metrics prized by feed algorithms.",
      iconName: "Percent"
    },
    {
      id: "retention",
      label: "Client retention",
      value: 98,
      suffix: "%",
      description: "Our agency partnership survival rate. We scale along with your brand, pivoting scripts and ads dynamically as you grow.",
      iconName: "UserCheck"
    }
  ];

  // Simulated Counter Animation
  useEffect(() => {
    const duration = 2000; // ms
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);

      setCounters({
        reach: Math.round(easeProgress * 320),
        followers: Math.round(easeProgress * 180),
        engagement: Math.round(easeProgress * 250),
        retention: Math.round(easeProgress * 98),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  const getMetricIcon = (name: string, isActive: boolean) => {
    const cls = `w-5 h-5 transition-transform duration-300 ${isActive ? 'text-brand-black' : 'text-brand-gold'}`;
    switch (name) {
      case "TrendingUp": return <TrendingUp className={cls} />;
      case "Users": return <Users className={cls} />;
      case "Percent": return <Percent className={cls} />;
      case "UserCheck": return <UserCheck className={cls} />;
      default: return <Zap className={cls} />;
    }
  };

  const activeMetric = metrics.find(m => m.id === activeMetricId) || metrics[0];

  return (
    <section
      id="results"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Decorative Gold Ambient Glow backlights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FFC107] opacity-[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // Live Proof Dashboard
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
            DATA-DRIVEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-gold">PERFORMANCE BLUEPRINTS</span>
          </h2>
          <p className="text-sm text-white/50 font-sans mt-4 max-w-lg leading-relaxed">
            No speculation. No vanity metrics. Just raw, verifiable, campaign-tested results that prove organic and paid scale.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Metrics Selector Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {metrics.map((item) => {
              const isActive = activeMetricId === item.id;
              
              // Get current animated counter value
              let displayVal = 0;
              if (item.id === "reach") displayVal = counters.reach;
              if (item.id === "followers") displayVal = counters.followers;
              if (item.id === "engagement") displayVal = counters.engagement;
              if (item.id === "retention") displayVal = counters.retention;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMetricId(item.id)}
                  className={`relative p-6 rounded-2xl border text-left flex flex-col justify-between group transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-[#121212] border-brand-gold shadow-[0_0_20px_rgba(255,193,7,0.08)]" 
                      : "bg-[#121212]/20 border-white/5 hover:border-white/10 hover:bg-[#121212]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6 w-full">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-gold border-brand-gold shadow-[0_0_15px_rgba(255,193,7,0.2)]" 
                        : "bg-white/5 border-white/5 group-hover:border-brand-gold/30"
                    }`}>
                      {getMetricIcon(item.iconName, isActive)}
                    </div>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-all duration-300 ${
                      isActive ? "text-brand-gold translate-x-0" : "text-white/10 -translate-x-1 group-hover:text-white/40 group-hover:translate-x-0"
                    }`} />
                  </div>

                  <div>
                    <span className="block font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none mb-1">
                      +{displayVal}{item.suffix}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isActive ? "text-brand-gold" : "text-white/40"
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual High-Fidelity Analytics Render Container */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-white/5 bg-[#121212]/40 backdrop-blur-md p-6 sm:p-10 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107] opacity-[0.03] rounded-full filter blur-[30px] pointer-events-none" />
              
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="text-left">
                  <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase block mb-1">
                    Active Audit Visualization
                  </span>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight uppercase">
                    {activeMetric.label} Velocity
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-[#121212] border border-white/5 px-3 py-1.5 rounded-xl text-[10px] font-mono text-brand-gold">
                  <Flame className="w-3.5 h-3.5 animate-pulse" />
                  <span>Category Peak Rank // High Quality</span>
                </div>
              </div>

              {/* Central Graph Render - Custom Vector SVG Representation */}
              <div className="my-6 relative h-48 w-full bg-brand-black/40 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
                <div className="absolute inset-x-4 top-4 bottom-10 flex justify-between pointer-events-none z-0">
                  <div className="w-px h-full bg-white/[0.03]" />
                  <div className="w-px h-full bg-white/[0.03]" />
                  <div className="w-px h-full bg-white/[0.03]" />
                  <div className="w-px h-full bg-white/[0.03]" />
                  <div className="w-px h-full bg-white/[0.03]" />
                </div>

                {/* SVG Graph Paths */}
                <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFC107" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="37" x2="400" y2="37" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  <line x1="0" y1="112" x2="400" y2="112" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                  {/* Shaded Area of Graph */}
                  <path
                    d={
                      activeMetricId === "reach" 
                        ? "M 0 130 Q 80 110 160 70 T 320 30 L 400 20 L 400 150 L 0 150 Z"
                        : activeMetricId === "followers"
                        ? "M 0 140 Q 100 110 200 100 T 350 40 L 400 35 L 400 150 L 0 150 Z"
                        : activeMetricId === "engagement"
                        ? "M 0 135 Q 70 125 150 85 T 300 45 L 400 30 L 400 150 L 0 150 Z"
                        : "M 0 50 Q 100 48 200 45 T 350 42 L 400 40 L 400 150 L 0 150 Z"
                    }
                    fill="url(#gradient-area)"
                    transition="d 0.5s ease"
                    className="transition-all duration-500"
                  />

                  {/* Main Line of Graph */}
                  <path
                    d={
                      activeMetricId === "reach" 
                        ? "M 0 130 Q 80 110 160 70 T 320 30 L 400 20"
                        : activeMetricId === "followers"
                        ? "M 0 140 Q 100 110 200 100 T 350 40 L 400 35"
                        : activeMetricId === "engagement"
                        ? "M 0 135 Q 70 125 150 85 T 300 45 L 400 30"
                        : "M 0 50 Q 100 48 200 45 T 350 42 L 400 40"
                    }
                    fill="none"
                    stroke="#FFC107"
                    strokeWidth="2.5"
                    className="transition-all duration-500"
                  />

                  {/* Glowing end node on graph */}
                  <circle
                    cx="400"
                    cy={
                      activeMetricId === "reach" ? "20" : activeMetricId === "followers" ? "35" : activeMetricId === "engagement" ? "30" : "40"
                    }
                    r="4"
                    fill="#FFC107"
                    className="transition-all duration-500 animate-pulse"
                  />
                </svg>

                {/* Grid Indicators on Graph axes */}
                <div className="flex justify-between text-[8px] font-mono text-white/20 mt-auto pt-4 border-t border-white/5 z-10 bg-brand-black/80 px-2">
                  <span>Day 01 (Takeover)</span>
                  <span>Day 15</span>
                  <span>Day 30</span>
                  <span>Day 45</span>
                  <span>Day 60 (Optimized)</span>
                </div>
              </div>

              {/* Descriptive footer text outlining action results */}
              <div className="text-left mt-4">
                <p className="text-xs sm:text-sm text-white/50 font-sans leading-relaxed">
                  {activeMetric.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">
                      Audit Verification Code
                    </span>
                    <span className="text-[10px] font-mono text-white/70">
                      SECURE_LEDGER_HASH // VER-794x2
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-brand-gold uppercase tracking-wider flex items-center gap-1">
                    <span>Verified Audit Ledger</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
