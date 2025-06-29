"use client";

import HeroSection from "./components/HeroSection";
import Internships from "./components/Internships";
import TechnicalMetrics from "./components/TechnicalMetrics";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <HeroSection />
      <Internships />
      <Projects />
      <TechnicalMetrics />
      <ContactSection />
    </main>
  );
}
