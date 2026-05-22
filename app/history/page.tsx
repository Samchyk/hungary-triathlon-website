'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function History() {
  const timeline = [
    { year: '1974', event: 'Az első Ironman verseny San Diegóban' },
    { year: '1978', event: 'Az olimpiai triatlon sport elismerése' },
    { year: '1990', event: 'A triathlon bekerül az olimpiai programmba' },
    { year: '2000', event: 'A triathlon első alkalommal az olimpián' },
    { year: '2010', event: 'A magyar triathlon közösség robbanásszerű növekedése' },
    { year: '2024', event: 'Mostani napok: a triathlon a világ legnépszerűbb sportjainak egyike' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              A Triathlon Története
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Felfedezd a legizgalmasabb sport történetét a kezdetektől napjainkig.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-serif text-2xl font-bold text-accent">{item.year}</p>
                  <p className="text-foreground/80 text-lg mt-2">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
