import Script from "next/script"
import ModularKiosk150X150Content from "./Modular-Kiosk-150X150Content"

export const metadata = {
  title: "Modular Kiosk 150x150cm - Ticket Booth Security Hut | Portable Cabin",
  description:
    "Premium modular kiosk 150x150cm for security, ticketing, and reception. Steel sandwich panels, reception desk, sliding windows. Perfect for gatehouse, car park, events.",
  keywords: [
    "modular kiosk 150x150",
    "security hut",
    "ticket booth",
    "portable cabin",
    "gatehouse kiosk",
    "car park attendant booth",
    "reception desk kiosk",
    "security cabin",
    "modular office",
    "steel sandwich panels",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Modular-Kiosk-150X150",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Modular-Kiosk-150X150",
    },
  },
  openGraph: {
    title: "Modular Kiosk 150x150cm - Professional Security & Ticketing Solution",
    description:
      "Versatile modular kiosk with reception desk, sliding windows, and premium insulation. Ideal for security, ticketing, and information points.",
    type: "website",
    images: [
      {
        url: "/modular-kiosk-150x150-1.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kiosk 150x150cm Security Hut",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Modular-Kiosk-150X150",
  name: "Modular Kiosk 150x150cm",
  description:
    "Spacious modular kiosk with enhanced interior space, reception desk, and professional features for commercial applications.",
  sku: "modular-kiosk-150x150",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/modular-kiosk-150x150-1.jpg",
    width: 800,
    height: 600,
  },
  brand: {
    "@type": "Brand",
    name: "CabinUnits",
  },
  offers: {
    "@type": "Offer",
    url: "https://cabinunits.co.uk/products/Modular-Kiosk-150X150",
    priceCurrency: "GBP",
    price: "1999",
    priceValidUntil: "2025-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "dimensions", value: "150×150 cm" },
    { "@type": "PropertyValue", name: "internalHeight", value: "2.35 meters" },
    { "@type": "PropertyValue", name: "weight", value: "250 kg approx" },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ModularKiosk150X150Content />
    </>
  )
}
