import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "fitfuel",
      name: "Marcus Sterling",
      role: "CEO & Co-Founder",
      company: "FitFuel Nutrition",
      quote: "Before partner-deploying with Engage Hive, our TikTok reach was practically non-existent and our CPA was climbing. Their teams completely engineered our scripting flow. Within 60 days, we reached 4.2M high-intent consumers and lowered overall customer acquisition costs by 34%. Absolute creative geniuses.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      rating: 5
    },
    {
      id: "wanderlust",
      name: "Sienna Vance",
      role: "Managing Director",
      company: "Wanderlust Travels",
      quote: "Engage Hive didn't just give us a template social plan; they rebuilt our visual branding Moat from the ground up. Their organic calendars are pristine. Our booking rates surged by 34% in the peak off-season. They treat your brand like an elite art piece.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      rating: 5
    },
    {
      id: "coffee",
      name: "Dax Holloway",
      role: "VP of DTC Growth",
      company: "The Coffee Club",
      quote: "Our DTC paid advertising was burning cash until Engage Hive stepped in to wireframe our Meta funnels. Their Sound FX editors and copywriters made thumb-stopping short form assets that yielded a 5.1x ROAS on a $120k monthly spend. If you want hyper-scaling, they are the only answer.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Golden accent glow in background */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FFC107] opacity-[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // PARTNER ENDORSEMENTS
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
            COMMITTED TO <br />
            <span className="text-brand-gold glow-text-gold">PEAK AUTHORITY</span>
          </h2>
        </div>

        {/* Dynamic Slider Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Big Quote Container (Left 8 cols) */}
          <div className="lg:col-span-8 relative">
            
            {/* Giant quote sign background decoration */}
            <Quote className="absolute -top-10 -left-6 w-24 h-24 text-white/[0.02] pointer-events-none" />

            <div className="min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col gap-6"
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-display font-medium text-lg sm:text-2xl md:text-3xl text-white/90 leading-relaxed tracking-tight text-left">
                    "{active.quote}"
                  </blockquote>

                  {/* Client Portrait & Details row */}
                  <div className="flex items-center gap-4 mt-4 border-t border-white/5 pt-6 text-left">
                    <img
                      src={active.imageUrl}
                      alt={active.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-brand-gold/30"
                    />
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-sm text-white">
                        {active.name}
                      </span>
                      <span className="text-xs font-mono text-brand-gold mt-0.5">
                        {active.role} // {active.company}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Action/Visual sidebar (Right 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12">
            
            <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
              Partnership Records // 0{activeIndex + 1} of 0{testimonials.length}
            </span>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl border border-white/5 hover:border-brand-gold hover:bg-[#121212] flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl border border-white/5 hover:border-brand-gold hover:bg-[#121212] flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Micro branding slogan */}
            <div className="text-left lg:text-right mt-4 max-w-[200px]">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block leading-tight">
                TRUSTED BY LEADING DTC & PERFORMANCE ATHLETICS WORLDWIDE.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
