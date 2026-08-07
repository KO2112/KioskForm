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
  Ticket,
  Shield,
  Coffee,
  Users,
  Building,
  Home,
  X,
  ZoomIn,
  HelpCircle,
} from "lucide-react"
import ContactForm from "../../../components/ContactForm"

const PortableKiosk150x150Content = () => {
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
    "/PortableCabin150x150.png",
    "/PortableCabin150x1502.png",
    "/PortableCabin150x1503.png",
    "/PortableCabin150x1504.png",
    "/PortableCabin150x1505.png",
    "/PortableCabin150x1506.png",
    "/PortableCabin150x1507.png",
    "/PortableCabin150x1508.png",
    "/PortableCabin150x1509.png",
    "/PortableCabin150x15010.png",
  ]

  const specs = [
    { icon: Ruler, name: "External Dimensions", value: "1.50 × 1.50 × 2.56 m (W×L×H) approx. (4'11\" × 4'11\" × 8'5\")" },
    { icon: Ruler, name: "Internal Dimensions", value: "1.35 × 1.35 × 2.37 m (W×L×H) approx. (4'5\" × 4'5\" × 7'9\")" },
    { icon: ThermometerSnowflake, name: "Wall Construction", value: "Steel double-skin sandwich panels with 40 mm polyurethane core insulation; inner and outer walls 20 mm steel sheets, finished RAL 9002" },
    { icon: Box, name: "Base", value: "Thick fibre cement board reinforced with a 30 mm galvanised steel frame and mineral wool insulation" },
    { icon: Building, name: "Corner Columns", value: "Robust galvanised steel columns, 30 mm thick, finished in RAL 7039 anthracite" },
    { icon: BatteryCharging, name: "Electrical Specification", value: "Internal LED lighting, internal double plug socket, internal fuse box, and 32A external site socket" },
    { icon: Home, name: "Flooring", value: "Durable 3 mm PVC flooring" },
    { icon: Info, name: "Window & Door", value: "Two 100 × 100 cm inward-opening windows and a 70 × 200 cm outward-opening lockable PVC door" },
  ]

  const applications = [
    { icon: Ticket, name: "Ticket Booths" },
    { icon: Shield, name: "Security Huts" },
    { icon: Box, name: "Gatehouses" },
    { icon: Home, name: "Reception Cabins" },
    { icon: Users, name: "Car Park Attendants" },
    { icon: Coffee, name: "Catering Units" },
    { icon: Building, name: "Information Points" },
  ]

  const faqs = [
    {
      question: "Is the kiosk ready for immediate dispatch?",
      answer:
        "Yes. This compact kiosk is in stock and ready for immediate dispatch, collection, or viewing. Simply position the unit and connect to power.",
    },
    {
      question: "What electrical features are included?",
      answer:
        "The cabin includes internal LED lighting, internal double plug socket, fuse box, and an external site socket for reliable power.",
    },
    {
      question: "How many windows and what door type does it have?",
      answer:
        "It has secure inward-opening windows and a lockable outward-opening PVC door for safe access.",
    },
    {
      question: "Can this kiosk be transported by forklift?",
      answer:
        "Yes. The unit is designed for forklift transport and arrives fully assembled, ready to be placed on site.",
    },
    {
      question: "Is the price inclusive of delivery?",
      answer:
        "Delivery costs vary by postcode and whether forklift assistance is required. VAT and delivery are not included in the listed price.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-4 sm:pt-4">
      <div className="mx-auto max-w-6xl px-3 py-1 sm:px-6 sm:py-1.5 lg:px-8">
        <nav className="flex flex-wrap items-center text-sm leading-none">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link href="/kiosks" className="text-gray-500 hover:text-gray-700">
            kiosks
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="font-medium text-gray-900">Portable Kiosk 150x150cm</span>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <div
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md mb-4 cursor-pointer group"
              onClick={() => openLightbox(activeThumbnail)}
            >
              <div className="h-[500px] w-full relative bg-gray-100 flex items-center justify-center">
                <img
                  src={images[activeThumbnail]}
                  alt="Portable Kiosk 150x150cm Cabin Booth"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 150x150 cm</h1>
            <p className="text-gray-600 mb-4">Brand new, durable and fully insulated modular cabin with full electrical installation and fast delivery for security and ticket applications.</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£2,399</span>
              <span className="ml-2 text-sm text-gray-500">excluding VAT and shipping</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, durable and fully insulated modular cabin with approximate external dimensions of 1.50m x 1.50m x 2.56m (WxLxH), ready to use once positioned and connected to a suitable power supply.
              </p>
            </div>

            <ContactForm />

            <div className="flex flex-col text-sm text-gray-600 mb-6 gap-2">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-gray-500 mr-2" />
                <span>Nationwide UK delivery available. Delivery cost available on request by postcode.</span>
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
                <span className="text-sm text-gray-700">Compact Design</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <ThermometerSnowflake className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Fully Insulated</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Building className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Ready to Use</span>
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

        <div className="border-t border-gray-200 bg-white mt-8">
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
                        This brand new, durable and fully insulated modular cabin is designed for security, ticketing, gatehouse, and reception applications. Manufactured in the EU, it combines a strong galvanised steel frame with steel double-skin sandwich panels for outstanding durability, insulation, and weather resistance.
                      </p>
                      <p>
                        The unit includes internal LED lighting, an internal double plug socket, an internal fuse box, a 32A external site socket, and a portable heater, making it ready to use once positioned and connected to a suitable power supply. It also features an internal reception desk measuring 30 × 95 cm, an additional utility shelf, durable 3 mm PVC flooring, and a lockable outward-opening PVC door.
                      </p>
                      <p>
                        With approximate external dimensions of 150 × 150 × 256 cm and internal dimensions of 135 × 135 × 237 cm, this modular cabin is ideal for compact sites where reliable performance and quick deployment are essential. It can be transported by forklift or lifted by crane, is fully assembled, and is suitable for placement on a concrete base or steel beams.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "applications" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                  <p className="text-gray-700 mb-8">
                    This compact kiosk provides a secure and practical workspace for commercial, public, and industrial settings where a durable portable cabin is needed.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {applications.map((app, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 rounded-full p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                          <app.icon className="h-5 w-5 text-blue-700" />
                        </div>
                        <h4 className="font-medium text-gray-900 text-sm">{app.name}</h4>
                      </div>
                    ))}
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
                        <span className="text-gray-700">Strong galvanised steel frame structure with steel double-skin sandwich panels for excellent durability, insulation, and weather resistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Inner and outer walls are 20 mm steel sheets finished in RAL 9002, with a 40 mm polyurethane core and mineral wool insulated base</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Includes internal LED lighting, an internal double plug socket, an internal fuse box, a 32A external site socket, and a portable heater</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Features two 100 × 100 cm inward-opening windows, a 70 × 200 cm outward-opening lockable PVC door, and a 30 × 95 cm reception desk</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Fully assembled and suitable for forklift transport or crane lifting, with placement possible on a concrete base or steel beams</span>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Need a quotation or delivery advice?</h4>
                    <p className="text-gray-700 mb-4">
                      Our team can help with delivery planning, site access, and installation requirements for your modular kiosk.
                    </p>
                    <Link href="/ContactUs" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                      Contact Us
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative left-1/2 w-screen -ml-[50vw] bg-gradient-to-r from-blue-700 to-blue-600 text-white mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to discuss your compact kiosk?</h2>
                <p className="text-blue-100">
                  Contact us for product availability, site delivery, and a tailored quotation for your project.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/ContactUs" className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-blue max-w-none text-gray-600 text-sm">
            <h2>Portable Kiosk Cabin Booth | Modular Security Cabin | Ticket Hut</h2>
            <p>
              Our portable kiosk cabins are designed to provide a secure, comfortable, and practical workspace for ticketing, security, gate access, reception, and other on-site operations. Manufactured in the EU with durable insulated sandwich panels and a strong galvanised steel frame, each unit offers excellent durability and weather resistance with minimal site preparation.
            </p>
            <p>
              The 150x150cm model is supplied with internal LED lighting, power sockets, a fuse box, a 32A external site socket, and a portable heater, making it ready for immediate use once connected to a suitable power supply. Two 100 × 100 cm inward-opening windows, a 70 × 200 cm outward-opening PVC door, and an internal reception desk provide both security and usability.
            </p>
            <p>
              Suitable for both temporary and permanent deployment, this modular cabin is ideal for construction sites, car parks, events, commercial premises, and industrial surveillance points where a robust, ready-to-use cabin is required. Nationwide delivery is available across the UK, and pickup or viewing can be arranged from our Leicester warehouse.
            </p>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 bg-transparent"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
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

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute top-4 left-4 text-white text-lg font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default PortableKiosk150x150Content
