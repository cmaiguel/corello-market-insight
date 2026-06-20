"use client";

import { motion } from "framer-motion";

const existing = [
  { label: "ERP", desc: "Planned data — jobs, orders, BOMs" },
  { label: "MES", desc: "Scheduled work orders" },
  { label: "Excel", desc: "Quoting, scheduling, tracking" },
  { label: "PDFs", desc: "Work instructions, drawings" },
  { label: "Paper Travelers", desc: "Floor-level job context" },
  { label: "Quality Records", desc: "Inspection, certs, NCRs" },
];

const corelloCapabilities = [
  "Reads and structures unstructured documents",
  "Extracts production context from paper travelers",
  "Builds searchable quality and process history",
  "Surfaces tribal knowledge from operator records",
  "Connects what ERP planned to what actually happened",
  "Turns documents into conversational data",
];

export function IntelligenceLayer() {
  return (
    <section className="py-28 bg-[#161A1D] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            Product Positioning
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The Intelligence Layer for Manufacturing
          </h2>
          <p className="text-[#8A9299] mt-3 max-w-xl text-base">
            Factories already have systems. They lack intelligence. Corello sits above every
            existing tool — reading, connecting, and activating what's already there.
          </p>
        </motion.div>

        <div className="relative">
          {/* Stack diagram */}
          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* Existing systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest mb-3">
                What factories might have
              </p>
              <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.04)]">
                {existing.map((sys, i) => (
                  <motion.div
                    key={sys.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-[#1E2326] p-4 text-center"
                  >
                    <p className="text-white font-mono font-bold text-sm mb-1">{sys.label}</p>
                    <p className="text-[#4A5259] text-[10px] leading-tight">{sys.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Arrow up */}
              <div className="flex items-center justify-center py-3 gap-2">
                <div className="h-px flex-1 bg-[rgba(245,194,0,0.15)]" />
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                  <path d="M8 24V4M8 4L2 10M8 4L14 10" stroke="#F5C200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
                <div className="h-px flex-1 bg-[rgba(245,194,0,0.15)]" />
              </div>

              {/* Corello layer */}
              <div className="border border-[#F5C200] bg-[rgba(245,194,0,0.06)] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#F5C200]" />
                  <p className="text-[#F5C200] font-bold text-base tracking-wide font-mono">
                    CORELLO — Intelligence Layer
                  </p>
                </div>
                <p className="text-[#C4CAD0] text-sm leading-relaxed">
                  Sits above every existing system. Reads what they contain. Understands what they mean.
                  Answers questions they cannot.
                </p>
              </div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest mb-3">
                What Corello can do
              </p>
              <ul className="space-y-px">
                {corelloCapabilities.map((cap, i) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 bg-[#0F1112] border-l-2 border-[#F5C200] border-l-[rgba(245,194,0,0.4)] pl-3 pr-3 py-3 text-xs text-[#C4CAD0] leading-relaxed"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-0.5 flex-shrink-0">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#F5C200" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
