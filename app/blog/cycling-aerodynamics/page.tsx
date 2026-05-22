'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function CyclingAerodynamicsArticle() {
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
                Kerékpározás
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Kerékpáros Aerodinamika Szakértői Útmutatója
            </h1>
            <p className="text-xl text-foreground/70">
              Fedezd fel, hogyan lehet javítani az aerodinamikát és csökkenteni az ellenállást kerékpározás során.
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
                Mi az Aerodinamika?
              </h2>
              <p>
                Az aerodinamika a levegővel való interakció tudománya. Kerékpározásban az aerodinamika döntő az alacsony vékonyság miatt: körülbelül 90% az erőd az ellenállás leküzdésére megy el magasabb sebességnél.
              </p>
              <p>
                Ez azt jelenti, hogy az aerodinamikában való kis javítások jelentős sebességnövekedéshez vezethetnek ugyanazon erőfeszítés mellett.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Testpozíció
              </h2>
              <p>
                A testpozíció az aerodinamika legfontosabb tényezője. Az egyenes gerinc, széles szögek és nagy profilfelület rossz aerodinamikát jelent.
              </p>
              <p>
                Helyette az aerobárra helyezve a testet, behajlítva az ízületeknél, és egy keskeny profilfelülettel jól csökkentik az ellenállást.
              </p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p className="font-semibold text-foreground mb-3">Helyes Pozíció:</p>
                <ul className="space-y-2">
                  <li>• Alsó testpozíció az aerobáron</li>
                  <li>• Behajlított ízületek 90 fok közelében</li>
                  <li>• Fej a vonal folytatásában</li>
                  <li>• Vállak szűk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Kerékpár Beállítás
              </h2>
              <p>
                A kerékpár geometriája döntő az aerodinamika szempontjából. Az aerodinamikus kerékpárnak rövid felső csöve, lapos felsőcsatornája és hosszú lánc hossza van.
              </p>
              <p>
                Az aerobár pozicionálása szintén fontos: az elülső végzetek az aerobáron nem lehetnek túl nyíltak a végtagok nyújtottsága miatt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Felszerelés Döntések
              </h2>
              <p>
                Az aerodinamikus ruhák, sisak és kerékpárok szintén szerepet játszanak. Az aerodinamikus sisak körülbelül 2-4 watt energiát takaríthat meg azonos sebességnél.
              </p>
              <p>
                Az aerodinamikus kerékpár kerekes készlet szintén kedvezően járulhat hozzá az Overall aerodinamikához.
              </p>
            </section>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
