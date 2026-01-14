import type { Metadata } from "next"
import AboutClientPage from "./about-client-page"

export const metadata: Metadata = {
  title: "Σχετικά με εμάς | All Day Bar & Restaurant στην Αθήνα",
  description:
    "Μάθετε περισσότερα για το Baroque le Bistrot - ένα all day bar, bistrot και restaurant στην Αθήνα που συνδυάζει σύγχρονη αισθητική, ποιοτικές πρώτες ύλες και αυθεντική φιλοξενία. Brunch, dinner και cocktails.",
  openGraph: {
    title: "Σχετικά με εμάς | Baroque le Bistrot - All Day Bar & Restaurant στην Αθήνα",
    description:
      "All day bar, bistrot και restaurant στην Αθήνα. Μάθετε για τη φιλοσοφία μας, τις αξίες μας και την εμπειρία που προσφέρουμε.",
    type: "website",
    images: [
      {
        url: "/bar-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Baroque le Bistrot - All Day Bar & Restaurant στην Αθήνα",
      },
    ],
  },
  alternates: {
    canonical: "https://baroquelebistrot.gr/about",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
