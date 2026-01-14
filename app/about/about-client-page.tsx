"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function AboutClientPage() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <div className="min-h-screen">
      <Navigation />
      <MobileCTA />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 mb-16 md:mb-0">
        <div className="max-w-5xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">{t.title}</h1>
          </div>

          {/* Content */}
          <div className="space-y-16 md:space-y-24">
            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative aspect-[4/5] order-2 md:order-1">
                <Image
                  src="/bar-interior.jpg"
                  alt="Baroque le Bistrot Interior"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-balance">{t.intro}</p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground text-pretty">
                  {t.introSub}
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-secondary rounded p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-light text-balance">{t.philosophyTitle}</h2>
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground text-balance">
                  {t.philosophy}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-light text-accent">01</div>
                <h3 className="text-xl md:text-2xl font-medium">{t.value1Title}</h3>
                <p className="font-light text-muted-foreground leading-relaxed">{t.value1}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-light text-accent">02</div>
                <h3 className="text-xl md:text-2xl font-medium">{t.value2Title}</h3>
                <p className="font-light text-muted-foreground leading-relaxed">{t.value2}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-5xl md:text-6xl font-light text-accent">03</div>
                <h3 className="text-xl md:text-2xl font-medium">{t.value3Title}</h3>
                <p className="font-light text-muted-foreground leading-relaxed">{t.value3}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <Image src="/IMG_6828.JPG" alt="Brunch at Baroque" fill className="object-cover rounded" />
              </div>
              <div className="relative aspect-square">
                <Image src="/IMG_0337.JPG" alt="Signature Cocktails" fill className="object-cover rounded" />
              </div>
              <div className="relative aspect-square">
                <Image src="/IMG_5717.jpg" alt="Coffee at Baroque" fill className="object-cover rounded" />
              </div>
              <div className="relative aspect-square">
                <Image src="/IMG_5669.jpg" alt="Bar at Baroque" fill className="object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
