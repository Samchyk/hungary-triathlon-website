'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const features = [
    { 
      title: 'Úszás', 
      description: 'Technikai tippek és edzésterv', 
      href: '/disciplines',
      image: '/images/swimming-discipline.jpg'
    },
    { 
      title: 'Kerékpározás', 
      description: 'Felszerelés és teljesítmény', 
      href: '/equipment',
      image: '/images/cycling-discipline.jpg'
    },
    { 
      title: 'Futás', 
      description: 'Sérülésmentesség és táplálkozás', 
      href: '/nutrition',
      image: '/images/running-discipline.jpg'
    },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Triatlonista Központ Magyarország
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl text-pretty mb-8">
                Fedezd fel az úszás, kerékpározás és futás világát. Tippek, edzéstervek és közösség triatlonistáknak.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Fedezd fel a Blogot
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/hero-triathlon.jpg"
                alt="Hero triathlon athlete"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Link href={feature.href}>
                  <div className="rounded-lg overflow-hidden bg-card border border-border hover:border-accent/50 transition-all group cursor-pointer shadow-md hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 mb-4">{feature.description}</p>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        Tudj meg többet
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Csatlakozz közösségünkhöz
            </h2>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto text-lg">
              Kapj napi tanácsokat, edzésterveket és motivációt a triathlon világból.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Vegyük fel a Kapcsolatot
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
