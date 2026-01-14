export interface RestaurantSchema {
  "@context": string
  "@type": string
  name: string
  image: string[]
  "@id": string
  url: string
  telephone: string
  priceRange: string
  address: {
    "@type": string
    streetAddress: string
    addressLocality: string
    addressRegion?: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    "@type": string
    latitude: number
    longitude: number
  }
  openingHoursSpecification: {
    "@type": string
    dayOfWeek: string[]
    opens: string
    closes: string
  }[]
  servesCuisine?: string[]
  menu?: string
}

export function generateRestaurantSchema(websiteUrl: string): RestaurantSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Baroque le Bistrot",
    image: [
      `${websiteUrl}/bar-interior.jpg`,
      `${websiteUrl}/baroque-logo.png`,
      `${websiteUrl}/bar-shelves.jpg`,
    ],
    "@id": websiteUrl,
    url: websiteUrl,
    telephone: "+302671027040",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Solomou 15",
      addressLocality: "Athens",
      addressRegion: "Attica",
      postalCode: "106 82",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.17856734092966,
      longitude: 20.485902645532,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "02:00",
      },
    ],
    servesCuisine: ["Mediterranean", "Greek", "International"],
    menu: `${websiteUrl}/menu`,
  }
}

export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin
  }
  // Default for SSR/build time
  return "https://baroquelebistrot.gr"
}
