import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  ThumbsUp, 
  Share2, 
  Smartphone, 
  Flame, 
  Sparkles, 
  Check, 
  Play, 
  MoreHorizontal, 
  Repeat,
  Volume2
} from "lucide-react";

interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  time: string;
  verified: boolean;
}

export default function LiveEngagementFeed() {
  // Counters for the three mock cards
  const [tiktokMetrics, setTiktokMetrics] = useState({ views: 184200, likes: 45210, comments: 1243, shares: 894 });
  const [instaMetrics, setInstaMetrics] = useState({ likes: 8204, comments: 412, saves: 1104, reaches: 24800 });
  const [linkedinMetrics, setLinkedinMetrics] = useState({ reactions: 1240, comments: 231, shares: 94, impressions: 18900 });

  // Floating heart triggers for TikTok visual impact
  const [tiktokHearts, setTiktokHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [instaHearts, setInstaHearts] = useState<{ id: number; x: number }[]>([]);

  // Simulated live comments stream
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "@alex_dtc_founder",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      text: "Unbelievable results. Our ROAS literally doubled within 2 weeks of using this hook structure! 🔥",
      time: "Just now",
      verified: true
    },
    {
      id: "2",
      author: "@sara.growth",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      text: "The pacing in this script is insane. Couldn't scroll away if I tried.",
      time: "1m ago",
      verified: false
    },
    {
      id: "3",
      author: "@tech_unicorn",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120",
      text: "Is this organic or paid? Doesn't matter because the engagement is flawless 🐝",
      time: "2m ago",
      verified: true
    }
  ]);

  // Handle periodic metric jumps to simulate viral velocity
  useEffect(() => {
    const interval = setInterval(() => {
      // TikTok jumps
      const tkViewJump = Math.floor(Math.random() * 14) + 5;
      const tkLikeJump = Math.floor(Math.random() * 6) + 1;
      setTiktokMetrics(prev => ({
        views: prev.views + tkViewJump,
        likes: prev.likes + tkLikeJump,
        comments: prev.comments + (Math.random() > 0.7 ? 1 : 0),
        shares: prev.shares + (Math.random() > 0.8 ? 1 : 0),
      }));

      // Trigger floating vertical heart for TikTok
      if (Math.random() > 0.4) {
        setTiktokHearts(prev => [
          ...prev.slice(-15), // keep last 15 hearts max
          {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 - 40, // offset left-right
            y: Math.random() * -100 - 50,
          }
        ]);
      }

      // Instagram jumps
      const instaLikeJump = Math.floor(Math.random() * 3) + 1;
      setInstaMetrics(prev => ({
        ...prev,
        likes: prev.likes + instaLikeJump,
        reaches: prev.reaches + (Math.floor(Math.random() * 8) + 2),
        saves: prev.saves + (Math.random() > 0.85 ? 1 : 0),
      }));

      // Trigger quick heartbeat pulse for Instagram likes
      if (Math.random() > 0.6) {
        setInstaHearts(prev => [
          ...prev.slice(-10),
          { id: Date.now() + Math.random(), x: Math.random() * 100 }
        ]);
      }

      // LinkedIn jumps
      setLinkedinMetrics(prev => ({
        ...prev,
        reactions: prev.reactions + (Math.random() > 0.6 ? 1 : 0),
        impressions: prev.impressions + (Math.floor(Math.random() * 4) + 1),
        comments: prev.comments + (Math.random() > 0.95 ? 1 : 0),
      }));

    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Periodic comment addition simulation
  useEffect(() => {
    const handleNewComment = () => {
      const writers = [
        { author: "@dtc_beast", name: "DTC Beast", text: "Organic hooks are carrying this brand on their backs 📈", verified: true },
        { author: "@marcus_creative", name: "Marcus Visuals", text: "That retention graph transition is super smooth.", verified: false },
        { author: "@clara_ventures", name: "Clara V.", text: "Sent this directly to our marketing team. Brilliant strategy.", verified: true },
        { author: "@viral_vision", name: "Viral Vision", text: "This is exactly how you handle retention in 2026.", verified: false },
      ];

      const chosen = writers[Math.floor(Math.random() * writers.length)];
      const avatars = [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120",
        "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&q=80&w=120",
      ];

      const newComm: Comment = {
        id: Date.now().toString(),
        author: chosen.author,
        avatar: avatars[Math.floor(Math.random() * avatars.length)],
        text: chosen.text,
        time: "Just now",
        verified: chosen.verified
      };

      setComments(prev => [newComm, ...prev.slice(0, 4)]);
    };

    const commentInterval = setInterval(handleNewComment, 6500);
    return () => clearInterval(commentInterval);
  }, []);

  // Format big numbers
  const formatNum = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <section id="live-engagement" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[160px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
              // Algorithmic Engagement Sandbox
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
            VIRAL FEED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-gold">VELOCITY IN ACTION</span>
          </h2>
          <p className="text-sm text-white/50 font-sans mt-4 max-w-lg leading-relaxed">
            Witness our content engineering loop dynamically triggering the feed algorithms. Real-time metric increments simulate active audience engagement on premium scales.
          </p>
        </div>

        {/* Triple Interface grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Instagram Reel & TikTok Mockups (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. TikTok Viral Video Ad Mockup */}
            <div className="relative h-[580px] rounded-3xl overflow-hidden border border-white/10 bg-[#090909] shadow-2xl flex flex-col justify-end p-6">
              {/* Media Content - High contrast portrait bg */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-85 z-0"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
              </div>

              {/* Top Header Row */}
              <div className="absolute top-4 inset-x-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-white/80 text-xs font-mono">
                  <Smartphone className="w-4 h-4 text-brand-gold" />
                  <span>TIKTOK AD ALGORITHM</span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 text-[8px] font-mono uppercase tracking-widest font-bold">
                  ● Viral Burst
                </div>
              </div>

              {/* Heart floating container */}
              <div className="absolute right-6 bottom-32 w-12 h-64 pointer-events-none overflow-hidden z-20">
                <AnimatePresence>
                  {tiktokHearts.map((heart) => (
                    <motion.div
                      key={heart.id}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 text-red-500"
                      initial={{ opacity: 0, scale: 0.5, y: 0, x: heart.x }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.3, 1, 0.7], y: -200 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    >
                      <Heart className="w-6 h-6 fill-red-500 stroke-red-600" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* TikTok Actions Side Rail */}
              <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-10 text-white">
                {/* Author Avatar */}
                <div className="w-10 h-10 rounded-full border border-brand-gold/60 bg-brand-black p-0.5 relative mb-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" className="w-full h-full rounded-full" alt="profile" referrerPolicy="no-referrer" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold text-black flex items-center justify-center font-bold text-[10px]">
                    +
                  </div>
                </div>

                {/* Like Button */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform border border-white/5 shadow-lg group">
                    <Heart className="w-5 h-5 text-red-500 group-hover:fill-red-500 group-hover:stroke-red-600 fill-red-500/10 transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono mt-1 font-bold">{formatNum(tiktokMetrics.likes)}</span>
                </div>

                {/* Comment Button */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center cursor-pointer border border-white/5 shadow-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-mono mt-1 font-bold">{formatNum(tiktokMetrics.comments)}</span>
                </div>

                {/* Share Button */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center cursor-pointer border border-white/5 shadow-lg">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-mono mt-1 font-bold">{formatNum(tiktokMetrics.shares)}</span>
                </div>
              </div>

              {/* Bottom Video Details */}
              <div className="relative z-10 text-white w-4/5 text-left pr-4 mt-auto">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="font-bold text-sm tracking-wide text-white">@engagehive_dtc</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-400 flex items-center justify-center p-0.5">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[9px] bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-1.5 py-0.2 rounded font-mono uppercase font-semibold">Creator Partner</span>
                </div>

                <p className="text-xs text-white/90 font-sans leading-relaxed line-clamp-2 mb-3">
                  This single retention hack boosted their TikTok CTR by +312% in 24 hours. Don't build ads, build magnetic hooks. <span className="text-brand-gold font-semibold">#dtc #growthmarketing #viral</span>
                </p>

                {/* Real-time Streaming Soundwave Icon */}
                <div className="flex items-center justify-between bg-black/50 border border-white/5 backdrop-blur-md p-2.5 rounded-xl text-[10px] font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
                    <span className="truncate max-w-[130px]">Engage Hive Original Hook #12</span>
                  </div>
                  <div className="flex gap-0.5 items-end h-3">
                    <div className="w-0.5 h-3 bg-brand-gold animate-[pulse_0.8s_infinite]" />
                    <div className="w-0.5 h-2.5 bg-brand-gold animate-[pulse_1.2s_infinite]" />
                    <div className="w-0.5 h-1 bg-brand-gold" />
                    <div className="w-0.5 h-3 bg-brand-gold animate-[pulse_0.6s_infinite]" />
                  </div>
                </div>

                {/* Views Counter Overlay inside card */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span>REAL-TIME ESTIMATED IMPRESSIONS</span>
                  <span className="text-brand-gold font-bold">{formatNum(tiktokMetrics.views)} VIEWS</span>
                </div>
              </div>
            </div>

            {/* 2. Instagram High-End Post Ad Mockup */}
            <div className="relative h-[580px] rounded-3xl overflow-hidden border border-white/10 bg-[#090909] shadow-2xl flex flex-col justify-between">
              
              {/* Instagram Card Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between text-white z-10 bg-[#090909]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-gold p-[1px]">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" className="w-full h-full rounded-full" alt="insta profile" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold leading-none text-white">engagehive_agency</span>
                      <div className="w-3 h-3 rounded-full bg-blue-400 flex items-center justify-center">
                        <Check className="w-2 h-2 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-[8px] font-mono text-brand-gold tracking-wide leading-none mt-0.5">Sponsored • Premium Partner</span>
                  </div>
                </div>
                <MoreHorizontal className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-white" />
              </div>

              {/* Instagram Image Content - High aesthetic business mockup */}
              <div className="flex-1 relative bg-brand-black flex items-center justify-center overflow-hidden z-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  className="w-full h-full object-cover opacity-90" 
                  alt="ad creative"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay Graphic: Engagement metrics pop */}
                <div className="absolute top-4 left-4 bg-black/60 border border-brand-gold/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-[9px] font-mono text-brand-gold flex items-center gap-1.5 shadow-xl animate-bounce">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span>SCALE AUDIT // 4.8X ACTIVE ROI</span>
                </div>

                {/* Instagram heart bursts */}
                <AnimatePresence>
                  {instaHearts.map((h) => (
                    <motion.div
                      key={h.id}
                      className="absolute text-brand-gold drop-shadow-[0_0_10px_#FFC107] pointer-events-none"
                      initial={{ scale: 0.1, opacity: 0 }}
                      animate={{ scale: [0.5, 2.2, 1.8], opacity: [0, 1, 0] }}
                      exit={{ opacity: 0 }}
                      style={{ top: "45%", left: `${h.x}%` }}
                      transition={{ duration: 1.2 }}
                    >
                      <Heart className="w-16 h-16 fill-brand-gold" />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Simulated playback bar overlay */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>

              {/* Instagram Action Tray & Counters */}
              <div className="p-4 bg-[#090909] border-t border-white/5 z-10 text-left">
                <div className="flex items-center justify-between text-white mb-3">
                  <div className="flex items-center gap-4">
                    <Heart className="w-5 h-5 text-brand-gold fill-brand-gold/10 hover:scale-110 active:scale-95 cursor-pointer transition-transform" />
                    <MessageCircle className="w-5 h-5 text-zinc-300 hover:text-white cursor-pointer transition-colors" />
                    <Send className="w-5 h-5 text-zinc-300 hover:text-white cursor-pointer transition-colors" />
                  </div>
                  <Bookmark className="w-5 h-5 text-brand-gold fill-brand-gold/10 cursor-pointer" />
                </div>

                {/* Counters and impressions */}
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-white flex items-center gap-1">
                    <span>{instaMetrics.likes.toLocaleString()}</span>
                    <span className="text-zinc-500 font-normal">likes</span>
                  </div>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1">
                    <span className="font-bold text-white mr-1.5">engagehive_agency</span>
                    We scaled their social storefront directly to 7-figures through high-conversion assets. 
                  </p>
                  <p className="text-[10px] font-mono text-brand-gold/80 mt-1 uppercase">
                    ACTIVE REACH: {formatNum(instaMetrics.reaches)} ACCOUNTS
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: LinkedIn Enterprise Feed & Live Comment Log (Span 4) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col h-full">
            
            {/* 3. LinkedIn Professional Authority Post */}
            <div className="rounded-3xl border border-white/10 bg-[#090909] p-5 shadow-2xl text-left">
              {/* Post Header */}
              <div className="flex items-center justify-between text-zinc-400 text-[10px] font-mono border-b border-white/5 pb-3 mb-4">
                <span>LINKEDIN ENTERPRISE HIVE</span>
                <span>Active Campaign B2B</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120" className="w-full h-full object-cover" alt="author" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white">David Miller</span>
                    <span className="text-[8px] text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-1 rounded font-mono font-bold">1st</span>
                  </div>
                  <span className="text-[9px] text-zinc-400">Chief Executive Officer @ Engage Hive</span>
                  <span className="text-[8px] text-zinc-500 font-mono">1h • Edited • 🌐</span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-300 font-sans leading-relaxed mb-4">
                B2B sales and DTC scale are no longer separate engines. We combined high-retained social video assets with programmatic funnel targeting. <br /><br />
                The results? <strong>+1,240 reactions</strong> in under an hour and an organic inflow of qualified high-ticket brand audits. Stop wasting budget.
              </p>

              {/* Engagement Stat Bar */}
              <div className="flex items-center justify-between border-t border-b border-white/5 py-2.5 text-[9px] font-mono text-zinc-400">
                <div className="flex items-center gap-1 text-white">
                  <ThumbsUp className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/10" />
                  <span className="font-bold">{linkedinMetrics.reactions} Reactions</span>
                </div>
                <div className="flex gap-2.5">
                  <span>{linkedinMetrics.comments} comments</span>
                  <span>{linkedinMetrics.shares} shares</span>
                </div>
              </div>

              {/* Action Ribbon */}
              <div className="grid grid-cols-3 gap-1 pt-2.5 text-center text-[10px] font-mono font-bold text-zinc-400">
                <div className="flex items-center justify-center gap-1 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-brand-gold">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>React</span>
                </div>
                <div className="flex items-center justify-center gap-1 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Comment</span>
                </div>
                <div className="flex items-center justify-center gap-1 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Repost</span>
                </div>
              </div>
            </div>

            {/* 4. Live Log of incoming Comments (Connected Algorithmic Feed) */}
            <div className="rounded-3xl border border-white/10 bg-[#090909]/40 backdrop-blur-md p-5 flex-1 flex flex-col justify-between text-left min-h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-brand-gold animate-bounce" />
                    <span className="text-xs font-display font-bold text-white tracking-tight uppercase">
                      Live Algorithmic Feed Log
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-brand-gold">CONNECTING_ACTIVE_API</span>
                </div>

                {/* List of comments scrolling */}
                <div className="space-y-3 max-h-[220px] overflow-hidden relative">
                  <AnimatePresence initial={false}>
                    {comments.map((comm) => (
                      <motion.div
                        key={comm.id}
                        initial={{ opacity: 0, x: -15, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-2.5 items-start"
                      >
                        <img 
                          src={comm.avatar} 
                          className="w-7 h-7 rounded-full object-cover shrink-0 border border-white/10" 
                          alt="avatar"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-mono font-bold text-white truncate">{comm.author}</span>
                            {comm.verified && (
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 flex items-center justify-center shrink-0">
                                <Check className="w-1.5 h-1.5 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          <p className="text-[10px] text-zinc-300 font-sans leading-relaxed mt-0.5">{comm.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative bottom ticker */}
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-zinc-500 mt-4">
                <span>TOTAL HIVE INBOUNDS: +12.4K/MIN</span>
                <span className="text-brand-gold font-semibold uppercase animate-pulse">● System Processing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
