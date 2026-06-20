"use client";

import { motion } from "framer-motion";

const industries = [
  "Aerospace", "Defense", "Precision Machining", "Fabrication",
  "Coatings", "Electronics", "Medical Devices", "Industrial Equipment",
];

const icpCards = [
  {
    label: "High Product Complexity",
    body: "Thousands of process variations across jobs, customers, and materials. No two orders are identical.",
  },
  {
    label: "Low Repetition",
    body: "Engineer-to-order and make-to-order environments where every job requires new decisions.",
  },
  {
    label: "Documentation Heavy",
    body: "Travelers, work instructions, drawings, certifications, and inspection records — all generated per job.",
  },
  {
    label: "Knowledge Driven",
    body: "Operators, planners, and supervisors hold critical process knowledge rarely written down anywhere.",
  },
  {
    label: "Data Fragmented",
    body: "ERP + Excel + PDFs + paper + tribal knowledge — all containing pieces of the truth, none connected.",
  },
];

const icpStats = [
  { value: "~50", label: "Employees per company", sub: "Tight teams, deep expertise" },
  { value: "$10–$100M", label: "Annual revenue", sub: "Too large to ignore, too small for enterprise software" },
  { value: "~30%", label: "Of production issues", sub: "Traced to lost or unclear documentation" },
];

export function WhoWeServe() {
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
            Ideal Customer Profile
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Who We Serve
          </h2>
          <p className="text-[#8A9299] mt-3 max-w-xl text-base">
            High-Mix, Low-Volume (HMLV) manufacturers running complex, custom, documentation-heavy operations where no two jobs are alike.
          </p>
        </motion.div>

        {/* ICP Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-px bg-[rgba(245,194,0,0.06)] border border-[rgba(245,194,0,0.12)] mb-14"
        >
          {icpStats.map((s) => (
            <div key={s.value} className="bg-[#161A1D] px-7 py-6">
              <p className="text-3xl font-bold text-[#F5C200] mb-1 leading-none">{s.value}</p>
              <p className="text-white text-xs font-semibold uppercase tracking-wide mb-0.5">{s.label}</p>
              <p className="text-[#4A5259] text-[10px] uppercase tracking-widest">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* HMLV Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F1112] border border-[rgba(245,194,0,0.12)] p-6"
          >
            <p className="text-xs font-mono text-[#F5C200] uppercase tracking-widest mb-6">
              Focused Market Entry — High-Mix / Low-Volume
            </p>
            <svg viewBox="0 0 520 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <rect width="520" height="360" fill="#0F1112" />

              {/* Y axis */}
              <line x1="90" y1="20" x2="90" y2="295" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              {/* X axis */}
              <line x1="90" y1="295" x2="490" y2="295" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              {/* Arrowheads */}
              <polygon points="86,23 90,14 94,23" fill="rgba(255,255,255,0.4)" />
              <polygon points="482,291 491,295 482,299" fill="rgba(255,255,255,0.4)" />

              {/* Axis spine labels */}
              <text x="290" y="330" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="13" fontFamily="sans-serif">Volume</text>
              <text x="42" y="158" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="13" fontFamily="sans-serif" transform="rotate(-90,42,158)">Variety</text>

              {/* High / Low corner labels */}
              <text x="480" y="314" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">High</text>
              <text x="100" y="314" textAnchor="start"  fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">Low</text>
              <text x="72"  y="24"  textAnchor="end"    fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">High</text>
              <text x="72"  y="295" textAnchor="end"    fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="sans-serif">Low</text>

              {/* Yellow ellipse — compact, upper-left corner */}
              <ellipse
                cx="148" cy="118"
                rx="40" ry="88"
                fill="rgba(245,194,0,0.06)"
                stroke="#F5C200"
                strokeWidth="1.8"
                transform="rotate(-10,148,118)"
              />

              {/* Inside labels */}
              <text x="145" y="78"  textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="12" fontWeight="600" fontFamily="sans-serif">Project</text>
              <text x="145" y="93"  textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="12" fontWeight="600" fontFamily="sans-serif">Based</text>
              <text x="152" y="160" textAnchor="middle" fill="rgba(255,255,255,0.7)"  fontSize="12" fontFamily="sans-serif">Jobbing</text>

              {/* Outside category labels */}
              <text x="295" y="210" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="12" fontFamily="sans-serif">Batch</text>
              <text x="390" y="250" textAnchor="middle" fill="rgba(255,255,255,0.3)"  fontSize="12" fontFamily="sans-serif">Assembly Line</text>
              <text x="148" y="270" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="11" fontFamily="sans-serif">Process Mfg.</text>
              <text x="450" y="270" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="12" fontFamily="sans-serif">Continuous</text>

              {/* Corello tag — below ellipse, not overlapping */}
              <rect x="104" y="218" width="90" height="17" rx="2" fill="rgba(245,194,0,0.1)" stroke="rgba(245,194,0,0.3)" strokeWidth="0.8" />
              <text x="149" y="230" textAnchor="middle" fill="#F5C200" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="1">CORELLO'S FOCUS</text>
            </svg>

            <p className="text-[10px] text-[#4A5259] mt-4 font-mono text-center leading-relaxed">
              High variety, low volume — where complexity lives and intelligence is the advantage.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Industries */}
            <div className="mb-6">
              <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest mb-3">
                Industries Served
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs font-mono text-[#F5C200] border border-[rgba(245,194,0,0.2)] bg-[rgba(245,194,0,0.05)] px-3 py-1"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* ICP cards */}
            <div className="space-y-px bg-[rgba(255,255,255,0.04)]">
              {icpCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-[#161A1D] p-4 flex items-start gap-4"
                >
                  <div className="w-1 self-stretch bg-[#F5C200] opacity-60 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{card.label}</p>
                    <p className="text-[#8A9299] text-xs leading-relaxed">{card.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest pt-2">
              50–500 employees · Engineer-to-order · Make-to-order
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
