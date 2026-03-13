"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  MessageCircle,
  Users,
  Target,
  Award,
  CheckCircle,
  Brain,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// ============================================================================
// ANIMATION HOOK
// ============================================================================
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ============================================================================
// VIDEO PLAYER COMPONENT
// ============================================================================
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-card"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(!isPlaying)}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/video-poster.jpg"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/video_IARA.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Play overlay quando pausado */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-background/40 transition-all hover:bg-background/50"
          aria-label="Reproduzir video"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110">
            <Play className="ml-1 h-8 w-8" />
          </div>
        </button>
      )}

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-foreground" />
              ) : (
                <Play className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-foreground" />
              ) : (
                <Volume2 className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
          <button
            type="button"
            onClick={handleFullscreen}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Tela cheia"
          >
            <Maximize className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PROJECT PAGE
// ============================================================================
export default function ProjetoPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const objectives = [
    {
      icon: MessageCircle,
      title: "Acompanhamento Contínuo",
      description:
        "Monitoramento diário de sintomas, medicamentos e estilo de vida através do WhatsApp.",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description:
        "IA conversacional que entende o contexto do paciente e oferece orientações personalizadas.",
    },
    {
      icon: Users,
      title: "Conexão com Profissionais",
      description:
        "Facilita a comunicação entre pacientes e equipes de saúde das UBS.",
    },
    {
      icon: Target,
      title: "Foco em Cronicidades",
      description:
        "Especializada no acompanhamento de pacientes com Diabetes Tipo 2 e outras condições crônicas.",
    },
  ]

  const benefits = [
    "Redução de filas e sobrecarga nas UBS",
    "Maior adesão ao tratamento pelos pacientes",
    "Detecção precoce de complicações",
    "Dados estruturados para decisões clínicas",
    "Humanização do atendimento através da tecnologia",
    "Acessível via WhatsApp - sem necessidade de apps extras",
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">IARA</span>
              <span className="text-xs text-muted-foreground">
                Saúde Integrada no SUS
              </span>
            </div>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
                    Conheça o Projeto
                  </span>
                <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  O que é a <span className="text-primary">IARA</span>?
                </h1>
                <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  A IARA (Inteligência Artificial para Regulação e Acompanhamento)
                  é uma assistente virtual de saúde que utiliza inteligência
                  artificial para acompanhar pacientes crônicos diretamente pelo
                  WhatsApp.
                </p>
              </div>
            </AnimatedSection>

            {/* Video Section */}
            <AnimatedSection delay={200}>
              <div className="mx-auto max-w-4xl">
                <VideoPlayer />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mb-16 text-center">
                <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                  Nossa Missão
                </span>
                <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                  Missão e <span className="text-primary">Visão</span>
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Democratizar o acesso à saúde de qualidade através da tecnologia.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection delay={100}>
                <div className="group relative overflow-hidden rounded-2xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Missão</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Promover o acompanhamento contínuo e humanizado de pacientes
                    crônicos através de tecnologia acessível, reduzindo a
                    sobrecarga do sistema de saúde e melhorando a qualidade de
                    vida das pessoas atendidas pelo SUS.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="group relative overflow-hidden rounded-2xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Award className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Visão</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Ser referência nacional em soluções de saúde digital para o
                    SUS, transformando a forma como pacientes crônicos são
                    acompanhados e criando um modelo replicável para outras
                    unidades de saúde em todo o Brasil.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="bg-card/50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="mb-16 text-center">
                <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                  Objetivos
                </span>
                <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                  O que a IARA <span className="text-primary">oferece</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {objectives.map((objective, index) => (
                <AnimatedSection key={objective.title} delay={index * 100}>
                  <div className="group relative overflow-hidden rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
                      <objective.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {objective.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {objective.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection>
                <div>
                  <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                    Beneficios
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                    Por que escolher a{" "}
                    <span className="text-primary">IARA</span>?
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    A IARA foi desenvolvida pensando nas necessidades reais do
                    sistema público de saúde brasileiro, oferecendo soluções
                    práticas e acessíveis.
                  </p>

                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-card p-8">
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                        <img
                          src="/IARA-logo.jpeg"
                          alt="IARA logo"
                          className="h-20 w-20 rounded-full object-cover"
                        />
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-foreground">
                        Saúde Humanizada
                      </h3>
                      <p className="text-center text-muted-foreground">
                        Tecnologia a serviço do cuidado
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Quer saber mais sobre a{" "}
                <span className="text-primary">IARA</span>?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Entre em contato conosco para conhecer como a IARA pode
                transformar o atendimento na sua unidade de saúde.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-primary px-8 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com a IARA
                </Button>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Voltar ao Inicio
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <p className="mb-2 text-sm text-muted-foreground">
            IARA - Inteligência Artificial para Regulação e Acompanhamento
          </p>
          <p className="text-xs text-muted-foreground">
            2026 Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
