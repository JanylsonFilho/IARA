"use client"

import { AnimatedSection } from "@/components/animated-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como a IARA pode me ajudar?",
    answer: "A IARA auxilia profissionais de saúde oferecendo suporte com inteligência artificial para otimizar processos e melhorar a jornada do paciente."
  },
  {
    question: "É seguro compartilhar meus dados médicos?",
    answer: "Sim, a IARA segue todas as normas de segurança e privacidade (como a LGPD) para garantir que as informações dos pacientes estejam sempre protegidas."
  },
  {
    question: "A plataforma funciona em dispositivos móveis?",
    answer: "Com certeza! Nossa plataforma é totalmente responsiva e pode ser acessada de qualquer smartphone, tablet ou computador."
  },
  {
    question: "Como faço para entrar em contato com o suporte?",
    answer: "Você pode nos acionar diretamente através da seção de contato no final da página ou enviando um e-mail para o nosso time de suporte."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <AnimatedSection className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Dúvidas Frequentes
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-[#DBEAFE] rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-white rounded-2xl px-6 shadow-sm"
                >
                  {/* Tamanho da fonte da pergunta aumentado para text-lg (mobile) e text-xl (desktop) */}
                  <AccordionTrigger className="text-lg md:text-xl text-foreground hover:no-underline hover:text-primary font-semibold text-left py-5">
                    {faq.question}
                  </AccordionTrigger>
                  {/* Tamanho da fonte da resposta definido como text-base (padrão) */}
                  <AccordionContent className="text-base text-foreground/80 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}