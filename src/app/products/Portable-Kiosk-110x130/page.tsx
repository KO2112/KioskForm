import PortableKiosk110x130Content from "./Portable-Kiosk-110x130Content"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Kiosk 110x130cm - Modular Booth",
  description:
    "Compact 110x130cm insulated kiosk cabin with LED lighting, sockets, heater and fast delivery. Ideal for ticket booths, security huts and reception cabins.",
  keywords: [
    "portable kiosk 110x130",
    "security cabin",
    "modular ticket booth",
    "portable gatehouse",
    "compact kiosk",
    "office cabin",
    "modular security hut",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
    },
  },
  openGraph: {
    title: "Portable Kiosk 110x130cm - Modular Booth",
    description:
      "Compact 110x130cm insulated kiosk cabin with LED lighting, sockets, heater and fast delivery. Ideal for ticket booths, security huts and reception cabins.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Portable Kiosk 110x130cm",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
  name: "Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130 cm",
  description:
    "Compact insulated kiosk cabin with LED lighting, internal power sockets, fuse box, heater and ready-to-use setup. Ideal for security booths, ticket huts, and modular reception cabins.",
  sku: "portable-kiosk-110x130",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/110x130Kiosk.jpg",
    width: 1200,
    height: 630,
    alt: "Portable Kiosk 110x130cm",
  },
  brand: {
    "@type": "Brand",
    name: "Cabin Units",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Cabin Units",
    url: "https://cabinunits.co.uk",
  },
  offers: {
    "@type": "Offer",
    url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
    priceCurrency: "GBP",
    price: "1799",
    priceValidUntil: "2026-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Cabin Units",
      url: "https://cabinunits.co.uk",
    },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "externalDimensions", value: "110×130×256 cm" },
    { "@type": "PropertyValue", name: "internalDimensions", value: "100×120×237 cm approx." },
    { "@type": "PropertyValue", name: "weight", value: "335 kg approx" },
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
      <PortableKiosk110x130Content />
    </>
  )
}
