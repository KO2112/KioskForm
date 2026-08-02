import SecurityGatehouseContent from "./SecurityGatehouseContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Security Gatehouse for Sale | UK | CabinUnits",
  description:
    "Buy a modular security gatehouse in the UK. Durable, insulated gatehouse cabins for secure site entry, barrier control and visitor management. In stock, fast delivery.",
  keywords: [
    "security gatehouse",
    "security gatehouse for sale",
    "gatehouse kiosk",
    "security cabin",
    "security booth",
    "access control cabin",
    "entry control kiosk",
    "site gatehouse",
    "security hut",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/security-gatehouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cabinunits.co.uk/security-gatehouse",
    siteName: "CabinUnits",
    title: "Security Gatehouse for Sale | UK | CabinUnits",
    description:
      "Buy a modular security gatehouse cabin in the UK for secure site entry, visitor management and access control. In stock, fast delivery.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 800,
        height: 600,
        alt: "Security gatehouse kiosk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Gatehouse for Sale | UK | CabinUnits",
    description:
      "Buy a modular security gatehouse cabin in the UK for secure site entry, visitor management and access control.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="security-gatehouse-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://cabinunits.co.uk/security-gatehouse/",
                url: "https://cabinunits.co.uk/security-gatehouse/",
                name: "Security Gatehouses for Sale | UK | CabinUnits",
                isPartOf: {
                  "@id": "https://cabinunits.co.uk/#website",
                },
                description:
                  "Buy a modular security gatehouse cabin in the UK for secure site entry, barrier control and visitor management.",
                breadcrumb: {
                  "@id": "https://cabinunits.co.uk/security-gatehouse/#breadcrumb",
                },
                inLanguage: "en-GB",
                about: {
                  "@type": "Thing",
                  name: "Security gatehouse",
                },
              },
              {
                "@type": "ItemList",
                "@id": "https://cabinunits.co.uk/security-gatehouse/#itemlist",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "Product",
                      name: "110x130cm Security Gatehouse",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
                      image: "https://cabinunits.co.uk/110x130Kiosk.jpg",
                      brand: { "@type": "Brand", name: "Cabin Units" },
                      offers: {
                        "@type": "Offer",
                        price: "1799",
                        priceCurrency: "GBP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                        url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@type": "Product",
                      name: "110x150cm Security Gatehouse",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
                      image: "https://cabinunits.co.uk/110x150.jpg",
                      brand: { "@type": "Brand", name: "Cabin Units" },
                      offers: {
                        "@type": "Offer",
                        price: "1949",
                        priceCurrency: "GBP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                        url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
                      },
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@type": "Product",
                      name: "150x210cm Security Gatehouse",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
                      image: "https://cabinunits.co.uk/150x210kiosk1.jpg",
                      brand: { "@type": "Brand", name: "Cabin Units" },
                      offers: {
                        "@type": "Offer",
                        price: "1999",
                        priceCurrency: "GBP",
                        availability: "https://schema.org/InStock",
                        itemCondition: "https://schema.org/NewCondition",
                        url: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
                      },
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/security-gatehouse/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Kiosks", item: "https://cabinunits.co.uk/kiosks" },
                  { "@type": "ListItem", position: 3, name: "Security Gatehouse" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/security-gatehouse/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a security gatehouse used for?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A security gatehouse is a compact, secure cabin used for access control, visitor management and day-to-day site operations at entrances and sensitive locations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why choose a modular gatehouse over a temporary office?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A modular gatehouse is faster to install, weather-resistant and purpose-built for security staff who need a dependable and professional control point.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can it be used for construction or industrial sites?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. These cabins are ideal for construction sites, industrial estates, warehouses, schools, public buildings and private facilities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is the gatehouse suitable for all weather conditions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Each unit is fully insulated and designed to remain comfortable and practical in both winter and summer conditions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does a security gatehouse cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our gatehouse range is priced at £1,799 for the 110x130cm unit, £1,949 for the 110x150cm and £1,999 for the 150x210cm, all excluding VAT and shipping.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I view a gatehouse before I buy?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes — viewings at our Leicester warehouse (LE1 3BW) are welcome by arrangement. Call or message us to book a time and look inside the units before you decide.",
                    },
                  },
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://cabinunits.co.uk/#organization",
                name: "CabinUnits",
                url: "https://cabinunits.co.uk/",
                logo: {
                  "@type": "ImageObject",
                  inLanguage: "en-GB",
                  "@id": "https://cabinunits.co.uk/#/schema/logo/image/",
                  url: "https://cabinunits.co.uk/logo.png",
                  contentUrl: "https://cabinunits.co.uk/logo.png",
                  width: 192,
                  height: 192,
                  caption: "CabinUnits",
                },
                image: {
                  "@id": "https://cabinunits.co.uk/#/schema/logo/image/",
                },
              },
            ],
          }),
        }}
      />
      <SecurityGatehouseContent />
    </>
  )
}