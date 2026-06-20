"use client";

import { motion } from "framer-motion";
import { CorelloLogo } from "./CorelloLogo";

export function InvestorTakeaway() {
  return (
    <section className="relative py-36 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,194,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,194,0,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5C200] opacity-[0.04] blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-8">
            Investor Thesis
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            This is not a workflow
            <br />
            automation problem.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5C200] leading-[1.05] tracking-tight mb-12">
            It is an industry knowledge problem.
          </h2>

          <p className="text-[#8A9299] text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            High-mix, low-volume manufacturers do not need another dashboard. They need an AI
            coworker that understands their documents, workflows, production history, and tribal
            knowledge — and helps teams make better decisions every day.
          </p>

          <div className="border-t border-[rgba(245,194,0,0.12)] pt-10 mb-14">
            <p className="text-xl md:text-2xl font-bold text-white">
              Corello turns the factory's hidden knowledge into an operational advantage.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <CorelloLogo size="lg" />
          <p className="text-[#4A5259] font-mono text-xs tracking-widest uppercase">
            corello.ai — Manufacturing Intelligence Platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}
