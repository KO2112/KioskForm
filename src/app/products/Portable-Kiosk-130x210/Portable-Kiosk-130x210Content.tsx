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
  Users,
  HelpCircle,
  Weight,
  Home,
  Wrench,
  Shield,
  Monitor,
  Building,
  Coffee,
} from "lucide-react"

const PortableKiosk130x210Content = () => {
  const [activeTab, setActiveTab] = useState("specifications")
  const [activeThumbnail, setActiveThumbnail] = useState(0)

  // 10 images for the portable kiosk gallery
  const images = [
    "/portable-kiosk-130x210-1.jpg",
    "/portable-kiosk-130x210-2.png",
    "/portable-kiosk-130x210-3.png",
    "/portable-kiosk-130x210-4.jpg",
    "/portable-kiosk-130x210-5.jpg",
    "/portable-kiosk-130x210-6.jpg",
    "/portable-kiosk-130x210-7.jpg",
    "/portable-kiosk-130x210-8.jpg",
    "/portable-kiosk-130x210-9.jpg",
    "/portable-kiosk-130x210-10.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "Outer Dimensions", value: "130 × 210 × 235 cm (W×L×H)" },
    { icon: Weight, name: "Weight", value: "210 kg approx." },
    {
      icon: ThermometerSnowflake,
      name: "Insulation",
      value: "Steel sandwich panels with weather-resistant insulation",
    },
    { icon: BatteryCharging, name: "Electrical", value: "Light, double plug socket, fuse box, 16 Amp power" },
    { icon: Monitor, name: "Windows", value: "Upward sliding W128×H80cm, fixed W128×H40cm" },
    { icon: Home, name: "Interior Features", value: "Reception desk, corner shelf, PVC flooring" },
    { icon: Wrench, name: "Installation", value: "Concrete base or steel beams recommended" },
    { icon: Shield, name: "Security", value: "Lockable door with security features" },
  ]

  const applications = [
    { icon: Shield, name: "Security Gatehouse" },
    { icon: Box, name: "Car Park Attendant" },
    { icon: Info, name: "Ticket Kiosk" },
    { icon: Users, name: "Information Point" },
    { icon: Coffee, name: "Catering Unit" },
    { icon: ShieldIcon, name: "Security Cabin" },
    { icon: Building, name: "Portable Office" },
    { icon: Home, name: "Welfare Unit" },
    { icon: Coffee, name: "Coffee Shop" },
    { icon: Monitor, name: "Event Management" },
  ]

  const faqs = [
    {
      question: "What are the key features of this portable kiosk?",
      answer:
        "This kiosk includes an internal reception desk, upward sliding and fixed windows, corner shelf for storage, PVC flooring, lockable door with security, complete electrical installation with lighting and double plug socket, and customizable branding options.",
    },
    {
      question: "What applications is this kiosk suitable for?",
      answer:
        "Perfect for security gatehouses, car park attendant booths, ticket kiosks, information points, catering units, security cabins, portable offices, welfare units, coffee/beverage shops, and event management booths.",
    },
    {
      question: "How should the portable kiosk be installed?",
      answer:
        "For optimal performance and stability, we recommend placing the kiosk on a concrete base or steel beams. This provides a cost-effective alternative to traditional constructions while ensuring durability and weather resistance.",
    },
    {
      question: "What electrical systems are included?",
      answer:
        "The kiosk comes with comprehensive electrical installation including lighting, double plug socket, fuse box, and 16 Amp power connection for all your operational needs.",
    },
    {
      question: "Can the kiosk be customized for branding?",
      answer:
        "Yes, the kiosk offers customizable branding options to match your company's identity and requirements. Contact us to discuss your specific branding needs.",
    },
    {
      question: "What are the window specifications?",
      answer:
        "The kiosk features upward sliding windows (W128×H80 cm) and fixed windows (W128×H40 cm), providing excellent visibility and customer interaction capabilities for various applications.",
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
            <span className="text-gray-900 font-medium">Portable Kiosk 130x210cm</span>
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
                  alt="Portable Kiosk 130x210cm view"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Security Hut 130x210cm</h1>
            <p className="text-gray-600 mb-4">Security Gatehouse | Ticket Booth | Information Point</p>

            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£2,599</span>
              <span className="ml-2 text-sm text-gray-500">including VAT</span>
            </div>

            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Versatile modular security hut and ticket booth with reception desk, sliding windows, and complete
                electrical installation. Perfect for gatehouses, information points, and security applications.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Internal reception desk and corner shelf</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Upward sliding and fixed windows for customer interaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Steel sandwich panels with weather-resistant insulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete electrical setup with lighting and double plug socket</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lockable door with security features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customizable branding options available</span>
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
                  <Shield className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Security Ready</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <ThermometerSnowflake className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Fully Insulated</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Star className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Professional Grade</span>
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
                      This portable kiosk is a versatile modular security hut and ticket booth solution. Built with
                      steel sandwich panels for excellent weather resistance, it features an internal reception desk,
                      sliding windows, and complete electrical setup.
                    </p>
                    <p>
                      Perfect for security gatehouses, car park attendant booths, ticket kiosks, information points,
                      catering units, and portable offices. The kiosk offers professional-grade construction with
                      customizable branding options.
                    </p>
                    <p>
                      Features include upward sliding windows (W128×H80 cm) and fixed windows (W128×H40 cm), internal
                      reception desk, corner shelf for storage, PVC flooring, lockable door with security, and complete
                      electrical installation.
                    </p>
                    <p>
                      Recommended installation on concrete base or steel beams for optimal performance. Electrical setup
                      includes lighting, double plug socket, fuse box, and 16 Amp power connection.
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
                  This portable kiosk adapts to various security, service, and commercial applications. From gatehouse
                  operations to customer service points, it provides a professional solution for multiple industries.
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
                  <h4 className="font-semibold text-blue-900 mb-2">Professional Security & Service Solution</h4>
                  <p className="text-blue-800">
                    This portable kiosk is ideal for security operations, customer service points, ticket sales,
                    information centers, and commercial applications. It offers a cost-effective alternative to
                    traditional construction while providing professional-grade facilities.
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
                    Our team is ready to assist you with any inquiries regarding our portable kiosk solutions.
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
              <h2 className="text-2xl font-bold mb-2">Ready to enhance your security operations?</h2>
              <p className="text-blue-100">
                Our team is available to answer any questions and help you with your portable kiosk inquiry.
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
          <h2>Portable Kiosk Security Hut Ticket Booth 130x210 cm</h2>
          <p>
            Versatile modular security hut and ticket booth measuring approximately 130x210 cm. This portable kiosk is
            perfect for security gatehouses, car park attendant booths, ticket kiosks, information points, catering
            units, security cabins, portable offices, and welfare units.
          </p>
          <p>
            Built with steel sandwich panels for excellent weather resistance and insulation. Features internal
            reception desk, upward sliding windows (W128×H80 cm) and fixed windows (W128×H40 cm), corner shelf for
            storage, PVC flooring, and lockable door with security features.
          </p>
          <p>
            Complete electrical installation includes lighting, double plug socket, fuse box, and 16 Amp power
            connection. Customizable branding options available to match your company identity. Recommended installation
            on concrete base or steel beams for optimal performance and stability.
          </p>
          <p>
            Perfect for coffee/beverage shops, event management booths, and various commercial applications. Offers a
            cost-effective alternative to traditional construction while providing professional-grade facilities. Weight
            approximately 210 kg with outer dimensions (W×L×H): 1.3 × 2.1 × 2.35 meters.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortableKiosk130x210Content
