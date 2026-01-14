"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { LanguageSwitcher } from "./language-switcher"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <div className="relative w-48 md:w-64 h-14 md:h-18">
              <Image
                src="/baroque-logo-transparent.png"
                alt="Baroque le Bistrot"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-light hover:text-accent transition-colors">
              {t.home}
            </Link>
            <Link href="/menu" className="text-sm font-light hover:text-accent transition-colors">
              {t.menu}
            </Link>
            <Link href="/about" className="text-sm font-light hover:text-accent transition-colors">
              {t.about}
            </Link>
            <Link href="/contact" className="text-sm font-light hover:text-accent transition-colors">
              {t.contact}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-lg font-light hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.home}
            </Link>
            <Link
              href="/menu"
              className="block text-lg font-light hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.menu}
            </Link>
            <Link
              href="/about"
              className="block text-lg font-light hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-light hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.contact}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
