"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Heart, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

// Componente do Player de Vídeo (Mantido intacto)
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
    // Fundo Unificado Azul (bg-[#00A0DC])
    <section id="sobre" className="w-full bg-[#00A0DC] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* =========================================
            TÍTULO PRINCIPAL DA SEÇÃO (Centralizado e Laranja)
        ========================================= */}
        <AnimatedSection className="mb-16 md:mb-24 text-center">
          <h2 className="text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Sobre</h2>
        </AnimatedSection>

        {/* =========================================
            BLOCO 1: O que é a IARA? 
            (Texto na Esquerda, Vídeo na Direita)
        ========================================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24 lg:mb-32">
          <AnimatedSection>
            <div className="flex flex-col items-start text-left">
              {/* Título "O que é a IARA" com destaque laranja */}
              <h3 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl leading-relaxed">
                <span className="bg-[linear-gradient(transparent_55%,#F15A22_55%)] text-white px-3 py-1 box-decoration-clone">
                  O que é a IARA ?
                </span>
              </h3>
              {/* Texto em BRANCO (text-white) */}
              <p className="text-lg md:text-xl leading-relaxed text-white mt-4">
                A IARA (Inteligência Artificial para Regulação e Acompanhamento) é uma assistente virtual de saúde que utiliza inteligência artificial para acompanhar pacientes crônicos diretamente pelo WhatsApp.
                <br /><br />
                Ela automatiza a triagem, responde a dúvidas comuns e monitora o progresso do tratamento, liberando os profissionais de saúde para focar no que realmente importa: o atendimento humano e especializado.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="w-full">
              <VideoPlayer />
            </div>
          </AnimatedSection>
        </div>


        {/* =========================================
            BLOCO 2: Uma Nova Abordagem
            (Elemento Visual na Esquerda, Texto na Direita)
        ========================================= */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Esquerda: Elemento Visual Abstrato */}
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#DBEAFE] shadow-sm flex items-center justify-center p-8">
              {/* Ícones decorativos de fundo */}
              <Heart className="w-40 h-40 text-[#F15A22] opacity-10 absolute -bottom-10 -left-10" />
              <ShieldCheck className="w-32 h-32 text-[#009889] opacity-10 absolute top-10 -right-5" />
              
              {/* Card centralizado na imagem */}
              <div className="text-center z-10 space-y-5 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white max-w-sm">
                <div className="w-16 h-16 bg-[#F15A22]/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-[#F15A22]" />
                </div>
                <h4 className="text-2xl font-bold text-[#325565]">Cuidado Contínuo</h4>
                <p className="text-[#325565]/70">
                  Conectando pacientes e profissionais de forma inteligente e humanizada.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Direita: Textos Consolidados (Problema + Solução em Narrativa) */}
          <AnimatedSection delay={200} className="order-1 lg:order-2">
            <div className="flex flex-col items-start text-left">
              {/* Título com o efeito de background */}
              <h3 className="mb-8 text-balance text-3xl font-bold tracking-tight sm:text-4xl leading-relaxed">
                <span className="bg-[linear-gradient(transparent_55%,#F15A22_55%)] text-white px-3 py-1 box-decoration-clone inline-block whitespace-nowrap">
                  Uma nova abordagem para o cuidado
                </span>
              </h3>
              
              {/* Texto em BRANCO (text-white) */}
              <div className="space-y-6 text-lg text-white leading-relaxed">
                <p>
                  A realidade atual do sistema de saúde muitas vezes impõe longos intervalos entre consultas e filas extensas, deixando o paciente desconectado do seu próprio tratamento. É comum surgirem dúvidas sobre medicamentos ou sintomas sem que haja um canal rápido de comunicação com os profissionais.
                </p>
                {/* Destaque lateral */}
                <div className="pl-4 border-l-4 border-[#009889]">
                  <p className="font-medium text-white">
                    A IARA preenche exatamente essa lacuna. Funcionando 24 horas por dia, 7 dias por semana pelo WhatsApp, ela oferece suporte contínuo entre as consultas.
                  </p>
                </div>
                <p>
                  Com respostas confiáveis baseadas em evidências científicas, lembretes automáticos e integração direta com o SUS, a IARA transforma a jornada do paciente, garantindo que ele nunca se sinta desamparado no seu processo de cura.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

// Mantendo a exportação anterior para compatibilidade com o page.tsx
export function ProjectPresentationSection() {
  return <AboutSection />
}