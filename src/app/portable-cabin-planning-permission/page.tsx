import PlanningPermissionContent from "./PlanningPermissionContent"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://cabinunits.co.uk"),
  title: "Do You Need Planning Permission for a Portable Cabin? | Cabin Units",
  description:
    "Usually not — portable cabins are moveable, temporary structures. Learn the exceptions, how to check with your council in under an hour, and when a cabin can be sited the same week.",
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
    title: "Do You Need Planning Permission for a Portable Cabin?",
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
    title: "Do You Need Planning Permission for a Portable Cabin?",
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
                headline: "Do You Need Planning Permission for a Portable Cabin?",
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
                  { "@type": "ListItem", position: 3, name: "Planning Permission for Portable Cabins" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://cabinunits.co.uk/portable-cabin-planning-permission/#faq",
                mainEntity: [
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