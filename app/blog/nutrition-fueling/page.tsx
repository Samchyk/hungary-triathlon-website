'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NutritionFuelingArticle() {
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
                Táplálkozás
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Verseny Alatti Feltöltés Stratégiája
            </h1>
            <p className="text-xl text-foreground/70">
              Tanuld meg, hogyan kell megfelelően étkezni és hidratálódni a verseny során a csúcsteljesítményhez.
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
                Miért Fontos a Feltöltés?
              </h2>
              <p>
                A test glikogénraktárai körülbelül 90-120 percnyi intenzív erőfeszítésre elegendőek. Hosszabb távú triatlonon ezek kimerülnek, és külső energiaforrás nélkül a teljesítmény drasztikusan csökken — ezt nevezik „falba ütközésnek".
              </p>
              <p>
                A megfelelő feltöltési stratégia lehetővé teszi a stabil energiaszint fenntartását és a csúcsteljesítmény megőrzését a verseny végéig.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Verseny Előtti Étkezés
              </h2>
              <p>
                A verseny előtti 2-3 órában fogyassz könnyen emészthető szénhidrátban gazdag ételt, alacsony zsír- és rosttartalommal. Ez biztosítja a feltöltött glikogénraktárakat anélkül, hogy emésztési problémákat okozna.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p className="font-semibold text-foreground mb-3">Példa Étkezés:</p>
                <ul className="space-y-2">
                  <li>• Zabkása banánnal és mézzel</li>
                  <li>• Pirítós lekvárral és egy bögre kávé</li>
                  <li>• Fehér rizs csirkével</li>
                  <li>• 500-700 ml víz vagy izotóniás ital</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Feltöltés Verseny Közben
              </h2>
              <p>
                Az általános ajánlás 60-90 gramm szénhidrát óránként hosszabb távú verseny során. Ezt energiazselék, sportitalok és szilárd ételek kombinációjával lehet elérni.
              </p>
              <p>
                A glükóz és fruktóz keveréke (2:1 arányban) hatékonyabban felszívódik, mint a tiszta glükóz, és magasabb óránkénti felvételt tesz lehetővé bélpanaszok nélkül.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Hidratálás és Elektrolitok
              </h2>
              <p>
                A folyadékveszteség izzadás útján sebességet és teljesítményt csökkent. Cél: 500-800 ml folyadék óránként, hőmérséklettől és intenzitástól függően.
              </p>
              <p>
                Az izzadtsággal együtt nátrium, kálium és magnézium is eltávozik. Hosszabb versenyeken ezek pótlása létfontosságú az izomgörcsök és hyponatrémia elkerülése érdekében.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p className="font-semibold text-foreground mb-3">Elektrolit Ajánlások:</p>
                <ul className="space-y-2">
                  <li>• Nátrium: 400-800 mg óránként</li>
                  <li>• Kálium: 100-200 mg óránként</li>
                  <li>• Magnézium: 50-100 mg óránként</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Edzés Közbeni Gyakorlás
              </h2>
              <p>
                Soha ne próbálj ki új ételt vagy stratégiát versenynapon. Minden terméket és időzítést alaposan tesztelj edzésen, főleg a hosszú futások és kerékpározások során.
              </p>
              <p>
                A bél, mint az izmok, edzhető. A rendszeres szénhidrátbevitel edzés alatt javítja a tolerancia szintet és az emésztési hatékonyságot.
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
                { title: 'Futó Autonómia és Kitartásfejlesztés', href: '/blog/running-endurance' },
                { title: 'Kerékpáros Aerodinamika Szakértői Útmutatója', href: '/blog/cycling-aerodynamics' }
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
