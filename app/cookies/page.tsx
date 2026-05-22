'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function Cookies() {
  const lastUpdated = new Date().toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Cookie Szabályzat
            </h1>
            <p className="text-foreground/70">
              Utolsó frissítés: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/80">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Mi a Cookie?
              </h2>
              <p>
                A cookie egy kis szövegfájl, amelyet az Ön böngészője tárol az Ön eszközén. A sütik segítik a webszolgáltatások működését, valamint javítják a felhasználói élményt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Hogyan Használunk Sütiket
              </h2>
              <p>
                A Weboldal a következő típusú sütiket használja:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Szükséges sütik:</strong> A Weboldal működéséhez szükséges (login, biztonsági funkciók)</li>
                <li><strong>Teljesítmény sütik:</strong> Az Ön viselkedésének elemzése és a Weboldal optimalizálása</li>
                <li><strong>Funkcionális sütik:</strong> Az Ön beállításainak megjegyzése</li>
                <li><strong>Reklám sütik:</strong> Hirdetések az Ön érdeklődéséhez igazítása</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Az Ön Választása
              </h2>
              <p>
                Az Ön böngészőjében módosítható a sütikre vonatkozó beállítások. Lemondhat az optionális sütikről, azonban ez befolyásolhatja a Weboldal funkcionalitásának egy részét.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Harmadik Felek Sütikei
              </h2>
              <p>
                A Weboldal harmadik felek (például elemzési szolgáltatások, reklámozók) sütiket is használhatnak az Ön élménye javítása érdekében. Ez az adatvédelmi szabályzatban foglaltak szerint történik.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                A Sütik Törlése
              </h2>
              <p>
                A böngészőjében lévő sütiket módosítható vagy törölheti. Kérjük, tekintse meg a böngészője beállításait a további útmutatásért.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Forduljon Hozzánk
              </h2>
              <p>
                Ha kérdése van a cookie-szabályzattal kapcsolatban, kérjük, vegyük fel a kapcsolatot:
              </p>
              <p className="mt-3">
                Email: info@triatlon.hu
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
