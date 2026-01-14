"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function MobileCTA() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language].mobileCta

  if (pathname === "/contact") return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <Link
        href="/contact"
        className="block w-full bg-primary text-primary-foreground py-4 px-6 text-center font-medium hover:bg-primary/90 transition-colors"
      >
        {t.book}
      </Link>
    </div>
  )
}
