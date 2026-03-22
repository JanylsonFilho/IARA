import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'IARA - Saúde na palma da mão',
  description: 'Sua assistente de saúde digital direto no WhatsApp. Acompanhamento contínuo, humanizado e inteligente para pacientes crônicos com Diabetes Tipo 2.',
  generator: 'v0.app',
  icons: {
    icon: '/IARA-logo.jpeg',
    apple: '/IARA-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
