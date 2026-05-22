'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Apple, Zap, Droplets } from 'lucide-react'

export default function Nutrition() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const tips = [
    {
      category: 'Edzés Előtti Tápláló',
      items: [
        'Szénhidrátok: Oatmeal, banán, rizs (2-3 óra előtte)',
        'Fehérjék: Tojás, joghurt (könnyen emészthető)',
        'Folyadék: 500ml víz vagy sportital'
      ],
      icon: Apple
    },
    {
      category: 'Edzés Alatti Tápláló',
      items: [
        '1 órán túli edzésekhez: Szénhidrát-feltöltés (gél, piuré)',
        'Elektrolitok: Magnézium, kálium, nátrium',
        'Hidratálás: 200-300ml 15-20 percenként'
      ],
      icon: Zap
    },
    {
      category: 'Edzés Utáni Regeneráció',
      items: [
        'Fehérje + szénhidrát: 30-60 percen belül',
        'Hidratálás: 1.5l víz per 1kg testsúly veszteség',
        'Anti-inflamatorikus ételek: Bogyók, hal, zöld levelek'
      ],
      icon: Droplets
    },
    {
      category: 'Verseny Napján',
      items: [
        'Klasszikus reggeli: Palacsinta, mézzel, 2-3 óra előtte',
        'Sportital: 250ml 30 percenként',
        'Szénhidrátos gélok: A kerékpározás második felétől'
      ],
      icon: Apple
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
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
                Triathlon Táplálkozás Útmutató
              </h1>
              <p className="text-lg text-foreground/70 mb-6">
                Tanuld meg, hogyan kell megfelelően étkezni maximális teljesítmény érdekében.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-foreground/80"><span className="text-accent">✓</span> Személyre szabott étrendtervek</p>
                <p className="flex items-center gap-2 text-foreground/80"><span className="text-accent">✓</span> Szakértői tanácsok</p>
                <p className="flex items-center gap-2 text-foreground/80"><span className="text-accent">✓</span> Helyreállítási stratégiák</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/nutrition-guide.jpg"
                alt="Nutrition guide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.category}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-background p-8 rounded-lg border border-border hover:border-accent/50 transition-all shadow-md hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-accent" size={28} />
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex gap-3 text-foreground/80"
                      >
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-accent/10 p-8 rounded-lg border border-accent/50 backdrop-blur"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Lényeges Információk
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Napi vízfogyasztás', value: '3-4 liter' },
                { label: 'Gyümölcs és zöldség', value: '5-6 adag' },
                { label: 'Fehérje napi mennyisége', value: 'Testsúly × 1.2-1.6g' },
                { label: 'Szénhidrátok', value: '55-60% a kalóriából' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.05 * idx }}
                  className="flex items-center justify-between pb-2 border-b border-accent/30"
                >
                  <span className="text-foreground/80">{item.label}:</span>
                  <span className="font-bold text-accent">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
