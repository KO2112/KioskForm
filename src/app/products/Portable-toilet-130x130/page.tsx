import PortableToilet130x130Content from "./Portable-toilet-130x130Content"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Toilet Unit 130x130cm - Welfare Cabin Modular Toilet Block",
  description:
    "Fully insulated 130×130cm portable toilet unit with flushing toilet and wash basin. Weather-resistant welfare cabin perfect for outdoor events, festivals, and industrial sites.",
  keywords: [
    "portable toilet 130x130",
    "welfare cabin",
    "modular toilet block",
    "portable restroom",
    "outdoor toilet unit",
    "festival toilet",
    "construction site toilet",
    "portable washroom",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-toilet-130x130",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-toilet-130x130",
    },
  },
  openGraph: {
    title: "Portable Toilet Unit 130x130cm - Complete Welfare Solution",
    description:
      "Compact 130×130cm insulated portable toilet with flushing toilet and wash basin. Perfect for outdoor events, festivals, and industrial sites with complete plumbing connections.",
    images: [
      {
        url: "/portable-toilet-130x130-1.png",
        width: 1200,
        height: 630,
        alt: "Portable Toilet Unit 130x130cm",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Portable-toilet-130x130",
  name: "Portable Toilet Unit 130x130cm",
  description:
    "Complete portable toilet unit with flushing toilet, wash basin, and full plumbing connections for welfare facilities.",
  sku: "portable-toilet-130x130",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/portable-toilet-130x130-1.png",
    width: 800,
    height: 600,
  },
  brand: {
    "@type": "Brand",
    name: "CabinUnits",
  },
  offers: {
    "@type": "Offer",
    url: "https://cabinunits.co.uk/products/Portable-toilet-130x130",
    priceCurrency: "GBP",
    price: "1999",
    priceValidUntil: "2025-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "dimensions", value: "130×130 cm" },
    { "@type": "PropertyValue", name: "internalHeight", value: "2.35 meters" },
    { "@type": "PropertyValue", name: "weight", value: "180 kg approx" },
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
      <PortableToilet130x130Content />
    </>
  )
}
