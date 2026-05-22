'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const articles = [
    {
      id: 'swimming-technique',
      title: 'Az Úszástechnika Tökéletesítése',
      excerpt: 'Tanuld meg az alapvető úszástechnikákat és fejlesz teljesítményed az úszás során.',
      category: 'Úszás'
    },
    {
      id: 'cycling-aerodynamics',
      title: 'Kerékpáros Aerodinamika Szakértői Útmutatója',
      excerpt: 'Fedezd fel, hogyan lehet javítani az aerodinamikát és csökkenteni az ellenállást.',
      category: 'Kerékpározás'
    },
    {
      id: 'running-endurance',
      title: 'Futó Autonómia és Kitartásfejlesztés',
      excerpt: 'Ismerj meg stratégiákat a futás kitartásának fejlesztésére.',
      category: 'Futás'
    },
    {
      id: 'nutrition-fueling',
      title: 'Verseny Alatti Feltöltés Stratégiája',
      excerpt: 'Tanuld meg, hogyan kell megfelelően étkezni a verseny során.',
      category: 'Táplálkozás'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Triathlon Blog Központ
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Olvasd a legfrissebb cikkeket edzésről, technikáról és triathlon életmódról.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
              >
                <Link href={`/blog/${article.id}`}>
                  <div className="h-full bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                      Olvasd tovább
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-foreground text-background px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Értesülj az Új Cikkekről
          </h2>
          <p className="text-background/80 mb-6">
            Iratkozz fel az értesítésekre és kapj napi tanácsokat közvetlenül az e-mailed.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
