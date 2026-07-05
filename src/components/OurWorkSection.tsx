import Image from "next/image"

const images = [
  {
    src: "/ourkioskcabinwork1.jpeg",
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
    src: "/ourkioskcabinwork5.jpeg",
    alt: "Portable kiosk cabin exterior finish and design detail",
  },
  {
    src: "/ourkioskcabinwork6.jpeg",
    alt: "Modular kiosk cabin unit ready for delivery",
  },
  {
    src: "/ourkioskcabinwork7.jpeg",
    alt: "Portable kiosk cabin completed and staged at the site",
  },
]

export default function OurWorkSection() {
  return (
    <section id="our-work" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-700 mb-3">Our work</p>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900">kiosk cabin projects completed for UK customers</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2" : ""
              }`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
