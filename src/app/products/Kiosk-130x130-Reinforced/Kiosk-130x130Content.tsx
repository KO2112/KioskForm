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
  ShieldIcon,
  Coffee,
  Ticket,
  Users,
  HelpCircle,
  Weight,
  Home,
} from "lucide-react"

const Kiosk130x130Content = () => {
  const [activeTab, setActiveTab] = useState("specifications")
  const [activeThumbnail, setActiveThumbnail] = useState(0)

  // 10 images for the kiosk gallery
  const images = [
    "/kiosk-130x130-1.png",
    "/kiosk-130x130-2.png",
    "/kiosk-130x130-3.png",
    "/kiosk-130x130-4.png",
    "/kiosk-130x130-5.png",
    "/kiosk-130x130-6.jpg",
    "/kiosk-130x130-7.jpg",
    "/kiosk-130x130-8.jpg",
    "/kiosk-130x130-9.jpg",
    "/kiosk-130x130-10.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "Outer Dimensions", value: "130 × 130 × 235 cm (W×L×H)" },
    { icon: Ruler, name: "Window Dimensions", value: "W64×H80 cm, foldable window W64×H40 cm" },
    { icon: Weight, name: "Weight", value: "170 kg approx." },
    {
      icon: ThermometerSnowflake,
      name: "Insulation",
      value: "Steel sandwich panels with weather-resistant insulation",
    },
    { icon: BatteryCharging, name: "Electrical", value: "Light, double plug socket, fuse box (16 Amps)" },
    { icon: Home, name: "Interior Features", value: "Reception desk, corner shelf, PVC flooring" },
    { icon: ShieldIcon, name: "Anti-vandal Features", value: "Anti-vandal door/windows with steel fence protection" },
  ]

  const applications = [
    { icon: Ticket, name: "Ticket Booths" },
    { icon: ShieldIcon, name: "Security Huts" },
    { icon: Info, name: "Information Points" },
    { icon: Coffee, name: "Coffee/Beverage Shops" },
    { icon: Box, name: "Gatehouses" },
    { icon: Box, name: "Car Park Attendants" },
    { icon: ShieldIcon, name: "Surveillance Points" },
    { icon: Users, name: "Welfare Units" },
    { icon: Home, name: "Portable Offices" },
    { icon: Coffee, name: "Catering Units" },
  ]

  const faqs = [
    {
      question: "What are the key features of this 130x130cm kiosk?",
      answer:
        "This compact kiosk includes an internal reception desk, corner shelf, PVC flooring, upward sliding and fixed windows, complete electrical installation with double plug socket, and a lockable door for security.",
    },
    {
      question: "How should the kiosk be installed?",
      answer:
        "For optimal use, we recommend placing the kiosk on a concrete base or steel beams. This provides excellent stability and makes it a cost-effective alternative to traditional constructions.",
    },
    {
      question: "Can the kiosk be customized with branding?",
      answer:
        "Yes, the kiosk is fully customizable to reflect your brand identity. You can add logos, signboards, and choose custom colors to match your business requirements.",
    },
    {
      question: "What electrical systems are included?",
      answer:
        "The kiosk comes with comprehensive electrical installation including lighting, double plug socket, and a 16 Amp fuse box. All electrical components meet safety standards.",
    },
    {
      question: "Is this kiosk suitable for outdoor use?",
      answer:
        "Absolutely. Built with steel sandwich panels offering excellent weather-resistant insulation, this kiosk is ideal for outdoor events, construction sites, industrial areas, and commercial premises.",
    },
    {
      question: "Does the kiosk have anti-vandal features?",
      answer: "Yes, the kiosk features anti-vandal door and windows with steel fence protection for enhanced security.",
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
              Kiosks
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Modular Kiosk 130x130cm Anti-Vandal</span>
          </nav>
        </div>
      </div>

      {/* Product Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Images */}
          <div className="mb-8 lg:mb-0">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md mb-4">
              <div className="h-96 w-full relative bg-gray-100 flex items-center justify-center">
                <img
                  src={images[activeThumbnail] || "/placeholder.svg"}
                  alt="Modular Kiosk 130x130cm view"
                  className="max-h-full max-w-full object-contain"
                />
                {/* 360 View Button */}
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all">
                  <ImageIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>

            {/* Thumbnails - 10 images in 2 rows */}
            <div className="grid grid-cols-5 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border ${activeThumbnail === index ? "border-blue-600" : "border-gray-200"} rounded-md overflow-hidden h-16 bg-white flex items-center justify-center`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Modular Kiosk 130x130cm Anti-Vandal</h1>
            <p className="text-gray-600 mb-4">Ticket Booth | Security Hut | Portable Cabin</p>

            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,999</span>
              <span className="ml-2 text-sm text-gray-500">including VAT</span>
            </div>

            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, durable, and fully insulated compact kiosk with built-in reception desk. Perfect for
                versatile commercial applications with complete electrical installation.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Steel sandwich panels with weather-resistant insulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Internal reception desk and corner shelf included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete electrical installation with double plug socket</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">PVC flooring and lockable door for security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Anti-vandal door/windows with steel fence protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Upward sliding and fixed windows for ventilation</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="space-y-3 mb-8">
              <Link
                href="/ContactUs"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium shadow-sm transition-colors flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Truck className="h-5 w-5 text-gray-500 mr-2" />
              <span>UK mainland delivery | Usually delivered within 3-4 working days</span>
            </div>

            {/* USPs */}
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
                  <ShieldIcon className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Anti-vandal Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === "specifications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === "applications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("applications")}
            >
              Applications
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === "faqs" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
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
                      Our Modular Kiosk 130x130cm is brand new, durable, and fully insulated with compact dimensions
                      perfect for space-conscious applications. This versatile unit comes with a built-in reception desk
                      and corner shelf for enhanced functionality.
                    </p>
                    <p>
                      Built with steel sandwich panels offering excellent weather-resistant insulation, this kiosk is
                      designed to withstand various weather conditions while maintaining a comfortable interior
                      environment. The PVC flooring provides durability and easy maintenance.
                    </p>
                    <p>
                      The kiosk features anti-vandal door and windows with steel fence protection for enhanced security.
                      It's customizable to reflect brand identity with options for logos and signboards. For optimal
                      use, we recommend placing it on a concrete base or steel beams, providing a cost-effective
                      alternative to traditional constructions.
                    </p>
                    <p>
                      Features upward sliding and fixed windows for ventilation, complete electrical installation
                      including lighting, double plug socket, and a 16 Amp fuse box. The lockable door ensures security
                      for your equipment and materials.
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
                  The compact 130x130cm Modular Kiosk is perfectly versatile for a wide range of uses and is ideal for
                  outdoor events or surveillance at locations such as construction sites, industrial areas, and
                  commercial premises.
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
                    This compact kiosk is ideal for gatehouses, car park attendants, ticket kiosks, information points,
                    catering units, security cabins, offices, welfare units, coffee or beverage shops, and many more
                    applications. Contact us to discuss how we can customize it for your specific needs.
                  </p>
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
                    Our team is ready to assist you with any inquiries regarding our compact modular kiosks.
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
              <h2 className="text-2xl font-bold mb-2">Ready to learn more about our Compact Modular Kiosk?</h2>
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
          <h2>Modular Kiosk Ticket Booth Security Hut Portable Cabin 130x130 cm</h2>
          <p>
            Our Modular Kiosk 130x130cm is brand new, durable, and fully insulated, with dimensions of approximately
            130x130 cm. Perfectly versatile for a wide range of uses, including gatehouses, car park attendants, ticket
            kiosks, information points, catering units, security cabins, offices, welfare units, coffee or beverage
            shops, and more.
          </p>
          <p>
            Ideal for outdoor events or surveillance at locations such as construction sites, industrial areas, and
            commercial premises. For optimal use, it is recommended to place it on a concrete base or steel beams,
            providing a cost-effective alternative to traditional constructions.
          </p>
          <p>
            Built with steel sandwich panels, offering excellent weather-resistant insulation. Customizable to reflect
            brand identity with options for logos and signboards. The compact design makes it perfect for
            space-conscious applications while still providing all essential features.
          </p>
          <p>
            Outer dimensions (W×L×H): 1.3 × 1.3 × 2.35 meters approx. Window dimensions: W64 × H80 cm; foldable window
            dimensions: W64 × H40 cm. Equipped with anti-vandal door/windows featuring a steel fence, upward sliding and
            fixed windows, an internal reception desk, a corner shelf, PVC flooring, lighting, and a lockable door.
          </p>
          <p>
            Weight: Approximately 170 kg. Electrical installation includes a light, double plug socket, fuse box, and 16
            Amp power capacity, making it ready for immediate use in various commercial applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Kiosk130x130Content
