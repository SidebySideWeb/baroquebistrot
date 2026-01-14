// Google Analytics 4 utility functions
// Uses gtag.js for event tracking

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

/**
 * Get the GA4 Measurement ID from environment variables
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

/**
 * Check if GA is available and enabled
 */
export const isGAEnabled = (): boolean => {
  return typeof window !== "undefined" && !!GA_MEASUREMENT_ID && !!window.gtag
}

/**
 * Initialize Google Analytics
 * This should be called once when the app loads
 */
export const initGA = (): void => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer?.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  })
}

/**
 * Track a page view
 */
export const trackPageView = (url: string): void => {
  if (!isGAEnabled()) return

  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

/**
 * Track a custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: any
  }
): void => {
  if (!isGAEnabled()) return

  window.gtag?.("event", eventName, eventParams)
}

/**
 * Track click to call event
 */
export const trackClickCall = (phoneNumber?: string): void => {
  trackEvent("click_call", {
    event_category: "engagement",
    event_label: "phone_call",
    phone_number: phoneNumber || "unknown",
  })
}

/**
 * Track reservation form submission
 */
export const trackReservationFormSubmit = (): void => {
  trackEvent("reservation_form_submit", {
    event_category: "conversion",
    event_label: "reservation_form",
  })
}

/**
 * Track menu view
 */
export const trackMenuView = (): void => {
  trackEvent("menu_view", {
    event_category: "engagement",
    event_label: "menu",
  })
}

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    scroll_percentage: percentage,
  })
}
