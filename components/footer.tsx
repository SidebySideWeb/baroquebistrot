"use client"

import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { trackClickCall } from "@/lib/analytics"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const contact = translations[language].contact

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="relative h-16 w-56">
                <Image
                  src="/baroque-logo-transparent.png"
                  alt="Baroque le Bistrot"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">{t.contact}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <p className="font-light">{t.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+302671022809"
                  className="font-light hover:text-accent transition-colors"
                  onClick={() => trackClickCall("+302671022809")}
                >
                  +30 2671 022809
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <p className="font-light whitespace-pre-line">{contact.hoursValue}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/baroquelebistrot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/BaroqueleBistrot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground font-light">
          <p>
            © {new Date().getFullYear()} Baroque le Bistrot. {t.rights}
          </p>
          <p className="mt-2">
            Created by{" "}
            <a
              href="https://www.ftiaxesite.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors underline"
            >
              ftiaxesite.gr
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
