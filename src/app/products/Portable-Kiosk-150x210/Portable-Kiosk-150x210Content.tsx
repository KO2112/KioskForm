"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Box,
  Info,
  Truck,
  Ruler,
  ThermometerSnowflake,
  BatteryCharging,
  Star,
  ImageIcon,
  Ticket,
  Shield,
  Coffee,
  Users,
  HelpCircle,
  Weight,
  Home,
  Building,
  X,
  ZoomIn,
} from "lucide-react"
import ContactForm from "../../../components/ContactForm"

const PortableKiosk150x210Content = () => {
  const [activeTab, setActiveTab] = useState("specifications")
  const [activeThumbnail, setActiveThumbnail] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const images = [
    "/150x210%20Kiosk.jpg",
    "/150x210%20Kiosk%201.jpg",
    "/150x210%20Kiosk%202.jpg",
    "/150x210%20Kiosk%203.jpg",
    "/150x210%20Kiosk%204.jpg",
    "/150x210%20Kiosk%205.jpg",
    "/150x210%20Kiosk%206.jpg",
    "/150x210%20Kiosk%207.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "External Dimensions", value: "1.50 × 2.10 × 2.56 m (W×L×H) approx." },
    { icon: Ruler, name: "Internal Dimensions", value: "1.35 × 1.95 × 2.37 m (W×L×H) approx." },
    { icon: Weight, name: "Weight", value: "Approx. 495 kg" },
    {
      icon: ThermometerSnowflake,
      name: "Wall Construction",
      value: "20 mm steel inner and outer sheet panels with 40 mm polyurethane core insulation",
    },
    {
      icon: Box,
      name: "Base",
      value: "Thick fibre cement board reinforced with 30 mm galvanised steel frame and mineral wool insulation",
    },
    {
      icon: Building,
      name: "Corner Columns",
      value: "30 mm galvanised steel columns finished in RAL 7039 anthracite",
    },
    {
      icon: BatteryCharging,
      name: "Electrical Specification",
      value: "Internal LED lighting, internal double plug socket, internal fuse box, external 32A site socket",
    },
    {
      icon: Home,
      name: "Flooring",
      value: "Durable 3 mm PVC floor finish",
    },
    {
      icon: Info,
      name: "Window & Door",
      value: "Two 100×100 cm inward-opening windows and one 70×200 cm outward-opening PVC door",
    },
  ]

  const applications = [
    { icon: Ticket, name: "Ticket Booths" },
    { icon: Info, name: "Information Points" },
    { icon: Shield, name: "Security Huts" },
    { icon: Box, name: "Gatehouses" },
    { icon: Home, name: "Welfare Units" },
    { icon: Users, name: "Car Park Attendants" },
    { icon: Coffee, name: "Catering Units" },
    { icon: Building, name: "Surveillance Points" },
  ]

  const faqs = [
    {
      question: "Is the kiosk ready for immediate dispatch?",
      answer:
        "Yes. This portable kiosk is in stock and available for immediate dispatch, collection, or viewing. Simply position the unit and connect to a suitable power supply.",
    },
    {
      question: "What are the main electrical features included?",
      answer:
        "The unit includes internal LED lighting, an internal double plug socket, an internal fuse box, and an external 32A site socket for reliable power delivery.",
    },
    {
      question: "What are the window and door specifications?",
      answer:
        "Two inward-opening windows measure 100×100 cm each. The outward-opening PVC door measures 70×200 cm and is lockable for security.",
    },
    {
      question: "How should the kiosk be installed?",
      answer:
        "It is suitable for placement on a concrete base or steel beams. The unit is designed for forklift transport and arrives fully assembled.",
    },
    {
      question: "Does the product meet standard listing specifications?",
      answer:
        "Yes. All products meet the standard listing specifications, although minor cosmetic blemishes may occur due to outdoor storage and stretch wrap.",
    },
    {
      question: "Are delivery costs included in the listed price?",
      answer:
        "Delivery charges vary by postcode and whether a forklift is available. VAT and shipping are not included in the listed price.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/kiosks" className="text-gray-500 hover:text-gray-700">
              kiosks
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Portable Kiosk 150x210cm</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <div
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md mb-4 cursor-pointer group"
              onClick={() => openLightbox(activeThumbnail)}
            >
              <div className="h-[500px] w-full relative bg-gray-100 flex items-center justify-center">
                <img
                  src={images[activeThumbnail]}
                  alt="Portable Kiosk 150x210cm Cabin Booth"
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {activeThumbnail + 1} / {images.length}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border-2 ${activeThumbnail === index ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-400"} rounded-md overflow-hidden h-20 bg-white flex items-center justify-center transition-all`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-3">Click the image to expand the gallery</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Cabin Booth Security Ticket Hut Modular Gate House 150x210 cm</h1>
            <p className="text-gray-600 mb-4">Brand new, durable, and fully insulated with office-ready electrical installation.</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,999</span>
              <span className="ml-2 text-sm text-gray-500">excluding VAT and shipping</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, fully insulated modular cabin with external dimensions of 1.50m x 2.10m x 2.56m. In stock and available for immediate dispatch, collection, or viewing.
              </p>
            </div>

            <ContactForm />

            <div className="flex flex-col text-sm text-gray-600 mb-6 gap-2">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-gray-500 mr-2" />
                <span>Nationwide UK delivery available. Delivery cost available upon request by postcode.</span>
              </div>
              <div className="flex items-center">
                <Box className="h-5 w-5 text-gray-500 mr-2" />
                <span>Free pick-up available from our warehouse at LE13BW Leicester.</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Star className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Fully Insulated</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <ThermometerSnowflake className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Ready to Use</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Building className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Robust Build</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Home className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">EU Manufactured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              className={`py-4 px-2 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === "specifications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-2 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === "applications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("applications")}
            >
              Applications
            </button>
            <button
              className={`py-4 px-2 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === "features" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("features")}
            >
              Key Features
            </button>
            <button
              className={`py-4 px-2 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === "faqs" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("faqs")}
            >
              FAQs
            </button>
          </div>

          <div className="py-8">
            {activeTab === "specifications" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                      {specs.map((spec, index) => (
                        <li key={index} className="px-4 py-3 flex items-center">
                          <div className="bg-blue-100 rounded-full p-2 mr-3">
                            <spec.icon className="h-4 w-4 text-blue-700" />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">{spec.name}</span>
                            <p className="text-sm text-gray-600">{spec.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Product Description</h3>
                  <div className="prose prose-blue max-w-none text-gray-700">
                    <p>
                      Brand new, durable, and fully insulated modular cabin with approximate external dimensions of 1.50m x 2.10m x 2.56m (W×L×H). Built for rapid deployment and ready for immediate dispatch, collection, or viewing.
                    </p>
                    <p>
                      The cabin is constructed from a strong galvanised steel frame and steel double-skin sandwich panels for excellent durability, insulation, and weather resistance. Internal walls and external walls are finished in RAL 9002.
                    </p>
                    <p>
                      The base uses a thick fibre cement board reinforced with a 30 mm galvanised steel frame and mineral wool insulation. Corner columns are robust galvanised steel finished in RAL 7039 anthracite.
                    </p>
                    <p>
                      The unit includes internal LED lighting, an internal double plug socket, an internal fuse box, an external 32A site socket, a lockable PVC door, and durable PVC flooring. It is suitable for forklift transport and is made in the EU.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                <p className="text-gray-700 mb-8">
                  This portable kiosk 150x210cm is perfect for security huts, ticket kiosks, gatehouses, car park attendant booths, construction site offices, welfare units, catering operations, and commercial surveillance points.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {applications.map((app, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
                      <div className="bg-blue-100 rounded-full p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <app.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm">{app.name}</h4>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Ideal for various industries</h4>
                  <p className="text-blue-800">
                    A cost-effective, flexible alternative to traditional construction that suits retail, hospitality, security, events, and industrial applications.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Strong galvanised steel frame structure with fully insulated sandwich panels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Inner and outer 20 mm steel sheet walls with 40 mm polyurethane core</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Equipped with internal LED lighting and secure internal electrical installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Durable 3 mm PVC flooring and robust base with forklift transport capability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lockable 70×200 cm PVC door and two 100×100 cm inward-opening windows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ready to use once positioned and connected to power</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-5">
                      <h4 className="font-medium text-gray-900 flex items-start mb-2">
                        <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Need more information?</h4>
                  <p className="text-gray-700 mb-4">
                    Contact our team for specifications, delivery, or customisation support.
                  </p>
                  <Link
                    href="/ContactUs"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Get the kiosk you need today</h2>
              <p className="text-blue-100">Ideal for security, ticketing, event management, and commercial service points.</p>
            </div>
            <Link
              href="/ContactUs"
              className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-8 mb-8">
        <div className="prose prose-blue max-w-none text-gray-600 text-sm">
          <h2>Portable Kiosk Cabin Booth Security Ticket Hut Modular Gate House 150x210 cm</h2>
          <p>
            Brand new, durable, and fully insulated modular cabin with approximate external dimensions of 1.50m x 2.10m x 2.56m (WxLxH). In stock and available for immediate dispatch, collection, or viewing.
          </p>
          <p>
            Strong galvanised steel frame structure constructed from steel double-skin sandwich panels for durability, insulation, and weather resistance. Inner walls are 20 mm steel sheet; outer walls are 20 mm steel sheet, finished in RAL 9002, with 40 mm polyurethane core insulation.
          </p>
          <p>
            The base is a thick fibre cement board reinforced with a 30 mm galvanised steel frame and insulated with mineral wool insulation. Corner columns are robust galvanised steel with 30 mm thickness, finished in RAL 7039 anthracite. Equipped with a portable heater.
          </p>
          <p>
            Internal dimensions are approximately 135×195×237 cm (WxLxH). Windows sizes are 100×100 cm (W×H) each, and the door measures 70×200 cm (W×H) as an outward-opening PVC door. Flooring is durable 3 mm PVC.
          </p>
          <p>
            The product includes internal LED lighting, an internal double plug socket, an internal fuse box, and an external 32A site socket. Suitable for forklift transport and fully assembled. Made in the EU.
          </p>
          <p>
            Nationwide delivery is available across the UK, with costs provided upon request based on your postcode. Free in-person pick-up is available from our warehouse at LE13BW Leicester. VAT and shipping are not included in the listed price.
          </p>
          <p>
            This cabin is ideal for security huts/gatehouses, ticket kiosks/information points, car park attendant booths, construction site offices, welfare units, catering units/coffee kiosks, commercial or industrial surveillance points. It is a cost-effective and flexible alternative to traditional construction.
          </p>
          <p>
            Important compliance note: products meet standard specifications outlined in the listing descriptions, although minor variations in detail may occur. Due to outdoor storage, the kiosks may have small, difficult-to-see cosmetic blemishes or spots despite being in stretch wrap.
          </p>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 bg-transparent"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="absolute top-4 left-4 text-white text-lg font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex]} alt={`Portable Kiosk view ${lightboxIndex + 1}`} className="max-w-full max-h-[85vh] object-contain" />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  lightboxIndex === index ? "border-white ring-2 ring-white/50" : "border-white/30 hover:border-white/60"
                } bg-transparent`}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(index)
                }}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PortableKiosk150x210Content
