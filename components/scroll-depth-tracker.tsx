"use client"

import { useEffect, useRef } from "react"
import { trackScrollDepth } from "@/lib/analytics"

export function ScrollDepthTracker() {
  const trackedPercentages = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

      // Track 50% scroll (only once)
      if (scrollPercentage >= 50 && !trackedPercentages.current.has(50)) {
        trackScrollDepth(50)
        trackedPercentages.current.add(50)
      }

      // Track 90% scroll (only once)
      if (scrollPercentage >= 90 && !trackedPercentages.current.has(90)) {
        trackScrollDepth(90)
        trackedPercentages.current.add(90)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
