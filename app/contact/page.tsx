import type { Metadata } from "next"
import ContactClientPage from "./contact-client-page"

export const metadata: Metadata = {
  title: "Επικοινωνία & Κράτηση | All Day Bar & Restaurant στο Αργοστόλι",
  description:
    "Κάντε κράτηση στο Baroque le Bistrot. All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου, Βαλλιανού 3. Τηλέφωνο: +30 2671 022809. Ανοιχτά κάθε μέρα 9:00 - 2:00.",
  openGraph: {
    title: "Επικοινωνία & Κράτηση | Baroque le Bistrot - All Day Bar & Restaurant στο Αργοστόλι",
    description:
      "Κάντε κράτηση στο Baroque le Bistrot. All day bar, restaurant και bistrot στην καρδιά του Αργοστολίου, Βαλλιανού 3. +30 2671 022809.",
    type: "website",
    images: [
      {
        url: "/bar-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Baroque le Bistrot - Contact & Reservations",
      },
    ],
  },
  alternates: {
    canonical: "https://baroquelebistrot.gr/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
