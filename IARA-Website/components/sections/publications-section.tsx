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
import { ExternalLink } from "lucide-react"

export function PublicationsSection() {
  const publications = [
    {
      title: "Design, implementação e avaliação da MarIA, uma assistente virtual com tecnologia GPT-3.5 para apoiar pacientes com diabetes mellitus tipo 2 (DM)",
      authors: "Vasco Furtado, Jorge Araujo, Elizabeth S Furtado, Rafael Bomfim, Vitória Silva, Nickolas Mororó, Lucas Vasconcelos, Cecília Carvalho, Marcos Severo, Juliana Torres, Juliana Oliveira, Antonio Bruno Freitas",
      summary:
        "Este artigo apresenta o design, a implementação e a avaliação da MarIA, uma assistente virtual baseada no GPT-3.5 integrada a uma plataforma de mensagens para apoiar pacientes com diabetes mellitus tipo 2 (DM). A MarIA emprega uma arquitetura multiagente que permite diferentes estilos de diálogo e graus de personalização. Em um estudo longitudinal de 3 meses envolvendo 35 participantes, as interações personalizadas aumentaram o engajamento em 26%, enquanto o tamanho das mensagens mais que quadruplicou — gerando uma compreensão mais rica do contexto do paciente. Essa contextualização mais profunda permitiu que a MarIA iniciasse conversas mais relevantes e significativas, promovendo um ciclo positivo de engajamento contínuo. A segurança foi avaliada criticamente. Embora a MarIA não tenha gerado alucinações factuais, algumas sugestões gerais de saúde — embora precisas isoladamente — podem ser inapropriadas para usuários com restrições clínicas específicas.",
      year: "2025",
      link: "https://scholar.google.com.br/citations?view_op=view_citation&hl=pt-BR&user=UX9GgPgAAAAJ&sortby=pubdate&citation_for_view=UX9GgPgAAAAJ:bz8QjSJIRt4C"
    },
    {
      title: "Sistema Multiagente aplicado à atenção contínua à saúde",
      authors: "Antônio Bruno de Carvalho Freitas, Elizabeth Furtado, Vasco Furtado",
      summary:
        "Este artigo propõe um sistema multiagente (SMA) para apoiar a atenção contínua à saúde de pacientes crônicos, com foco no diabetes tipo 2 (DT2). O SMA consiste em cinco agentes: Agente Paciente, Especialista em DT2, Nutricionista, Educador Físico e Psicólogo. Eles interagem para fornecer orientação personalizada, considerando os aspectos físicos e emocionais do paciente.",
      year: "2025",
      link: "https://scholar.google.com.br/citations?view_op=view_citation&hl=pt-BR&user=UX9GgPgAAAAJ&sortby=pubdate&citation_for_view=UX9GgPgAAAAJ:FAceZFleit8C"
    },
    {
      title: "O Processo de Design Baseado na Abordagem de Design Science Research para a Concepção de um Assistente de Saúde como Apoio para Pacientes Diabéticos",
      authors: "Marcos Severo, Vasco Furtado, Elizabeth Furtado",
      summary:
        "O diabetes é uma doença crônica que exige acompanhamento contínuo, frequentemente dificultado pela falta de recursos em sistemas públicos de saúde. Assistentes virtuais têm se mostrado promissores no apoio a esses pacientes, oferecendo suporte personalizado e reduzindo a sobrecarga dos profissionais de saúde. Este artigo descreve o processo de design para a concepção de um agente conversacional integrado ao WhatsApp, focado em ajudar pacientes com diabetes e fornecer informações.",
      year: "2025",
      link: "https://scholar.google.com.br/citations?view_op=view_citation&hl=pt-BR&user=UX9GgPgAAAAJ&sortby=pubdate&citation_for_view=UX9GgPgAAAAJ:4fGpz3EwCPoC"
    }
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
                    <p className="text-muted-foreground text-justify">{pub.summary}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Button variant="outline" size="sm" className="gap-2 rounded-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Acessar Artigo
                        </a>
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