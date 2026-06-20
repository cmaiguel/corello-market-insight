"use client";

import { useEffect, useState } from "react";
import { CorelloLogo } from "./CorelloLogo";

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15,17,18,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245,194,0,0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <CorelloLogo size="sm" />
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-[#F5C200] uppercase tracking-[0.2em] hidden sm:block">
            AI-Native Manufacturing Intelligence
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5C200] animate-pulse" />
        </div>
      </div>
    </header>
  );
}
