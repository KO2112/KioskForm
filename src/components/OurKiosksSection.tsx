"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const OurProductsSection = () => {
  const products = [
    {
      id: "Kiosk-130x130-Reinforced",
      title: "Anti-Vandal Kiosk 130×130",
      dimensions: "130×130 cm",
      description: "Reinforced security kiosk with anti-vandal features and steel fence protection.",
      image: "/kiosk-130x130-1.png",
      specs: "Dimensions: 1.30m × 1.30m × 2.35m (H), Weight: 170 kg approx.",
      price: "£1,999",
    },
    {
      id: "Portable-Kiosk-110x150",
      title: "Portable Kiosk 110×150",
      dimensions: "110×150 cm",
      description: "Compact portable kiosk designed for efficient use of space with full service-ready functionality.",
      image: "/110x150.jpg",
      specs: "Dimensions: 1.10m × 1.50m × 2.56m (H), Weight: 210 kg approx.",
      price: "£1,799",
      details: [
        "Fully insulated 40mm steel panel walls for all-weather use.",
        "Internal LED lighting, internal sockets, fuse box, and external site socket.",
        "Two inward-opening windows and a lockable PVC door for security.",
      ],
    },
    {
      id: "Modular-Kiosk-130x130",
      title: "Modular Kiosk 130×130",
      dimensions: "130×130 cm",
      description: "Versatile modular kiosk perfect for ticket booths, information points, and catering.",
      image: "/modular-kiosk-130x130-1.jpg",
      specs: "Dimensions: 1.30m × 1.30m × 2.35m (H), Weight: 170 kg approx.",
      price: "£1,999",
    },
    {
      id: "small-kiosk",
      title: "Small Modular Kiosk",
      dimensions: "143×143 cm",
      description: "Brand new, strong and durable booth perfect for tickets, security, or coffee units.",
      image: "/kiosk2.jpg",
      specs: "Dimensions: 1.43m × 1.43m × 2.10m (H), Weight: 350 kg approx.",
      price: "£1,999",
    },
    {
      id: "large-kiosk",
      title: "Large Modular Kiosk",
      dimensions: "218×143 cm",
      description: "Spacious durable kiosk for gatehouses, offices, or catering units.",
      image: "/kiosk.jpg",
      specs: "Dimensions: 2.18m × 1.43m × 2.10m (H), Weight: 400 kg approx.",
      price: "£2,499",
    },
    {
      id: "Portable-toilet-130x130",
      title: "Portable Toilet 130×130",
      dimensions: "130×130 cm",
      description: "Complete welfare unit with flushing toilet, wash basin, and electrical setup.",
      image: "/portable-toilet-130x130-1.png",
      specs: "Dimensions: 1.30m × 1.30m × 2.35m (H), Weight: 180 kg approx.",
      price: "£1,999",
      details: [
        "Ceramic flushing toilet and wash basin",
        "Fully insulated steel sandwich panels",
        "Ready for water, waste, and electrical connections",
      ],
    },
    {
      id: "Portable-Double-Toilet-Block",
      title: "Portable Double Toilet Block",
      dimensions: "160×210×256 cm",
      description: "Heavy-duty double WC cabin with two separate cubicles, wash basins, and full ready-to-connect services.",
      image: "/DoubleToilet.png",
      specs: "External dimensions: 1.60m × 2.10m × 2.56m, Weight: 610 kg approx.",
      price: "£2,699.99",
      details: [
        "Two separate WC cubicles with ceramic toilets",
        "Integrated basins, vanity cabinets, mirrors, and ventilation",
        "Fully pre-wired and pre-plumbed for quick installation",
      ],
    },
    {
      id: "Portable-Kiosk-130x210",
      title: "Portable Kiosk 130×210",
      dimensions: "130×210 cm",
      description: "Spacious security kiosk with reception desk and sliding windows for professional service.",
      image: "/portable-kiosk-130x210-1.jpg",
      specs: "Dimensions: 1.30m × 2.10m × 2.35m (H), Weight: 220 kg approx.",
      price: "£2,599",
    },
    {
      id: "Portable-Kiosk-150x210",
      title: "Portable Kiosk 150×210",
      dimensions: "150×210 cm",
      description: "Brand new insulated kiosk cabin with full electrical installation and immediate dispatch availability.",
      image: "/150x210%20Kiosk.jpg",
      specs: "Dimensions: 1.50m × 2.10m × 2.56m, Weight: 495 kg approx.",
      price: "£1,999",
      details: [
        "Strong galvanised steel frame with insulated double-skin steel panels",
        "Internal LED lighting, double plug socket, fuse box, and external 32A site socket",
        "Internal reception desk, durable PVC flooring, and lockable PVC door",
      ],
    },
    {
      id: "Modular-Kiosk-210X210",
      title: "Modular Kiosk 210×210",
      dimensions: "210×210 cm",
      description: "Premium large modular kiosk with spacious 4.41m² interior for commercial applications.",
      image: "/modular-kiosk-210x210-1.jpg",
      specs: "Dimensions: 2.10m × 2.10m × 2.35m (H), Weight: 280 kg approx.",
      price: "£2,499",
    },
  ]

  return (
    <section id="our-products" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cabin Units Kiosk Products</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality modular kiosks designed for various commercial and security applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products
            .filter((product) => 
              product.id === "Portable-Kiosk-110x150" || 
              product.id === "Portable-Double-Toilet-Block" || 
              product.id === "Portable-Kiosk-150x210"
            )
            .map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <Link
                href={`/products/${product.id}`}
                className="h-96 sm:h-128 w-full relative bg-blue-100 block"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {product.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                </div>
              </Link>

              {/* Product Details */}
              <div className="p-5 flex-grow">
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-sm text-gray-600 mb-4">{product.specs}</p>
                {product.details && (
                  <ul className="space-y-2 mb-4">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="text-blue-600 mr-2 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${product.id}`}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/kiosks"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Kiosks
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
