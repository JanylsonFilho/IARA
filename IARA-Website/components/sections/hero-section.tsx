"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { MessageCircle, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">Inovação & Impacto na Saúde</span>
              <div className="flex items-center gap-6">
                <img src="/IARA-logo.jpeg" alt="IARA logo" className="h-20 w-20 rounded-full object-cover shadow" />
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Integrando <span className="text-primary">Tecnologia</span> a <span className="text-primary">Saúde</span>.
                </h1>
              </div>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                A jornada que começou como um projeto acadêmico evoluiu para a <strong className="text-foreground">IARA - Assistente de Saúde Inteligente</strong>. Continuamos transformando vidas através da tecnologia, agregando o potencial transformador da IA para o amanhã.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="gap-2 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="h-5 w-5" />
                  Falar com a IARA
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground" asChild>
                  <a href="/projeto">Conheça o Projeto</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-1">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="relative flex h-full flex-col items-center justify-center rounded-3xl bg-card p-8">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                    <img src="/IARA-logo.jpeg" alt="IARA logo" className="h-20 w-20 rounded-full object-cover" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">IARA</h3>
                  <p className="mb-4 text-center text-muted-foreground">Sua assistente de saúde digital</p>
                  <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="text-sm font-medium text-primary">Disponível 24/7</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-end rounded-3xl bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-primary">
                    <Activity className="h-5 w-5" />
                    <span className="font-medium">Projetos em Ação</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Transformando a saúde diariamente</p>
                </div>
              </div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
