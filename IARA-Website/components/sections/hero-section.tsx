"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

// Componente de Ícone do WhatsApp
const WhatsAppIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">Inovação & Impacto na Saúde</span>
              
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                IARA - <span className="text-primary">Saúde</span> na palma da mão.
              </h1>
              
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                A jornada que começou como um projeto acadêmico evoluiu para a <strong className="text-foreground">IARA - Assistente de Saúde Inteligente</strong>. Continuamos transformando vidas através da tecnologia, agregando o potencial transformador da IA para o amanhã.
              </p>
              
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" className="gap-2 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="https://wa.me/5585997672266" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    Falar com a IARA
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground" asChild>
                  <a href="/projeto">Conheça o Projeto</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-1">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                <div className="relative flex h-full min-h-[500px] flex-col items-center justify-start rounded-3xl bg-card p-8 pt-12">
                  
                  {/* Container da imagem ampliado e focado no topo */}
                  <div className="mb-10 flex h-48 w-48 items-center justify-center rounded-full bg-primary/10 shadow-xl">
                    <img src="/IARA-logo.jpeg" alt="IARA logo" className="h-44 w-44 rounded-full object-cover" />
                  </div>
                  
                  {/* Textos rebaixados */}
                  <div className="mt-8 flex flex-col items-center">
                    <h3 className="mb-2 text-3xl font-bold text-foreground">IARA</h3>
                    <p className="mb-6 text-center text-lg text-muted-foreground">Sua assistente de saúde digital</p>
                    <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      <span className="text-sm font-medium text-primary">Disponível 24/7</span>
                    </div>
                  </div>

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