import React from "react";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection"; // Intro/Philosophy
import WhoWeHelp from "@/components/WhoWeHelp"; // Services
import HowWeWork from "@/components/HowWeWork"; // About Maya
import OfficeSection from "@/components/OfficeSection"; // Our Office
import CTASection from "@/components/CTASection"; // Appointment CTA
import AreasOfExpertise from "@/components/AreasOfExpertise"; // FAQ
import ModalitiesGrid from "@/components/ModalitiesGrid"; // Contact

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <HopeSection />
      <WhoWeHelp />
      <HowWeWork />
      <OfficeSection />
      <CTASection />
      <AreasOfExpertise />
      <ModalitiesGrid />
    </main>
  );
}
