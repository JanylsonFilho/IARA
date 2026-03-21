"use client"

import { AnimatedSection } from "@/components/animated-section"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#FFE6CB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-balance text-3xl font-bold text-[#325565] sm:text-4xl lg:text-5xl">Quem <span className="text-[#F15A22]">Somos</span></h2>
          <p className="mx-auto mt-4 text-lg text-[#414042]">Do Coração da Comunidade para o Futuro da Tecnologia</p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mx-auto mt-12 max-w-4xl">
          <div className="space-y-6 text-center text-[#414042]">
            <p className="leading-relaxed">A nossa história começa com o pé no chão e o olhar voltado para o próximo. Nascemos da necessidade de integrar <strong className="text-[#325565]">tecnologia e saúde pública</strong>, fundamentados na luta direta pelas necessidades da população.</p>
            <p className="leading-relaxed">Com o tempo, percebemos que a transformação da saúde exige novas ferramentas. A evolução tecnológica nos apresentou um novo desafio e uma oportunidade sem precedentes. Sentimos a necessidade de evoluir para ir além: hoje, somos o <strong className="text-[#F15A22]">Projeto IARA - Assistente de Saúde Integrada no SUS</strong>.</p>
            <p className="leading-relaxed">Trabalhamos para garantir que o desenvolvimento tecnológico não seja um privilégio, mas um direito de todos. Promovemos inclusão digital, saúde de qualidade, e apoio às pautas comunitárias, agora potencializados pela <strong className="text-[#325565]">inteligência artificial</strong>.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
