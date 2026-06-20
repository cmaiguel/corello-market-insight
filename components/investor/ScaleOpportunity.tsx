"use client";

import { motion } from "framer-motion";

const points = [
  {
    stat: "Millions",
    label: "of paper travelers generated annually",
    body: "Every job creates a physical record. Across 250K+ job shops, this is an ocean of unstructured operational data.",
  },
  {
    stat: "Thousands",
    label: "of undocumented workflows per facility",
    body: "Standard operating procedures live in people's heads. They're never written down because there's been no way to capture them at scale.",
  },
  {
    stat: "10,000+",
    label: "baby boomers retiring daily",
    body: "The manufacturing workforce is aging out. Each retirement is a knowledge loss event. The urgency is not theoretical.",
  },
  {
    stat: "Finally",
    label: "AI can understand messy manufacturing data",
    body: "Multimodal AI can now read handwritten notes, extract traveler data, understand drawings, and answer questions from PDFs — at factory scale.",
  },
];

export function ScaleOpportunity() {
  return (
    <section className="py-28 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            Market Opportunity
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Every Factory Has Decades of Operational Intelligence Trapped in Documents
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.04)] mb-16">
          {points.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0F1112] p-8"
            >
              <p className="text-4xl font-bold text-[#F5C200] mb-1">{p.stat}</p>
              <p className="text-white font-semibold text-sm mb-3 uppercase tracking-wide font-mono">{p.label}</p>
              <p className="text-[#8A9299] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[rgba(245,194,0,0.2)] bg-[rgba(245,194,0,0.04)] p-8 md:p-12"
        >
          <p className="text-[10px] font-mono text-[#F5C200] uppercase tracking-widest mb-4">
            Category Creation
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
            Corello is building the intelligence infrastructure for high-mix, low-volume manufacturing.
          </p>
          <p className="text-[#8A9299] text-base max-w-2xl leading-relaxed">
            That is the category we are creating — not another ERP module, not another dashboard,
            not another integration. An AI-native operating layer that understands the real language
            of the factory floor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
