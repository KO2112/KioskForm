import type { Metadata } from "next"
import Script from "next/script"
import ModularCabin115x125cmContent from "./Modular-Cabin-115x125cmContent"

export const metadata: Metadata = {
  title: "115x125cm Modular Cabin | Portable Ticket Booth & Security Hut UK",
  description:
    "Premium UK modular cabin 115x125cm - fully insulated portable ticket booth with LED lighting, reception desk & electrical installation. Perfect for security huts, gatehouses & catering units. Made in EU.",
  keywords: [
    "modular cabin 115x125cm",
    "portable ticket booth UK",
    "security hut 115x125",
    "portable cabin",
    "modular kiosk",
    "ticket booth",
    "gatehouse UK",
    "portable office",
    "catering unit",
    "information kiosk",
    "compact portable cabin",
    "fully insulated cabin",
    "modular building UK",
    "reception booth",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Modular-Cabin-115x125cm",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Modular-Cabin-115x125cm",
    },
  },
  openGraph: {
    title: "115x125cm Modular Cabin - Portable Ticket Booth & Security Solutions",
    description:
      "Compact 115×125cm fully insulated modular cabin with LED lighting, double plug socket & reception desk. Ideal security hut, ticket booth & gatehouse. UK delivery available.",
    type: "website",
    images: [
      {
        url: "/Modular-Cabin-115x125cm.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Cabin 115x125cm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "115x125cm Modular Cabin - Portable Ticket Booth & Security Hut UK",
    description: "Fully insulated portable cabin with LED lighting, reception desk & electrical installation. Perfect ticket booth, security hut or gatehouse.",
    images: ["/Modular-Cabin-115x125cm.jpg"],
  },
}

export default function ModularCabin115x125cmPage() {
  return (
    <>
      <ModularCabin115x125cmContent />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "@id": "https://cabinunits.co.uk/products/Modular-Cabin-115x125cm",
            name: "115x125cm Modular Cabin - Portable Ticket Booth & Security Hut",
            image: [
              {
                "@type": "ImageObject",
                url: "https://cabinunits.co.uk/Modular-Cabin-115x125cm.jpg",
                width: 1200,
                height: 630,
                alt: "Modular Cabin 115x125cm"
              }
            ],
            description:
              "Brand new, durable, and fully insulated modular cabin with approximate external dimensions of 1.15m (W) x 1.25m (L) x 2.35m (H). Perfect for security huts, ticket booths, gatehouses and information points. Made in the EU with LED lighting and electrical installation.",
            sku: "modular-cabin-115x125",
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
              url: "https://cabinunits.co.uk/products/Modular-Cabin-115x125cm",
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
              value: "1.15m W x 1.25m L x 2.35m H (3'9\" x 4'1\" x 7'9\")",
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
                name: "What are the key features of this 115x125cm modular cabin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This compact modular cabin features steel double sandwich panels with RAL 9002 color and 50mm styrofoam core insulation. It includes an internal reception desk, PVC flooring, LED lighting, upward sliding and fixed windows, complete electrical installation with LED light, double plug socket, fuse box, external 16A female 3-pin site socket, and a lockable door for security.",
                },
              },
              {
                "@type": "Question",
                name: "How should the modular cabin be installed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For optimal use, we recommend placing the cabin on a concrete base or steel beams. The base is made from thick fiber cement board with forklift slots at the base and 4 lifting eyes on the roof corners for easy positioning. Ready to use - just place it in a safe spot and plug into power.",
                },
              },
              {
                "@type": "Question",
                name: "What are the exact dimensions and weight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Outer dimensions (W×L×H): 1.15 × 1.25 × 2.35 meters approx. (3'9\" × 4'1\" × 7'9\"). Window dimensions: W64 × H80 cm; foldable window dimensions: W64 × H40 cm. Weight: Approximately 180 kg. Internal dimensions: 100x110x220 cm (3'3\" x 3'7\" x 7'2\").",
                },
              },
              {
                "@type": "Question",
                name: "What electrical systems are included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cabin comes with comprehensive electrical installation including internal LED light, double plug socket, fuse box, and an external 16A female 3-pin site socket. Ready to use - just plug into the power.",
                },
              },
              {
                "@type": "Question",
                name: "What are the delivery and pickup options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nationwide delivery is available. Free in-person pick-up is available from our warehouse at LE13BW, Leicester. For delivery cost, please provide your postcode. Contact us at Mobile: 07497 954779.",
                },
              },
              {
                "@type": "Question",
                name: "What applications is this modular cabin best suited for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This versatile cabin is perfect for security huts, gatehouses, car park attendants, ticket kiosks, information points, catering units, security cabins, offices, welfare units, and surveillance points. Ideal for outdoor events or surveillance at locations such as construction sites, industrial areas, and commercial premises.",
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
