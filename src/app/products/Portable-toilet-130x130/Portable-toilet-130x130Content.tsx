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
  Droplets,
  Users,
  HelpCircle,
  Weight,
  Home,
  Wrench,
  Zap,
} from "lucide-react"

const PortableToilet130x130Content = () => {
  const [activeTab, setActiveTab] = useState("specifications")
  const [activeThumbnail, setActiveThumbnail] = useState(0)

  // 10 images for the portable toilet gallery
  const images = [
    "/portable-toilet-130x130-1.png",
    "/portable-toilet-130x130-2.png",
    "/portable-toilet-130x130-3.png",
    "/portable-toilet-130x130-4.png",
    "/portable-toilet-130x130-5.jpg",
    "/portable-toilet-130x130-6.jpg",
    "/portable-toilet-130x130-7.jpg",
    "/portable-toilet-130x130-8.jpg",
    "/portable-toilet-130x130-9.jpg",
    "/portable-toilet-130x130-12.jpg",
  ]

  const specs = [
    { icon: Ruler, name: "Outer Dimensions", value: "130 × 130 × 235 cm (W×L×H)" },
    { icon: Weight, name: "Weight", value: "220 kg approx." },
    {
      icon: ThermometerSnowflake,
      name: "Insulation",
      value: "Steel sandwich panels with weather-resistant insulation",
    },
    { icon: BatteryCharging, name: "Electrical", value: "Lighting, fuse box, 16 Amp power" },
    { icon: Droplets, name: "Plumbing", value: "Flushing toilet, wash basin, sewer connection" },
    { icon: Home, name: "Interior Features", value: "Mirror, soap dispenser, toilet paper holder, vinyl flooring" },
    { icon: Wrench, name: "Connections", value: "Mains water, waste, and electricity connections" },
    { icon: Zap, name: "Lifting", value: "Equipped with lugs on top for easy lifting and placement" },
  ]

  const applications = [
    { icon: Users, name: "Outdoor Events" },
    { icon: Box, name: "Festivals" },
    { icon: Wrench, name: "Construction Sites" },
    { icon: ShieldIcon, name: "Industrial Sites" },
    { icon: Users, name: "Employee Welfare" },
    { icon: Box, name: "Job Sites" },
    { icon: Info, name: "Temporary Facilities" },
    { icon: Home, name: "Prefabricated Buildings" },
    { icon: Users, name: "Customer Restrooms" },
    { icon: Droplets, name: "Remote Locations" },
  ]

  const faqs = [
    {
      question: "What are the key features of this portable toilet unit?",
      answer:
        "This unit includes a flushing toilet, wash basin with mirror, liquid soap dispenser, toilet paper holder, vinyl flooring, electric lighting, ventilation grille, and a lockable door. It connects directly to waste, water, and electricity systems.",
    },
    {
      question: "How should the portable toilet be installed?",
      answer:
        "For optimal use, we recommend placing the unit on a concrete base or steel beams. It connects directly to mains waste, fresh water, and electricity systems. The unit is equipped with lugs on top for easy lifting and placement.",
    },
    {
      question: "What plumbing connections are required?",
      answer:
        "The unit is plumbed for mains connections including waste and fresh water. It features a sewer connection and is designed to connect directly to existing utility systems for immediate use.",
    },
    {
      question: "What electrical systems are included?",
      answer:
        "The toilet unit comes with comprehensive electrical installation including lighting, a fuse box, and 16 Amp power capacity. All electrical components meet safety standards for outdoor and industrial use.",
    },
    {
      question: "Is this toilet suitable for outdoor and industrial use?",
      answer:
        "Absolutely. Built with steel sandwich panels offering excellent weather-resistant insulation, this unit is designed to withstand heavy use and tough conditions, making it ideal for outdoor events, festivals, and industrial sites.",
    },
    {
      question: "What maintenance is required?",
      answer:
        "The unit features vinyl flooring for easy cleaning and maintenance. Regular cleaning of the toilet, basin, and interior surfaces is recommended. The durable construction minimizes maintenance requirements.",
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
            <span className="text-gray-900 font-medium">Portable Toilet Unit 130x130cm</span>
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
                  alt="Portable Toilet Unit 130x130cm view"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Toilet Unit Welfare Cabin 130x130cm</h1>
            <p className="text-gray-600 mb-4">Modular Toilet Block | Welfare Cabin | Portable Restroom</p>

            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,999</span>
              <span className="ml-2 text-sm text-gray-500">including VAT</span>
            </div>

            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, durable, and fully insulated portable toilet unit with flushing toilet and wash basin.
                Perfect for outdoor events, festivals, and industrial sites with complete utility connections.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flushing toilet and wash basin with mirror</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Steel sandwich panels with weather-resistant insulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete electrical installation with lighting and 16 Amp power</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vinyl flooring and ventilation grille for comfort</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sewer connection and mains water/waste connections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lifting lugs for easy transportation and placement</span>
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
                  <Droplets className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Complete Plumbing</span>
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
                <span className="text-sm text-gray-700">Heavy Duty Build</span>
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
                      This portable toilet cabin is a practical solution for businesses, outdoor events, festivals, or
                      industrial sites. Built to withstand heavy use and tough conditions, it features a flushing toilet
                      and wash basin, providing a clean and convenient restroom for employees or customers.
                    </p>
                    <p>
                      Ideal for outdoor settings or prefabricated buildings, the cabin is perfect for job sites or
                      festivals. Its compact, portable design ensures easy transportation and quick setup. Constructed
                      with steel sandwich panels, it provides weather-resistant insulation.
                    </p>
                    <p>
                      Features include a sewer connection, sink, mirror, liquid soap dispenser, toilet paper holder,
                      ventilation grille, vinyl flooring, electric lighting, water, and a lockable door. It connects
                      directly to waste, water, and electricity systems.
                    </p>
                    <p>
                      Plumbed for mains connections—waste and fresh water. Equipped with lugs on top for easy lifting
                      and placement. Electrical setup includes lighting, a fuse box, and 16 Amp power.
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
                  This portable toilet unit is a practical solution for businesses, outdoor events, festivals, or
                  industrial sites. Built to withstand heavy use and tough conditions, providing clean and convenient
                  restroom facilities wherever needed.
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
                    This portable toilet unit is ideal for outdoor events, festivals, construction sites, industrial
                    areas, employee welfare facilities, temporary installations, and remote locations. It offers a
                    cost-effective alternative to traditional construction while providing complete restroom facilities.
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
                    Our team is ready to assist you with any inquiries regarding our portable toilet units.
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
              <h2 className="text-2xl font-bold mb-2">Ready to learn more about our Portable Toilet Unit?</h2>
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
          <h2>Portable Toilet Unit Welfare Cabin Modular Toilet Block 130x130 cm</h2>
          <p>
            Brand new, durable, and fully insulated, this unit measures approximately 130x130 cm. This portable toilet
            cabin is a practical solution for businesses, outdoor events, festivals, or industrial sites. Built to
            withstand heavy use and tough conditions, it features a flushing toilet and wash basin, providing a clean
            and convenient restroom for employees or customers.
          </p>
          <p>
            Ideal for outdoor settings or prefabricated buildings, the cabin is perfect for job sites or festivals. Its
            compact, portable design ensures easy transportation and quick setup. It is recommended to place it on a
            concrete base or steel beams, offering a cost-effective alternative to traditional construction.
          </p>
          <p>
            Constructed with steel sandwich panels, it provides weather-resistant insulation. Outer dimensions (W×L×H):
            1.3 × 1.3 × 2.35 meters. Features include a sewer connection, sink, mirror, liquid soap dispenser, toilet
            paper holder, ventilation grille, vinyl flooring, electric lighting, water, and a lockable door.
          </p>
          <p>
            It connects directly to waste, water, and electricity systems. Plumbed for mains connections—waste and fresh
            water. Equipped with lugs on top for easy lifting and placement. Electrical setup includes lighting, a fuse
            box, and 16 Amp power. Weight: Approximately 220 kg.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortableToilet130x130Content
