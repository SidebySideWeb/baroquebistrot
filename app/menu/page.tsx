import type { Metadata } from "next"
import { MenuClientPage } from "./_components/MenuClientPage"

export const metadata: Metadata = {
  title: "Μενού | Brunch, Dinner & Cocktails στην Αθήνα",
  description:
    "Ανακαλύψτε το μενού μας με πιάτα που βασίζονται σε ισορροπημένες γεύσεις και ποιοτικές πρώτες ύλες. Brunch, dinner, cocktails και πολλά άλλα στο Baroque le Bistrot στην Αθήνα.",
  openGraph: {
    title: "Μενού | Baroque le Bistrot - Brunch, Dinner & Cocktails στην Αθήνα",
    description:
      "Ανακαλύψτε το μενού μας: brunch, dinner, cocktails και πολλά άλλα. Ποιοτικές πρώτες ύλες και ισορροπημένες γεύσεις.",
    type: "website",
    images: [
      {
        url: "/cocktail-ingredients.jpg",
        width: 1200,
        height: 630,
        alt: "Baroque le Bistrot Menu - Brunch, Dinner & Cocktails",
      },
    ],
  },
  alternates: {
    canonical: "https://baroquelebistrot.gr/menu",
  },
}

export default function MenuPage() {
  return <MenuClientPage />
}
