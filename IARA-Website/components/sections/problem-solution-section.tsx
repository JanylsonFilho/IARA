"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import { AlertCircle, Heart } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Por Que a IARA</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">Uma Nova Abordagem para o <span className="text-primary">Cuidado</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Entenda como a IARA transforma a experiência de saúde de pacientes crônicos no SUS.</p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="group relative overflow-hidden rounded-2xl border border-destructive/30 bg-destructive/5 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-destructive to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/20">
                <AlertCircle className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">O Problema</h3>
              <p className="mb-6 text-muted-foreground">A realidade atual do acompanhamento de saúde</p>
              <ul className="space-y-4">
                {[
                  "Longos intervalos entre consultas médicas",
                  "Falta de comunicação contínua com profissionais de saúde",
                  "Dificuldade em tirar dúvidas sobre medicamentos e sintomas",
                  "Filas extensas para agendamento de consultas",
                  "Desconexão entre o paciente e seu tratamento",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-xs font-bold text-destructive">{index + 1}</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">A Solução</h3>
              <p className="mb-6 text-muted-foreground">Como a IARA preenche essa lacuna</p>
              <ul className="space-y-4">
                {[
                  "Assistente de IA disponível 24/7 no WhatsApp",
                  "Suporte contínuo entre as consultas médicas",
                  "Respostas confiáveis baseadas em evidências científicas",
                  "Lembretes automáticos de medicamentos e consultas",
                  "Integração direta com teleconsultas do SUS",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">✓</span>
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
