import Kiosk130x130Content from "./Kiosk-130x130Content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modular Kiosk 130x130cm - Compact Ticket Booth & Security Solutions",
  description:
    "Fully insulated 130×130cm modular kiosk perfect for ticket booths, security huts, and portable cabins. Weather-resistant with complete electrical installation and reception desk.",
  keywords: [
    "modular kiosk 130x130",
    "ticket booth",
    "security hut",
    "portable cabin",
    "compact kiosk",
    "catering unit",
    "gatehouse",
  ],
  alternates: {
    canonical: "https://kioskform.co.uk/products/Kiosk-130x130-Reinforced",
    languages: {
      "en-GB": "https://kioskform.co.uk/products/Kiosk-130x130-Reinforced",
    },
  },
  openGraph: {
    title: "Modular Kiosk 130x130cm - Versatile Portable Solutions",
    description:
      "Compact 130×130cm insulated kiosk with reception desk for ticket booths, security huts & catering units. Complete electrical installation & weather-resistant build.",
    images: [
      {
        url: "/kiosk-130x130-1.png",
        width: 1200,
        height: 630,
        alt: "Modular Kiosk 130x130cm",
      },
    ],
  },
}

export default function Page() {
  return <Kiosk130x130Content />
}
