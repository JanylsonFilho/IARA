"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge } from "@/components/ui-helpers"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function PublicationsSection() {
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
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">Publicações <span className="text-primary">Científicas</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Conheça os estudos e pesquisas que embasam o desenvolvimento da IARA.</p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {publications.map((pub, index) => (
              <AccordionItem key={index} value={`pub-${index}`} className="overflow-hidden rounded-2xl border border-border bg-background px-6 transition-all duration-300 hover:border-primary/50 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5">
                <AccordionTrigger className="py-6 text-left hover:no-underline [&[data-state=open]>div>span:first-child]:text-primary">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-muted-foreground transition-colors">{pub.year}</span>
                    <span className="font-bold text-foreground">{pub.title}</span>
                    <span className="text-sm text-muted-foreground">{pub.authors}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pb-4">
                    <p className="text-muted-foreground">{pub.summary}</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground">
                        <Download className="h-4 w-4" />
                        Baixar PDF
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground">
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
