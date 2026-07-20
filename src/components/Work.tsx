import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CaseStudy } from "../types";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filters = ["All", "SMM", "Paid Ads", "Video", "Branding"];

  const projects: CaseStudy[] = [
    {
      id: "fitfuel",
      title: "FITFUEL SOCIAL THRUST",
      category: "SMM",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      description: "Complete organic turnaround and community relaunch for an international performance nutrition group.",
      results: [
        { label: "Engagement", value: "+250%" },
        { label: "Monthly Reach", value: "4.2M" }
      ]
    },
    {
      id: "wanderlust",
      title: "WANDERLUST BOLD IMMERSIVE",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      description: "Visual identity restructuring and narrative relaunch for a boutique sustainable travel collective.",
      results: [
        { label: "Followers", value: "+180%" },
        { label: "Bookings Increase", value: "34%" }
      ]
    },
    {
      id: "coffeeclub",
      title: "COFFEE CLUB DIGITAL BREW",
      category: "Paid Ads",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      description: "High-performance Meta and TikTok conversion funnel architecture boosting DTC bean subscriptions.",
      results: [
        { label: "Web Traffic", value: "+320%" },
        { label: "ROAS Performance", value: "5.1x" }
      ]
    },
    {
      id: "techflow",
      title: "TECHFLOW ULTRA LAUNCH",
      category: "Video",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      description: "Viral-focused short form video and editing campaign scaling a developer collaboration workspace product.",
      results: [
        { label: "Video Views", value: "12M+" },
        { label: "Signups", value: "18.5k" }
      ]
    },
    {
      id: "luxuryresort",
      title: "ELYSION ESTATE CAMPAIGN",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      description: "Peak luxury visual framing and strategy, targeting high-net-worth real estate buyers through social nodes.",
      results: [
        { label: "Leads Generated", value: "+440" },
        { label: "Sales Initiated", value: "$45M" }
      ]
    },
    {
      id: "gameplus",
      title: "GAMEPLUS ENGAGE ENGINE",
      category: "SMM",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
      description: "Continuous Discord and Twitter hyper-growth management for an immersive indie gaming launch.",
      results: [
        { label: "Active Members", value: "32k" },
        { label: "Twitter Growth", value: "+210%" }
      ]
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Decorative gold spotlight */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#FFC107] opacity-[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
                // Selected Creative Proof
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
              WE DELIVER <br />
              <span className="text-white">UNFORGETTABLE RESULTS</span>
            </h2>
          </div>

          {/* Filtering controls (Magnetic Hover triggers) */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-brand-gold text-brand-black font-bold shadow-[0_0_15px_rgba(255,193,7,0.25)]"
                    : "bg-white/5 text-white/50 border border-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredProjectId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="group relative cursor-pointer"
                >
                  {/* Image Frame with overflow hidden */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#121212] border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-500">
                    
                    {/* Background visual asset image */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Dark gradient overlay covering the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80" />

                    {/* Golden Glow Accent overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/0 via-brand-gold/[0.02] to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top Row Indicators */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                      <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase bg-brand-gold/15 border border-brand-gold/20 px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      
                      {/* Interactive round action button */}
                      <div className="w-9 h-9 rounded-full bg-[#121212]/80 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold group-hover:rotate-45 transition-all duration-300 shadow-xl">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Displaying Case ROI stats upon Hover in image overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between transition-all duration-500">
                      
                      {/* Left: Detailed stats */}
                      <div className="flex flex-col text-left max-w-xs">
                        <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase mb-1">
                          Key Campaign Metrics
                        </span>
                        <div className="flex gap-6">
                          {project.results.map((res, idx) => (
                            <div key={idx}>
                              <span className="block font-display font-bold text-xl sm:text-2xl text-brand-gold leading-none">
                                {res.value}
                              </span>
                              <span className="text-[8px] font-mono uppercase tracking-widest text-white/50 mt-1 block leading-none">
                                {res.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Tiny dynamic tag */}
                      <div className="hidden sm:block text-[8px] font-mono text-white/30 tracking-widest uppercase">
                        // Verified Client ROI
                      </div>
                    </div>
                  </div>

                  {/* Card Descriptive Footer details */}
                  <div className="mt-5 text-left flex flex-col items-start px-1">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 font-sans mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
