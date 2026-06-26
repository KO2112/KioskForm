import PortableDoubleToiletBlockContent from "./PortableDoubleToiletBlockContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Double Toilet Block | Insulated WC Cabin",
  description:
    "Heavy-duty portable double toilet cabin with two WC cubicles, ceramic toilets, wash basins, and ready-to-connect plumbing and electrical systems.",
  keywords: [
    "portable double toilet block",
    "prefabricated wc units",
    "fully insulated toilet cabin",
    "portable toilet cabin",
    "double WC unit",
    "construction site toilet block",
    "event toilet cabins",
    "portable washroom block",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
    },
  },
  openGraph: {
    title: "Portable Double Toilet Block | Insulated WC Cabin",
    description:
      "Two-cubicle portable toilet block with ceramic toilets, wash basins, insulation, and ready-to-connect services for site use.",
    images: [
      {
        url: "/DoubleToilet.png",
        width: 1200,
        height: 630,
        alt: "Portable Double Toilet Block",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
  name: "Portable Double Toilet Block | Prefabricated WC Units",
  description:
    "Heavy-duty portable double toilet cabin with two WC cubicles, ceramic toilets, wash basins, insulation, and ready-to-connect services.",
  sku: "portable-double-toilet-block",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/DoubleToilet.png",
    width: 1200,
    height: 630,
    alt: "Portable Double Toilet Block",
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
    url: "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
    priceCurrency: "GBP",
    price: "2,699.99",
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
    { "@type": "PropertyValue", name: "externalDimensions", value: "160 × 210 × 256 cm" },
    { "@type": "PropertyValue", name: "internalDimensions", value: "98 × 146 × 256 cm per toilet cabin" },
    { "@type": "PropertyValue", name: "weight", value: "610 kg approx" },
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
      <PortableDoubleToiletBlockContent />
    </>
  )
}
