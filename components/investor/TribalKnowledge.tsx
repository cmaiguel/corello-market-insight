"use client";

import { motion } from "framer-motion";

const quotes = [
  { quote: "Only Mike knows how to quote that job.", role: "Production Planner", company: "Precision Machining Shop" },
  { quote: "If Sarah retires, we lose 20 years of process knowledge.", role: "Operations Manager", company: "Aerospace Fabricator" },
  { quote: "The ERP doesn't have that information.", role: "Shop Supervisor", company: "Industrial Coatings" },
  { quote: "We keep that in a spreadsheet.", role: "Quality Manager", company: "Medical Device Manufacturer" },
  { quote: "You have to ask Jim.", role: "Production Coordinator", company: "Defense Subcontractor" },
  { quote: "I keep all my notes in this binder.", role: "Senior Operator, 22 years", company: "Metal Fabrication" },
];

const transition = [
  { label: "Human Memory", icon: "🧠", desc: "Critical knowledge exists only in people's heads" },
  { label: "Scattered Documents", icon: "📄", desc: "Travelers, notes, binders — unstructured and unsearchable" },
  { label: "Corello Intelligence", icon: "⚡", desc: "Structured, queryable, persistent operational knowledge", highlight: true },
];

export function TribalKnowledge() {
  return (
    <section className="py-28 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            The Real Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            The Factory Runs on Human Memory
          </h2>
          <p className="text-[#8A9299] text-base leading-relaxed">
            Manufacturers are not losing data. They are losing knowledge. The most valuable
            operational intelligence exists in experienced employees — and it has nowhere to go.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quotes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quotes.map((q, i) => (
              <motion.div
                key={q.quote}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#161A1D] border border-[rgba(255,255,255,0.06)] p-5"
              >
                <p className="text-[#F5C200] text-3xl leading-none mb-3 font-serif">"</p>
                <p className="text-white text-sm font-medium leading-relaxed mb-4">
                  {q.quote}
                </p>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-3">
                  <p className="text-[#8A9299] text-xs">{q.role}</p>
                  <p className="text-[#4A5259] text-[10px] font-mono mt-0.5">{q.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transition diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest mb-8">
              The Knowledge Transformation
            </p>

            <div className="space-y-3">
              {transition.map((t, i) => (
                <div key={t.label} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center text-xl border ${
                        t.highlight
                          ? "border-[#F5C200] bg-[rgba(245,194,0,0.1)]"
                          : "border-[rgba(255,255,255,0.08)] bg-[#161A1D]"
                      }`}
                    >
                      {t.icon}
                    </div>
                    {i < transition.length - 1 && (
                      <div className="w-px flex-1 mt-1 bg-[rgba(255,255,255,0.06)]" style={{ minHeight: 24 }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className={`font-bold text-sm mb-1 ${t.highlight ? "text-[#F5C200]" : "text-white"}`}>
                      {t.label}
                    </p>
                    <p className="text-[#8A9299] text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 border border-[rgba(245,194,0,0.15)] bg-[rgba(245,194,0,0.04)]">
              <p className="text-[#F5C200] font-semibold text-sm mb-2">
                Corello captures knowledge before it walks out the door.
              </p>
              <p className="text-[#8A9299] text-xs leading-relaxed">
                Every document, traveler, and form becomes structured, queryable data. Every
                operator's insight becomes a reusable workflow. What was once locked in human
                memory becomes part of the factory's permanent intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
