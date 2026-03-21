"use client"

import { type ReactNode } from "react"
import { useInView } from "@/components/animated-section"

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#00A0DC]/30 bg-[#00A0DC]/10 px-4 py-1.5 text-sm font-medium text-[#00A0DC]">
      {children}
    </span>
  )
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradientColor = "from-[#F15A22]",
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  description: string
  gradientColor?: string
  delay?: number
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#F15A22]/10`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradientColor} to-transparent`}
      />

      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F15A22]/20 text-[#F15A22] transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#325565]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#414042]">{description}</p>
    </div>
  )
}
