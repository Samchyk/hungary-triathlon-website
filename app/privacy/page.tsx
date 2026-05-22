'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function Privacy() {
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
              Adatvédelmi Szabályzat
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
                Bevezetés
              </h2>
              <p>
                A Triatlon Magyarország (a továbbiakban: &quot;mi&quot;, &quot;unk&quot;, &quot;a Weboldal&quot;) elkötelezett az Ön személyes adatainak védelme iránt. Ez az adatvédelmi szabályzat leírja, hogy hogyan gyűjtjük, felhasználjuk, osztjuk meg és védelmezzük az Ön adatait.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Mi az Adatokkal Tenni Fogunk
              </h2>
              <p>
                Az Ön személyes adatait a következő célokra használjuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Az Ön kéréseire és kérdéseire válaszolni</li>
                <li>Az Ön előfizetését kezelni</li>
                <li>Promóciós anyagok és hírlevelek küldése (az Ön hozzájárulásával)</li>
                <li>A Weboldal és a szolgáltatások fejlesztése</li>
                <li>A jogi és szabályozási követelmények teljesítése</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Az Adatok Védelme
              </h2>
              <p>
                Az Ön adatai biztonságában vesszük. Szállítási technológiákat, hozzáférés-ellenőrzéseket és egyéb megfelelő biztonsági intézkedéseket alkalmazunk az Ön adatainak védelme érdekében.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Az Ön Jogai
              </h2>
              <p>
                Az Ön joga van:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hozzáférni az Ön személyes adataihoz</li>
                <li>Kérni az Ön adatainak korrekciót</li>
                <li>Kérni az Ön adatainak törlését</li>
                <li>Tiltakozni az Ön adatainak feldolgozása ellen</li>
                <li>Az adatok hordozhatóságáról szóló adatokat kérni</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Sütik
              </h2>
              <p>
                A Weboldal sütiket (cookies) használ a felhasználói élmény javítása érdekében. A sütik kis szövegfájlok, amelyeket az Ön böngészőjében tárolunk. Az Ön hozzájárulásával, valamint a vonatkozó jogi követelmények szerint használjuk a sütiket.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                Forduljon Hozzánk
              </h2>
              <p>
                Ha kérdése van az adatvédelmi szabályzattal vagy az Ön adatainak kezelésével kapcsolatban, kérjük, vegyük fel a kapcsolatot:
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
