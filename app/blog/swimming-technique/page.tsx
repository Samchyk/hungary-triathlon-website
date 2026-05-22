'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function SwimmingTechniqueArticle() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowLeft size={20} />
            Vissza a Bloghoz
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Úszás
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Az Úszástechnika Tökéletesítése
            </h1>
            <p className="text-xl text-foreground/70">
              Tanuld meg az alapvető úszástechnikákat, amelyek szükségesek a sikeres triatlon uszóásához.
            </p>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-foreground/80">
              <section>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Testhelyzet és Áramvonalasítás
                </h2>
                <p>
                  A testhelyzet az úszásos uszóáshoz alapvetően fontos. Egy megfelelő testhelyzet minimalizálja az ellenállást, és lehetővé teszi hatékonyabb mozgást a vízben. Az ideális testhelyzet test horizontális és aerodinamikus.
                </p>
                <p>
                  Legtöbb kezdő úszó magasra tartja az orrát, ami fenntartja az arccal a vízből a nézeteséen. Ez az eszakális testhelyzet nagyobb ellenálláshoz és kevesebb hatékonysághoz vezet. Helyette az arra kell törekednünk, hogy az arc a vízbe nézen, csak a felsőlégúti kitöltéséhez.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Karcsapások Technikája
                </h2>
                <p>
                  A kar csapása az úszás energiájának meghajtásáért felelős. Egy jó kar csapása három fázisból áll: behúzás, lökés és helyreállítás.
                </p>
                <ul className="space-y-2 pl-4 border-l-2 border-accent">
                  <li><strong>Behúzás:</strong> A kéz bemerül a vízbe az egyenlő vonal előtt</li>
                  <li><strong>Lökés:</strong> A kar húz az étékek az ellenkező háttal</li>
                  <li><strong>Helyreállítás:</strong> A kar lassan visszatér a kiinduló helyzetbe</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Lábcsapások és Ritmus
                </h2>
                <p>
                  A lábcsapások stabilizálást és támogatást adnak, azonban nem az elsődleges hajtóerő. A lábcsapásoknak ritmikus és olyan sebességűnek kell lenniük, amely megegyezik a kar mozgásával.
                </p>
                <p>
                  A legtöbb triatlonista a „hat verés" technikát használja: hat lábcsapás egy teljes karcsapási ciklus alatt. Ez biztosít jó egyensúlyt a stabilitás és a hatékonyság között.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Gyakorlati Gyakorlatok
                </h2>
                <p>
                  Itt van néhány gyakorlat a technika fejlesztéséhez:
                </p>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <p><strong>Drillezés:</strong> Gyakorolj csak karcsapásokat vagy csak lábcsapásokat</p>
                  <p><strong>Tempoöltés:</strong> Érezzük meg a helyes ritmusokat és időzítéseket</p>
                  <p><strong>Videó Elemzés:</strong> Vizsgáld meg a profi úszók mozgáseit és összehasonlítsd magaddal</p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Konzisztencia és Türelem
                </h2>
                <p>
                  Az úszástechnika fejlesztése időbe és gyakorlásba telik. Nem szabad sietni, és szükséges egy edző segítségét kérni, ha lehetséges. A legtöbb kezdő egy év szisztematikus edzés után tapasztalja meg az igazi fejlődést.
                </p>
              </section>
            </div>
          </motion.div>

          {/* Related Articles */}
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
                { title: 'Sérülésmegelőzés Triatlonistáknak', href: '/blog/injury-prevention' }
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
