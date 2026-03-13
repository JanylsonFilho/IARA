"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import { CheckCircle, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>Nossa Essência</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Quem <span className="text-primary">Somos</span></h2>
          <p className="mx-auto mt-2 text-lg text-muted-foreground">Do Coração da Comunidade para o Futuro da Tecnologia</p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mx-auto mt-12 max-w-4xl">
          <div className="space-y-6 text-center text-muted-foreground">
            <p className="leading-relaxed">A nossa história começa com o pé no chão e o olhar voltado para o próximo. Nascemos da necessidade de integrar <strong className="text-foreground">tecnologia e saúde pública</strong>, fundamentados na luta direta pelas necessidades da população.</p>
            <p className="leading-relaxed">Com o tempo, percebemos que a transformação da saúde exige novas ferramentas. A evolução tecnológica nos apresentou um novo desafio e uma oportunidade sem precedentes. Sentimos a necessidade de evoluir para ir além: hoje, somos o <strong className="text-primary">Projeto IARA - Assistente de Saúde Integrada no SUS</strong>.</p>
            <p className="leading-relaxed">Trabalhamos para garantir que o desenvolvimento tecnológico não seja um privilégio, mas um direito de todos. Promovemos inclusão digital, saúde de qualidade, e apoio às pautas comunitárias, agora potencializados pela <strong className="text-foreground">inteligência artificial</strong>.</p>
          </div>
        </AnimatedSection>

        <div className="mt-20">
          <AnimatedSection className="text-center">
            <SectionBadge>Nosso Propósito</SectionBadge>
            <h3 className="mt-6 text-balance text-2xl font-bold text-foreground sm:text-3xl">Missão e <span className="text-primary">Visão</span></h3>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={100}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Missão</h4>
                <p className="leading-relaxed text-muted-foreground">Promover o desenvolvimento humano e tecnológico das comunidades, oferecendo ferramentas de transformação por meio da inovação em saúde — garantindo que ninguém fique para trás na construção de um futuro mais justo e saudável.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Visão</h4>
                <p className="leading-relaxed text-muted-foreground">Ser referência nacional como projeto que integra tecnologia e humanidade, transformando realidades locais com soluções inovadoras, formando cidadãos conscientes e construindo comunidades saudáveis, inclusivas e conectadas ao futuro.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
