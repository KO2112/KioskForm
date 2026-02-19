import type { Metadata } from "next"
import Script from "next/script"
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
    "cabin",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Modular-Kiosk-130x130",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Modular-Kiosk-130x130",
    },
  },
  openGraph: {
    title: "Modular Kiosk 130x130cm - Versatile Portable Solutions",
    description:
      "Compact 130×130cm insulated kiosk with reception desk for ticket booths, information points & catering units. Complete electrical installation & weather-resistant build.",
    type: "website",
    images: [
      {
        url: "/130x130kiosk.jpg",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Modular-Kiosk-130x130",
  name: "Modular Kiosk 130x130cm",
  description:
    "Versatile compact kiosk perfect for commercial applications with built-in reception desk and complete electrical installation.",
  sku: "modular-kiosk-130x130",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/modular-kiosk-130x130-1.jpg",
    width: 800,
    height: 600,
  },
  brand: {
    "@type": "Brand",
    name: "CabinUnits",
  },
  offers: {
    "@type": "Offer",
    url: "https://cabinunits.co.uk/products/Modular-Kiosk-130x130",
    priceCurrency: "GBP",
    price: "1999",
    priceValidUntil: "2025-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "dimensions", value: "130×130 cm" },
    { "@type": "PropertyValue", name: "internalHeight", value: "2.35 meters" },
    { "@type": "PropertyValue", name: "weight", value: "170 kg approx" },
  ],
}

export default function ModularKiosk130x130Page() {
  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ModularKiosk130x130Content />
    </>
  )
}
