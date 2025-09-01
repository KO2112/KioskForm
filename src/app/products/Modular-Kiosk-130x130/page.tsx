import type { Metadata } from "next"
import ModularKiosk130x130Content from "./Modular-Kiosk-130x130Content"

export const metadata: Metadata = {
  title: "Modular Kiosk 130x130cm - Compact Ticket Booth & Portable Cabin Solutions",
  description:
    "Fully insulated 130×130cm modular kiosk perfect for ticket booths, information points, catering units, and portable offices. Weather-resistant with complete electrical installation and reception desk.",
  keywords: [
    "modular kiosk 130x130",
    "ticket booth",
    "portable cabin",
    "information kiosk",
    "catering unit",
    "portable office",
    "compact kiosk",
    "modular building",
    "gatehouse",
    "reception booth",
    "UK supplier",
  ],
  alternates: {
    canonical: "https://kioskform.co.uk/products/Modular-Kiosk-130x130",
    languages: {
      "en-GB": "https://kioskform.co.uk/products/Modular-Kiosk-130x130",
    },
  },
  openGraph: {
    title: "Modular Kiosk 130x130cm - Versatile Portable Solutions",
    description:
      "Compact 130×130cm insulated kiosk with reception desk for ticket booths, information points & catering units. Complete electrical installation & weather-resistant build.",
    type: "website",
    images: [
      {
        url: "/modular-kiosk-130x130-1.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kiosk 130x130cm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kiosk 130x130cm - Versatile Portable Solutions",
    description: "Compact modular kiosk perfect for ticket booths, information points, and catering units.",
    images: ["/modular-kiosk-130x130-1.jpg"],
  },
}

export default function ModularKiosk130x130Page() {
  return <ModularKiosk130x130Content />
}
