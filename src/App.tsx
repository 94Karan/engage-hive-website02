import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CanvasBackground from "./components/CanvasBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import Results from "./components/Results";
import LiveEngagementFeed from "./components/LiveEngagementFeed";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  // Trigger smooth scroll target
  const triggerTalkOnboarding = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Preloader progress counter
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <>
      {/* Cinematic HTML5 Particle Canvas Backdrop */}
      <CanvasBackground />

      <AnimatePresence mode="wait">
        {isLoading ? (
          // Preloader split screen
          <motion.div
            key="preloader"
            className="fixed inset-0 w-full h-full bg-[#050505] z-50 flex flex-col items-center justify-center text-center"
            exit={{
              opacity: 0,
              y: "-100%",
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }}
          >
            <div className="flex flex-col items-center gap-4 relative">
              {/* Glowing premium logo core */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: ["drop-shadow(0 0 8px rgba(255,193,7,0.3))", "drop-shadow(0 0 20px rgba(255,193,7,0.6))", "drop-shadow(0 0 8px rgba(255,193,7,0.3))"]
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-18 h-18 mb-4 flex items-center justify-center"
              >
                <Logo className="w-12 h-12" />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest font-display text-white">
                  ENGAGE HIVE
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-brand-gold uppercase mt-1">
                  TACTICAL DEPLOYMENT GATEWAY
                </span>
              </div>

              {/* Progress Count */}
              <div className="mt-8 font-mono text-white/30 text-xs">
                <span>INITIALIZING ENGINE: </span>
                <span className="text-brand-gold font-bold">{Math.min(loadPercentage, 100)}%</span>
              </div>

              {/* Minimal bar tracker */}
              <div className="w-48 h-[1px] bg-white/5 rounded-full mt-3 overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-brand-gold shadow-[0_0_8px_#FFC107]"
                  style={{ width: `${Math.min(loadPercentage, 100)}%` }}
                />
              </div>
            </div>

            {/* Micro warning tags */}
            <div className="absolute bottom-10 left-6 right-6 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-widest">
              <span>SECURE PROTOCOL v4.6 // ONLINE</span>
              <span>GENERA_ENGAGE_LEAGUE_2026</span>
            </div>
          </motion.div>
        ) : (
          // Main Website Structure
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden"
          >
            {/* Background Honeycomb Pattern Overlay */}
            <div className="absolute inset-0 honeycomb-pattern opacity-[0.45] pointer-events-none z-0" />

            {/* Glowing Spotlights from Elegant Dark Theme */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[180px] opacity-[0.08] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-gold rounded-full blur-[180px] opacity-[0.05] pointer-events-none z-0" />
            <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-brand-gold rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0" />

            {/* Navigation Header */}
            <Header onContactClick={triggerTalkOnboarding} />

            {/* Layout content groups */}
            <main className="relative">
              
              {/* Hero Showcase block */}
              <Hero onContactClick={triggerTalkOnboarding} />

              {/* Flagship Services block */}
              <Services />

              {/* Algorithmic Process block */}
              <Process />

              {/* Case Proof Portfolio block */}
              <Work />

              {/* Data Visualization / Live Metrics block */}
              <Results />

              {/* Live mock social-media posts and algorithm sandbox */}
              <LiveEngagementFeed />

              {/* Social Proof Quote Reviews block */}
              <Testimonials />

              {/* Knowledge / Insights blog block */}
              <Blog />

              {/* Intake Onboarding CRM block */}
              <Contact />

            </main>

            {/* High-end outlined bottom footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
