"use client"

import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"

const OurProductsSection = () => {
  // Ordered smallest footprint -> largest; toilet block last as requested.
  // footprint in m2 drives the size bar under each card.
  const featured = [
    {
      id: "Portable-Kiosk-110x130",
      title: "Portable Kiosk 110×130",
      dimensions: "1.10 × 1.30 × 2.56 m",
      footprint: 1.43,
      description:
        "Our most compact cabin — insulated, pre-wired and fitted with a portable heater, reception desk and utility shelf.",
      image: "/PortableCabin1.jpg",
      alt: "Portable kiosk 110x130cm — compact insulated cabin booth with heater",
      price: "£1,799",
      tag: "Smallest footprint",
    },
    {
      id: "Portable-Kiosk-110x150",
      title: "Portable Kiosk 110×150",
      dimensions: "1.10 × 1.50 × 2.56 m",
      footprint: 1.65,
      description:
        "Extra working depth for a desk and monitor — two opening windows, LED lighting and a lockable PVC door.",
      image: "/110x150.jpg",
      alt: "Portable kiosk 110x150cm — insulated security booth with LED lighting",
      price: "£1,949",
      tag: "Extra desk space",
    },
    {
      id: "Portable-Kiosk-150x210",
      title: "Portable Kiosk 150×210",
      dimensions: "1.50 × 2.10 × 2.56 m",
      footprint: 3.15,
      description:
        "Room for two workstations, with a 32A external site socket, reception desk and heater included.",
      image: "/150x210kiosk1.jpg",
      alt: "Portable kiosk 150x210cm — insulated cabin with room for two staff",
      price: "£1,999",
      tag: "Room for two",
    },
    {
      id: "Portable-Double-Toilet-Block",
      title: "Portable Double Toilet Block",
      dimensions: "1.60 × 2.10 × 2.56 m",
      footprint: 3.36,
      description:
        "Two separate WC cubicles with ceramic toilets, basins and ventilation — pre-wired and pre-plumbed.",
      image: "/DoubleToilet.png",
      alt: "Portable double toilet block — twin WC welfare cabin",
      price: "£2,699.99",
      tag: "Twin welfare unit",
    },
  ]

  const maxFootprint = Math.max(...featured.map((p) => p.footprint))

  return (
    <section id="our-products" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Cabin Units Product Range
            </h3>
            <div className="mt-3 h-1 w-16 bg-amber-400 rounded-full" />
          </div>
          <Link
            href="/kiosks"
            className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 transition-colors"
          >
            View all kiosks <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-lg transition-all"
            >
              {/* Photo — clean white, no overlay, no crop */}
              <Link
                href={`/products/${product.id}`}
                className="relative block h-64 bg-white"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 bg-blue-950 text-white text-[11px] font-mono px-2 py-1 rounded">
                  {product.dimensions}
                </span>
              </Link>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow border-t border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-gray-900 leading-snug">{product.title}</h3>
                  <div className="text-right flex-shrink-0">
                    <span className="block text-lg font-bold text-blue-900 leading-none">
                      {product.price}
                    </span>
                    <span className="text-[10px] text-gray-500">ex VAT</span>
                  </div>
                </div>
                <span className="self-start text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-3">
                  {product.tag}
                </span>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                {/* Footprint bar — the size ruler */}
                <div className="mt-auto mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                      Floor area
                    </span>
                    <span className="font-mono text-[11px] font-bold text-gray-800">
                      {product.footprint.toFixed(2)} m²
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(product.footprint / maxFootprint) * 100}%` }}
                    />
                  </div>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex justify-center items-center bg-blue-700 text-white px-4 py-2.5 rounded font-medium text-sm hover:bg-blue-600 transition-colors"
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection