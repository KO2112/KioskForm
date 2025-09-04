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
      id: "Modular-Kiosk-150X150",
      title: "Modular Kiosk 150×150",
      dimensions: "150×150 cm",
      description: "Enhanced modular kiosk with larger interior space for reception and security applications.",
      image: "/modular-kiosk-150x150-1.jpg",
      specs: "Dimensions: 1.50m × 1.50m × 2.35m (H), Weight: 200 kg approx.",
      price: "£2,049",
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Kiosk Products</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality modular kiosks designed for various commercial and security applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-72 w-full relative bg-gray-100"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.title}</h3>
                  {product.price && (
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">
                      {product.price}
                    </span>
                  )}
                </div>
                <p className="text-blue-600 font-medium text-sm mb-3">{product.dimensions}</p>
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">{product.description}</p>
                <p className="text-xs text-gray-500 mb-4">{product.specs}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm"
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
            href="/ContactUs"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
