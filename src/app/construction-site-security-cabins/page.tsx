import ConstructionSiteContent from "./ConstructionSiteContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Construction Site Security Cabins | Site Gatehouses & Security Cabins",
  description:
    "Need a construction site security cabin in the UK? Explore insulated gatehouses and site cabins with power, secure access and fast dispatch for builders and contractors.",
  keywords: [
    "construction site security cabin",
    "site security hut",
    "construction site gatehouse",
    "site office cabin",
    "portable security cabin UK",
    "site gatehouse cabin",
    "temporary security cabin",
    "construction gatehouse cabin",
    "security hut for construction site",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/construction-site-security-cabins",
    languages: {
      "en-GB": "https://cabinunits.co.uk/construction-site-security-cabins",
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
    url: "https://cabinunits.co.uk/construction-site-security-cabins",
    siteName: "CabinUnits",
    title: "Construction Site Security Cabins | Site Gatehouses & Security Cabins",
    description:
      "Insulated security cabins and gatehouses for UK construction sites. Fully wired, forklift-ready and dispatched fast.",
    images: [
      {
        url: "/kiosk-130x130-1.png",
        width: 800,
        height: 600,
        alt: "Construction site security cabin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Site Security Cabins | Site Gatehouses & Security Cabins",
    description:
      "Insulated security cabins and gatehouses for UK construction sites. Fully wired, forklift-ready and dispatched fast.",
    images: ["/kiosk-130x130-1.png"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="construction-site-security-cabins-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://cabinunits.co.uk/construction-site-security-cabins/",
                url: "https://cabinunits.co.uk/construction-site-security-cabins/",
                name: "Construction Site Security Cabins | Site Gatehouses & Security Cabins",
                isPartOf: {
                  "@id": "https://cabinunits.co.uk/#website",
                },
                description:
                  "Insulated construction site security cabins built for UK sites with power, secure access and fast dispatch for builders and contractors.",
                breadcrumb: {
                  "@id": "https://cabinunits.co.uk/construction-site-security-cabins/#breadcrumb",
                },
                inLanguage: "en-GB",
                about: {
                  "@type": "Thing",
                  name: "Construction site security cabins",
                },
              },
              {
                "@type": "Service",
                "@id": "https://cabinunits.co.uk/construction-site-security-cabins/#service",
                serviceType: "Construction site security cabins",
                name: "Construction site security cabins",
                description:
                  "Secure, insulated cabins for gatehouses, sign-in points, site offices and welfare facilities on UK construction sites.",
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
                "@id": "https://cabinunits.co.uk/construction-site-security-cabins/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Kiosks", item: "https://cabinunits.co.uk/kiosks" },
                  { "@type": "ListItem", position: 3, name: "Construction Site Security Cabins" },
                ],
              },
              {
                "@type": "ItemList",
                "@id": "https://cabinunits.co.uk/construction-site-security-cabins/#itemlist",
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
                "@id": "https://cabinunits.co.uk/construction-site-security-cabins/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a construction site security cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A construction site security cabin is a robust, weatherproof cabin used for gatehouses, access control and site offices on active building projects.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do construction sites need security cabins?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "They help protect materials, manage visitors and create a secure, professional point of entry for contractors and delivery drivers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How quickly can a security cabin be delivered to site?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Standard units are typically available for fast dispatch. If you need a specific delivery date for a project start, confirm the exact lead time with our team at enquiry stage, especially if you're adding custom branding or a non-standard configuration.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are these cabins suitable for high-risk entrances?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. We can recommend reinforced layouts and secure access options for exposed or higher-risk entrances, depending on your site requirements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do the cabins come with electrics already installed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every cabin ships with internal LED lighting, a plug socket, an internal fuse box, and an external site socket, so it's ready to connect to your site supply on arrival.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can the cabins be moved between sites or repositioned on site?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, every unit has forklift pockets built into the base, so it can be lifted, relocated, or repositioned as your site layout changes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need planning permission for a site security cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Temporary cabins used for the duration of construction works are generally treated differently to permanent structures, but requirements can vary by site and local authority. We'd always recommend checking with your principal contractor or local planning office before installation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I get welfare facilities alongside a security cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Many construction sites order a security cabin alongside one of our portable toilet blocks to cover welfare requirements in the same delivery.",
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
      <ConstructionSiteContent />
    </>
  )
}