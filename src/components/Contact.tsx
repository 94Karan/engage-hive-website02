import React, { useState } from "react";
import { Send, CheckCircle, Calendar, Sparkles, Mail, Building, Tag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    platforms: [] as string[],
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const budgetOptions = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];
  
  const platformsOptions = ["Instagram", "TikTok", "YouTube", "Paid Ads", "Full Management", "Branding"];

  const calendarSlots = [
    { date: "Fri, July 17", time: "10:00 AM PST", id: "slot1" },
    { date: "Fri, July 17", time: "2:30 PM PST", id: "slot2" },
    { date: "Mon, July 20", time: "9:00 AM PST", id: "slot3" },
    { date: "Mon, July 20", time: "11:30 AM PST", id: "slot4" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => {
      const exists = prev.platforms.includes(platform);
      return {
        ...prev,
        platforms: exists 
          ? prev.platforms.filter(p => p !== platform) 
          : [...prev.platforms, platform]
      };
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required to address your consultation.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required so we can lock in details.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please input a valid corporate email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate high-end server-side database integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Soft back ambient backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFC107] opacity-[0.025] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // ONBOARDING PORTAL
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
            LET'S CONSTRUCT <br />
            <span className="text-brand-gold glow-text-gold">YOUR STRATEGY SLOT</span>
          </h2>
          <p className="text-sm text-white/50 font-sans mt-4 max-w-lg leading-relaxed">
            Ready for omnipresent scaling? Submit your active metrics below. Selected applications are briefed within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form / Success Box (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                
                // Form Area
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/5 bg-[#121212]/30 backdrop-blur-md p-6 sm:p-10 flex flex-col gap-6"
                >
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label htmlFor="name" className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-2">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-[#121212] border ${
                            errors.name ? "border-red-500/50" : "border-white/5 focus:border-brand-gold"
                          } rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all duration-300`}
                          placeholder="e.g. Marcus Sterling"
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[10px] font-mono text-red-400 mt-1.5">{errors.name}</span>
                      )}
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="email" className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-2">
                        Corporate Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-[#121212] border ${
                            errors.email ? "border-red-500/50" : "border-white/5 focus:border-brand-gold"
                          } rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all duration-300`}
                          placeholder="e.g. marcus@fitfuel.com"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[10px] font-mono text-red-400 mt-1.5">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="company" className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-2">
                      Brand or Company name (Optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-white/5 focus:border-brand-gold rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                      placeholder="e.g. FitFuel Sports Nutrition"
                    />
                  </div>

                  {/* Row 3: Target Platform Interest */}
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-3">
                      Core Interests (Select all that apply)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {platformsOptions.map((platform) => {
                        const isSelected = formData.platforms.includes(platform);
                        return (
                          <button
                            key={platform}
                            type="button"
                            onClick={() => handlePlatformToggle(platform)}
                            className={`px-3.5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                              isSelected 
                                ? "bg-brand-gold text-brand-black font-bold shadow-[0_0_10px_rgba(255,193,7,0.15)]" 
                                : "bg-[#121212] text-white/50 border border-white/5 hover:text-white"
                            }`}
                          >
                            {platform}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Budget Range */}
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-3">
                      Target Monthly Campaign Budget
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((option) => {
                        const isSelected = formData.budget === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, budget: option }))}
                            className={`px-3 py-2.5 rounded-lg text-[10px] font-mono transition-all duration-300 cursor-pointer ${
                              isSelected 
                                ? "bg-[#1a1a1a] text-brand-gold border border-brand-gold font-bold shadow-[inset_0_0_8px_rgba(255,193,7,0.05)]" 
                                : "bg-[#121212] text-white/40 border border-white/5 hover:text-white/80"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="message" className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-2">
                      Current Bottlenecks or Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-[#121212] border border-white/5 focus:border-brand-gold rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Explain what is blocking your scale right now..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-gold text-brand-black text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,193,7,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING DATA ENGINES...</span>
                    ) : (
                      <>
                        <span>Submit Application for Briefing</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                
                // Form Success Screen + Simulated Onboarding Intake Scheduling
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-brand-gold/20 bg-[#121212]/50 backdrop-blur-md p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-6">
                    <CheckCircle className="w-8 h-8 animate-pulse" />
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase mb-2 block">
                    // Application Transmitted Successfully
                  </span>
                  
                  <h3 className="font-display font-bold text-3xl text-white mb-4 tracking-tight">
                    YOUR BRIEFING SLOT IS RESERVED
                  </h3>
                  
                  <p className="text-sm text-white/50 font-sans max-w-md leading-relaxed mb-8">
                    Hey {formData.name.split(" ")[0]}, we received {formData.company ? `details for ${formData.company}` : "your application"}. Your profile passed preliminary verification. 
                    <strong className="text-white block mt-2">Select a mock strategy session to finalize initialization.</strong>
                  </p>

                  {/* Interactive Mock Calendly Slots */}
                  <div className="w-full max-w-md flex flex-col gap-3 mb-8">
                    <span className="block text-left text-[8px] font-mono tracking-widest text-white/30 uppercase">
                      Select Available Strategy Time:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {calendarSlots.map((slot) => {
                        const isSelected = selectedSlot === slot.id;
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setSelectedSlot(slot.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                              isSelected 
                                ? "bg-brand-gold border-brand-gold shadow-[0_0_15px_rgba(255,193,7,0.15)]" 
                                : "bg-[#121212] border-white/5 hover:border-white/15 hover:bg-[#121212]/80"
                            }`}
                          >
                            <div className="flex flex-col text-left">
                              <span className={`text-[9px] font-mono tracking-wider ${
                                isSelected ? "text-brand-black/60" : "text-white/40"
                              }`}>
                                {slot.date}
                              </span>
                              <span className={`text-xs font-display font-bold ${
                                isSelected ? "text-brand-black" : "text-white"
                              }`}>
                                {slot.time}
                              </span>
                            </div>
                            <Calendar className={`w-4 h-4 shrink-0 ${
                              isSelected ? "text-brand-black" : "text-white/20"
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full max-w-md justify-between border-t border-white/5 pt-6">
                    <div className="text-left flex flex-col">
                      <span className="text-[8px] font-mono text-white/20 uppercase">
                        Reservations Status
                      </span>
                      <span className="text-[10px] font-mono text-white/70">
                        {selectedSlot ? "SLOT_LOCKED_PENDING_PING" : "AWAITING_TIME_LOCK"}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedSlot(null);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          budget: "$10k - $25k",
                          platforms: [],
                          message: ""
                        });
                      }}
                      className="text-[10px] font-mono text-brand-gold uppercase tracking-wider flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Submit Another</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Informative Agency Pitch Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12 gap-8 text-left">
            <div>
              <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase block mb-4">
                // Direct Communication Hubs
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">
                      Inquiries Desk
                    </span>
                    <span className="text-sm font-display font-bold text-white block mt-0.5">
                      hello@engagehive.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center shrink-0">
                    <Building className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">
                      Physical HQ
                    </span>
                    <span className="text-sm font-display font-bold text-white block mt-0.5 leading-snug">
                      600 Wilshire Blvd, Ste 400<br />
                      Los Angeles, CA 90017
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/5 border border-brand-gold/15 flex items-center justify-center shrink-0">
                    <Tag className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">
                      Partnership Node ID
                    </span>
                    <span className="text-sm font-mono text-white block mt-0.5 uppercase">
                      HIVE_LOC_90017
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#121212]/40 rounded-2xl border border-white/5 p-5">
              <div className="flex items-center gap-2 mb-3 text-brand-gold">
                <Sparkles className="w-4.5 h-4.5 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                  FREE DEMO STRATEGY INCLUDES
                </span>
              </div>
              <ul className="flex flex-col gap-2 text-[10px] font-mono text-white/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Interactive Scroll-Stop Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Competitor demographic tracking report</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Script hook and angle blueprint pack</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
