"use client";

import { useRef } from "react";
import { HeroSection } from "@/components/investor/HeroSection";
import { EvidenceWall } from "@/components/investor/EvidenceWall";
import { WhoWeServe } from "@/components/investor/WhoWeServe";
import { ProblemCards } from "@/components/investor/ProblemCards";
import { PaperTravelers } from "@/components/investor/PaperTravelers";
import { TribalKnowledge } from "@/components/investor/TribalKnowledge";
import { IntelligenceLayer } from "@/components/investor/IntelligenceLayer";
import { StickyNav } from "@/components/investor/StickyNav";
import { LoginGate } from "@/components/investor/LoginGate";

export default function Home() {
  const evidenceRef = useRef<HTMLDivElement>(null);

  return (
    <LoginGate>
      <StickyNav />
      <main className="bg-[#0F1112] text-white">
        <HeroSection onCTAClick={() => evidenceRef.current?.scrollIntoView({ behavior: "smooth" })} />
        <div ref={evidenceRef}>
          <EvidenceWall />
        </div>
        <WhoWeServe />
        <ProblemCards />
        <PaperTravelers />
        <TribalKnowledge />
        <IntelligenceLayer />
      </main>
    </LoginGate>
  );
}
