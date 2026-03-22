"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

// Ícone do WhatsApp padronizado
const WhatsAppIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

export function ContactSection() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#DBEAFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-balance text-3xl font-bold text-[#00A0DC] sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[#414042]">
            Tem interesse em parcerias, pesquisas ou quer saber mais detalhes institucionais? Fale com a nossa equipe.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={100}>
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-[#00A0DC]/30 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F15A22]/50 hover:shadow-xl hover:shadow-[#F15A22]/5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F15A22]/20 text-[#F15A22] transition-transform duration-300 group-hover:scale-110">
                <WhatsAppIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#325565]">WhatsApp Institucional</h3>
              <p className="mb-6 flex-1 text-base text-[#414042]">
                Atendimento voltado para gestores de saúde e parcerias acadêmicas.
              </p>
              <Button className="w-full gap-2 rounded-full bg-[#F15A22] text-white hover:bg-[#D94610]" asChild>
                <a href="https://wa.me/5585989551746?text=Olá! Gostaria de saber mais informações institucionais sobre o projeto IARA." target="_blank" rel="noopener noreferrer">
                  (85) 98955-1746
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Card de E-mail */}
          <AnimatedSection delay={200}>
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-[#00A0DC]/30 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F15A22]/50 hover:shadow-xl hover:shadow-[#F15A22]/5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00A0DC]/20 text-[#00A0DC] transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#325565]">E-mail</h3>
              <p className="mb-6 flex-1 text-base text-[#414042]">
                Envie suas propostas, dúvidas técnicas ou agende uma apresentação.
              </p>
              <Button variant="outline" className="w-full gap-2 rounded-full border-[#00A0DC]/30 bg-transparent text-[#325565] hover:bg-[#00A0DC]/10 hover:text-[#325565]" asChild>
                <a href="mailto:janylsonfilho@edu.unifor.br?subject=Interesse Institucional - Projeto IARA">
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Card de Localização */}
          <AnimatedSection delay={300}>
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-[#00A0DC]/30 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F15A22]/50 hover:shadow-xl hover:shadow-[#F15A22]/5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00A0DC]/20 text-[#00A0DC] transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#325565]">Localização</h3>
              <p className="mb-6 flex-1 text-base text-[#414042]">
                Desenvolvido no laboratório da Universidade de Fortaleza (UNIFOR).
              </p>
              <Button variant="outline" className="w-full gap-2 rounded-full border-[#00A0DC]/30 bg-transparent text-[#325565] hover:bg-[#00A0DC]/10 hover:text-[#325565]" asChild>
                <a href="https://www.google.com/maps/search/Universidade+de+Fortaleza+-+UNIFOR/" target="_blank" rel="noopener noreferrer">
                  Ver no Mapa
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Card de Redes Sociais */}
          <AnimatedSection delay={400}>
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-[#00A0DC]/30 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F15A22]/50 hover:shadow-xl hover:shadow-[#F15A22]/5">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F15A22]/20 text-[#F15A22] transition-transform duration-300 group-hover:scale-110">
                <Linkedin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#325565]">Redes Sociais</h3>
              <p className="mb-6 flex-1 text-base text-[#414042]">
                Acompanhe as atualizações e novidades do projeto IARA.
              </p>
              <div className="flex w-full justify-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F15A22]/10 text-[#F15A22] transition-all duration-300 hover:bg-[#F15A22] hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A0DC]/10 text-[#00A0DC] transition-all duration-300 hover:bg-[#00A0DC] hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F15A22]/10 text-[#F15A22] transition-all duration-300 hover:bg-[#F15A22] hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A0DC]/10 text-[#00A0DC] transition-all duration-300 hover:bg-[#00A0DC] hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}