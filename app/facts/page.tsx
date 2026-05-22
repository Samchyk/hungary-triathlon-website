'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function Facts() {
  const facts = [
    {
      category: 'Történeti Tények',
      items: [
        'Az első Ironman 1974-ben kerül megrendezésre San Diegóban',
        'Az eredeti triathlon 3 napos futam volt: futás, kerékpározás, úszás',
        '1978-ban a triathlon úgy módosult, hogy egy napban zajlott',
        'Az olimpiai triathlon 1.5km úszás, 40km kerékpározás, 10km futás'
      ]
    },
    {
      category: 'Világrekordok',
      items: [
        'Leggyorsabb Ironman: 7 óra 35 perc 39 másodperc',
        'Leghosszabb várusszázados verseny: 24 óra alatt',
        'Legtöbb Ironman végezhető az egyéni címre',
        'Legfiatalabb Ironman végző: 8 évés'
      ]
    },
    {
      category: 'Egészségügyi Előnyök',
      items: [
        'A triathlon javítja a szív-érrendszeri egészséget',
        'Csökkenti a szívbetegség és stroke kockázatát',
        'Javítja az agyi funkciót és mentális egészséget',
        'Erősíti az immunrendszert és csökkenti az infekciót'
      ]
    },
    {
      category: 'Érdekes Információk',
      items: [
        'Az úszásnál az adrenalin csúcspontja az elején alakul ki',
        'A kerékpározás során 4-6 óra alatt 3000-5000 kalóriát lehet elégetni',
        'A futás alatt az agyi felismerés 25%-al csökken a fáradtságtól',
        'A triatlonisták átlagosan 2-3 óra edzésidőt töltenek hetente'
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
              Érdekes Triathlon Tények
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Felfedezz gyengélkedő információkat és történeteket a triathlon világából.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {facts.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted p-8 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent font-bold">★</span>
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
            className="mt-12 text-center"
          >
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/50">
              <p className="text-2xl font-serif font-bold text-foreground mb-4">
                Tudtad?
              </p>
              <p className="text-foreground/80 mb-4">
                A triathlon az egyik legmegszerzethető sportok, amely olyan személyekre vonatkozik, akik különböző fizikai képességgel rendelkeznek. A paratriatlon versenyek bekerültek az olimpiai játékokba.
              </p>
              <p className="text-foreground/70 text-sm">
                A triathlon közösség az egyik leginkluábzívabb sportközösség az egész világon!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
