import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  subTextClassName?: string;
  glow?: boolean;
  backgroundMode?: boolean;
}

export default function Logo({ 
  className = "w-10 h-10", 
  showText = false, 
  textClassName = "text-sm", 
  subTextClassName = "text-[10px]",
  glow = false,
  backgroundMode = false
}: LogoProps) {
  const ambientOpacity = backgroundMode ? 0.22 : 1.0;

  return (
    <div className={`flex items-center gap-3 ${glow ? "drop-shadow-[0_0_15px_rgba(255,193,7,0.35)]" : ""}`}>
      {/* High-Fidelity SVG Logo Emblem based on Official Asset */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${className} transition-transform duration-300`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Gold Hexagon */}
        <polygon 
          points="50 5, 91 28.5, 91 75.5, 50 99, 9 75.5, 9 28.5" 
          fill="none" 
          stroke="#FFC107" 
          strokeWidth="4.5" 
          strokeLinejoin="round" 
          style={{ opacity: ambientOpacity }}
        />
        
        {/* Left Side: Three White Horizontal Bars (forming the "E") */}
        <line x1="24" y1="36" x2="50" y2="36" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />
        <line x1="24" y1="51" x2="42" y2="51" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />
        <line x1="24" y1="66" x2="48" y2="66" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />

        {/* Right Side: Golden "H" Structure */}
        {/* Left vertical post of 'H' */}
        <line x1="51" y1="51" x2="51" y2="66" stroke="#FFC107" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />
        {/* Crossbar of 'H' */}
        <line x1="51" y1="51" x2="72" y2="51" stroke="#FFC107" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />
        {/* Right vertical post of 'H' */}
        <line x1="72" y1="40" x2="72" y2="66" stroke="#FFC107" strokeWidth="4.5" strokeLinecap="round" style={{ opacity: ambientOpacity }} />

        {/* The Bee sitting on the H crossbar (centered around x=61.5, y=34) */}
        <g 
          transform="translate(61.5, 34) scale(0.85)"
          style={backgroundMode ? { filter: "drop-shadow(0 0 12px rgba(255,193,7,0.95)) drop-shadow(0 0 4px rgba(255,193,7,0.7))" } : undefined}
        >
          {/* Bee Head */}
          <circle cx="0" cy="-11" r="2.5" fill="#FFC107" />
          
          {/* Bee Antennae */}
          <path d="M-1 -13.5 C-3.5 -17, -1 -19.5, -1 -19.5" fill="none" stroke="#FFC107" strokeWidth="1" strokeLinecap="round" />
          <path d="M1 -13.5 C3.5 -17, 1 -19.5, 1 -19.5" fill="none" stroke="#FFC107" strokeWidth="1" strokeLinecap="round" />

          {/* Bee Thorax */}
          <ellipse cx="0" cy="-6" rx="3.5" ry="3" fill="#FFC107" />

          {/* Bee Abdomen (Segmented Striped) */}
          <path d="M-3.5 -3 C-4 5, 0 10, 0 10 C0 10, 4 5, 3.5 -3 Z" fill="#FFC107" />
          {/* Abdomen stripes in dark/black for the striped bee aesthetic */}
          <path d="M-3.3 -0.5 L3.3 -0.5" stroke="#050505" strokeWidth="1.2" />
          <path d="M-3.1 2.5 L3.1 2.5" stroke="#050505" strokeWidth="1.2" />
          <path d="M-2.2 5.5 L2.2 5.5" stroke="#050505" strokeWidth="1.2" />
          <path d="M-1.2 7.5 L1.2 7.5" stroke="#050505" strokeWidth="1.2" />

          {/* Bee Wings (Angled loops) */}
          {/* Left Wing */}
          <path d="M-3 -7 C-12 -11, -15 -1.5, -3 -5.5" fill="none" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M-2 -6 C-9 -6, -11 -2, -2 -4" fill="none" stroke="#FFC107" strokeWidth="0.8" strokeLinecap="round" />
          
          {/* Right Wing */}
          <path d="M3 -7 C12 -11, 15 -1.5, 3 -5.5" fill="none" stroke="#FFC107" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 -6 C9 -6, 11 -2, 2 -4" fill="none" stroke="#FFC107" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-bold tracking-widest font-display text-white leading-none ${textClassName}`}>
            ENGAGE
          </span>
          <span className={`font-bold tracking-widest font-display text-brand-gold leading-none mt-0.5 ${subTextClassName}`}>
            HIVE
          </span>
        </div>
      )}
    </div>
  );
}
