"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ChevronRight,
  CheckCircle,
  Box,
  Info,
  Truck,
  Ruler,
  ThermometerSnowflake,
  BatteryCharging,
  Star,
  ImageIcon,
  Coffee,
  Ticket,
  Users,  
  HelpCircle,
  Weight,
  Home,
  Building,
  X,
  ChevronLeft,
  ZoomIn,
} from "lucide-react"
import ContactForm from '../../../components/ContactForm'

const ModularKiosk150X150Content = () => {
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

  // 10 images for the kiosk gallery
  const images = [
    "/modular-kiosk-150x150-1.jpg",
    "/modular-kiosk-150x150-2.png",
    "/modular-kiosk-150x150-3.jpg",
    "/modular-kiosk-150x150-4.png",
    "/modular-kiosk-150x150-5.jpg",
    "/modular-kiosk-150x150-6.png",
    "/modular-kiosk-150x150-7.jpg",
    "/modular-kiosk-150x150-8.jpg",
    "/modular-kiosk-150x150-9.jpg",
    "/modular-kiosk-150x150-10.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "Outer Dimensions", value: "1.5 × 1.5 × 2.35 m (4'11\" × 4'11\" × 7'9\")" },
    { icon: Ruler, name: "Window Dimensions", value: "W64 × H80 cm; foldable window W64 × H40 cm" },
    { icon: Weight, name: "Weight", value: "Approximately 210 kg" },
    {
      icon: ThermometerSnowflake,
      name: "Wall Construction",
      value: "Steel double sandwich panels, RAL 9002 color, 50mm styrofoam core, 3mm thick internal and external steel layers",
    },
    { icon: BatteryCharging, name: "Electrical", value: "LED light, double plug socket, fuse box, external 16A female 3-pin site socket" },
    { icon: Home, name: "Interior Features", value: "Internal reception desk, PVC flooring, LED lighting" },
    { icon: Building, name: "Construction", value: "Lockable door, upward sliding and fixed windows" },
    { icon: Box, name: "Base", value: "Thick fiber cement board with forklift slots and 4 lifting eyes on roof corners" },
  ]

  const applications = [
    { icon: Ticket, name: "Ticket Booths" },
    { icon: Info, name: "Information Points" },
    { icon: Coffee, name: "Coffee/Beverage Shops" },
    { icon: Box, name: "Gatehouses" },
    { icon: Box, name: "Car Park Attendants" },
    { icon: Users, name: "Welfare Units" },
    { icon: Home, name: "Portable Offices" },
    { icon: Coffee, name: "Catering Units" },
    { icon: Building, name: "Security Cabins" },
    { icon: Info, name: "Surveillance Points" },
  ]

  const faqs = [
    {
      question: "What are the key features of this 150x150cm modular kiosk?",
      answer:
        "This spacious modular kiosk features steel double sandwich panels with RAL 9002 color and 50mm styrofoam core insulation. It includes an internal reception desk, PVC flooring, LED lighting, upward sliding and fixed windows, complete electrical installation with LED light, double plug socket, fuse box, external 16A female 3-pin site socket, and a lockable door for security.",
    },
    {
      question: "How should the modular kiosk be installed?",
      answer:
        "For optimal use, we recommend placing the kiosk on a concrete base or steel beams. The base is made from thick fiber cement board with forklift slots at the base and 4 lifting eyes on the roof corners for easy positioning. Ready to use - just place it in a safe spot and plug into power.",
    },
    {
      question: "What are the exact dimensions and weight?",
      answer:
        "Outer dimensions (W×L×H): 1.5 × 1.5 × 2.35 meters approx. (4'11\" × 4'11\" × 7'9\"). Window dimensions: W64 × H80 cm; foldable window dimensions: W64 × H40 cm. Weight: Approximately 210 kg.",
    },
    {
      question: "What electrical systems are included?",
      answer:
        "The kiosk comes with comprehensive electrical installation including an LED light, a double plug socket, a fuse box, and an external 16A female 3-pin site socket. Ready to use - just plug into the power.",
    },
    {
      question: "What are the delivery and pickup options?",
      answer:
        "Nationwide delivery is available. Free in-person pick-up is available from our warehouse at LE13BW. For delivery cost, please provide your postcode. Contact us at Mobile: 07497 954779.",
    },
    {
      question: "What applications is this modular kiosk best suited for?",
      answer:
        "This versatile kiosk is perfect for gatehouses, car park attendants, ticket kiosks, information points, catering units, security cabins, offices, welfare units, coffee or beverage shops, and more. Ideal for outdoor events or surveillance at locations such as construction sites, industrial areas, and commercial premises.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Breadcrumb */}
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
            <span className="text-gray-900 font-medium">Modular Kiosk 150x150cm</span>
          </nav>
        </div>
      </div>

      {/* Product Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Images */}
          <div className="mb-8 lg:mb-0">
            {/* Main Image */}
            <div 
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md mb-4 cursor-pointer group"
              onClick={() => openLightbox(activeThumbnail)}
            >
              <div className="h-[500px] w-full relative bg-gray-100 flex items-center justify-center">
                <img
                  src={
                    images[activeThumbnail] ||
                    "/placeholder.svg?height=500&width=500&query=modular kiosk 150x150cm exterior view"
                   || "/placeholder.svg"}
                  alt="Modular Kiosk 150x150cm view"
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
                {/* Zoom indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="h-6 w-6 text-blue-700" />
                  </div>
                </div>
                {/* Image counter */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {activeThumbnail + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails - 10 images in rows */}
            <div className="grid grid-cols-6 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border-2 ${activeThumbnail === index ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-400"} rounded-md overflow-hidden h-20 bg-white flex items-center justify-center transition-all`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img
                    src={img || `/placeholder.svg?height=80&width=80&query=modular kiosk view ${index + 1}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
            
            {/* Click to expand hint */}
            <p className="text-center text-sm text-gray-500 mt-3">Click on the main image to expand</p>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Modular Kiosk Ticket Booth Security Hut Portable Cabin 150x150 cm</h1>
            <p className="text-gray-600 mb-4">Ticket Booth | Security Hut | Portable Cabin | (4'11" X 4'11" X 7'9")</p>

            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,999</span>
              <span className="ml-2 text-sm text-gray-500">including VAT</span>
            </div>

            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, durable, and fully insulated, with dimensions of approximately 150x150 cm (4'11" X 4'11" X 7'9"). Ready to use - just place in a safe spot and plug into power. Made in the EU.
              </p>
            </div>

            {/* Contact Form Section */}
            <ContactForm />

            {/* Delivery Info */}
            <div className="flex flex-col text-sm text-gray-600 mb-6 gap-2">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-gray-500 mr-2" />
                <span>Nationwide delivery available | Delivery cost available upon providing postcode</span>
              </div>
              <div className="flex items-center">
                <Box className="h-5 w-5 text-gray-500 mr-2" />
                <span>Free in-person pick-up from our warehouse at LE13BW</span>
              </div>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Star className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Spacious Design</span>
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
                <span className="text-sm text-gray-700">Versatile Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
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

          {/* Tab Content */}
          <div className="py-8">
            {/* Specifications Tab */}
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
                      Portable Kiosk Ticket Booth Security Hut Modular Cabin 150x150 cm. Brand new, durable, and fully insulated, with dimensions of approximately 150x150 cm. (4'11"X 4'11" X 7'9"). Perfectly versatile for a wide range of uses, including gatehouses, car park attendants, ticket kiosks, information points, catering units, security cabins, offices, welfare units, coffee or beverage shops, and more.
                    </p>
                    <p>
                      Constructed with steel double sandwich panels, it provides excellent weather resistance and insulation. The walls feature a RAL 9002 color, a 50 mm styrofoam core insulation, and each 3 mm-thick internal and external steel layers. The base is made from thick fiber cement board with forklift slots at the base and 4 lifting eyes on the roof at the corners.
                    </p>
                    <p>
                      Equipped with upward sliding and fixed windows, an internal reception desk, PVC flooring, LED lighting, and a lockable door. For optimal use, it is recommended to place it on a concrete base or steel beams, providing a cost-effective alternative to traditional constructions.
                    </p>
                    <p>
                      Electrical installation includes an LED light, a double plug socket, a fuse box, and an external 16A female 3-pin site socket. Ready to use - just place in a safe spot and plug into the power. Made in the EU.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                <p className="text-gray-700 mb-8">
                  The spacious 150x150cm Modular Kiosk is perfectly versatile for a wide range of commercial uses and is
                  ideal for outdoor events, construction sites, industrial areas, and commercial premises where space
                  efficiency is important.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {applications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <div className="bg-blue-100 rounded-full p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <app.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm">{app.name}</h4>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Perfect for Multiple Industries</h4>
                  <p className="text-blue-800">
                    This spacious modular kiosk is ideal for gatehouses, car park attendants, ticket kiosks, information
                    points, catering units, portable offices, welfare units, coffee or beverage shops, and many more
                    applications. Contact us to discuss how we can customize it for your specific needs.
                  </p>
                </div>
              </div>
            )}
            {/* Key Features Tab */}
            {activeTab === "features" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Steel double sandwich panels with 50mm styrofoam core insulation (RAL 9002)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Internal reception desk, PVC flooring, LED lighting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete electrical: LED light, double plug socket, fuse box, external 16A 3-pin site socket</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Thick fiber cement board base with forklift slots and 4 lifting eyes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Upward sliding and fixed windows, lockable door</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ready to use - just place and plug in. Made in the EU</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* FAQs Tab */}
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
                    Our team is ready to assist you with any inquiries regarding our spacious modular kiosks.
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

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Ready to learn more about our Spacious Modular Kiosk?</h2>
              <p className="text-blue-100">
                Our team is available to answer any questions and help you with your inquiry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/ContactUs"
                className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-blue max-w-none text-gray-600 text-sm">
          <h2>Portable Kiosk Ticket Booth Security Hut Modular Cabin 150x150 cm</h2>
          <p>
            Brand new, durable, and fully insulated, with dimensions of approximately 150x150 cm (4'11" X 4'11" X 7'9"). Perfectly versatile for a wide range of uses, including gatehouses, car park attendants, ticket kiosks, information points, catering units, security cabins, offices, welfare units, coffee or beverage shops, and more. Ideal for outdoor events or surveillance at locations such as construction sites, industrial areas, and commercial premises.
          </p>
          <p>
            Constructed with steel double sandwich panels, it provides excellent weather resistance and insulation. The walls feature a RAL 9002 color, a 50mm styrofoam core insulation, and each 3mm-thick internal and external steel layers. The base is made from thick fiber cement board with forklift slots at the base and 4 lifting eyes on the roof at the corners. For optimal use, it is recommended to place it on a concrete base or steel beams, providing a cost-effective alternative to traditional constructions.
          </p>
          <p>
            Outer dimensions (W×L×H): 1.5 × 1.5 × 2.35 meters approx. (4'11" × 4'11" × 7'9"). Window dimensions: W64 × H80 cm; foldable window dimensions: W64 × H40 cm. Equipped with upward sliding and fixed windows, an internal reception desk, PVC flooring, LED lighting, and a lockable door. Weight: Approximately 210 kg.
          </p>
          <p>
            Electrical installation includes an LED light, a double plug socket, a fuse box, and an external 16A female 3-pin site socket. Ready to use - just place in a safe spot and plug into the power. Nationwide delivery available. Free in-person pick-up available from our warehouse at LE13BW. Made in the EU.
          </p>
        </div>
      </div>
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 bg-transparent"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white text-lg font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Main lightbox image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex] || "/placeholder.svg"}
              alt={`Modular Kiosk view ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Thumbnail strip at bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  lightboxIndex === index 
                    ? "border-white ring-2 ring-white/50" 
                    : "border-white/30 hover:border-white/60"
                } bg-transparent`}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(index)
                }}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ModularKiosk150X150Content
