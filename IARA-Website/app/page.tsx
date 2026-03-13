"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import {
  MessageCircle,
  Bot,
  Calendar,
  Video,
  Play,
  FileText,
  Download,
  Mic,
  Clock,
  Heart,
  Users,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  Activity,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

// ============================================================================
// ANIMATION HOOK - Intersection Observer for scroll animations
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
// SECTION BADGE COMPONENT
// ============================================================================
function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
      {children}
    </span>
  )
}

// ============================================================================
// FEATURE CARD WITH GRADIENT BORDER
// ============================================================================
function FeatureCard({
  icon: Icon,
  title,
  description,
  gradientColor = "from-primary",
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  description: string
  gradientColor?: string
  delay?: number
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Gradient top border */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradientColor} to-transparent`}
      />

      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================
function Header() {
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
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#jornada", label: "Como Funciona" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#publicacoes", label: "Publicações" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Stethoscope className="h-6 w-6 text-primary-foreground" />
          </div>
            <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">IARA</span>
            <span className="text-xs text-muted-foreground">
              Saúde Integrada no SUS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button className="w-full rounded-full bg-primary text-primary-foreground">
                Fale Conosco
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
                Inovação & Impacto na Saúde
              </span>
              <div className="flex items-center gap-6">
                <img
                  src="/IARA-logo.jpeg"
                  alt="IARA logo"
                  className="h-20 w-20 rounded-full object-cover shadow"
                />
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Integrando{" "}
                  <span className="text-primary">Tecnologia</span> a{" "}
                  <span className="text-primary">Saúde</span>.
                </h1>
              </div>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                A jornada que começou como um projeto acadêmico evoluiu para a{" "}
                <strong className="text-foreground">
                  IARA - Assistente de Saúde Inteligente
                </strong>
                . Continuamos transformando vidas através da tecnologia,
                agregando o potencial transformador da IA para o amanhã.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com a IARA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground"
                  asChild
                >
  <a href="/projeto">
    Conheça o Projeto
  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Hero Card/Image */}
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-1">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="relative flex h-full flex-col items-center justify-center rounded-3xl bg-card p-8">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                    <img
                      src="/IARA-logo.jpeg"
                      alt="IARA logo"
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    IARA
                  </h3>
                  <p className="mb-4 text-center text-muted-foreground">
                    Sua assistente de saúde digital
                  </p>
                  <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="text-sm font-medium text-primary">
                      Disponível 24/7
                    </span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end rounded-3xl bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-primary">
                    <Activity className="h-5 w-5" />
                    <span className="font-medium">Projetos em Ação</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Transformando a saúde diariamente
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// ABOUT SECTION (Quem Somos)
// ============================================================================
function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Nossa Essência</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="mx-auto mt-2 text-lg text-muted-foreground">
            Do Coração da Comunidade para o Futuro da Tecnologia
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mx-auto mt-12 max-w-4xl">
          <div className="space-y-6 text-center text-muted-foreground">
            <p className="leading-relaxed">
              A nossa história começa com o pé no chão e o olhar voltado para o
              próximo. Nascemos da necessidade de integrar{" "}
              <strong className="text-foreground">
                tecnologia e saúde pública
              </strong>
              , fundamentados na luta direta pelas necessidades da população.
            </p>
            <p className="leading-relaxed">
              Com o tempo, percebemos que a transformação da saúde exige novas
              ferramentas. A evolução tecnológica nos apresentou um novo desafio
              e uma oportunidade sem precedentes. Sentimos a necessidade de
              evoluir para ir além: hoje, somos o{" "}
              <strong className="text-primary">
                Projeto IARA - Assistente de Saúde Integrada no SUS
              </strong>
              .
            </p>
            <p className="leading-relaxed">
              Trabalhamos para garantir que o desenvolvimento tecnológico não
              seja um privilégio, mas um direito de todos. Promovemos inclusão
              digital, saúde de qualidade, e apoio às pautas comunitárias, agora
              potencializados pela{" "}
              <strong className="text-foreground">
                inteligência artificial
              </strong>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* Mission and Vision */}
        <div className="mt-20">
            <AnimatedSection className="text-center">
            <SectionBadge>Nosso Propósito</SectionBadge>
            <h3 className="mt-6 text-balance text-2xl font-bold text-foreground sm:text-3xl">
              Missão e <span className="text-primary">Visão</span>
            </h3>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={100}>
              
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">
                  Missão
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  Promover o desenvolvimento humano e tecnológico das
                  comunidades, oferecendo ferramentas de transformação por meio
                  da inovação em saúde — garantindo que ninguém fique para trás
                  na construção de um futuro mais justo e saudável.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Visão</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Ser referência nacional como projeto que integra tecnologia e
                  humanidade, transformando realidades locais com soluções
                  inovadoras, formando cidadãos conscientes e construindo
                  comunidades saudáveis, inclusivas e conectadas ao futuro.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURES SECTION (O Que Fazemos / Nossos Projetos)
// ============================================================================
function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento via WhatsApp",
      description:
        "Assistente de saúde disponível 24/7 no WhatsApp, respondendo dúvidas e orientando pacientes de forma humanizada.",
      gradient: "from-primary",
    },
    {
      icon: Stethoscope,
      title: "Suporte Medico",
      description:
        "Orientações baseadas em evidências científicas para pacientes crônicos, com encaminhamento quando necessário.",
      gradient: "from-chart-2",
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description:
        "Lembretes automáticos de medicamentos, consultas e exames, reduzindo faltas e melhorando a adesão ao tratamento.",
      gradient: "from-chart-3",
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description:
        "Proteção total das informações de saúde dos pacientes, seguindo todas as normas de privacidade e segurança.",
      gradient: "from-chart-4",
    },
  ]

  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>O Que Fazemos</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Nossos <span className="text-primary">Recursos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Iniciativas que transformam vidas na nossa comunidade.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientColor={feature.gradient}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PATIENT JOURNEY SECTION
// ============================================================================
function PatientJourneySection() {
  const journeySteps = [
    {
      icon: MessageCircle,
      title: "Pergunta no WhatsApp",
      description:
        "O paciente envia sua dúvida de saúde diretamente pelo WhatsApp, de forma simples e natural.",
    },
    {
      icon: Bot,
      title: "Resposta da IA",
      description:
        "A IARA processa a pergunta e fornece uma resposta confiável, baseada em diretrizes médicas.",
    },
    {
      icon: Calendar,
      title: "Lembrete Automático",
      description:
        "Notificações automáticas para medicamentos, exames e consultas agendadas.",
    },
    {
      icon: Video,
      title: "Teleconsulta Direta",
      description:
        "Link direto para teleconsulta quando necessario, reduzindo filas e tempo de espera.",
    },
  ]

  return (
    <section id="jornada" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Como Funciona</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            A Jornada do <span className="text-primary">Paciente</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja como funciona o acompanhamento inteligente da IARA em 4 passos
            simples.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                {/* Step number */}
                <span className="absolute right-4 top-4 text-5xl font-bold text-muted/30">
                  {index + 1}
                </span>

                {/* Gradient top */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-7 w-7" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROBLEM VS SOLUTION SECTION
// ============================================================================
function ProblemSolutionSection() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Por Que a IARA</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Uma Nova Abordagem para o <span className="text-primary">Cuidado</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Entenda como a IARA transforma a experiência de saúde de pacientes
            crônicos no SUS.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <AnimatedSection delay={100}>
            <div className="group relative overflow-hidden rounded-2xl border border-destructive/30 bg-destructive/5 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-destructive to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/20">
                <AlertCircle className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                O Problema
              </h3>
              <p className="mb-6 text-muted-foreground">
                A realidade atual do acompanhamento de saúde
              </p>
              <ul className="space-y-4">
                {[
                  "Longos intervalos entre consultas médicas",
                  "Falta de comunicação contínua com profissionais de saúde",
                  "Dificuldade em tirar dúvidas sobre medicamentos e sintomas",
                  "Filas extensas para agendamento de consultas",
                  "Desconexão entre o paciente e seu tratamento",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-xs font-bold text-destructive">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Solution Card */}
          <AnimatedSection delay={200}>
            <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                A Solução
              </h3>
              <p className="mb-6 text-muted-foreground">
                Como a IARA preenche essa lacuna
              </p>
              <ul className="space-y-4">
                {[
                  "Assistente de IA disponível 24/7 no WhatsApp",
                  "Suporte contínuo entre as consultas médicas",
                  "Respostas confiáveis baseadas em evidências científicas",
                  "Lembretes automáticos de medicamentos e consultas",
                  "Integração direta com teleconsultas do SUS",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// HEALTH PROFESSIONALS SECTION
// ============================================================================
function HealthProfessionalsSection() {
  const benefits = [
    {
      icon: Mic,
      title: "Transcricao de Voz para Texto",
      description:
        "Preencha prontuários mais rápido com transcrição automática de áudio, economizando tempo valioso.",
      highlight: true,
    },
    {
      icon: Clock,
      title: "Otimizacao de Tempo",
      description:
        "Reduza tarefas administrativas e dedique mais tempo ao cuidado direto com pacientes.",
      highlight: false,
    },
    {
      icon: Users,
      title: "Melhor Acompanhamento",
      description:
        "Tenha visibilidade das dúvidas e necessidades dos pacientes entre as consultas.",
      highlight: false,
    },
  ]

  return (
    <section id="vantagens" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Illustration */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8">
                <div className="flex h-full flex-col items-center justify-center gap-6">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/20 text-primary shadow-lg transition-transform duration-500 hover:scale-110">
                    <Mic className="h-14 w-14" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">
                      Transcricao Inteligente
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Fale naturalmente e deixe a IA transcrever
                    </p>
                  </div>
                  {/* Animated waves */}
                  <div className="flex items-center gap-1">
                    {[24, 32, 20, 36, 28, 22, 30].map((height, i) => (
                      <div
                        key={i}
                        className="w-1.5 animate-pulse rounded-full bg-primary"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          height: `${height}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={200}>
            <div>
              <SectionBadge>Para Profissionais</SectionBadge>
              <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Vantagens para Profissionais de{" "}
                <span className="text-primary">Saúde</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A IARA não apenas ajuda os pacientes, mas também otimiza o
                trabalho dos profissionais de saúde no SUS.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`group flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-x-1 ${
                      benefit.highlight
                        ? "border border-primary/30 bg-primary/10"
                        : "border border-border bg-card"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                        benefit.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-foreground">
                        {benefit.title}
                        {benefit.highlight && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                            Destaque
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PUBLICATIONS SECTION
// ============================================================================
function PublicationsSection() {
  const publications = [
    {
      title: "Inteligência Artificial no Acompanhamento de Pacientes Diabéticos",
      authors: "Silva, M.A.; Santos, J.R.; Oliveira, C.L.",
      summary:
        "Estudo que avalia a eficácia do uso de assistentes virtuais baseados em IA para o acompanhamento contínuo de pacientes com Diabetes Tipo 2 no Sistema Único de Saúde.",
      year: "2024",
    },
    {
      title: "Teleconsulta e WhatsApp: Novos Caminhos para a Saúde Pública",
      authors: "Costa, R.F.; Lima, P.S.; Martins, A.B.",
      summary:
        "Análise da integração de plataformas de mensagens instantâneas com sistemas de teleconsulta para melhorar o acesso à saúde em comunidades remotas.",
      year: "2023",
    },
    {
      title: "Redução de Filas no SUS através de Assistentes Digitais",
      authors: "Ferreira, L.M.; Souza, T.C.; Almeida, R.J.",
      summary:
        "Pesquisa quantitativa sobre o impacto da implementação de chatbots inteligentes na redução do tempo de espera para consultas especializadas no SUS.",
      year: "2023",
    },
    {
      title: "Adesão ao Tratamento de Doenças Crônicas com Suporte de IA",
      authors: "Rodrigues, E.S.; Mendes, F.A.; Pereira, M.L.",
      summary:
        "Estudo longitudinal avaliando como lembretes automatizados e suporte contínuo via IA influenciam a adesão ao tratamento em pacientes crônicos.",
      year: "2024",
    },
  ]

  return (
    <section id="publicacoes" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Base Cientifica</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Publicações <span className="text-primary">Científicas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Conheça os estudos e pesquisas que embasam o desenvolvimento da
            IARA.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {publications.map((pub, index) => (
              <AccordionItem
                key={index}
                value={`pub-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-background px-6 transition-all duration-300 hover:border-primary/50 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline [&[data-state=open]>div>span:first-child]:text-primary">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-muted-foreground transition-colors">
                      {pub.year}
                    </span>
                    <span className="font-bold text-foreground">
                      {pub.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {pub.authors}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pb-4">
                    <p className="text-muted-foreground">{pub.summary}</p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground"
                      >
                        <Download className="h-4 w-4" />
                        Baixar PDF
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Acessar Artigo
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <AnimatedSection className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Stethoscope className="h-8 w-8 text-primary-foreground" />
          </div>
          <p className="mt-4 text-muted-foreground">
            Saúde Integrada no{" "}
            <span className="text-primary">Sistema Único de Saúde</span>
          </p>
        </AnimatedSection>

        {/* Navigation links */}
        <AnimatedSection delay={100} className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {["Inicio", "Quem Somos", "Como Funciona", "Vantagens", "Publicações"].map(
              (link, index) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                  {index < 4 && (
                    <span className="ml-6 text-border">|</span>
                  )}
                </li>
              )
            )}
          </ul>
        </AnimatedSection>

        {/* Copyright */}
        <AnimatedSection delay={200} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 IARA - Projeto de Saúde Integrada no SUS. Todos os direitos
            reservados.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  )
}

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
