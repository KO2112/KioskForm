import CabinVsContainerContent from "./CabinVsContainerContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Portable Cabin vs Shipping Container: Which to Buy? | Cabin Units",
  description:
    "Purpose-built portable cabin or converted shipping container? Honest comparison of insulation, condensation, weight, cost and security — and which suits your site.",
  alternates: {
    canonical: "https://cabinunits.co.uk/portable-cabin-vs-shipping-container",
    languages: {
      "en-GB": "https://cabinunits.co.uk/portable-cabin-vs-shipping-container",
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
    type: "article",
    locale: "en_GB",
    url: "https://cabinunits.co.uk/portable-cabin-vs-shipping-container",
    siteName: "CabinUnits",
    title: "Portable Cabin vs Converted Shipping Container: What's the Difference?",
    description:
      "Honest comparison of insulation, condensation, weight, cost and security — and which one suits your site.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Purpose-built insulated portable cabin compared with a converted shipping container",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Cabin vs Converted Shipping Container",
    description:
      "Honest comparison of insulation, condensation, weight, cost and security — and which one suits your site.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="cabin-vs-container-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "@id": "https://cabinunits.co.uk/portable-cabin-vs-shipping-container/#article",
                headline:
                  "Portable Cabin vs Converted Shipping Container: What's the Difference?",
                description:
                  "A purpose-built portable cabin and a converted shipping container solve the same problem differently. This guide compares build, insulation, condensation, weight, cost and security to help you choose.",
                image: "https://cabinunits.co.uk/110x130Kiosk.jpg",
                datePublished: "2026-07-21",
                dateModified: "2026-07-21",
                inLanguage: "en-GB",
                author: {
                  "@type": "Organization",
                  name: "Cabin Units",
                  url: "https://cabinunits.co.uk/",
                },
                publisher: { "@id": "https://cabinunits.co.uk/#organization" },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://cabinunits.co.uk/portable-cabin-vs-shipping-container/",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/portable-cabin-vs-shipping-container/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://cabinunits.co.uk/blog" },
                  { "@type": "ListItem", position: 3, name: "Portable Cabin vs Shipping Container" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/portable-cabin-vs-shipping-container/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the difference between a portable cabin and a converted shipping container?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A portable cabin is purpose-built as a workspace, with insulated panel walls, designed-in windows and pre-wired electrics. A converted shipping container starts as a steel cargo box and has openings cut and workspace features retro-fitted afterwards.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do shipping container conversions have condensation problems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Unlined containers commonly suffer condensation, because warm indoor air meets the cold single-skin steel and condenses. Quality conversions add insulation lining or anti-condensation coatings at extra cost. Insulated panel cabins avoid the problem because there is no cold single skin.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which is cheaper, a portable cabin or a converted container?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For staffed workspace use, a compact purpose-built cabin is usually cheaper — new insulated units start at £1,799 ex VAT with wiring and heating included, while container conversions typically cost more once lining and fit-out are added.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When is a converted container the better choice?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For unattended high-security storage, stacking, or repeated craning between rough sites, a container's steel shell is stronger than any panel cabin. For units where a person works inside, a purpose-built cabin is usually warmer, lighter and better value.",
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
      <CabinVsContainerContent />
    </>
  )
}