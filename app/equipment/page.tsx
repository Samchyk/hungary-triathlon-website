'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Equipment() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const equipment = [
    {
      sport: 'Úszás',
      image: '/images/swimming-discipline.jpg',
      items: [
        { name: 'Nyílt vízű úszóruha', why: 'Hidegvízi komfort és röntgensugárzás védelme' },
        { name: 'Úszószemüveg', why: 'Jó látás és vízalatti kényelem' },
        { name: 'Úszósapka', why: 'Meleg és azonosíthatóság' },
        { name: 'Útilánc', why: 'Nck, fülek és test felmelegítésére' },
      ]
    },
    {
      sport: 'Kerékpározás',
      image: '/images/cycling-discipline.jpg',
      items: [
        { name: 'Triatlonos kerékpár', why: 'Aerodinamikus és könnyű' },
        { name: 'Sisak', why: 'Kötelezően szükséges biztonsági felszerelés' },
        { name: 'Aerobár', why: 'Magasabb sebesség és jobb aerodinamika' },
        { name: 'Vékony gumiabroncsok', why: 'Alacsonyabb gördülési ellenállás' },
      ]
    },
    {
      sport: 'Futás',
      image: '/images/running-discipline.jpg',
      items: [
        { name: 'Triatlonos futócipő', why: 'Gyorsabb szárítás és könnyebb' },
        { name: 'Sportruha', why: 'Gyors száradás és kényelem' },
        { name: 'Futó zokni', why: 'Képlékeny támogatás és nyálka megelőzés' },
        { name: 'Futó óra', why: 'Teljesítmény nyomon követéshez' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Triathlon Felszerelés Útmutató
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Felfedezd az alapvető és haladó felszereléseket mindhárom sportághoz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {equipment.map((category, index) => (
              <motion.div
                key={category.sport}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                    {category.sport} Felszerelés
                  </h2>
                  <div className="grid gap-4">
                    {category.items.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="bg-background p-5 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
                      >
                        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                        <p className="text-foreground/70 text-sm">{item.why}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative h-80 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <Image
                    src={category.image}
                    alt={category.sport}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Vásárlási Útmutató
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kezdőknek',
                items: ['Alapvető csomag', 'Általános kerékpár', 'Szabványos futócipő']
              },
              {
                title: 'Haladók',
                items: ['Triathlon-specifikus gear', 'Aero kerékpár', 'Minőségi futócipő']
              },
              {
                title: 'Profiknak',
                items: ['Premium felszerelés', 'Carbon kerékpár', 'Professzionális cipő']
              }
            ].map((guide, idx) => (
              <motion.div
                key={guide.title}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.15 }}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">{guide.title}</h3>
                <ul className="space-y-2">
                  {guide.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
