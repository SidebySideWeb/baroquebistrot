"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReservationForm } from "@/components/reservation-form"
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { trackClickCall } from "@/lib/analytics"

export default function ContactClientPage() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <>
      <Navigation />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">{t.title}</h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground text-balance">{t.subtitle}</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8">{t.contactTitle}</h2>

                <div className="space-y-6">
                  {/* Phone - removed Button, showing only phone number */}
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.phoneLabel}</h3>
                      <a
                        href="tel:+302671022809"
                        className="text-muted-foreground hover:text-accent transition-colors font-light text-lg"
                        onClick={() => trackClickCall("+302671022809")}
                      >
                        +30 2671 022809
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 pt-6 border-t border-border">
                    <MapPin size={24} className="mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.address}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{t.addressValue}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 pt-6 border-t border-border">
                    <Clock size={24} className="mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">{t.hours}</h3>
                      <p className="text-muted-foreground font-light">{t.hoursValue}</p>
                    </div>
                  </div>

                  {/* Social - updated with real Facebook and Instagram links */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-medium mb-4">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/baroquelebistrot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded hover:bg-accent hover:border-accent transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://www.facebook.com/BaroqueleBistrot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded hover:bg-accent hover:border-accent transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-secondary rounded p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-light mb-6">{t.bookingTitle}</h2>
              <ReservationForm />
            </div>
          </div>

          {/* Google Map - replaced placeholder with real embedded Google Map */}
          <section className="mt-16 md:mt-24" aria-label="Location map">
            <div className="w-full rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1442.1816321096194!2d20.485902645532!3d38.17856734092966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135d87baf234bb8b%3A0xd02eb758a6f975f5!2sBaroque%20le%20Bistrot!5e0!3m2!1sen!2sgr!4v1768385108920!5m2!1sen!2sgr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Baroque le Bistrot Location - Solomou 15, Athens"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
