"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stages = [
  { id: "01", label: "Job Receipt", detail: "Customer PO arrives. Traveler created by hand." },
  { id: "02", label: "Routing", detail: "Traveler attached to parts. Moves through every station." },
  { id: "03", label: "Process Entry", detail: "Operator records time, recipe, lot# at each step." },
  { id: "04", label: "Quality Check", detail: "Inspector signs off. Deviations noted in margins." },
  { id: "05", label: "Ship", detail: "Traveler filed in a binder. Never digitized." },
];

const floorPhotos = [
  {
    src: "/manufacturing-reality/traveler-clipboard.jpeg",
    label: "Active traveler",
    detail: "Tracks pre-treatment, basecoat, bake, metalize, topcoat — all by hand.",
  },
  {
    src: "/manufacturing-reality/paper-traveler-form.jpeg",
    label: "Blank form",
    detail: "Thousands generated per facility per year. Zero are machine-readable.",
  },
  {
    src: "/manufacturing-reality/paper-stacks-desk.jpeg",
    label: "Completed stack",
    detail: "Each stack is a closed job. Each job holds data no software can access.",
  },
];

const realDocs = [
  {
    src: "/manufacturing-reality/traveler-doc-p1.png",
    customer: "Schmitt Prototype",
    part: "Knob",
    traveler: "376515",
    note: "6 process stages, handwritten time logs, operator initials per step.",
  },
  {
    src: "/manufacturing-reality/traveler-doc3-p1.png",
    customer: "Textron Systems",
    part: "DLM Upper",
    traveler: "360553",
    note: "Pre-bake → basecoat → bake → metalize → unload. 2 fixtures, 4 pcs/cycle.",
  },
  {
    src: "/manufacturing-reality/traveler-doc3-p3.png",
    customer: "Textron Systems",
    part: "DLM Lower",
    traveler: "360548",
    note: "Handwritten deviations, target times annotated in red — invisible to any ERP.",
  },
  {
    src: "/manufacturing-reality/traveler-doc2-p1.png",
    customer: "Heatron",
    part: "72303187-5-1FS",
    traveler: "349307",
    note: "8 stations. Each station has a thumbnail image of the machine. Filled every shift.",
  },
  {
    src: "/manufacturing-reality/traveler-doc1-p1.png",
    customer: "Customer",
    part: "HR08",
    traveler: "399185",
    note: "Quality notes, broken station counts, and end-of-PO remarks — all handwritten.",
  },
];

export function PaperTravelers() {
  return (
    <section className="py-28 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            The Core Artifact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Meet the paper traveler.
          </h2>
          <p className="text-[#8A9299] text-base leading-relaxed">
            In every HMLV (High-Mix, Low-Volume) shop, a physical document called a <span className="text-white font-medium">traveler</span> follows
            a job from the moment it enters the facility to the moment it ships. It records
            process steps, operator sign-offs, quality data, machine recipes, and timing — all by hand,
            at every station, on every shift.
          </p>
          <p className="text-[#8A9299] text-base leading-relaxed mt-3">
            It is the most information-dense document in the factory. It exists only on paper.
          </p>
        </motion.div>

        {/* Floor photos row */}
        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] mb-16">
          {floorPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#0F1112] group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "grayscale(15%) contrast(1.05) brightness(0.82)" }}
                />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F5C200] opacity-60" />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#F5C200] bg-[rgba(0,0,0,0.7)] px-2 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-4 bg-[#161A1D]">
                <p className="text-white text-sm font-semibold mb-1 capitalize">{photo.label}</p>
                <p className="text-[#8A9299] text-xs leading-relaxed">{photo.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real document scans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest">
              Real traveler documents — from real customers
            </p>
            <p className="text-[10px] font-mono text-[#2A3035] uppercase tracking-widest hidden md:block">
              Schmitt · Textron · Heatron
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[rgba(255,255,255,0.04)]">
            {realDocs.map((doc, i) => (
              <motion.div
                key={doc.traveler}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#0F1112] group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doc.src}
                    alt={`Traveler ${doc.traveler}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.88) contrast(1.04)" }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(15,17,18,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <p className="text-[#F5C200] font-mono text-[9px] uppercase tracking-widest mb-1">
                      {doc.customer}
                    </p>
                    <p className="text-white text-xs font-semibold mb-2">{doc.part}</p>
                    <p className="text-[#8A9299] text-[10px] leading-relaxed">{doc.note}</p>
                  </div>
                  {/* Traveler # badge */}
                  <div className="absolute bottom-2 right-2 font-mono text-[9px] text-[#4A5259] bg-[rgba(0,0,0,0.8)] px-1.5 py-0.5">
                    #{doc.traveler}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] font-mono text-[#2A3035] mt-3">
            These are real production documents from Corello customer discovery — not mockups.
          </p>
        </motion.div>

        {/* Lifecycle flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-2">
            From Quote to Cash
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Lifecycle of a single traveler
          </h3>
          <div className="flex flex-col md:flex-row items-stretch gap-px bg-[rgba(255,255,255,0.05)]">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex-1 bg-[#161A1D] p-5 relative"
              >
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path d="M0 0L10 7L0 14" stroke="rgba(245,194,0,0.3)" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                )}
                <p className="font-mono text-[#F5C200] text-[10px] mb-2">{stage.id}</p>
                <p className="text-white text-sm font-semibold mb-1.5">{stage.label}</p>
                <p className="text-[#8A9299] text-xs leading-relaxed">{stage.detail}</p>
                {i === stages.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[rgba(200,50,50,0.4)]" />
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] font-mono text-[#4A5259] mt-3 text-right">
            ↑ At step 5, the data disappears. No export. No structured record. No searchable history.
          </p>
        </motion.div>

        {/* Stats callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-px bg-[rgba(245,194,0,0.06)] border border-[rgba(245,194,0,0.12)]"
        >
          {[
            {
              stat: "100%",
              label: "Manual data entry",
              body: "Every field on every traveler is filled by hand. No scanner. No validation. No sync.",
            },
            {
              stat: "0%",
              label: "Machine-readable",
              body: "When a traveler is filed, the production data it holds becomes permanently inaccessible to software.",
            },
            {
              stat: "~$48K",
              label: "Per defect traced manually",
              body: "Root-cause investigations that require pulling travelers cost days of labor and often go unsolved.",
            },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F1112] p-7">
              <p className="text-4xl font-bold text-[#F5C200] mb-1">{item.stat}</p>
              <p className="text-white font-semibold text-sm mb-2">{item.label}</p>
              <p className="text-[#8A9299] text-xs leading-relaxed">{item.body}</p>
            </div>
          ))}
        </motion.div>

        {/* Corello bridge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-[rgba(245,194,0,0.12)]" />
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-widest px-4">
            Corello reads these documents. Extracts the data. Makes it searchable.
          </p>
          <div className="h-px flex-1 bg-[rgba(245,194,0,0.12)]" />
        </motion.div>

      </div>
    </section>
  );
}
