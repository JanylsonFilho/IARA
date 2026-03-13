"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge, FeatureCard } from "@/components/ui-helpers"
import { MessageCircle, Stethoscope, Calendar, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento via WhatsApp",
      description:
        "Assistente de saúde disponível 24/7 no WhatsApp, respondendo dúvidas e orientando pacientes de forma humanizada.",
      gradient: "from-primary",
    },
    {
      icon: Stethoscope,
      title: "Suporte Medico",
      description:
        "Orientações baseadas em evidências científicas para pacientes crônicos, com encaminhamento quando necessário.",
      gradient: "from-chart-2",
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description:
        "Lembretes automáticos de medicamentos, consultas e exames, reduzindo faltas e melhorando a adesão ao tratamento.",
      gradient: "from-chart-3",
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description:
        "Proteção total das informações de saúde dos pacientes, seguindo todas as normas de privacidade e segurança.",
      gradient: "from-chart-4",
    },
  ]

  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionBadge>O Que Fazemos</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-bold text-foreground sm:text-4xl">Nossos <span className="text-primary">Recursos</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Iniciativas que transformam vidas na nossa comunidade.</p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientColor={feature.gradient}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
