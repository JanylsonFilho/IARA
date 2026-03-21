"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Stethoscope } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#projeto", label: "O Projeto" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#jornada", label: "Como Funciona" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#publicacoes", label: "Publicações" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <footer className="border-t border-[#00A0DC]/30 bg-[#FFE6CB] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F15A22]">
            <Stethoscope className="h-8 w-8 text-white" />
          </div>
          <p className="mt-4 text-[#414042]">Saúde Integrada no <span className="text-[#F15A22]">Sistema Único de Saúde</span></p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {navLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                <a href={link.href} className="text-[#414042] transition-colors hover:text-[#325565]">
                  {link.label}
                </a>
                {index < navLinks.length - 1 && <span className="ml-6 text-[#00A0DC]/30">|</span>}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-12 text-center">
          <p className="text-sm text-[#414042]">© 2026 IARA - Projeto de Saúde Integrada no SUS. Todos os direitos reservados.</p>
        </AnimatedSection>
      </div>
    </footer>
  )
}