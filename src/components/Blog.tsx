import { useState } from "react";
import { Calendar, Clock, BookOpen, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { BlogPost } from "../types";

export default function Blog() {
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

  const posts: BlogPost[] = [
    {
      id: "algoshift",
      title: "Cracking the 2026 Short-Form Feed Algorithm: Hook vs Retention Balance",
      category: "Algorithms",
      date: "July 12, 2026",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
      excerpt: "Unpacking the secret metric weights prioritizing immediate shares over likes and why comment velocity triggers maximum algorithmic amplification."
    },
    {
      id: "dtcfunnels",
      title: "Paid Meta funnels that scale: How to restructure bids for high AOV brands",
      category: "Paid Ads",
      date: "June 28, 2026",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      excerpt: "Say goodbye to lookalike-only targets. Here is the step-by-step blueprint for deploying Advantage+ shopping campaign structures with raw testing assets."
    },
    {
      id: "brandmoat",
      title: "Building an Aesthetic Brand Moat: Why visual consistency beats daily posting",
      category: "Brand Strategy",
      date: "June 14, 2026",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600",
      excerpt: "Your grids are too cluttered. Learn how establishing an editorial spacing schema can double average visitor profile follower conversions."
    }
  ];

  return (
    <section
      id="blog"
      className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden text-left"
    >
      {/* Decorative gold backdrop blur spot */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FFC107] opacity-[0.015] rounded-full filter blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
                // HIVE KNOWLEDGE SPHERE
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
              STRATEGIC <br />
              <span className="text-white">INSIGHTS & INTEL</span>
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="text-xs md:text-sm text-white/40 font-mono leading-relaxed uppercase">
              We track algorithms in real-time. Read our tactical breakdowns on scaling audiences.
            </p>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => {
            const isHovered = hoveredPostId === post.id;

            return (
              <motion.article
                key={post.id}
                onMouseEnter={() => setHoveredPostId(post.id)}
                onMouseLeave={() => setHoveredPostId(null)}
                className="relative flex flex-col justify-between h-full bg-[#121212]/30 border border-white/5 rounded-2xl p-5 group cursor-pointer transition-all duration-300"
                style={{
                  boxShadow: isHovered 
                    ? "0 15px 30px rgba(0,0,0,0.5), 0 0 15px rgba(255, 193, 7, 0.03)" 
                    : "none",
                  borderColor: isHovered ? "rgba(255, 193, 7, 0.2)" : "rgba(255, 255, 255, 0.05)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* Article Image container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-[#1a1a1a] border border-white/5">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Dark gradient mapping over blog cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold bg-[#050505]/85 border border-brand-gold/20 px-2.5 py-1 rounded-full backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold/50" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold/50" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-white/50 font-sans leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between text-[10px] font-mono text-white/60 group-hover:text-brand-gold transition-colors duration-300">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="uppercase tracking-wider">Read Full Blueprint</span>
                  </div>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
