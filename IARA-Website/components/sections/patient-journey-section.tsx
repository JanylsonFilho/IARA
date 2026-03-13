"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import { Bot, Calendar, Video } from "lucide-react"

const WhatsAppIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function PatientJourneySection() {
  const journeySteps = [
    {
      icon: WhatsAppIcon,
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