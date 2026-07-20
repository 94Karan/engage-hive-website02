import { useState } from "react";
import { 
  Instagram, 
  Video, 
  TrendingUp, 
  Award, 
  Palette, 
  Scissors, 
  BarChart4, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Monitor
} from "lucide-react";
import { motion } from "motion/react";
import { Service } from "../types";

export default function Services() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "social",
      title: "Social Media Management",
      description: "Complete hands-off multi-channel management. We engineer communities, design custom aesthetic grids, and implement automated scheduling calendars that capture massive organic followings.",
      iconName: "Instagram",
      metrics: "+320% Reach",
      details: ["Platform Strategy & Audit", "Community Management & Engagement", "Monthly Editorial Calendars", "Hashtag & Keyword Mapping"]
    },
    {
      id: "content",
      title: "Content Creation",
      description: "Viral-engineered short-form videos and photographic content. We handle complete script-writing, creative direction, lighting design, and filming schedules that position your brand at the absolute peak.",
      iconName: "Video",
      metrics: "50M+ Views",
      details: ["UGC & Creator Sourcing", "Scripting & Storyboarding", "Professional Field Filming", "High-Fidelity Copywriting"]
    },
    {
      id: "web-design",
      title: "Website Design",
      description: "High-conversion digital landing pages and bespoke web experiences. We merge custom animations, premium dark aesthetics, and modern responsive layout optimization to turn visitors into leads.",
      iconName: "Monitor",
      metrics: "100% Custom",
      details: ["UI/UX Figma Prototyping", "Custom Fluid Interactions", "SEO & Speed Tuning", "Responsive Mobile Layouts"]
    },
    {
      id: "brand",
      title: "Brand Strategy",
      description: "Crafting bulletproof market positionings. We define your brand voice, archetype, competitive Moat, and visual rules to turn transient viewers into lifelong loyal advocates.",
      iconName: "Award",
      metrics: "100% Alignment",
      details: ["Archetype & Voice Guidelines", "Visual Brand Identity books", "Market Positioning Audits", "Competitor Threat Analysis"]
    },
    {
      id: "graphic",
      title: "Graphic Design",
      description: "Stunning, thumb-stopping graphic narratives. We design premium brand assets, presentation layouts, carousel posts, and promotional banners that represent peak luxury aesthetic.",
      iconName: "Palette",
      metrics: "Award Quality",
      details: ["Carousel Carousel Designs", "Premium Pitch Decks", "Web & Asset Vector Packs", "Packaging & Merch Layouts"]
    },
    {
      id: "video",
      title: "Video Editing",
      description: "Cinematic, fast-paced editing tailored for high retention. We execute dynamic subtitle typography, sound design, hooks, and seamless visual loops that optimize average view duration.",
      iconName: "Scissors",
      metrics: "92% Retention",
      details: ["Cinematic Hook Engineering", "Immersive Sound FX Mapping", "Dynamic Text Overlay & GFX", "Color Correction & Grading"]
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      description: "Complete transparent reporting and predictive modeling. We audit every scroll depth, conversion rate, and audience cohort, delivering deep tactical reports that inform future campaigns.",
      iconName: "BarChart4",
      metrics: "+180% Follower Gain",
      details: ["Custom Client Dashboards", "Conversion Funnel Auditing", "Cohort Lifecycle Reports", "Competitor Benchmarking"]
    }
  ];

  // Map icon name to Lucide components safely
  const getIcon = (name: string) => {
    switch (name) {
      case "Instagram": return <Instagram className="w-6 h-6" />;
      case "Video": return <Video className="w-6 h-6" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6" />;
      case "Award": return <Award className="w-6 h-6" />;
      case "Palette": return <Palette className="w-6 h-6" />;
      case "Scissors": return <Scissors className="w-6 h-6" />;
      case "BarChart4": return <BarChart4 className="w-6 h-6" />;
      case "Monitor": return <Monitor className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 border-t border-white/5 honeycomb-pattern overflow-hidden"
    >
      {/* Decorative Gold Glow backlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFC107] opacity-[0.03] rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
                // Flagship Agency Capabilities
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
              WE ENGINEER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-gold">SOCIAL DOMINANCE</span>
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="text-xs md:text-sm text-white/45 font-mono leading-relaxed uppercase">
              All strategies are custom built, fully integrated, and backed by comprehensive predictive metrics.
            </p>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isHovered = hoveredCardId === service.id;
            
            return (
              <motion.div
                key={service.id}
                className="relative rounded-2xl bg-[#121212]/50 border border-white/5 p-6 md:p-8 flex flex-col justify-between overflow-hidden group min-h-[380px] transition-all duration-300"
                style={{
                  boxShadow: isHovered 
                    ? "0 20px 40px rgba(0,0,0,0.6), 0 0 15px rgba(255, 193, 7, 0.05)" 
                    : "none",
                  borderColor: isHovered ? "rgba(255, 193, 7, 0.25)" : "rgba(255, 255, 255, 0.05)"
                }}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Micro Ambient Glow in Card Corner on Hover */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand-gold filter blur-[20px] transition-opacity duration-500 pointer-events-none"
                  style={{ opacity: isHovered ? 0.08 : 0 }}
                />

                <div>
                  {/* Top Row: Icon + Performance Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-brand-gold px-2.5 py-1 rounded-full bg-brand-gold/5 border border-brand-gold/10">
                      {service.metrics}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-300 text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/50 font-sans leading-relaxed text-left mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub Features Bullet Checklist */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <span className="block text-[8px] font-mono tracking-widest text-white/30 uppercase text-left mb-3">
                    Includes:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-left">
                        <ChevronRight className="w-3 h-3 text-brand-gold shrink-0" />
                        <span className="text-[10px] font-mono text-white/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive cursor magnet feedback text */}
                <span className="sr-only">Explore {service.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
