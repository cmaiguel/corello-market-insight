"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Paper-Based Operations",
    body: "Manufacturers still use paper travelers, scanned forms, PDFs, and printed work instructions to run jobs across the factory floor. Every step, every sign-off, every routing decision leaves a paper trail — and nothing else.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#F5C200]">
        <rect x="3" y="2" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 6H20C20.5523 6 21 6.44772 21 7V20C21 20.5523 20.5523 21 20 21H9C8.44772 21 8 20.5523 8 20V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tribal Knowledge Dependency",
    body: "The most important decisions often depend on experienced employees who know 'how things really work' — machine quirks, tooling setups, customer preferences, workarounds. That knowledge is rarely documented or reusable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#F5C200]">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 19C3 16.2386 5.68629 14 9 14C12.3137 14 15 16.2386 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 14C18.2091 14 20 15.5 20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fragmented Systems",
    body: "ERP, Excel, Access, email, PDFs, drawings, inspection forms, and shop-floor notes all contain pieces of the truth — but no single system understands the full workflow. Context is always scattered across disconnected formats.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#F5C200]">
        <rect x="2" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="15" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9V12M18 9V12M12 12V15M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ProblemCards() {
  return (
    <section className="py-28 bg-[#161A1D] border-t border-[rgba(245,194,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            The Problem Space
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Operationally Sophisticated.
            <br />
            <span className="text-[#8A9299]">Digitally Underserved.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.04)]">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161A1D] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-[#0F1112] border border-[rgba(245,194,0,0.15)]">
                  {card.icon}
                </div>
                <span className="text-[#2A2F33] font-bold text-5xl font-mono leading-none">
                  {card.number}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-[#8A9299] text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
