import FestivalTicketContent from "./FestivalTicketContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Festival Ticket Booths & Box Office Cabins | Weatherproof Event Kiosks",
  description:
    "Looking for festival ticket booths or box office cabins? Discover weatherproof, insulated event kiosks for festivals, outdoor events and ticketing points across the UK.",
  keywords: [
    "festival ticket booth",
    "event ticket kiosk",
    "box office cabin",
    "portable ticket booth UK",
    "festival entry booth",
    "outdoor event kiosk",
    "festival ticketing booth",
    "event gate kiosk",
    "box office booth",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/festival-ticket-booths",
    languages: {
      "en-GB": "https://cabinunits.co.uk/festival-ticket-booths",
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
    url: "https://cabinunits.co.uk/festival-ticket-booths",
    siteName: "CabinUnits",
    title: "Festival Ticket Booths & Box Office Cabins | Weatherproof Event Kiosks",
    description:
      "Weatherproof, fully wired ticket booths for festivals and outdoor events. Ready to dispatch across the UK.",
    images: [
      {
        url: "/150x210%20Kiosk.jpg",
        width: 800,
        height: 600,
        alt: "Festival ticket booth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Ticket Booths & Box Office Cabins | Weatherproof Event Kiosks",
    description:
      "Weatherproof, fully wired ticket booths for festivals and outdoor events. Ready to dispatch across the UK.",
    images: ["/150x210%20Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="festival-ticket-booths-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://cabinunits.co.uk/festival-ticket-booths/",
                url: "https://cabinunits.co.uk/festival-ticket-booths/",
                name: "Festival Ticket Booths & Box Office Cabins | Weatherproof Event Kiosks",
                isPartOf: {
                  "@id": "https://cabinunits.co.uk/#website",
                },
                description:
                  "Weatherproof ticket booths and box office cabins for festivals and outdoor events with insulated interiors and fast UK dispatch.",
                breadcrumb: {
                  "@id": "https://cabinunits.co.uk/festival-ticket-booths/#breadcrumb",
                },
                inLanguage: "en-GB",
                about: {
                  "@type": "Thing",
                  name: "Festival ticket booths",
                },
              },
              {
                "@type": "Service",
                "@id": "https://cabinunits.co.uk/festival-ticket-booths/#service",
                serviceType: "Festival ticket booths",
                name: "Festival ticket booths",
                description:
                  "Weatherproof ticket booths and box office cabins for festivals, outdoor events and temporary gate operations.",
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
                "@id": "https://cabinunits.co.uk/festival-ticket-booths/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Kiosks", item: "https://cabinunits.co.uk/kiosks" },
                  { "@type": "ListItem", position: 3, name: "Festival Ticket Booths" },
                ],
              },
              {
                "@type": "ItemList",
                "@id": "https://cabinunits.co.uk/festival-ticket-booths/#itemlist",
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
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Portable Double Toilet Block",
                    url: "https://cabinunits.co.uk/products/Portable-Double-Toilet-Block",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Disabled Portable Toilet Block",
                    url: "https://cabinunits.co.uk/products/Disabled-Portable-Toilet-Block",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/festival-ticket-booths/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a festival ticket booth?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A festival ticket booth is a weatherproof cabin used for ticket sales, event check-in and secure entry operations at festivals and outdoor events.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do festivals need ticket booths?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "They keep entry points organised, protect staff and equipment and create a professional first impression for visitors arriving at the event.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are the booths weatherproof for multi-day outdoor events?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every booth uses insulated steel sandwich panels and a galvanised steel frame, built to stay comfortable and secure across multi-day events regardless of weather.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How fast can I get a ticket booth before my event?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Standard units are typically available for fast dispatch. Get in touch with your event date as early as possible, especially if you want multiple units or custom branding.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I order multiple booths for different entry points?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, many event organisers order several booths at once to cover multiple gates or box office points. Contact us with your numbers and we'll put together a combined quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there room for a card machine, ticket printer, or till?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, each booth has a built-in reception desk and internal plug sockets, giving you space and power for card machines, printers, or a cash till.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can we brand the booth with our festival's colours or logo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, our units can be customised with branding to match your event identity. Let us know your requirements when you request a quote.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you supply portable toilets for festivals too?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, our portable toilet blocks are commonly ordered alongside ticket booths for festivals and outdoor events needing welfare facilities.",
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
      <FestivalTicketContent />
    </>
  )
}