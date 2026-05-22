"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Edzés", href: "/training" },
    { name: "Sportágak", href: "/disciplines" },
    { name: "Történelem", href: "/history" },
    { name: "Táplálkozás", href: "/nutrition" },
    { name: "Felszerelés", href: "/equipment" },
    { name: "Szabályok", href: "/rules" },
    { name: "Tények", href: "/facts" },
    { name: "Blog", href: "/blog" },
    { name: "Kapcsolat", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden sm:inline text-sm font-semibold text-foreground">
              Hungarytriatlon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
