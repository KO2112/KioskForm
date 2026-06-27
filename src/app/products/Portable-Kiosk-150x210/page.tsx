import Script from "next/script"
import PortableKiosk150x210Content from "./Portable-Kiosk-150x210Content"

export const metadata = {
  title: "Portable Kiosk 150x210cm - Booth Security Hut Modular Gate House",
  description:
    "Brand new modular kiosk cabin 150x210cm with full insulation, electrical installation, and ready for immediate dispatch. Ideal for security huts, ticketing, and gatehouse applications.",
  keywords: [
    "portable kiosk 150x210",
    "modular cabin",
    "security hut",
    "ticket booth",
    "gatehouse kiosk",
    "portable building",
    "information point",
    "portable office",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
    },
  },
  openGraph: {
    title: "Portable Kiosk 150x210cm - Cabin Booth Security Hut",
    description:
      "Durable portable kiosk cabin with complete electrical installation, insulation, and ready-to-use setup. Ideal for security huts, ticket booths, and modular gate houses.",
    type: "website",
    images: [
      {
        url: "/150x210%20Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Portable Kiosk 150x210cm Cabin Booth",
      },
    ],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
  name: "Portable Kiosk 150x210cm",
  description:
    "Brand new portable kiosk cabin 150x210cm with full insulation, LED lighting, double plug socket, fuse box, and external 32A site socket. Ideal for security huts, ticket booths, and modular gate houses.",
  sku: "portable-kiosk-150x210",
  image: {
    "@type": "ImageObject",
    url: "https://cabinunits.co.uk/150x210%20Kiosk.jpg",
    width: 800,
    height: 600,
  },
  brand: {
    "@type": "Brand",
    name: "CabinUnits",
  },
  offers: {
    "@type": "Offer",
    url: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
    priceCurrency: "GBP",
    price: "1999",
    priceValidUntil: "2025-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "externalDimensions", value: "150×210×256 cm" },
    { "@type": "PropertyValue", name: "internalDimensions", value: "135×195×237 cm approx." },
    { "@type": "PropertyValue", name: "weight", value: "495 kg approx" },
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
      <PortableKiosk150x210Content />
    </>
  )
}
