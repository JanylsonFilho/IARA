"use client"

import { AnimatedSection } from "@/components/animated-section"
import { SectionBadge, FeatureCard } from "@/components/ui-helpers"
import { Stethoscope, Calendar, Shield } from "lucide-react"

const WhatsAppIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function FeaturesSection() {
  const features = [
    {
      icon: WhatsAppIcon,
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