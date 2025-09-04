import PortableKiosk130x210Content from "./Portable-Kiosk-130x210Content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Kiosk 130x210cm - Security Hut Modular Ticket Booth Cabin",
  description:
    "Fully insulated 130×210cm portable kiosk with reception desk and sliding windows. Weather-resistant security cabin perfect for gatehouse, ticket booth, and information points.",
  keywords: [
    "portable kiosk 130x210",
    "security hut",
    "modular ticket booth",
    "portable cabin",
    "gatehouse kiosk",
    "car park attendant booth",
    "information kiosk",
    "security cabin",
    "portable office",
  ],
  alternates: {
    canonical: "https://kioskform.co.uk/products/Portable-Kiosk-130x210",
    languages: {
      "en-GB": "https://kioskform.co.uk/products/Portable-Kiosk-130x210",
    },
  },
  openGraph: {
    title: "Portable Kiosk 130x210cm - Complete Security & Ticket Booth Solution",
    description:
      "Versatile 130×210cm insulated portable kiosk with reception desk and sliding windows. Perfect for security, ticketing, and information services with complete electrical installation.",
    images: [
      {
        url: "/portable-kiosk-130x210-1.jpg",
        width: 1200,
        height: 630,
        alt: "Portable Kiosk 130x210cm Security Hut",
      },
    ],
  },
}

export default function Page() {
  return <PortableKiosk130x210Content />
}
