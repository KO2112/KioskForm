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

const PortableKiosk110x130Content = () => {
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
    "/PortableCabin1.jpg",
    "/PortableCabin2.jpg",
    "/PortableCabin3.jpg",
    "/PortableCabin4.jpg",
    "/PortableCabin5.jpg",
    "/PortableCabin6.jpg",
    "/PortableCabin7.jpg",
    "/PortableCabin8.jpg",
    "/PortableCabin9.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "External Dimensions", value: "1.10 × 1.30 × 2.56 m (W×L×H) approx." },
    { icon: Ruler, name: "Internal Dimensions", value: "1.00 × 1.20 × 2.37 m (W×L×H) approx." },
    { icon: ThermometerSnowflake, name: "Wall Construction", value: "20 mm steel sheets with 40 mm polyurethane insulation" },
    { icon: Box, name: "Base", value: "Fibre cement board reinforced with galvanised steel frame" },
    { icon: Building, name: "Corner Columns", value: "Galvanised steel columns finished in anthracite" },
    { icon: BatteryCharging, name: "Electrical Specification", value: "Internal LED lighting, internal double plug socket, fuse box, external site socket, portable heater" },
    { icon: Home, name: "Flooring", value: "Durable 3 mm PVC floor finish" },
    { icon: Info, name: "Window & Door", value: "Two 60×100 cm inward-opening windows and lockable PVC door" },
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
        "The cabin includes internal LED lighting, an internal double plug socket, a fuse box, an external site socket, and a portable heater.",
    },
    {
      question: "How many windows and what door type does it have?",
      answer:
        "It features two inward-opening 60×100 cm windows and one lockable outward-opening PVC door for secure access.",
    },
    {
      question: "Can this kiosk be transported by forklift?",
      answer:
        "Yes. The unit is designed for forklift transport and arrives fully assembled, ready to be placed on site.",
    },
    {
      question: "Is the price inclusive of delivery?",
      answer:
        "Delivery costs vary by postcode. VAT and shipping are not included in the listed price.",
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
            <span className="text-gray-900 font-medium">Portable Kiosk 110x130cm</span>
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
                  alt="Portable Kiosk 110x130cm Cabin Booth"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130 cm</h1>
            <p className="text-gray-600 mb-4">Compact insulated modular kiosk with full electrical installation, security features and fast UK delivery.</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,799</span>
              <span className="ml-2 text-sm text-gray-500">excluding VAT and shipping</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new compact kiosk cabin with external dimensions 1.10m x 1.30m x 2.56m. In stock and available for immediate dispatch, collection, or viewing.
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
                        This compact modular kiosk is a brand new, durable, and fully insulated portable cabin designed for security, ticketing, gatehouse, and reception applications. Manufactured in the EU, it combines a strong galvanised steel structure with insulated steel sandwich panels for dependable weather resistance and thermal performance.
                      </p>
                      <p>
                        The unit includes internal LED lighting, a double plug socket, an internal fuse box, an external site socket, and a portable heater, making it ready for immediate use once positioned and connected to a suitable power source. Its internal reception desk, utility shelf, PVC flooring, and secure outward-opening PVC door make it practical for everyday site use.
                      </p>
                      <p>
                        With external dimensions of approximately 110 × 130 × 256 cm and an internal working area of around 100 × 120 × 237 cm, this kiosk is ideal where space is limited but performance cannot be compromised. Nationwide delivery is available across the UK, with collection or viewing also available from our Leicester warehouse.
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
                        <span className="text-gray-700">Strong galvanised steel frame and 20 mm steel sandwich panels with 40 mm polyurethane insulation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Internal LED lighting, internal double plug socket, internal fuse box, external site socket, and portable heater</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Two inward-opening windows and an outward-opening lockable PVC door for secure access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Built-in reception desk, utility shelf, and durable PVC flooring for everyday use</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Fully assembled and suitable for forklift transport, making installation straightforward</span>
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
      </div>

      <div className="relative left-1/2 w-screen -ml-[50vw] bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between gap-6">
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
            The compact 110x130cm model is supplied with internal LED lighting, power sockets, a fuse box, an external site socket, and a portable heater, making it ready for immediate use once connected to a suitable power supply. Two inward-opening windows, a lockable outward-opening PVC door, and an internal reception desk provide both security and usability.
          </p>
          <p>
            Suitable for both temporary and permanent deployment, this kiosk is ideal for construction sites, car parks, events, and commercial premises where a robust, ready-to-use cabin is required. Nationwide delivery is available across the UK, and pickup or viewing can be arranged from our Leicester warehouse.
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

export default PortableKiosk110x130Content
