import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Playfair_Display, Noto_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { generateRestaurantSchema } from "@/lib/seo"
import { GoogleAnalytics } from "@/components/google-analytics"
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager"
import { PageViewTracker } from "@/components/page-view-tracker"
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
})

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://baroquelebistrot.gr"),
  title: {
    default: "Baroque le Bistrot | All Day Bar & Restaurant στο Αργοστόλι",
    template: "%s | Baroque le Bistrot",
  },
  description:
    "Baroque le Bistrot - All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου. Brunch, dinner και cocktails σε έναν σύγχρονο χώρο με ποιοτικές πρώτες ύλες και αυθεντική φιλοξενία. Κράτηση στο +30 2671 022809.",
  keywords: [
    "all day bar Αργοστόλι",
    "bistrot Αργοστόλι",
    "restaurant Αργοστόλι",
    "brunch Αργοστόλι",
    "cocktail bar Αργοστόλι",
    "Baroque le Bistrot",
    "all day bar",
    "bistrot",
    "restaurant",
    "brunch",
    "cocktail bar",
    "Argostoli restaurant",
    "Βαλλιανού 3",
    "Κεφαλονιά",
  ],
  authors: [{ name: "Baroque le Bistrot" }],
  creator: "Baroque le Bistrot",
  publisher: "Baroque le Bistrot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://baroquelebistrot.gr",
    siteName: "Baroque le Bistrot",
    title: "Baroque le Bistrot | All Day Bar & Restaurant στο Αργοστόλι",
    description:
      "All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου. Brunch, dinner και cocktails σε σύγχρονο χώρο με ποιοτικές πρώτες ύλες.",
    images: [
      {
        url: "/bar-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Baroque le Bistrot Interior - All Day Bar & Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baroque le Bistrot | All Day Bar & Restaurant στο Αργοστόλι",
    description:
      "All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου. Brunch, dinner και cocktails.",
    images: ["/bar-interior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://baroquelebistrot.gr",
  },
}

const restaurantSchema = generateRestaurantSchema("https://baroquelebistrot.gr")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el" className={`${playfairDisplay.variable} ${notoSans.variable}`}>
      <body className="font-serif antialiased">
        <GoogleTagManagerNoscript />
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <GoogleTagManager />
        <GoogleAnalytics />
        <PageViewTracker />
        <ScrollDepthTracker />
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
