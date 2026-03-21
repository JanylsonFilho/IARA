"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, AlertCircle, Heart } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

// Componente do Player de Vídeo
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <div
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(!isPlaying)}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/video-poster.jpg"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/video_IARA.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Play overlay quando pausado */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-[#325565]/40 transition-all hover:bg-[#325565]/50"
          aria-label="Reproduzir video"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F15A22] text-white shadow-xl transition-transform hover:scale-110">
            <Play className="ml-1 h-8 w-8" />
          </div>
        </button>
      )}

      {/* Controles */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#325565]/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="rounded-full p-2 transition-colors hover:bg-[#00A0DC]/10"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-[#325565]" />
              ) : (
                <Play className="h-5 w-5 text-[#325565]" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="rounded-full p-2 transition-colors hover:bg-[#00A0DC]/10"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-[#325565]" />
              ) : (
                <Volume2 className="h-5 w-5 text-[#325565]" />
              )}
            </button>
          </div>
          <button
            type="button"
            onClick={handleFullscreen}
            className="rounded-full p-2 transition-colors hover:bg-[#00A0DC]/10"
            aria-label="Tela cheia"
          >
            <Maximize className="h-5 w-5 text-[#325565]" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Super Seção Unificada: Sobre
export function AboutSection() {
  return (
    <section id="sobre">
      {/* BLOCO 1: O que é a IARA */}
      <div className="bg-[#00A0DC] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título principal da seção "Sobre" em verde */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-xl font-bold text-[#009889] uppercase tracking-widest">Sobre</h2>
          </AnimatedSection>

          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="flex flex-col">
                {/* Subtítulo "O que é a IARA?" em laranja */}
                <h3 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl leading-relaxed">
                  <span className="bg-[linear-gradient(transparent_55%,#F15A22_55%)] text-white px-3 py-1 box-decoration-clone">
                    O que é a IARA?
                  </span>
                </h3>
                <p className="text-pretty text-xl leading-relaxed text-white">
                  A IARA (Inteligência Artificial para Regulação e Acompanhamento) é uma assistente virtual de saúde que utiliza inteligência artificial para acompanhar pacientes crônicos diretamente pelo WhatsApp. Desenvolvida como uma solução inovadora para o SUS, a IARA fornece orientações baseadas em evidências científicas, lembretes automáticos de medicamentos e consultas, além de conectar pacientes com profissionais de saúde quando necessário. Nossa missão é democratizar o acesso à saúde de qualidade, reduzindo filas e garantindo que cada paciente receba o acompanhamento contínuo que merece.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <VideoPlayer />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* BLOCO 2: Uma Nova Abordagem (Problema/Solução) - Layout Alternado */}
      <div className="bg-[#FFE6CB] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            {/* Esquerda: Cards de Problema e Solução - Ordem visual invertida no desktop */}
            <div className="order-2 lg:order-1">
              <div className="grid gap-8">
                {/* Card: O Problema */}
                <AnimatedSection delay={100}>
                  <div className="group relative overflow-hidden rounded-2xl border border-red-200/30 bg-red-50 p-8 transition-all duration-300 hover:shadow-xl">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-transparent" />
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                      <AlertCircle className="h-7 w-7 text-red-500" />
                    </div>
                    <h4 className="mb-4 text-2xl font-bold text-[#325565]">O Problema</h4>
                    <p className="mb-6 text-lg text-[#414042]">A realidade atual do acompanhamento de saúde</p>
                    <ul className="space-y-4">
                      {[
                        "Longos intervalos entre consultas médicas",
                        "Falta de comunicação contínua com profissionais de saúde",
                        "Dificuldade em tirar dúvidas sobre medicamentos e sintomas",
                        "Filas extensas para agendamento de consultas",
                        "Desconexão entre o paciente e seu tratamento",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-500">
                            {index + 1}
                          </span>
                          <span className="text-base text-[#414042]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>

                {/* Card: A Solução */}
                <AnimatedSection delay={200}>
                  <div className="group relative overflow-hidden rounded-2xl border border-[#F15A22]/30 bg-[#F15A22]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#F15A22]/10">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F15A22] to-transparent" />
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F15A22]/20">
                      <Heart className="h-7 w-7 text-[#F15A22]" />
                    </div>
                    <h4 className="mb-4 text-2xl font-bold text-[#325565]">A Solução</h4>
                    <p className="mb-6 text-lg text-[#414042]">Como a IARA preenche essa lacuna</p>
                    <ul className="space-y-4">
                      {[
                        "Assistente de IA disponível 24/7 no WhatsApp",
                        "Suporte contínuo entre as consultas médicas",
                        "Respostas confiáveis baseadas em evidências científicas",
                        "Lembretes automáticos de medicamentos e consultas",
                        "Integração direta com teleconsultas do SUS",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F15A22]/20 text-xs font-bold text-[#F15A22]">
                            ✓
                          </span>
                          <span className="text-base text-[#414042]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Direita: Descrição e contexto - Ordem visual invertida no desktop */}
            <AnimatedSection delay={300} className="order-1 lg:order-2">
              <div className="flex flex-col">
                <h3 className="text-balance text-3xl font-bold text-[#325565] sm:text-4xl mb-6">
                  Uma Nova Abordagem para o
                  <span className="text-[#F15A22] block">Cuidado</span>
                </h3>
                <p className="text-pretty text-xl leading-relaxed text-[#414042] mb-8">
                  Entenda como a IARA transforma a experiência de saúde de pacientes crônicos no SUS.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-gradient-to-b from-[#F15A22] to-[#009889]" />
                  <p className="text-base text-[#414042] leading-relaxed">
                    Ao identificar os desafios reais que enfrentam os pacientes, a IARA surge como uma resposta integrada, oferecendo suporte humanizado através da tecnologia.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mantendo a exportação anterior para compatibilidade
export function ProjectPresentationSection() {
  return <AboutSection />
}