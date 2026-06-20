"use client";

import { motion } from "framer-motion";

const signals = [
  {
    label: "Multimodal AI",
    body: "For the first time, AI can read, understand, and extract structured data from photos, PDFs, handwritten forms, and scanned documents — the exact formats manufacturing runs on.",
  },
  {
    label: "Workforce Cliff",
    body: "Baby boomers retiring en masse are taking decades of tribal knowledge with them. Manufacturers are desperate for tools that capture and preserve operational expertise before it's gone.",
  },
  {
    label: "Supply Chain Pressure",
    body: "Post-COVID disruptions forced manufacturers to demand faster quoting, better traceability, and tighter quality control — exposing the fragility of paper-based operations.",
  },
  {
    label: "Compliance Escalation",
    body: "CMMC, AS9100, ITAR requirements are tightening. Manual record-keeping is becoming a liability. Digital traceability is no longer optional for aerospace and defense suppliers.",
  },
];

export function WhyNow() {
  return (
    <section className="py-28 bg-[#161A1D] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
              Why Now
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              The timing is finally right.
            </h2>
            <p className="text-[#8A9299] leading-relaxed mb-4 text-base">
              Manufacturers have spent decades accumulating operational data in unstructured formats —
              travelers, inspection forms, drawings, PDFs, emails, Excel files, photos, handwritten records.
            </p>
            <p className="text-[#8A9299] leading-relaxed mb-6 text-base">
              Until now, software could not understand this messy reality.
            </p>
            <p className="text-white font-bold text-xl">Multimodal AI changes that.</p>
            <p className="text-[#8A9299] leading-relaxed mt-4 text-base">
              Corello can become the AI operating layer that reads, structures, and acts on the
              real documents manufacturers already use — without asking them to change how they work.
            </p>
          </motion.div>

          <div className="space-y-px">
            {signals.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#0F1112] p-5 flex gap-4"
              >
                <div className="w-0.5 self-stretch bg-[#F5C200] opacity-50 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
                  <p className="text-[#8A9299] text-xs leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
