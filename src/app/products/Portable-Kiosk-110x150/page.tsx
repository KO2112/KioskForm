import PortableKiosk110x150Content from "./Portable-Kiosk-110x150Content"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Kiosk 110x150cm - Modular Security Cabin",
  description:
    "Compact 110×150cm insulated kiosk cabin with LED lighting, power sockets, fuse box and fast delivery. Perfect for security booths, ticket huts and reception cabins.",
  keywords: [
    "portable kiosk 110x150",
    "security cabin",
    "modular ticket booth",
    "portable gatehouse",
    "small kiosk",
    "office cabin",
    "modular security hut",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
    },
  },
  openGraph: {
    title: "Portable Kiosk 110x150cm - Modular Security Cabin",
    description:
      "Compact 110×150cm insulated kiosk cabin with LED lighting, power sockets, fuse box and fast delivery. Ideal for security booths, ticket huts and modular reception cabins.",
    images: [
      {
        url: "/110x150.jpg",
        width: 1200,
        height: 630,
        alt: "Portable Kiosk 110x150cm",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
  name: "Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x150 cm",
  description:
    "Compact insulated kiosk cabin with LED lighting, internal power sockets, fuse box, and ready-to-use setup. Ideal for security booths, ticket huts, and modular reception cabins.",
  sku: "portable-kiosk-110x150",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/110x150.jpg",
    width: 1200,
    height: 630,
    alt: "Portable Kiosk 110x150cm",
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
    url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
    priceCurrency: "GBP",
    price: "1949",
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
    { "@type": "PropertyValue", name: "externalDimensions", value: "110×150×256 cm" },
    { "@type": "PropertyValue", name: "internalDimensions", value: "95×135×237 cm approx." },
    { "@type": "PropertyValue", name: "weight", value: "375 kg approx" },
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
      <PortableKiosk110x150Content />
    </>
  )
}
