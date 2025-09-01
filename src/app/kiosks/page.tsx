import KioskContent from "./KioskContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Modular Kiosks | Ticket Booths & Security Cabins",
  description:
    "EU manufactured portable kiosks for ticket booths, security cabins, and commercial applications. Weather-resistant, fully insulated with electrical installation.",
  keywords: [
    "modular kiosk",
    "ticket booth",
    "security cabin",
    "portable building",
    "gatehouse",
    "catering unit",
    "information point",
  ],
  alternates: {
    canonical: "https://kioskform.co.uk/kiosks",
    languages: {
      "en-GB": "https://kioskform.co.uk/kiosks",
    },
  },
  openGraph: {
    title: "Premium Modular Kiosks - Commercial Portable Buildings",
    description:
      "High-quality EU manufactured kiosks in multiple sizes for ticket booths, security points, offices and catering units. Fully insulated with complete electrical installation.",
    images: [
      {
        url: "/kiosks-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Modular Kiosks Collection",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="kiosks-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://kioskform.co.uk/kiosks/",
                url: "https://kioskform.co.uk/kiosks/",
                name: "Premium Modular Kiosks | Ticket Booths & Security Cabins",
                isPartOf: {
                  "@id": "https://kioskform.co.uk/#website",
                },
                primaryImageOfPage: {
                  "@id": "https://kioskform.co.uk/kiosks/#primaryimage",
                },
                image: {
                  "@id": "https://kioskform.co.uk/kiosks/#primaryimage",
                },
                thumbnailUrl: "https://kioskform.co.uk/kiosks-og.jpg",
                datePublished: "2025-03-15T10:00:00+00:00",
                dateModified: "2025-04-24T09:00:00+00:00",
                description:
                  "EU manufactured portable kiosks for ticket booths, security cabins, and commercial applications. Weather-resistant, fully insulated with electrical installation.",
                breadcrumb: {
                  "@id": "https://kioskform.co.uk/kiosks/#breadcrumb",
                },
                inLanguage: "en-GB",
                potentialAction: [
                  {
                    "@type": "ReadAction",
                    target: ["https://kioskform.co.uk/kiosks/"],
                  },
                ],
              },
              {
                "@type": "ImageObject",
                inLanguage: "en-GB",
                "@id": "https://kioskform.co.uk/kiosks/#primaryimage",
                url: "https://kioskform.co.uk/kiosks-og.jpg",
                contentUrl: "https://kioskform.co.uk/kiosks-og.jpg",
                width: 1200,
                height: 630,
                caption: "Premium Modular Kiosks Collection",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://kioskform.co.uk/kiosks/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://kioskform.co.uk/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Premium Modular Kiosks",
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://kioskform.co.uk/#website",
                url: "https://kioskform.co.uk/",
                name: "KioskForm",
                description: "Premium kiosk solutions for businesses across the UK",
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://kioskform.co.uk/?s={search_term_string}",
                    },
                    "query-input": {
                      "@type": "PropertyValueSpecification",
                      valueRequired: true,
                      valueName: "search_term_string",
                    },
                  },
                ],
                inLanguage: "en-GB",
              },
              {
                "@type": "ItemList",
                "@id": "https://kioskform.co.uk/kiosks/#itemlist",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Modular Kiosk 130x130cm Anti-Vandal",
                    url: "https://kioskform.co.uk/products/Kiosk-130x130-Reinforced",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Modular Kiosk 130x130cm",
                    url: "https://kioskform.co.uk/products/Modular-Kiosk-130x130",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Small Modular Kiosk",
                    url: "https://kioskform.co.uk/products/small-kiosk",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Large Modular Kiosk",
                    url: "https://kioskform.co.uk/products/large-kiosk",
                  },
                ],
              },
              {
                "@type": "Product",
                "@id": "https://kioskform.co.uk/products/Kiosk-130x130-Reinforced",
                name: "Modular Kiosk 130x130cm Anti-Vandal",
                description:
                  "Compact, durable kiosk with anti-vandal features and steel fence protection for enhanced security applications.",
                sku: "kiosk-130x130-reinforced",
                image: {
                  "@type": "ImageObject",
                  url: "https://kioskform.co.uk/kiosk-130x130-1.png",
                  width: 800,
                  height: 600,
                },
                brand: {
                  "@type": "Brand",
                  name: "KioskForm",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://kioskform.co.uk/products/Kiosk-130x130-Reinforced",
                  priceCurrency: "GBP",
                  price: "1999",
                  priceValidUntil: "2025-12-31",
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "dimensions",
                    value: "130×130 cm",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "internalHeight",
                    value: "2.35 meters",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "weight",
                    value: "170 kg approx",
                  },
                ],
              },
              {
                "@type": "Product",
                "@id": "https://kioskform.co.uk/products/Modular-Kiosk-130x130",
                name: "Modular Kiosk 130x130cm",
                description:
                  "Versatile compact kiosk perfect for commercial applications with built-in reception desk and complete electrical installation.",
                sku: "modular-kiosk-130x130",
                image: {
                  "@type": "ImageObject",
                  url: "https://kioskform.co.uk/modular-kiosk-130x130-1.jpg",
                  width: 800,
                  height: 600,
                },
                brand: {
                  "@type": "Brand",
                  name: "KioskForm",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://kioskform.co.uk/products/Modular-Kiosk-130x130",
                  priceCurrency: "GBP",
                  price: "1999",
                  priceValidUntil: "2025-12-31",
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "dimensions",
                    value: "130×130 cm",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "internalHeight",
                    value: "2.35 meters",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "weight",
                    value: "170 kg approx",
                  },
                ],
              },
              {
                "@type": "Product",
                "@id": "https://kioskform.co.uk/products/small-kiosk",
                name: "Small Modular Kiosk",
                description:
                  "Brand new, strong and durable, fully insulated modular kiosk perfect for versatile applications.",
                sku: "small-kiosk",
                image: {
                  "@type": "ImageObject",
                  url: "https://kioskform.co.uk/kiosk2.jpg",
                  width: 800,
                  height: 600,
                },
                brand: {
                  "@type": "Brand",
                  name: "KioskForm",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://kioskform.co.uk/products/small-kiosk",
                  priceCurrency: "GBP",
                  price: "1999",
                  priceValidUntil: "2025-12-31",
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "dimensions",
                    value: "143×143 cm",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "internalHeight",
                    value: "2.10 meters",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "weight",
                    value: "350 kg approx",
                  },
                ],
              },
              {
                "@type": "Product",
                "@id": "https://kioskform.co.uk/products/large-kiosk",
                name: "Large Modular Kiosk",
                description:
                  "Spacious, durable and fully insulated modular building suitable for various commercial applications.",
                sku: "large-kiosk",
                image: {
                  "@type": "ImageObject",
                  url: "https://kioskform.co.uk/kiosk.jpg",
                  width: 800,
                  height: 600,
                },
                brand: {
                  "@type": "Brand",
                  name: "KioskForm",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://kioskform.co.uk/products/large-kiosk",
                  priceCurrency: "GBP",
                  price: "2499",
                  priceValidUntil: "2025-12-31",
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "dimensions",
                    value: "218×143 cm",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "internalHeight",
                    value: "2.10 meters",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "weight",
                    value: "400 kg approx",
                  },
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://kioskform.co.uk/#organization",
                name: "KioskForm",
                url: "https://kioskform.co.uk/",
                logo: {
                  "@type": "ImageObject",
                  inLanguage: "en-GB",
                  "@id": "https://kioskform.co.uk/#/schema/logo/image/",
                  url: "https://kioskform.co.uk/logo.png",
                  contentUrl: "https://kioskform.co.uk/logo.png",
                  width: 192,
                  height: 192,
                  caption: "KioskForm",
                },
                image: {
                  "@id": "https://kioskform.co.uk/#/schema/logo/image/",
                },
              },
            ],
          }),
        }}
      />
      <KioskContent />
    </>
  )
}
