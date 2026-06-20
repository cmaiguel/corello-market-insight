"use client";

import { motion } from "framer-motion";

const today = [
  "Paper travelers moving jobs across the floor",
  "Manual quoting from memory and past experience",
  "Tribal knowledge locked in people's heads",
  "PDFs and scans that no AI can parse",
  "Rework caused by missing production context",
  "Slow, costly onboarding of new operators",
  "Data siloed in documents and spreadsheets",
  "Critical knowledge lost when people retire",
];

const withCorello = [
  "Documents become interactive, queryable records",
  "Paper travelers become structured production data",
  "Operators can ask questions directly to documents",
  "Tribal knowledge becomes reusable, persistent workflows",
  "Production records become instantly searchable",
  "AI helps quote, route, inspect, and analyze jobs",
  "Managers get operational insights from floor documents",
  "Institutional knowledge survives every departure",
];

function Item({ text, variant }: { text: string; variant: "before" | "after" }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0">
      <span className="mt-0.5 flex-shrink-0">
        {variant === "before" ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10" stroke="#2A2F33" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5L4 8.5L10 3" stroke="#F5C200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={`text-sm leading-relaxed ${variant === "before" ? "text-[#4A5259]" : "text-[#C4CAD0]"}`}>
        {text}
      </span>
    </li>
  );
}

export function BeforeAfter() {
  return (
    <section className="py-28 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            The Transformation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Before and After Corello
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.04)]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F1112] p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#2A2F33]" />
              <span className="text-[#4A5259] font-mono text-xs uppercase tracking-widest">Today</span>
            </div>
            <ul>{today.map((t) => <Item key={t} text={t} variant="before" />)}</ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#161A1D] p-8 md:p-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#F5C200]" />
              <span className="text-[#F5C200] font-mono text-xs uppercase tracking-widest">
                With Corello
              </span>
            </div>
            <ul>{withCorello.map((t) => <Item key={t} text={t} variant="after" />)}</ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
