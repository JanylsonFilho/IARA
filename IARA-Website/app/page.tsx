"use client"

import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PatientJourneySection } from "@/components/sections/patient-journey-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { Footer } from "@/components/sections/footer"
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
        <AboutSection />
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
