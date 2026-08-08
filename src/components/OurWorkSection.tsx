"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  {
    src: "/CabinOnSite.png",
    alt: "Finished portable kiosk cabin exterior on site",
  },
  {
    src: "/ourkioskcabinwork2.jpeg",
    alt: "Kiosk cabin installation view with service hatch",
  },
  {
    src: "/ourkioskcabinwork3.jpeg",
    alt: "Interior setup view of portable kiosk cabin work",
  },
  {
    src: "/ourkioskcabinwork4.jpeg",
    alt: "Portable kiosk cabin wall paneling and window installation",
  },
  {
    src: "/CabinsOnTheWay.jpeg",
    alt: "Portable kiosk cabin exterior finish and design detail",
  },
  {
    src: "/ourkioskcabinwork6.jpeg",
    alt: "Modular kiosk cabin unit ready for delivery",
  },
  {
    src: "/ourworksection23.jpeg",
    alt: "Portable kiosk cabin completed and staged at the site",
  },
]

export default function OurWorkSection() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(null)

  return (
    <section id="our-work" className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-3xl sm:text-4xl font-bold text-slate-900">kiosk cabin projects completed for UK customers</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`cursor-pointer overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2" : ""
              }`}
              aria-label={`View larger image: ${image.alt}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={75}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                quality={90}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
