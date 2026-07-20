import { useEffect, useState } from "react";
import { ArrowUp, Github, Twitter, Instagram, Linkedin, Clock } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/Los_Angeles"
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const sitemap = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Work", id: "work" },
    { label: "Results", id: "results" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-8 text-left overflow-hidden">
      
      {/* Decorative honeycomb backlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFC107] opacity-[0.015] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Footer section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo Brand Descriptor (Cols 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 group mb-6 cursor-pointer" onClick={() => handleNavClick("home")}>
              <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" showText={true} textClassName="text-sm" subTextClassName="text-[10px]" />
            </div>

            <p className="text-xs text-white/40 max-w-sm font-sans leading-relaxed mb-6">
              An award-winning social media engineering and DTC scaling agency. We construct highly connected visual frameworks and multivariate paid ad systems that cement brand authority.
            </p>

            {/* Time node widgets representing global studio presence */}
            <div className="flex flex-wrap gap-4 items-center mt-2">
              <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-xl text-[10px] font-mono text-white/50">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                <span>LOS ANGELES HQ: {currentTime || "10:23 AM"} (PST)</span>
              </div>
            </div>
          </div>

          {/* Quick Sitemap Links (Cols 6-8) */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase mb-4 block">
              // Corporate Sitemap
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full">
              {sitemap.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-xs text-white/50 hover:text-brand-gold font-mono transition-colors text-left py-1 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technical details / compliance (Cols 9-12) */}
          <div className="md:col-span-4 flex flex-col items-start text-left justify-between h-full">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase mb-4 block">
                // System Specifications
              </span>
              <div className="flex flex-col gap-2 text-[10px] font-mono text-white/45">
                <div className="flex justify-between w-full border-b border-white/[0.03] pb-1.5">
                  <span>Server Framework</span>
                  <span className="text-white/75">Vite + React 19 ESM</span>
                </div>
                <div className="flex justify-between w-full border-b border-white/[0.03] pb-1.5">
                  <span>Graphic Engine</span>
                  <span className="text-white/75">Framer Motion + Canvas</span>
                </div>
                <div className="flex justify-between w-full pb-1">
                  <span>SSL Security</span>
                  <span className="text-brand-gold font-bold">SHA-256 Verified</span>
                </div>
              </div>
            </div>

            {/* Scroll back to top block */}
            <button
              onClick={handleScrollTop}
              className="mt-6 flex items-center gap-2 text-[9px] font-mono text-brand-gold uppercase tracking-widest hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to apex</span>
              <div className="w-7 h-7 rounded-lg border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Massive Outlined Brand Banner */}
        <div className="relative py-12 select-none overflow-hidden text-center border-b border-white/5">
          <h2 className="font-display font-black text-[13vw] leading-none tracking-tighter text-stroke hover:text-brand-gold transition-all duration-1000 ease-out uppercase cursor-default block w-full text-center">
            ENGAGE HIVE
          </h2>
        </div>

        {/* Lower copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] font-mono text-white/30 gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <span>© 2026 ENGAGE HIVE MARKETING GROUP LLC.</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">SITEMAP.XML</a>
            <a href="/robots.txt" className="hover:text-white transition-colors">ROBOTS.TXT</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/20">SOCIALS //</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
