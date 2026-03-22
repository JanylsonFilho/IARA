"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ChevronUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre", label: "Sobre" },
    { 
      label: "Explore", 
      items: [
        { href: "#recursos", label: "Nossos Recursos" },
        { href: "#jornada", label: "Jornada do Paciente" }
      ]
    },
    { href: "#publicacoes", label: "Publicações" },
    { href: "#faq", label: "Dúvidas Frequentes" },
    { href: "#contato", label: "Contato" },
  ]

  // Função para rolar suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    // Adicionado id="footer" para a âncora do Header funcionar
    <footer id="footer" className="w-full flex flex-col">
      
      {/* Detalhe Laranja Superior e Botão Voltar ao Topo */}
      <div className="bg-[#F15A22] w-full  px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end border-b border-white/20">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white text-base font-semibold hover:opacity-80 transition-opacity  tracking-wider"
        >
          Voltar ao topo
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

      {/* Área Principal do Footer com a nova cor #ff8558 */}
      <div className="bg-[#ff8558] dark:bg-[#2d2d2d] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col items-center justify-center gap-8 mb-8">
            {/* Logos dos Parceiros */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center justify-center">
                <Image 
                  src="/CITINOVA_NEGATIVO.png" 
                  alt="Citinova Logo" 
                  width={200} 
                  height={100}
                  className="h-28 w-auto"
                />
              </div>
              <div className="flex items-center justify-center">
                <Image 
                  src="/logo-saude-prefeitura.png" 
                  alt="Prefeitura Logo" 
                  width={120} 
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-base font-medium">
              {navLinks.map((link, index) => (
                <li key={link.label || link.href} className="flex items-center">
                  {link.items ? (
                    <>
                      {link.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="text-white hover:text-white/70 transition-colors"
                        >
                          {item.label}
                          {idx < link.items.length - 1 && <span className="mx-2">•</span>}
                        </a>
                      ))}
                    </>
                  ) : (
                    <a href={link.href} className="text-white hover:text-white/70 transition-colors">
                      {link.label}
                    </a>
                  )}
                  {index < navLinks.length - 1 && <span className="ml-6 text-white/40">|</span>}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={200} className="mt-12 text-center">
            <p className="text-base text-white/90">
              © 2026 IARA - Projeto de Saúde Integrada no SUS. Todos os direitos reservados.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  )
}