"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ManufacturingImage } from "@/data/manufacturing-images";

interface Props {
  image: ManufacturingImage | null;
  onClose: () => void;
}

const CATEGORY_LABELS = {
  traveler: "Paper Traveler",
  floor: "Shop Floor",
  documents: "Production Documents",
  knowledge: "Tribal Knowledge",
  systems: "Systems",
};

export function ImageModal({ image, onClose }: Props) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="relative max-w-2xl w-full bg-[#161A1D] border border-[rgba(245,194,0,0.15)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-[#0F1112]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                style={{ filter: "grayscale(20%) saturate(0.85) contrast(1.05) brightness(0.88)" }}
                sizes="(max-width: 768px) 100vw, 672px"
              />
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="p-6">
              <p className="text-[10px] font-mono text-[#F5C200] uppercase tracking-[0.2em] mb-1">
                {CATEGORY_LABELS[image.category]}
              </p>
              <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
              <p className="text-[#8A9299] text-sm mb-5 leading-relaxed">{image.caption}</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0F1112] border border-[rgba(255,255,255,0.06)] p-4">
                  <p className="text-[10px] font-mono text-[#4A5259] uppercase tracking-widest mb-2">
                    What this reveals
                  </p>
                  <p className="text-sm text-[#C4CAD0] leading-relaxed">{image.insight}</p>
                </div>
                <div className="bg-[#0F1112] border border-[rgba(245,194,0,0.12)] p-4">
                  <p className="text-[10px] font-mono text-[#F5C200] uppercase tracking-widest mb-2">
                    Why this matters
                  </p>
                  <p className="text-sm text-[#C4CAD0] leading-relaxed">{image.whyItMatters}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/70 hover:bg-black text-[#8A9299] hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
