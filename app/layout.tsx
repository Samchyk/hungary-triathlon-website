import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Triatlon Magyarország',
  description: 'Modern triathlon website dedicated to swimming, cycling, and running in Hungary',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={_playfair.variable}>
      <body className="font-sans antialiased bg-background">
        {children}
      </body>
    </html>
  )
}
