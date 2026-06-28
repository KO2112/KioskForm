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
  Building,
  Home,
  X,
  ZoomIn,
} from "lucide-react"
import ContactForm from "../../../components/ContactForm"

const PortableKiosk110x150Content = () => {
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
    "/110x150.jpg",
    "/110x150%202.jpg",
    "/110x150%203.jpg",
    "/110x150%204.jpg",
    "/110x150%205.jpg",
    "/110x150%206.jpg",
    "/110x150%207.jpg",
    "/110x150%208.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "External Dimensions", value: "1.10 × 1.50 × 2.56 m (W×L×H) approx." },
    { icon: Ruler, name: "Internal Dimensions", value: "0.95 × 1.35 × 2.37 m (W×L×H) approx." },
    { icon: ThermometerSnowflake, name: "Wall Construction", value: "20 mm steel sheets with 40 mm polyurethane insulation" },
    { icon: Box, name: "Base", value: "Fibre cement board reinforced with galvanised steel frame" },
    { icon: Building, name: "Corner Columns", value: "Galvanised steel columns finished in anthracite" },
    { icon: BatteryCharging, name: "Electrical Specification", value: "Internal LED lighting, internal double plug socket, fuse box, external site socket" },
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
        "The cabin includes internal LED lighting, internal double plug socket, fuse box, and an external site socket for reliable power.",
    },
    {
      question: "How many windows and what door type does it have?",
      answer:
        "It has two inward-opening 60×100 cm windows and one lockable outward-opening PVC door for secure access.",
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
            <span className="text-gray-900 font-medium">Portable Kiosk 110x150cm</span>
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
                  alt="Portable Kiosk 110x150cm Cabin Booth"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x150 cm</h1>
            <p className="text-gray-600 mb-4">Compact insulated kiosk with full electrical installation and fast delivery for security and ticket applications.</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,799</span>
              <span className="ml-2 text-sm text-gray-500">excluding VAT and shipping</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new compact kiosk cabin with external dimensions 1.10m x 1.50m x 2.56m. In stock and available for immediate dispatch, collection, or viewing.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Key Features</h2>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Fully insulated steel structure with 40 mm polyurethane core.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Internal LED lighting, sockets, fuse box, and external site socket.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Two inward-opening windows and lockable PVC door for security.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span>Compact footprint ideal for narrow sites and mobile deployment.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Specifications</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <spec.icon className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{spec.name}</p>
                    <p>{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Applications</h2>
            <div className="grid grid-cols-1 gap-3 text-gray-700 text-sm">
              {applications.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700 text-sm">
            {faqs.map((faq, index) => (
              <div key={index}>
                <p className="font-semibold text-gray-900">{faq.question}</p>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
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

export default PortableKiosk110x150Content
