"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, FileText } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { trackClickCall } from "@/lib/analytics"

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language].home

  return (
    <>
      <Navigation />
      <MobileCTA />
      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] md:h-screen flex items-center justify-center mt-16 md:mt-20" aria-label="Hero section">
        <div className="absolute inset-0">
          <Image src="/bar-interior.jpg" alt="Baroque le Bistrot Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-6 tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 md:mb-12 tracking-wide">{t.subtitle}</p>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12 text-balance">
            {t.hero}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">{t.bookButton}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
            >
              <Link href="/menu">{t.viewMenuButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mood Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-6 md:space-y-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-balance">{t.mood1}</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-balance">{t.mood2}</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-balance">{t.mood3}</p>
          </div>
        </div>
      </section>

      {/* Menu Images Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-[3/4]">
              <Image src="/DKQR3090.PNG" alt="Brunch at Baroque" fill className="object-cover rounded" />
            </div>
            <div className="relative aspect-[3/4]">
              <Image src="/QANO0264.PNG" alt="Signature Cocktails" fill className="object-cover rounded" />
            </div>
            <div className="relative aspect-[3/4]">
              <Image src="/UMZY5246.PNG" alt="Refreshing Drinks" fill className="object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image src="/bar-shelves.jpg" alt="Bar at Baroque le Bistrot" fill className="object-cover rounded" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance">{t.experienceTitle}</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground text-pretty">
                {t.experienceText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-balance">{t.menuTitle}</h2>
              <p className="text-lg md:text-xl font-light text-muted-foreground text-balance">{t.menuSubtitle}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-medium">{t.breakfastBrunch}</h3>
                <p className="text-muted-foreground font-light">{t.breakfastDesc}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-medium">{t.streetFeast}</h3>
                <p className="text-muted-foreground font-light">{t.streetDesc}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-medium">{t.dinner}</h3>
                <p className="text-muted-foreground font-light">{t.dinnerDesc}</p>
              </div>
            </div>

            <Button asChild size="lg" variant="outline">
              <Link href="/menu">
                <FileText className="mr-2" size={18} />
                {t.fullMenu}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-balance">{t.reservationTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+302101234567" onClick={() => trackClickCall("+302101234567")}>
                  <Phone className="mr-2" size={18} />
                  {t.callUs}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <FileText className="mr-2" size={18} />
                  {t.bookingForm}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
