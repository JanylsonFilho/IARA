"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Stethoscope } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#jornada", label: "Como Funciona" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#publicacoes", label: "Publicações" },
  ]

  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Stethoscope className="h-8 w-8 text-primary-foreground" />
          </div>
          <p className="mt-4 text-muted-foreground">Saúde Integrada no <span className="text-primary">Sistema Único de Saúde</span></p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {navLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
                {index < navLinks.length - 1 && <span className="ml-6 text-border">|</span>}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">© 2026 IARA - Projeto de Saúde Integrada no SUS. Todos os direitos reservados.</p>
        </AnimatedSection>
      </div>
    </footer>
  )
}