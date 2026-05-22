'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsOpen(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="bg-foreground text-background px-4 py-6 shadow-xl border-t border-accent">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Cookie Hozzájárulás</h3>
                  <p className="text-sm text-background/80">
                    Sütikat használunk a felhasználói élmény javítása érdekében. Erről bővebben a{' '}
                    <Link href="/privacy" className="text-accent hover:underline">
                      adatvédelmi szabályzatban
                    </Link>
                    {' '}és a{' '}
                    <Link href="/cookies" className="text-accent hover:underline">
                      cookie szabályzatban
                    </Link>
                    {' '}olvashat.
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-sm font-semibold border border-background/20 rounded-lg hover:bg-background/10 transition-colors"
                  >
                    Elutasít
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Elfogad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
