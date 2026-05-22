'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function Rules() {
  const rules = [
    {
      section: 'Alapvető Szabályok',
      items: [
        'Az úszásnál csak csomag nélkül lehet úszni a kezdetektől',
        'Kerékpározásnál a sisak kötelező',
        'A sportosok nem szabad rossz viselkedésben',
        'A versenyzőket előre fel kell regisztrálni'
      ]
    },
    {
      section: 'Úszás Szabályok',
      items: [
        'A nyílt vízű úszásban felvehet nyíltvízi úszóruha engedélyes',
        'Használhat egy úszósapka és úszószemüveget',
        'Versenyzőket nem lehet lökdösni vagy gátolni',
        'Úszóbójáknak követnie kell a jelölt útvonalat'
      ]
    },
    {
      section: 'Kerékpározás Szabályok',
      items: [
        'A sisak kötelező kezdettől a végéig',
        'A kerékpárak biztonságosnak kell lennie',
        'Nem szabad rángatni más versenyzőket',
        'Szolid freneknek kell lenniük biztonságos megálláshoz'
      ]
    },
    {
      section: 'Futás Szabályok',
      items: [
        'Futócipőt kell viselni a biztonsági okokból',
        'A versenyútvonalat követni kell',
        'A versenyzőket nem szabad elnyomni vagy blokkolni',
        'Az ívelt szabadon kell hagyni más versenyzőknek'
      ]
    }
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
              Triathlon Verseny Szabályok
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Ismerd meg az összes szabályt a fair és biztonságos versenyekért.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {rules.map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted p-8 rounded-lg border border-border"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {section.section}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-foreground text-background p-8 rounded-lg"
          >
            <h3 className="font-serif text-2xl font-bold mb-4">Doppingellenes Politika</h3>
            <p className="mb-4">
              A triathlon hozzákötelezett a fair-play-hez és a doppingellenes küzdelemhez. Minden versenyző erkölcsi kódexet írja alá, és rendszeres teszteknek vetik alá.
            </p>
            <p>
              Az eltérések súlyos következményeket vonnak maguk után, beleértve a diszkvalifikációt és az évekre szóló tiltottá nyilvánítást.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
