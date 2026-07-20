import { ArrowRight, Instagram, Youtube, Linkedin, Facebook, BarChart3, Flame } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./Logo";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  // Coordinates/Angles for the interactive social hex network (EH Core)
  const socialNodes = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5 text-brand-gold" />, delay: 0.1, x: -110, y: -110, tooltip: "Instagram Reach: +250%" },
    { name: "TikTok", icon: <span className="font-bold text-xs text-brand-gold">T</span>, delay: 0.2, x: 110, y: -110, tooltip: "TikTok Growth: +420%" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5 text-brand-gold" />, delay: 0.3, x: -160, y: 0, tooltip: "LinkedIn Authority: +180%" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5 text-brand-gold" />, delay: 0.4, x: 160, y: 0, tooltip: "YouTube Views: +310%" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5 text-brand-gold" />, delay: 0.5, x: -110, y: 110, tooltip: "FB Community: +140%" },
    { name: "Analytics", icon: <BarChart3 className="w-5 h-5 text-brand-gold" />, delay: 0.6, x: 110, y: 110, tooltip: "Paid ROI: 4.8x Average" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Decorative Golden Ambient Backlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFC107] opacity-[0.03] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FFC107] opacity-[0.04] rounded-full filter blur-[150px] pointer-events-none" />

      {/* Large Glowing Ambient Logo Background Emblem shifted to the right */}
      <div className="absolute -top-32 -right-24 sm:-top-40 md:-top-48 md:-right-36 lg:-top-56 lg:-right-48 xl:-top-64 xl:-right-56 w-[400px] sm:w-[600px] md:w-[900px] lg:w-[1100px] xl:w-[1250px] aspect-square pointer-events-none z-0 select-none">
        {/* Overlapping multilayer golden radial glows for ultimate intensity */}
        <div className="absolute inset-0 bg-radial from-brand-gold/45 via-transparent to-transparent blur-[140px] rounded-full scale-110 opacity-80" />
        <div className="absolute inset-0 bg-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-[80px] rounded-full scale-90" />
        
        {/* Golden core flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/20 rounded-full blur-[60px]" />

        {/* Twinkling sparkle overlay */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[25%] left-[30%] text-brand-gold/60"
          >
            <svg className="w-8 h-8 fill-brand-gold" viewBox="0 0 24 24">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.85, 1.15, 0.85] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-[35%] left-[20%] text-brand-gold/50"
          >
            <svg className="w-5 h-5 fill-brand-gold" viewBox="0 0 24 24">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </motion.div>
          <motion.div 
            animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 5, delay: 2.5, ease: "easeInOut" }}
            className="absolute top-[40%] right-[35%] text-brand-gold/40"
          >
            <svg className="w-6 h-6 fill-brand-gold" viewBox="0 0 24 24">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </motion.div>
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Side: Monolithic Premium Brand Headline & Navigation Guide */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Section Indicator / Small tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // Premium Social Media Agency
            </span>
          </div>

          {/* Huge high-contrast block typography */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white flex flex-col mb-6">
            <span className="text-white">THINK.</span>
            <span className="text-white">CREATE.</span>
            <span className="text-brand-gold glow-text-gold">ENGAGE.</span>
            <span className="text-white">GROW.</span>
          </h1>

          <p className="text-sm md:text-base text-white/50 max-w-md font-sans leading-relaxed mb-8">
            We don't just manage social media. We engineer high-authority digital presence, building viral campaigns and hyper-connected networks that scale your brand's bottom line.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="px-8 py-4 rounded-xl bg-brand-gold text-brand-black text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,193,7,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              data-cursor-magnetic
              data-cursor-text="NOW"
            >
              Get Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => {
                const el = document.getElementById("services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-brand-gold bg-white/[0.02] text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Solutions
            </button>
          </div>

          {/* Social Proof Stats Banner */}
          <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-6 w-full max-w-md">
            <div>
              <span className="block font-display font-bold text-xl md:text-2xl text-brand-gold">50M+</span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Organic Views</span>
            </div>
            <div>
              <span className="block font-display font-bold text-xl md:text-2xl text-white">+320%</span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Avg Engagement</span>
            </div>
            <div>
              <span className="block font-display font-bold text-xl md:text-2xl text-white">4.8x</span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/40">Ad ROI Scale</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Honeycomb Social Network Engine */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[480px] -translate-y-12 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24">
          
          {/* Main interactive network coordinate system container */}
          <div className="relative w-80 h-80 flex items-center justify-center scale-[0.833] lg:scale-[1.2]">
            
            {/* Center Master Core - The Engage Hive Emblem */}
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-gold to-yellow-600 p-[1.5px] relative z-20 flex items-center justify-center shadow-[0_0_40px_rgba(255,193,7,0.35)]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              data-cursor-magnetic
              data-cursor-text="CORE"
            >
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <Logo className="w-10 h-10" />
                </motion.div>
              </div>
            </motion.div>

            {/* Glowing Ring Orbit Guide */}
            <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-white/5 pointer-events-none animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-brand-gold/5 pointer-events-none animate-[spin_100s_linear_infinite_reverse]" />

            {/* Thin Connecting Constellation Web Lines in the Background with Animating Flows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              {/* Background ambient floating network points */}
              {[
                { x: -50, y: -140, size: 1.5, delay: 0.5 },
                { x: 140, y: -50, size: 2, delay: 1.2 },
                { x: -150, y: -60, size: 1.2, delay: 0.8 },
                { x: 80, y: 150, size: 1.8, delay: 2.1 },
                { x: -120, y: 130, size: 2, delay: 1.5 },
                { x: 130, y: 70, size: 1.5, delay: 0.3 },
              ].map((pt, i) => (
                <g key={`bg-pt-${i}`}>
                  {/* Floating particle */}
                  <motion.circle
                    cx={160 + pt.x}
                    cy={160 + pt.y}
                    r={pt.size}
                    fill="#FFC107"
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 8, 0],
                      opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pt.delay,
                    }}
                    style={{ filter: "drop-shadow(0 0 2px #FFC107)" }}
                  />
                  {/* Dynamic connective line to central core */}
                  <line
                    x1="160"
                    y1="160"
                    x2={160 + pt.x}
                    y2={160 + pt.y}
                    stroke="rgba(255, 193, 7, 0.05)"
                    strokeWidth="0.5"
                  />
                </g>
              ))}

              {socialNodes.map((node, index) => {
                const nextNode = socialNodes[(index + 1) % socialNodes.length];
                return (
                  <g key={`line-${index}`}>
                    {/* Radial support line from center core to node */}
                    <line
                      x1="160"
                      y1="160"
                      x2={160 + node.x}
                      y2={160 + node.y}
                      stroke="rgba(255, 193, 7, 0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />

                    {/* Traveling Flow Pulse particle: Core -> Node */}
                    <motion.circle
                      r="2.5"
                      fill="#FFC107"
                      animate={{
                        cx: [160, 160 + node.x],
                        cy: [160, 160 + node.y],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                      style={{ filter: "drop-shadow(0 0 5px #FFC107)" }}
                    />

                    {/* Ring connection between adjacent social media nodes */}
                    <line
                      x1={160 + node.x}
                      y1={160 + node.y}
                      x2={160 + nextNode.x}
                      y2={160 + nextNode.y}
                      stroke="rgba(255, 255, 255, 0.06)"
                      strokeWidth="0.75"
                    />

                    {/* Traveling Flow Pulse particle: Node -> Next Node */}
                    <motion.circle
                      r="2"
                      fill="#FFFFFF"
                      animate={{
                        cx: [160 + node.x, 160 + nextNode.x],
                        cy: [160 + node.y, 160 + nextNode.y],
                        opacity: [0, 0.8, 0.8, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                      style={{ filter: "drop-shadow(0 0 3px #FFFFFF)" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Floating Nodes */}
            {socialNodes.map((node, index) => {
              return (
                <motion.div
                  key={node.name}
                  className="absolute z-10 group"
                  style={{
                    left: `calc(50% + ${node.x}px - 24px)`,
                    top: `calc(50% + ${node.y}px - 24px)`,
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + index,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {/* Hexagon wrapper */}
                  <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-[#121212] border border-white/10 group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(255,193,7,0.25)] transition-all duration-300 rounded-xl" />
                    
                    {/* Glowing effect inside hexagon */}
                    <div className="absolute inset-1 rounded-lg bg-gradient-to-tr from-brand-gold/0 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {node.icon}
                    </span>

                    {/* Popover detailed metrics card */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-[#121212] border border-white/10 text-[9px] font-mono text-white px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 translate-y-1.5 transition-all duration-300 z-30 shadow-xl">
                      <div className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-brand-gold" />
                        <span>{node.tooltip}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Decorative vertical running column sidebars mirroring Awwwards styling */}
      <div className="absolute left-6 bottom-12 hidden md:flex flex-col gap-8 text-[10px] font-mono tracking-widest text-white/20 uppercase vertical-text origin-bottom">
        <span>AWARDS DESIGN LEAGUE 2026</span>
        <div className="w-px h-12 bg-white/10 mx-auto" />
      </div>

      <div className="absolute right-6 bottom-12 hidden md:flex flex-col items-center gap-4">
        <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase vertical-text">
          Scroll down to discover
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-6 rounded-full bg-brand-gold/30 flex justify-center p-[2px]"
        >
          <div className="w-1 h-1.5 rounded-full bg-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
