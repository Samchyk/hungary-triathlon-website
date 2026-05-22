'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  firstName: z.string().min(2, 'A név legalább 2 karakter hosszúnak kell lennie'),
  lastName: z.string().min(2, 'A vezetéknév legalább 2 karakter hosszúnak kell lennie'),
  email: z.string().email('Kérjük, adjon meg érvényes e-mail címet'),
  subject: z.string().min(5, 'A téma legalább 5 karakter hosszúnak kell lennie'),
  message: z.string().min(10, 'Az üzenet legalább 10 karakter hosszúnak kell lennie'),
  gdpr: z.boolean().refine(val => val === true, {
    message: 'Kérjük, fogadja el az adatvédelmi szabályzatot'
  })
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('[v0] Contact form error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Vegyük fel a Kapcsolatot
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Van kérdésed vagy észrevételeid? Szívesen hallunk tőled!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-accent/10 border border-accent text-foreground rounded-lg">
                Köszönöm az üzenetét! Hamarosan válaszolunk.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100/10 border border-red-500/50 text-red-700 rounded-lg">
                Sajnos hiba történt. Kérjük, próbálja meg később.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Keresztnév
                </label>
                <input
                  {...register('firstName')}
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="János"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Vezetéknév
                </label>
                <input
                  {...register('lastName')}
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Kiss"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                E-mail Cím
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="janos.kiss@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tárgy
              </label>
              <input
                {...register('subject')}
                type="text"
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="Edzési tanácsok"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Üzenet
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Írj ide az üzenetedet..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                {...register('gdpr')}
                type="checkbox"
                className="mt-1"
                id="gdpr"
              />
              <label htmlFor="gdpr" className="text-sm text-foreground/70">
                Elfogadom az <a href="/privacy" className="text-accent hover:underline">adatvédelmi szabályzatot</a> és tudomásul veszem, hogy az adataim feldolgozásra kerülnek.
              </label>
            </div>
            {errors.gdpr && (
              <p className="text-red-500 text-sm">{errors.gdpr.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Küldés...' : 'Üzenet Küldése'}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
