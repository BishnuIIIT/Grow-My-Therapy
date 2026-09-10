import React from "react";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import HowWeWork from "@/components/HowWeWork";
import ModalitiesGrid from "@/components/ModalitiesGrid";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HopeSection />
      <WhoWeHelp />
      <QuoteBanner />
      <AreasOfExpertise />
      <HowWeWork />
      <ModalitiesGrid />
      <CTASection />
    </main>
  );
}
