import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "work", label: "Work" },
    { id: "results", label: "Results" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Styled Hexagonal Concept representing Hive Network */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group cursor-pointer"
            data-cursor-magnetic
          >
            <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" showText={true} textClassName="text-sm" subTextClassName="text-[10px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-xs uppercase tracking-widest font-mono transition-colors duration-300 hover:text-brand-gold cursor-pointer ${
                  activeSection === item.id ? "text-brand-gold" : "text-white/60"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Let's Talk CTA button (Magnetic hover target) */}
          <div className="hidden lg:block">
            <button
              onClick={onContactClick}
              className="relative px-5 py-2.5 rounded-full bg-transparent border border-brand-gold text-[11px] font-bold font-mono tracking-wider text-white uppercase overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,193,7,0.3)] hover:border-white cursor-pointer"
              data-cursor-magnetic
              data-cursor-text="TALK"
            >
              <span className="relative z-10 flex items-center gap-1">
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 -z-0" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full bg-[#050505] z-30 flex flex-col pt-24 px-8 justify-between pb-12 lg:hidden"
          >
            {/* Ambient gold glow decoration inside mobile menu */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FFC107] opacity-10 rounded-full filter blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 text-left">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
                // Navigation Menu
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-3xl font-display font-bold text-left hover:text-brand-gold transition-colors ${
                      activeSection === item.id ? "text-brand-gold" : "text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Footer Area inside Drawer */}
            <div className="flex flex-col gap-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-4 rounded-xl bg-brand-gold text-brand-black text-center font-bold tracking-wider font-mono uppercase text-xs hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 border-t border-white/5 pt-4">
                <span>ENGAGE HIVE © 2026</span>
                <span>hello@engagehive.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
