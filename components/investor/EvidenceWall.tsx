"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { manufacturingImages, type ManufacturingImage } from "@/data/manufacturing-images";
import { ImageModal } from "./ImageModal";

const HEIGHTS = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/3]"];

export function EvidenceWall() {
  const [selected, setSelected] = useState<ManufacturingImage | null>(null);

  return (
    <section id="evidence" className="relative py-28 bg-[#0F1112] border-t border-[rgba(245,194,0,0.08)]">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,194,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,194,0,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#F5C200] font-mono text-xs uppercase tracking-[0.25em] mb-4">
            Visual Evidence
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            The Infrastructure Behind a<br />
            <span className="text-[#F5C200]">Trillion-Dollar Industry</span>
          </h2>
          <p className="text-[#8A9299] max-w-lg text-base">
            Every image below is from a real manufacturing facility. Hover to see what it reveals.
            Click to understand why it matters.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {manufacturingImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setSelected(img)}
                className={`group relative w-full overflow-hidden bg-[#161A1D] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(245,194,0,0.4)] transition-all duration-300 block ${HEIGHTS[i % HEIGHTS.length]}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ filter: "grayscale(20%) saturate(0.82) contrast(1.06) brightness(0.86)" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Film grain overlay */}
                <div
                  className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* Hover insight */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 p-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <p className="text-[9px] font-mono text-[#F5C200] uppercase tracking-widest mb-1">
                    {img.title}
                  </p>
                  <p className="text-[11px] text-zinc-200 leading-snug line-clamp-2">{img.insight}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#2A2F33] text-xs font-mono mt-8 uppercase tracking-widest">
          {manufacturingImages.length} images from real manufacturing environments — Mueller Coatings &amp; others
        </p>
      </div>

      <ImageModal image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
