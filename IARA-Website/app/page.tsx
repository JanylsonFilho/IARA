"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PatientJourneySection } from "@/components/sections/patient-journey-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { Footer } from "@/components/sections/footer"
import { ProjectPresentationSection } from "@/components/sections/project-presentation-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FaqSection } from "@/components/sections/faq-section"

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function IARALandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectPresentationSection />
        <FeaturesSection />
        <PatientJourneySection />
        <PublicationsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
