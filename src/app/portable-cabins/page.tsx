import PortableCabinsContent from "./PortableCabinsContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Portable Cabins for Sale UK | From £1,799 | Cabin Units",
  description:
    "New insulated portable cabins from £1,799 ex VAT. Pre-wired, heated and in stock now — fast UK delivery or free Leicester collection. Get a quote today.",
  keywords: [
    "portable cabin",
    "portable cabins",
    "portable cabins for sale",
    "portable cabins for sale UK",
    "portable office cabin",
    "portable cabin price",
    "portable site cabin",
    "insulated portable cabin",
    "portable cabin UK",
    "small portable cabin",
    "new portable cabin",
    "portable building",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/portable-cabins",
    languages: {
      "en-GB": "https://cabinunits.co.uk/portable-cabins",
    },
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
    url: "https://cabinunits.co.uk/portable-cabins",
    siteName: "CabinUnits",
    title: "Portable Cabins for Sale UK | From £1,799 | Cabin Units",
    description:
      "New insulated portable cabins from £1,799 ex VAT. Pre-wired, heated and in stock now — fast UK delivery or free Leicester collection.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "New insulated portable cabin for sale in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Cabins for Sale UK | From £1,799 | Cabin Units",
    description:
      "New insulated portable cabins from £1,799 ex VAT. Pre-wired, heated and in stock now — fast UK delivery or free Leicester collection.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="portable-cabins-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://cabinunits.co.uk/portable-cabins/",
                url: "https://cabinunits.co.uk/portable-cabins/",
                name: "Portable Cabins for Sale UK | From £1,799 | Cabin Units",
                isPartOf: { "@id": "https://cabinunits.co.uk/#website" },
                description:
                  "New portable cabins for sale across the UK — insulated, pre-wired and delivered ready to connect. Site offices, gatehouses, kiosks and welfare cabins.",
                breadcrumb: {
                  "@id": "https://cabinunits.co.uk/portable-cabins/#breadcrumb",
                },
                inLanguage: "en-GB",
                about: { "@type": "Thing", name: "Portable cabins" },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/portable-cabins/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://cabinunits.co.uk/",
                  },
                  { "@type": "ListItem", position: 2, name: "Portable Cabins" },
                ],
              },
              {
                "@type": "ItemList",
                "@id": "https://cabinunits.co.uk/portable-cabins/#itemlist",
                name: "Portable cabins for sale",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "Product",
                      name: "110x130cm Portable Cabin",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
                      image: "https://cabinunits.co.uk/110x130Kiosk.jpg",
                      description:
                        "Compact insulated portable cabin with portable heater fitted as standard, pre-wired electrics and forklift pockets.",
                      brand: { "@type": "Brand", name: "CabinUnits" },
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
                      name: "110x150cm Portable Cabin",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
                      image: "https://cabinunits.co.uk/110x150.jpg",
                      description:
                        "Insulated portable cabin with galvanised steel frame, two opening windows, LED lighting and pre-wired sockets.",
                      brand: { "@type": "Brand", name: "CabinUnits" },
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
                      name: "150x210cm Portable Cabin",
                      url: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
                      image: "https://cabinunits.co.uk/150x210kiosk1.jpg",
                      description:
                        "Larger insulated portable cabin with room for two workstations, 32A external site socket and portable heater, delivered assembled and ready to connect.",
                      brand: { "@type": "Brand", name: "CabinUnits" },
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
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/portable-cabins/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do you need planning permission for a portable cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "In many cases, no. Portable cabins are usually classed as temporary structures, so short-term use on private land often doesn't require planning permission. If the cabin will stay in place long term, sit in a conservation area, or be used as living accommodation, check with your local planning authority first.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much is a portable cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Portable cabins from CabinUnits are priced at £1,799 for the 110x130cm unit, £1,949 for the 110x150cm and £1,999 for the 150x210cm, excluding VAT and shipping. Every cabin is brand new, insulated and pre-wired.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is a portable cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A portable cabin is a self-contained, transportable building delivered to site as a finished unit. It needs no foundations or groundworks — the cabin is lifted into position, connected to power and ready to use the same day.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are portable cabins insulated?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. CabinUnits portable cabins are built with 40mm polyurethane-core insulated panels in the walls, roof and floor, with a portable heater fitted as standard on the compact 110x130cm model.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does a portable cabin need foundations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No concrete foundations are needed. Portable cabins sit on any firm, level surface such as tarmac, paving or compacted hardcore, and forklift pockets in the base make repositioning simple.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do portable cabins come with electrics?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Each cabin arrives pre-wired with an internal fuse box, sockets and LED lighting, plus an external site socket. An electrician connects the unit to a power supply on site and it's ready to use.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does a portable cabin last?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "With a galvanised steel frame and low-maintenance panel exterior, a well-sited portable cabin typically lasts 15–20 years or more.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I buy or hire a portable cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "If you need a cabin for more than around 12 months, buying usually works out cheaper than hiring. Buying means one fixed cost, no return conditions, and an asset you can resell or move between sites.",
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
                image: { "@id": "https://cabinunits.co.uk/#/schema/logo/image/" },
              },
            ],
          }),
        }}
      />
      <PortableCabinsContent />
    </>
  )
}