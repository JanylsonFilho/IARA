"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import { Mic, Clock, Users } from "lucide-react"

export function HealthProfessionalsSection() {
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
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8">
                <div className="flex h-full flex-col items-center justify-center gap-6">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/20 text-primary shadow-lg transition-transform duration-500 hover:scale-110">
                    <Mic className="h-14 w-14" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">Transcricao Inteligente</p>
                    <p className="mt-2 text-muted-foreground">Fale naturalmente e deixe a IA transcrever</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[24, 32, 20, 36, 28, 22, 30].map((height, i) => (
                      <div key={i} className="w-1.5 animate-pulse rounded-full bg-primary" style={{ animationDelay: `${i * 0.1}s`, height: `${height}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <SectionBadge>Para Profissionais</SectionBadge>
              <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">Vantagens para Profissionais de <span className="text-primary">Saúde</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">A IARA não apenas ajuda os pacientes, mas também otimiza o trabalho dos profissionais de saúde no SUS.</p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`group flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-x-1 ${benefit.highlight ? "border border-primary/30 bg-primary/10" : "border border-border bg-card"}`}>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${benefit.highlight ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-foreground">
                        {benefit.title}
                        {benefit.highlight && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">Destaque</span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
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
