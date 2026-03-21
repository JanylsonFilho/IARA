"use client"

import { useState, useEffect } from "react"
import { Stethoscope, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Estados e lógicas para acessibilidade
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState(100)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Efeito para aplicar o tamanho da fonte na raiz do documento
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  const handleIncreaseFont = () => setFontSize(prev => Math.min(prev + 10, 140))
  const handleDecreaseFont = () => setFontSize(prev => Math.max(prev - 10, 70))
  const handleResetFont = () => setFontSize(100)

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#projeto", label: "O Projeto" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#jornada", label: "Como Funciona" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#publicacoes", label: "Publicações" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-background shadow-lg transition-colors duration-300">
      
      {/* AQUI FOI ALTERADO: bg-[#F15A22] (Tom de laranja original do menu de navegação) */}
      <div className="bg-[#F15A22] w-full py-2.5 md:py-3 transition-all text-black"> 
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 md:flex-row text-sm md:text-base">
          
          {/* ESQUERDA: Âncoras e Acessibilidade */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex gap-4 font-medium">
              <a href="#inicio" className="text-black hover:underline">Conteúdo central</a>
              <a href="#contato" className="text-black hover:underline">Rodapé</a>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="flex items-center gap-1.5 hover:opacity-80 font-medium text-black"
                title="Alternar Modo Escuro/Alto Contraste"
              >
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-black to-white border border-black block"></span>
              </button>
              
              <div className="flex items-center gap-2 text-black">
                <button onClick={handleDecreaseFont} className="hover:opacity-70 font-bold" title="Diminuir fonte">A-</button>
                <span className="text-black">/</span>
                <button onClick={handleResetFont} className="hover:opacity-70 font-bold" title="Tamanho original">A</button>
                <span className="text-black">/</span>
                <button onClick={handleIncreaseFont} className="hover:opacity-70 font-bold" title="Aumentar fonte">A+</button>
              </div>
            </div>
          </div>

          {/* DIREITA: Links Governamentais */}
          <div className="flex flex-wrap items-center gap-3 font-medium md:gap-4">
            <a href="https://acessoainformacao.fortaleza.ce.gov.br/sistema/site/index.html?ReturnUrl=%2fsistema%2f" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Acesso à informação</a>
            <a href="https://transparencia.fortaleza.ce.gov.br/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Transparência</a>
            <a href="https://catalogodeservicos.fortaleza.ce.gov.br/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Serviços</a>
            <a href="https://legislacao.pgm.fortaleza.ce.gov.br/index.php/P%C3%A1gina_principal" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Legislação</a>
          </div>

        </div>
      </div>

      {/* NAVEGAÇÃO PRINCIPAL */}
      <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          {/* Logo atualizada para contrastar com o fundo bege */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F15A22]">
            <Stethoscope className="h-8 w-8 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">IARA</span>
            <span className="text-sm text-muted-foreground">Saúde Integrada no SUS</span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {/* Textos atualizados para contrastar com o fundo bege */}
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F15A22] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Desktop atualizado para fundo laranja e texto branco */}
        <div className="hidden lg:block">
          <Button className="rounded-full bg-primary px-8 text-white font-semibold hover:bg-primary/90" asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>

        {/* Botão do menu mobile atualizado para cor escura */}
        <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button className="w-full rounded-full bg-primary text-white font-semibold hover:bg-primary/90" asChild>
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Fale Conosco</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}