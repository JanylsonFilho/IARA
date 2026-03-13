"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import { MessageCircle, Bot, Calendar, Video } from "lucide-react"

export function PatientJourneySection() {
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
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">A Jornada do <span className="text-primary">Paciente</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Veja como funciona o acompanhamento inteligente da IARA em 4 passos simples.</p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <span className="absolute right-4 top-4 text-5xl font-bold text-muted/30">{index + 1}</span>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
