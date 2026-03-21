"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AlertCircle, Heart } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="bg-[#FFE6CB] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-balance text-3xl font-bold text-[#325565] sm:text-4xl">Uma Nova Abordagem para o <span className="text-[#F15A22]">Cuidado</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#414042]">Entenda como a IARA transforma a experiência de saúde de pacientes crônicos no SUS.</p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="group relative overflow-hidden rounded-2xl border border-red-200/30 bg-red-50 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                <AlertCircle className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#325565]">O Problema</h3>
              <p className="mb-6 text-[#414042]">A realidade atual do acompanhamento de saúde</p>
              <ul className="space-y-4">
                {[
                  "Longos intervalos entre consultas médicas",
                  "Falta de comunicação contínua com profissionais de saúde",
                  "Dificuldade em tirar dúvidas sobre medicamentos e sintomas",
                  "Filas extensas para agendamento de consultas",
                  "Desconexão entre o paciente e seu tratamento",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-500">{index + 1}</span>
                    <span className="text-[#414042]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="group relative overflow-hidden rounded-2xl border border-[#F15A22]/30 bg-[#F15A22]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#F15A22]/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F15A22] to-transparent" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F15A22]/20">
                <Heart className="h-7 w-7 text-[#F15A22]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#325565]">A Solução</h3>
              <p className="mb-6 text-[#414042]">Como a IARA preenche essa lacuna</p>
              <ul className="space-y-4">
                {[
                  "Assistente de IA disponível 24/7 no WhatsApp",
                  "Suporte contínuo entre as consultas médicas",
                  "Respostas confiáveis baseadas em evidências científicas",
                  "Lembretes automáticos de medicamentos e consultas",
                  "Integração direta com teleconsultas do SUS",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F15A22]/20 text-xs font-bold text-[#F15A22]">✓</span>
                    <span className="text-[#414042]">{item}</span>
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
