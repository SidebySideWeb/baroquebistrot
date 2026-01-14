"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "el" ? "en" : "el")}
      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-secondary transition-colors"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span className="text-sm font-light uppercase">{language === "el" ? "EN" : "ΕΛ"}</span>
    </button>
  )
}
