'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Activity, Wind, Zap } from 'lucide-react'

export default function Disciplines() {
  const disciplines = [
    {
      icon: Activity,
      title: 'Úszás',
      distance: '750m - 3.8km',
      description: 'Az első szakasz, ahol a technika és a szellemi erő döntő. Az úszás megköveteli az erős alapokat és a vízben való komfortérzetet.',
      image: '/images/swimming-discipline.jpg',
      tips: [
        'Fokozd a vízben való idődet fokozatosan',
        'Tanulj meg a nyílt vízben úszni',
        'Tartsd meg az egyenletes tempót',
        'Invesztálj jó úszószemüvegbe és fürdőruhában',
      ]
    },
    {
      icon: Zap,
      title: 'Kerékpározás',
      distance: '20km - 180km',
      description: 'A második szakasz, ahol a kitartás és a stratégiai gondolkodás kritikus. A jó kerékpár és az alapos edzés elengedhetetlen.',
      image: '/images/cycling-discipline.jpg',
      tips: [
        'Állítsd be a kerékpárod ergonomikusan',
        'Gyakorold meg az aerotechnikát',
        'Építsd meg a hosszú futamokat',
        'Tanulj a lejtőkön járni és menni',
      ]
    },
    {
      icon: Wind,
      title: 'Futás',
      distance: '5km - 42km',
      description: 'A végső szakasz, amely megmutatkozik a kitartásod és a mentális erőd. A jó futó alapok megvédik téged a sérülésektől.',
      image: '/images/running-discipline.jpg',
      tips: [
        'Tartsd meg az egyenletes lépésfrekvenciát',
        'Erősítsd meg a futó specifikus izmokat',
        'Invesztálj a jó futócipőbe',
        'Tanulj meg a fáradtan futni',
      ]
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
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              A Triathlon Három Szakasza
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Fedezd fel az úszás, kerékpározás és futás világát, és tanulj meg megtervezni az edzésedet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon
            return (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-3 bg-accent/10 rounded-lg"
                    >
                      <Icon className="text-accent" size={32} />
                    </motion.div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-foreground">
                        {discipline.title}
                      </h2>
                      <p className="text-accent font-semibold text-sm">{discipline.distance}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                    {discipline.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-80 rounded-xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={discipline.image}
                      alt={discipline.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Lényeges Tippek
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={discipline.title}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.15 }}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {discipline.title} Tippek
                </h3>
                <ul className="space-y-3">
                  {discipline.tips.map((tip) => (
                    <motion.li 
                      key={tip}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3 text-foreground/80"
                    >
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span>{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2,000+', label: 'Aktív Triatlonista' },
              { number: '150+', label: 'Edzésövezet' },
              { number: '50+', label: 'Esemény Évente' },
              { number: '100%', label: 'Támogató Közösség' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-background/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
