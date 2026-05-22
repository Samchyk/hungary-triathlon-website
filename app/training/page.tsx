'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Zap } from 'lucide-react'

export default function Training() {
  const trainingTips = [
    {
      title: 'Alapozás és Fejlesztés',
      description: 'Építsd meg az erős alapokat szisztematikus edzéssel. Az első 8-12 hét kulcsfontosságú a hosszú távú teljesítmény érdekében.',
      disciplines: ['Úszás', 'Kerékpározás', 'Futás']
    },
    {
      title: 'Intervall Edzések',
      description: 'Az intenzív intervallum edzések a leghatékonyabb módja az aerob kapacitás fejlesztésének és a sebességnövekedésnek.',
      disciplines: ['Kerékpározás', 'Futás']
    },
    {
      title: 'Helyreállítás és Regeneráció',
      description: 'Az aktív regeneráció, megfelelő alvás és táplálkozás éppen olyan fontos, mint az edzés maga.',
      disciplines: ['Úszás', 'Kerékpározás', 'Futás']
    },
    {
      title: 'Keresztedzés',
      description: 'A hátizmok, mag erő és flexibilitás munkáinak integrálása megelőzi a sérüléseket és javítja az átfogó teljesítményt.',
      disciplines: ['Erősítő edzés', 'Nyújtás']
    }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
                Edzési Útmutató
              </h1>
              <p className="text-lg text-foreground/70 mb-6">
                Átfogó edzési stratégiák és gyakorlatok a triathlon szakterületeihez.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Személyre szabott edzéstervek</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Szakértői tanácsok</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Helyreállítási stratégiák</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/training-program.jpg"
                alt="Training program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trainingTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent/50 transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-accent" size={24} />
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  {tip.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tip.disciplines.map((discipline) => (
                    <span
                      key={discipline}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold hover:bg-accent/20 transition-colors"
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Weekly Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-lg p-8 shadow-md"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="text-accent" size={32} />
              Minta Heti Edzési Program
            </h2>
            <div className="space-y-3">
              {[
                { day: 'Hétfő', workout: 'Úszás: 60 perc fejlesztési edzés' },
                { day: 'Kedd', workout: 'Futás: 40 perc intervall edzés' },
                { day: 'Szerda', workout: 'Kerékpározás: 90 perc Base Building' },
                { day: 'Csütörtök', workout: 'Úszás: 50 perc technikai munka' },
                { day: 'Péntek', workout: 'Erősítő edzés: 45 perc mag és alsó testmunka' },
                { day: 'Szombat', workout: 'Hosszú triatlonos gyakorlat: úszás → kerékpározás → futás' },
                { day: 'Vasárnap', workout: 'Aktív regeneráció: könnyű jogger vagy séta' },
              ].map((item, idx) => (
                <motion.div 
                  key={item.day}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="flex gap-4 pb-3 border-b border-border/50 last:border-0 hover:bg-accent/5 px-3 py-2 rounded transition-colors"
                >
                  <span className="font-semibold text-accent min-w-20">{item.day}</span>
                  <span className="text-foreground/80">{item.workout}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
