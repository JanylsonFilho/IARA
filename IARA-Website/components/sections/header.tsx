"use client"

import { useState, useEffect } from "react"
import { Stethoscope, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#projeto", label: "O Projeto" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#jornada", label: "Como Funciona" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#publicacoes", label: "Publicações" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#00A0DC] bg-[#FFE6CB]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15A22]">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#325565]">IARA</span>
            <span className="text-xs text-[#414042]">Saúde Integrada no SUS</span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-[#414042] transition-colors hover:text-[#325565] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F15A22] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Desktop atualizado para link de âncora */}
        <div className="hidden lg:block">
          <Button className="rounded-full bg-[#F15A22] px-6 text-white hover:bg-[#D94610]" asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>

        <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#325565]" /> : <Menu className="h-6 w-6 text-[#325565]" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[#00A0DC]/30 bg-[#FFE6CB] lg:hidden">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block text-sm font-medium text-[#414042] transition-colors hover:text-[#325565]" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            {/* Botão Mobile atualizado */}
            <li className="pt-4">
              <Button className="w-full rounded-full bg-[#F15A22] text-white" asChild>
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}