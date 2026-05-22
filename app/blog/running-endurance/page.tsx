'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function RunningEnduranceArticle() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={20} />
            Vissza a Bloghoz
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Futás
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Futó Autonómia és Kitartásfejlesztés
            </h1>
            <p className="text-xl text-foreground/70">
              Ismerj meg stratégiákat a futás kitartásának fejlesztésére, hogy erősebben fejezd be a triatlont.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8 text-foreground/80"
          >
            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Az Aerob Alap Kiépítése
              </h2>
              <p>
                A kitartás alapja az aerob kapacitás. Ennek fejlesztéséhez hosszú, alacsony intenzitású futások szükségesek, ahol a pulzusszám a maximális 65-75%-án van. Ezek a futások edzik a szívet, a tüdőt és a zsíranyagcserét.
              </p>
              <p>
                A legtöbb sikeres triatlonista heti edzésidő 70-80%-át alacsony intenzitáson tölti. Ez a megközelítés lehetővé teszi a nagy mennyiségű edzést anélkül, hogy túledzéshez vezetne.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Tempófutások és Küszöb Edzés
              </h2>
              <p>
                A tempófutás egy közepesen kemény, fenntartható tempóban végzett edzés, amely a laktát küszöb körül zajlik. Ez a típusú edzés növeli a testet által tolerálható intenzitást anélkül, hogy fáradtság jelentkezne.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p className="font-semibold text-foreground mb-3">Tipikus Tempó Munkás:</p>
                <ul className="space-y-2">
                  <li>• 10-15 perc könnyű bemelegítés</li>
                  <li>• 20-40 perc tempófutás küszöbintenzitáson</li>
                  <li>• 10 perc könnyű lehűlés</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Brick Edzések
              </h2>
              <p>
                A brick edzés egy kerékpározás után közvetlenül következő futás. Ez segít a testnek megszokni az átállást, ami az egyik legnehezebb pillanat a triatlon során. A nehézkes, „téglalábak" érzése csak gyakorlással enyhül.
              </p>
              <p>
                Kezdetben elég 15-20 perc futás kerékpározás után, de ezt fokozatosan növelni kell a versenytávhoz közelítve.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Regeneráció és Edzésterhelés
              </h2>
              <p>
                A kitartás nem az edzés alatt, hanem az utána történő regenerációban épül fel. Megfelelő alvás, táplálkozás és pihenőnapok nélkül a test nem tud alkalmazkodni az edzésterheléshez.
              </p>
              <p>
                A 3:1 arány bevált módszer: három hét fokozatosan növekvő terhelés, majd egy könnyebb regenerációs hét. Ez a ciklikus megközelítés hosszú távú fejlődést biztosít sérülés nélkül.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Mentális Kitartás
              </h2>
              <p>
                A fizikai kitartás mellett a mentális kitartás is kulcsfontosságú. A hosszú futások edzik az elmét, hogy elviselje a kellemetlen érzéseket és kitartson a nehéz pillanatokban is.
              </p>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-border"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Kapcsolódó Cikkek
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Verseny Alatti Feltöltés Stratégiája', href: '/blog/nutrition-fueling' },
                { title: 'Az Úszástechnika Tökéletesítése', href: '/blog/swimming-technique' }
              ].map((article) => (
                <Link key={article.href} href={article.href}>
                  <div className="p-4 bg-muted rounded-lg border border-border hover:border-accent/50 transition-all cursor-pointer">
                    <h4 className="font-semibold text-foreground hover:text-accent transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
