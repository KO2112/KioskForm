import PortableToilet130x130Content from "./Portable-toilet-130x130Content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portable Toilet Unit 130x130cm - Welfare Cabin Modular Toilet Block",
  description:
    "Fully insulated 130×130cm portable toilet unit with flushing toilet and wash basin. Weather-resistant welfare cabin perfect for outdoor events, festivals, and industrial sites.",
  keywords: [
    "portable toilet 130x130",
    "welfare cabin",
    "modular toilet block",
    "portable restroom",
    "outdoor toilet unit",
    "festival toilet",
    "construction site toilet",
    "portable washroom",
  ],
  alternates: {
    canonical: "https://cabinunits.co.uk/products/Portable-toilet-130x130",
    languages: {
      "en-GB": "https://cabinunits.co.uk/products/Portable-toilet-130x130",
    },
  },
  openGraph: {
    title: "Portable Toilet Unit 130x130cm - Complete Welfare Solution",
    description:
      "Compact 130×130cm insulated portable toilet with flushing toilet and wash basin. Perfect for outdoor events, festivals, and industrial sites with complete plumbing connections.",
    images: [
      {
        url: "/portable-toilet-130x130-1.png",
        width: 1200,
        height: 630,
        alt: "Portable Toilet Unit 130x130cm",
      },
    ],
  },
}

export default function Page() {
  return <PortableToilet130x130Content />
}
