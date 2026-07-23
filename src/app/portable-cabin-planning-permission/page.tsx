import PlanningPermissionContent from "./PlanningPermissionContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Do Portable Buildings Need Planning Permission? | Cabin Units",
  description:
    "Do portable buildings need planning permission? Usually not if under 100m² and in place 28 days or less. Learn the permitted development rule, the exceptions, and how to check with your council.",
  keywords: [
    "do portable buildings need planning permission",
    "planning permission for portable buildings",
    "do you need planning permission for a portable cabin",
    "do portacabins need planning permission",
    "do you need planning permission for portacabins",
    "portable cabin planning permission",
    "portacabin planning permission",
    "temporary building planning permission",
    "permitted development portable building",
    "planning permission site cabin",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/portable-cabin-planning-permission",
    languages: {
      "en-GB": "https://cabinunits.co.uk/portable-cabin-planning-permission",
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
    url: "https://cabinunits.co.uk/portable-cabin-planning-permission",
    siteName: "CabinUnits",
    title: "Do Portable Buildings Need Planning Permission?",
    description:
      "Usually not — portable cabins are moveable, temporary structures. Learn the exceptions and how to check with your council in under an hour.",
    images: [
      {
        url: "/110x130Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Portable cabin sited without planning permission on private land",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Portable Buildings Need Planning Permission?",
    description:
      "Usually not — portable cabins are moveable, temporary structures. Learn the exceptions and how to check with your council quickly.",
    images: ["/110x130Kiosk.jpg"],
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="planning-permission-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "@id": "https://cabinunits.co.uk/portable-cabin-planning-permission/#article",
                headline: "Do Portable Buildings Need Planning Permission?",
                description:
                  "In most everyday business situations, a portable cabin on private land does not need planning permission. This guide explains why, the exceptions, and how to check with your council quickly.",
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
                  "@id": "https://cabinunits.co.uk/portable-cabin-planning-permission/",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://cabinunits.co.uk/portable-cabin-planning-permission/#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://cabinunits.co.uk/" },
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://cabinunits.co.uk/blog" },
                  { "@type": "ListItem", position: 3, name: "Planning Permission for Portable Buildings" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/portable-cabin-planning-permission/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do portable buildings need planning permission?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Usually not, within limits. As a general guide, a portable building typically falls within permitted development — meaning no separate planning application — if its floor area is under 100m² and it's in place for 28 days or less in a calendar year. Beyond those limits, or in a conservation area, or for residential use, permission is more likely to be needed. Thresholds vary by nation and council, so always confirm with your local planning authority.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you need planning permission for a portable cabin?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Usually not. A portable cabin used temporarily on private land — such as a construction site, car park or yard — is a moveable structure rather than a permanent building, so it does not normally require planning permission. Permission may be needed if the cabin becomes permanent, sits in a conservation area, or is used as living accommodation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do portacabins need planning permission?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, not usually. Portacabin is a common name for a portable cabin, and the same rule applies: because it's a temporary, moveable structure rather than a permanent building, a portacabin used for typical business purposes on private land does not normally require planning permission. The same exceptions apply too — long-term permanent siting, conservation areas, and residential use.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do portable cabins need building regulations approval?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Small, moveable cabins used for short-term business purposes are generally exempt from building regulations. The electrical connection to your power supply should be carried out by a qualified electrician who provides a certificate.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I check if my portable cabin needs permission?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Call your local planning authority's duty planner and describe the cabin, the site and the duration. For borderline cases, a Lawful Development Certificate provides formal written confirmation that permission is not required.",
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
      <PlanningPermissionContent />
    </>
  )
}