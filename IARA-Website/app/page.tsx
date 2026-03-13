"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PatientJourneySection } from "@/components/sections/patient-journey-section"
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section"
import { HealthProfessionalsSection } from "@/components/sections/health-professionals-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { Footer } from "@/components/sections/footer"

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function IARALandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PatientJourneySection />
        <ProblemSolutionSection />
        <HealthProfessionalsSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  )
}
