"use client";

import { motion } from "framer-motion";

export function HeroSection({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0F1112]">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,194,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,194,0,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial glow — upper left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#F5C200] opacity-[0.04] blur-3xl" />

      {/* Hero content — pt-24 clears the fixed nav */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 border border-[rgba(245,194,0,0.25)] bg-[rgba(245,194,0,0.05)] px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5C200]" />
            <span className="text-[#F5C200] text-xs font-mono uppercase tracking-[0.2em]">
              High-Mix, Low-Volume Manufacturing
            </span>
          </div>

          <h1 className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-tight max-w-4xl mx-auto mb-6">
            Critical Manufacturing Still Depends on{" "}
            <span className="text-[#F5C200]">Paper, Old Legacy Systems,</span>
            <br />
            and Tribal Knowledge.
          </h1>

          <p className="text-lg md:text-xl text-[#8A9299] max-w-2xl mx-auto leading-relaxed mb-10">
            Small manufacturers power critical supply chains, but their operational knowledge
            remains trapped in paper travelers, tribal knowledge, legacy systems, and human expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <button
            onClick={onCTAClick}
            className="inline-flex items-center gap-3 bg-[#F5C200] hover:bg-[#FFD200] text-[#0F1112] font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-200"
          >
            See the reality on the shop floor
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2.5L11.5 7L7 11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20 w-full max-w-5xl mx-auto border-t border-[rgba(245,194,0,0.1)] pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.04)]">
            {[
              { value: "250K+",  title: "Small & Mid-Sized Manufacturers", sub: "Across North America" },
              { value: "80%",    title: "Still Rely on Paper-Based Processes", sub: "For critical operations" },
              { value: "$180K",  title: "Avg. Spent Implementing Software Systems", sub: "By small & mid-sized manufacturers" },
              { value: "500K+",  title: "Manufacturing Jobs Remain Unfilled", sub: "Across the U.S." },
              { value: "54 yrs", title: "Median Age of a U.S. Manufacturing Worker", sub: "An aging workforce" },
              { value: "$2.9T",  title: "U.S. Manufacturing GDP", sub: "One of the world's largest industries" },
            ].map((s) => (
              <div key={s.value} className="bg-[#0F1112] px-6 py-5 text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#F5C200] mb-1 leading-none">{s.value}</div>
                <div className="text-white text-xs font-semibold uppercase tracking-wide leading-snug mb-0.5">{s.title}</div>
                <div className="text-[#4A5259] text-[10px] uppercase tracking-widest">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0F1112] to-transparent" />
    </section>
  );
}
