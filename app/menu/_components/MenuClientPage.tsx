"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { trackMenuView } from "@/lib/analytics"

export function MenuClientPage() {
  const { language } = useLanguage()
  const t = translations[language].menu

  useEffect(() => {
    trackMenuView()
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      <MobileCTA />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] mb-12 md:mb-16 rounded overflow-hidden">
            <Image
              src="/dinner.jpg"
              alt="Baroque le Bistrot Bar"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Intro */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">{t.title}</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-3xl mx-auto text-balance">
              {t.subtitle}
            </p>
          </div>

          {/* Menu Sections */}
          <div className="space-y-20">
            {/* Dessert Showcase */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.dessertShowcase}</h2>
              <div className="space-y-8">
                {t.showcase.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Brunch */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.brunch}</h2>
              <div className="space-y-8">
                {t.brunchItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Sweet & Pancakes */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.sweetPancakes}</h2>
              <div className="space-y-8">
                {t.sweetItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Street Feast */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.streetFeast}</h2>
              <div className="space-y-8">
                {t.streetItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Salad Bowls */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.saladBowls}</h2>
              <div className="space-y-8">
                {t.saladItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Bread, Dip and Platter */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.breadDip}</h2>
              <div className="space-y-8">
                {t.breadItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Starters */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.starters}</h2>
              <div className="space-y-8">
                {t.starterItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Salads */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.salads}</h2>
              <div className="space-y-8">
                {t.dinnerSalads.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Pasta - Risotto */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.pastaRisotto}</h2>
              <div className="space-y-8">
                {t.pastaItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Pizza */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.pizza}</h2>
              <div className="space-y-8">
                {t.pizzaItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Burger */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.burger}</h2>
              <div className="space-y-8">
                {t.burgerItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>

            {/* Main Courses */}
            <section>
              <h2 className="text-4xl md:text-5xl font-light mb-8 pb-4 border-b border-border">{t.mainCourses}</h2>
              <div className="space-y-8">
                {t.mainItems.map((item, index) => (
                  <MenuItem key={index} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function MenuItem({ name, description, price }: { name: string; description: string; price: string }) {
  return (
    <div className="flex justify-between items-start gap-4 group">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-accent transition-colors">{name}</h3>
        {description && (
          <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
      <div className="text-xl md:text-2xl font-light flex-shrink-0">{price}</div>
    </div>
  )
}
