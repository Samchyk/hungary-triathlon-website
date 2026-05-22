'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-sm text-background/80">
              Hungarytriatlon
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/training" className="hover:text-accent transition-colors">Edzés</Link></li>
              <li><Link href="/disciplines" className="hover:text-accent transition-colors">Sportágak</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Kapcsolat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Jogi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Adatvédelmi Szabályzat</Link></li>
              <li><Link href="/cookies" className="hover:text-accent transition-colors">Cookie Szabályzat</Link></li>
            </ul>
          </div>

          {/* Social */}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/80">
          <p>&copy; {currentYear} Hungarytriatlon.</p>
          <p>contacts@hungarytriatlon.com</p>
        </div>
      </div>
    </footer>
  )
}
