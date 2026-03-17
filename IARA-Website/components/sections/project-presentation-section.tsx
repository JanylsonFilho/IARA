"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
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
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-card shadow-2xl"
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
          className="absolute inset-0 flex items-center justify-center bg-background/40 transition-all hover:bg-background/50"
          aria-label="Reproduzir video"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110">
            <Play className="ml-1 h-8 w-8" />
          </div>
        </button>
      )}

      {/* Controles */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-foreground" />
              ) : (
                <Play className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-foreground" />
              ) : (
                <Volume2 className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
          <button
            type="button"
            onClick={handleFullscreen}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
            aria-label="Tela cheia"
          >
            <Maximize className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Seção principal exportada para a página
export function ProjectPresentationSection() {
  return (
    <section id="projeto" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
              Conheça o Projeto
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que é a <span className="text-primary">IARA</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A IARA (Inteligência Artificial para Regulação e Acompanhamento) é uma assistente virtual de saúde que utiliza inteligência artificial para acompanhar pacientes crônicos diretamente pelo WhatsApp.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mx-auto max-w-4xl">
            <VideoPlayer />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}