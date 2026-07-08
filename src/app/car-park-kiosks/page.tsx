import CarParkContent from "./CarParkContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Car Park Kiosks | Heated Parking Booths for UK Sites",
  description:
    "Looking for durable car park kiosks in the UK? Explore insulated parking booths with heating, secure access and power for operators and councils.",
  keywords: [
    "car park kiosk",
    "parking booth",
    "parking kiosk",
    "car park kiosk UK",
    "toll booth cabin",
    "parking control kiosk",
    "heated parking kiosk",
    "car park ticket booth",
    "parking operator kiosk",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/car-park-kiosks",
    languages: {
      "en-GB": "https://cabinunits.co.uk/car-park-kiosks",
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
    url: "https://cabinunits.co.uk/car-park-kiosks",
    siteName: "CabinUnits",
    title: "Car Park Kiosks | Heated Parking Booths for UK Sites",
    description:
      "Insulated car park kiosks with heating, secure access and power for parking operators across the UK.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 800,
        height: 600,
        alt: "Car park kiosk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Park Kiosks | Heated Parking Booths for UK Sites",
    description:
      "Insulated car park kiosks with heating, secure access and power for parking operators across the UK.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="car-park-kiosks-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://cabinunits.co.uk/car-park-kiosks/",
                url: "https://cabinunits.co.uk/car-park-kiosks/",
                name: "Car Park Kiosks | Heated Parking Booths for UK Sites",
                isPartOf: {
                  "@id": "https://cabinunits.co.uk/#website",
                },
                description:
                  "Insulated car park kiosks with heating, secure access and power for parking operators, councils and facilities teams.",
                breadcrumb: {
                  "@id": "https://cabinunits.co.uk/car-park-kiosks/#breadcrumb",
                },
                inLanguage: "en-GB",
                about: {
                  "@type": "Thing",
                  name: "Car park kiosks",
                },
              },
              {
                "@type": "Service",
                "@id": "https://cabinunits.co.uk/car-park-kiosks/#service",
                serviceType: "Car park kiosks",
                name: "Car park kiosks",
                description:
                  "Insulated, fully wired parking kiosks for operators, barrier control, pay stations and reception points.",
                provider: {
                  "@id": "https://cabinunits.co.uk/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "United Kingdom",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/car-park-kiosks/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Kiosks", item: "https://cabinunits.co.uk/kiosks" },
                  { "@type": "ListItem", position: 3, name: "Car Park Kiosks" },
                ],
              },
              {
                "@type": "ItemList",
                "@id": "https://cabinunits.co.uk/car-park-kiosks/#itemlist",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Portable Kiosk 110x130cm",
                    url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Portable Kiosk 110x150cm",
                    url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x150",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Portable Kiosk 150x210cm",
                    url: "https://cabinunits.co.uk/products/Portable-Kiosk-150x210",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/car-park-kiosks/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a car park kiosk?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A car park kiosk is a compact, secure cabin used by parking attendants and site staff to manage entry, payments, access control and visitor enquiries.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do you need a car park kiosk?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A kiosk creates a clear check-in point, improves staff visibility and gives your team a weatherproof, secure place to work during busy shifts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will staff be warm in winter?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our 110x130cm kiosk comes with a portable heater fitted as standard, and all units are fully insulated with 40mm polyurethane core panels to keep the inside comfortable.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much space does the kiosk take up?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Our compact models start at 110x130cm, designed to fit into a single car parking bay or a tight kerbside position without taking up valuable space.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is the kiosk secure enough for handling cash?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Every kiosk has a lockable outward-opening PVC door and a robust steel structure, and we can recommend reinforced layouts for higher-risk or cash-handling locations.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can the kiosk be relocated if the car park layout changes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every unit has forklift pockets built into the base, so it can be lifted and repositioned if your car park layout or barrier positions change.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does the kiosk need a mains connection?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Each kiosk arrives pre-wired with an internal fuse box and external site socket, so it needs to be connected to a power supply on site rather than running independently.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How quickly can a kiosk be delivered?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Standard units are typically available for fast dispatch. Confirm the exact lead time with our team at enquiry stage if you're working to a fixed operational start date.",
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
      <CarParkContent />
    </>
  )
}