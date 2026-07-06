import DisabledPortableToiletBlockContent from "./DisabledPortableToiletBlockContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disabled Portable Toilet Block | Accessible WC Unit",
  description:
    "Heavy-duty disabled portable toilet cabin with wheelchair access ramp, grab rails, ceramic toilet, wash basin, and ready-to-connect plumbing and electrical systems.",
  keywords: [
    "disabled portable toilet block",
    "accessible wc unit",
    "wheelchair accessible toilet cabin",
    "portable disabled toilet",
    "disabled toilet cabin",
    "construction site accessible toilet",
    "portable accessible washroom",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
    },
  },
  openGraph: {
    title: "Disabled Portable Toilet Block | Accessible WC Unit",
    description:
      "Accessible portable toilet cabin with ramp, grab rails, ceramic toilet, wash basin, insulation, and ready-to-connect services for site use.",
    images: [
      {
        url: "/DisabledToiletKiosk1.jpg",
        width: 1200,
        height: 630,
        alt: "Disabled Portable Toilet Block",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
  name: "Disabled Portable Toilet Block | Accessible WC Unit",
  description:
    "Heavy-duty disabled portable toilet cabin with wheelchair access ramp, grab rails, ceramic toilet, wash basin, insulation, and ready-to-connect services.",
  sku: "disabled-portable-toilet-block",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/DisabledToiletKiosk1.jpg",
    width: 1200,
    height: 630,
    alt: "Disabled Portable Toilet Block",
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
    url: "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
    priceCurrency: "GBP",
    price: "2999",
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
    { "@type": "PropertyValue", name: "externalDimensions", value: "170 × 170 × 256 cm" },
    { "@type": "PropertyValue", name: "internalDimensions", value: "155 × 155 × 236 cm per toilet cabin" },
    { "@type": "PropertyValue", name: "weight", value: "445 kg approx" },
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
      <DisabledPortableToiletBlockContent />
    </>
  )
}
