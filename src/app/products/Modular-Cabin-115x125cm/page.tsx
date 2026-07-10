import type { Metadata } from "next"
import Script from "next/script"
import PortableKiosk110x130Content from "./Modular-Cabin-115x125cmContent"

export const metadata: Metadata = {
  title: "110x130cm Portable Kiosk | Security Hut & Ticket Booth Cabin UK",
  description:
    "UK modular security cabin 110x130cm - insulated portable kiosk with built-in heater, LED lighting, reception desk & electrical installation. Ideal security hut, ticket booth & gatehouse. Fast dispatch.",
  keywords: [
    "portable kiosk 110x130",
    "security cabin UK",
    "security hut 110x130",
    "modular cabin",
    "ticket booth cabin",
    "gatehouse UK",
    "car park attendant booth",
    "portable cabin with heater",
    "welfare unit cabin",
    "insulated security kiosk",
    "compact security cabin",
    "modular building UK",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
    },
  },
  openGraph: {
    title: "110x130cm Portable Kiosk - Security Hut, Ticket Booth & Gatehouse",
    description:
      "Compact 110x130cm insulated security cabin with a built-in heater, LED lighting, double plug socket & reception desk. Ready for immediate dispatch across the UK.",
    type: "website",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 1200,
        height: 900,
        alt: "Portable Kiosk Security Cabin 110x130cm - main exterior view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "110x130cm Portable Kiosk | Security Hut & Ticket Booth Cabin UK",
    description: "Insulated portable security cabin with a built-in heater, LED lighting, and full electrical installation. Ready for immediate dispatch.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function PortableKiosk110x130Page() {
  return (
    <>
      <PortableKiosk110x130Content />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "@id": "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
            name: "110x130cm Portable Kiosk - Security Hut, Ticket Booth & Gatehouse",
            image: [
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk.jpg",
                width: 1200,
                height: 900,
                alt: "Portable Kiosk Security Cabin 110x130cm - main exterior view"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%201.jpg",
                width: 1200,
                height: 900,
                alt: "110x130cm security cabin - front exterior view"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%202.jpg",
                width: 1200,
                height: 900,
                alt: "110x130cm security cabin - angled exterior view showing insulated panel walls"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%203.jpg",
                width: 1200,
                height: 900,
                alt: "Security cabin 110x130cm - side view showing window placement"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%204.jpg",
                width: 1200,
                height: 900,
                alt: "110x130cm ticket booth cabin - close-up of window and frame"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%205.jpg",
                width: 1200,
                height: 900,
                alt: "Portable security hut 110x130cm - lockable outward-opening PVC door"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%206.jpg",
                width: 1200,
                height: 900,
                alt: "110x130cm modular cabin interior - reception desk and utility shelf"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%207.jpg",
                width: 1200,
                height: 900,
                alt: "Security cabin 110x130cm - internal electrical fitting, fuse box and socket"
              },
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/110x130Kiosk%208.jpg",
                width: 1200,
                height: 900,
                alt: "110x130cm portable kiosk - base detail showing forklift transport slots"
              }
            ],
            description:
              "Brand new, insulated modular security cabin with approximate external dimensions of 1.10m (W) x 1.30m (L). Fitted with a portable heater, LED lighting and full electrical installation. Suited to security huts, ticket booths, gatehouses and welfare units. Made in the EU.",
            sku: "portable-kiosk-110x130",
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
              url: "https://cabinunits.co.uk/products/Portable-Kiosk-110x130",
              priceCurrency: "GBP",
              price: "1799",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              seller: {
                "@type": "Organization",
                name: "Cabin Units",
                url: "https://cabinunits.co.uk",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "24",
              bestRating: "5",
              worstRating: "1",
            },
            specifications: {
              "@type": "PropertyValue",
              name: "Dimensions",
              value: "1.10m W x 1.30m L (approx. external footprint)",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the key features of this 110x130cm security cabin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This compact security cabin is built from steel double-skin sandwich panels with a 40mm polyurethane insulated core. It includes an internal reception desk, utility shelf, LED lighting, a double plug socket, a fuse box, an external site socket, a lockable outward-opening PVC door, and a portable heater fitted as standard.",
                },
              },
              {
                "@type": "Question",
                name: "Does this cabin come with heating?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A portable heater is fitted as standard, which makes this size particularly suited to staff working shifts through colder months.",
                },
              },
              {
                "@type": "Question",
                name: "What are the window and door dimensions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cabin has two inward-opening windows measuring 60cm x 100cm, and a lockable, outward-opening PVC door for secure access.",
                },
              },
              {
                "@type": "Question",
                name: "How is the cabin installed and moved?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cabin is fully assembled before dispatch and is suitable for forklift transport, so it can be positioned or repositioned on site with standard site equipment.",
                },
              },
              {
                "@type": "Question",
                name: "What are the delivery and pickup options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nationwide delivery is available. Free in-person pick-up is available from our warehouse at LE13BW, Leicester. For a delivery cost, please provide your postcode. Contact us at Mobile: 07497 954779.",
                },
              },
              {
                "@type": "Question",
                name: "What applications is this cabin best suited for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This cabin suits security huts, ticket kiosks, gatehouses, welfare units, car park attendant booths, catering units, and information points. It's a popular choice for construction sites, car parks, and commercial premises.",
                },
              },
            ],
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cabin Units",
            image: "https://cabinunits.co.uk/logo.png",
            description: "UK supplier of premium modular cabins and portable kiosks for commercial and industrial applications.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Warehouse",
              addressLocality: "Leicester",
              postalCode: "LE13BW",
              addressCountry: "GB",
            },
            url: "https://cabinunits.co.uk",
            telephone: "07497954779",
            priceRange: "£1,499 - £3,999",
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
            sameAs: [
              "https://www.facebook.com/cabinunits",
              "https://www.instagram.com/cabinunits",
              "https://www.linkedin.com/company/cabinunits",
            ],
          }),
        }}
      />
    </>
  )
}