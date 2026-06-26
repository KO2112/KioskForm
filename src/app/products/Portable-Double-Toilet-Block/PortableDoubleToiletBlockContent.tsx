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
  Droplets,
  Users,
  HelpCircle,
  Weight,
  Home,
  Building,
  X,
  ChevronLeft,
  ZoomIn,
} from "lucide-react"
import ContactForm from "../../../components/ContactForm"

const PortableDoubleToiletBlockContent = () => {
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
    "/DoubleToilet.png",
    "/DoubleToilet10.jpg",
    "/DoubleToilet2.png",
    "/DoubleToilet3.png",
    "/DoubleToilet4.JPG",
    "/DoubleToilet5.jpeg",
    "/DoubleToilet6.jpeg",
    "/DoubleToilet7.png",
    "/DoubleToilet8.jpeg",
    "/DoubleToilet9.jpeg",
  ]

  const specs = [
    { icon: Ruler, name: "External Dimensions", value: "160 × 210 × 256 cm (5'3\" × 6'11\" × 8'5\")" },
    { icon: Ruler, name: "Internal Dimensions (Each Toilet Cabin)", value: "98 × 146 × 256 cm (3'3\" × 4'9\" × 7'9\")" },
    { icon: Weight, name: "Approximate Weight", value: "610 kg" },
    {
      icon: ThermometerSnowflake,
      name: "Construction",
      value: "Heavy-duty galvanised steel frame with 40 mm insulated sandwich wall panels",
    },
    {
      icon: BatteryCharging,
      name: "Electrical",
      value: "Wall-mounted electric heaters, automatic sensor-controlled LED lighting, automatic sensor-controlled ventilation, external 32A male site electrical connection",
    },
    {
      icon: Droplets,
      name: "Plumbing",
      value: "Two ceramic flushing toilets, integrated wash basins, hot and cold water pipe, waste drainage ready for connection",
    },
    {
      icon: Home,
      name: "Interior Features",
      value: "Two vanity cabinets, mirrors, liquid soap dispensers, toilet roll holders, vinyl flooring, floor drains, lockable entrance doors",
    },
    { icon: Box, name: "Installation", value: "Fully pre-wired and pre-plumbed for connection to mains water, waste, and electricity" },
  ]

  const applications = [
    { icon: Users, name: "Construction Sites" },
    { icon: Building, name: "Industrial Premises" },
    { icon: Info, name: "Outdoor Events" },
    { icon: Box, name: "Festivals" },
    { icon: Users, name: "Sports Facilities" },
    { icon: Home, name: "Farms" },
    { icon: Building, name: "Temporary Accommodation" },
    { icon: Users, name: "Commercial Workplaces" },
    { icon: Building, name: "Warehouses" },
    { icon: Droplets, name: "Public Facilities" },
  ]

  const faqs = [
    {
      question: "What makes this portable double toilet block suitable for outdoor use?",
      answer:
        "The cabin is manufactured from premium insulated sandwich panels and a heavy-duty galvanised steel frame, making it durable, weather-resistant, and suitable for year-round outdoor use.",
    },
    {
      question: "Is this unit ready to connect on site?",
      answer:
        "Yes. It is fully pre-wired and pre-plumbed and is designed to be connected to mains electricity, fresh water, and waste drainage quickly and easily.",
    },
    {
      question: "What are the dimensions and weight of the double toilet cabin?",
      answer:
        "External dimensions are approximately 160 × 210 × 256 cm, with each toilet cabin measuring around 98 × 146 × 256 cm. The approximate weight is 610 kg.",
    },
    {
      question: "What facilities are included inside each toilet cubicle?",
      answer:
        "Each cabin includes a ceramic flushing toilet, wash basin, vanity cabinet, mirror, liquid soap dispenser, toilet roll holder, vinyl flooring, floor drain, and lockable door.",
    },
    {
      question: "Do you offer delivery across the UK?",
      answer:
        "Yes. Nationwide delivery is available throughout the UK, with delivery charges depending on your postcode and the unloading method required.",
    },
    {
      question: "Can this unit be installed on a concrete or level base?",
      answer:
        "Yes. For the best installation, we recommend placing the cabin on a level concrete base, slabs, hardcore, or steel beams to ensure stability and long-term performance.",
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
            <span className="text-gray-900 font-medium">Portable Double Toilet Block</span>
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
                  alt="Portable Double Toilet Block view"
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

            <div className="grid grid-cols-6 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border-2 ${activeThumbnail === index ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-400"} rounded-md overflow-hidden h-20 bg-white flex items-center justify-center transition-all`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-3">Click on the main image to expand</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Double Toilet Block</h1>
            <p className="text-gray-600 mb-4">Insulated WC Cabin | Double Toilet Unit | Ready for Connection</p>

            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£2,699.99</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, heavy-duty portable toilet cabin designed for quick connection to mains electricity, fresh water, and waste drainage. Ideal for construction sites, events, farms, and commercial premises.
              </p>
            </div>

            <ContactForm />

            <div className="flex flex-col text-sm text-gray-600 mb-6 gap-2">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-gray-500 mr-2" />
                <span>Nationwide delivery available throughout the UK | Delivery quotation available on request</span>
              </div>
              <div className="flex items-center">
                <Box className="h-5 w-5 text-gray-500 mr-2" />
                <span>Local collection or viewing available in Leicester (LE1 3BW)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Droplets className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Mains Ready</span>
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
                      Our portable double toilet block is a brand new, heavy-duty prefabricated WC unit designed to deliver reliable, hygienic sanitation in the most demanding environments. Manufactured in the EU, it combines high-quality insulated sandwich panels with a robust steel frame for excellent durability and thermal performance.
                    </p>
                    <p>
                      The cabin features two separate toilet cubicles, ceramic flushing toilets, integrated wash basins, a built-in bidet wash function, wall-mounted electric heaters, automatic sensor-controlled LED lighting, and automatic sensor-controlled ventilation. It is fully pre-wired and pre-plumbed to make installation straightforward once connected to mains water, waste, and electricity.
                    </p>
                    <p>
                      Internal appointments include vanity cabinets, mirrors, liquid soap dispensers, toilet roll holders, vinyl flooring, floor drains, and lockable entrance doors. With an external footprint of approximately 160 × 210 × 256 cm and a total weight of around 610 kg, it is built to provide a practical and long-lasting washroom solution for outdoor and temporary applications.
                    </p>
                    <p>
                      For the best installation, we recommend placing the cabin on a level concrete base, slabs, hardcore, or steel beams. Nationwide delivery is available throughout the UK, with delivery costs based on postcode and unloading requirements.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                <p className="text-gray-700 mb-8">
                  This fully insulated portable double toilet cabin is ideal for sites and facilities that need dependable welfare facilities without the cost and lead time of traditional building work.
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

                <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Perfect for Temporary and Permanent Welfare Needs</h4>
                  <p className="text-blue-800">
                    Whether you need a hygienic toilet block for a construction project, an outdoor event, a festival, a farm, or a commercial workplace, this prefabricated WC unit provides comfort, durability, and quick installation with minimal disruption.
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
                      <span className="text-gray-700">Double toilet cabin layout with two separate WC cubicles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Heavy-duty galvanised steel frame and 40 mm insulated sandwich wall panels for year-round performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ceramic flushing toilets, integrated wash basins, and built-in bidet wash function</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Automatic sensor-controlled LED lighting, ventilation, wall-mounted electric heaters, and external 32A male site connection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Vanity cabinets, mirrors, soap dispensers, toilet roll holders, vinyl flooring, floor drains, and lockable entrance doors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fully pre-wired and pre-plumbed for quick connection to water, waste, and electricity systems</span>
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
                    Our team can help with delivery planning, site access, and installation requirements for your portable toilet block.
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

      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Ready to discuss your portable double toilet block?</h2>
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
          <h2>Portable Double Toilet Block | Prefabricated WC Units | Fully Insulated Toilet Cabins</h2>
          <p>
            Our portable double toilet block is a brand new, heavy-duty prefabricated washroom solution designed for construction sites, industrial premises, outdoor events, festivals, sports facilities, farms, temporary accommodation, and commercial workplaces. Manufactured in the EU using premium insulated sandwich panels and a robust steel frame, it delivers a practical, hygienic, and durable toilet cabin for long-term outdoor use.
          </p>
          <p>
            The unit is supplied as a fully insulated toilet cabin with two separate WC cubicles, ceramic flushing toilets, integrated wash basins, built-in bidet wash functions, wall-mounted electric heaters, sensor-controlled LED lighting, and automatic ventilation. It is fully pre-wired and pre-plumbed for straightforward connection to mains electricity, fresh water, and waste drainage.
          </p>
          <p>
            External dimensions are approximately 160 × 210 × 256 cm, with each toilet cabin measuring around 98 × 146 × 256 cm. The unit weighs approximately 610 kg and is finished with weather-resistant materials suitable for year-round outdoor installation. For best results, we recommend placing the cabin on a level concrete base, slabs, hardcore, or steel beams.
          </p>
          <p>
            Nationwide delivery is available across the UK, and we can advise on delivery method and site access requirements before installation. Please contact us for a quote, delivery guidance, or to discuss your specific requirements.
          </p>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10">
              <X className="h-6 w-6" />
            </button>
            <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10">
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src={images[lightboxIndex]} alt={`Portable Double Toilet Block view ${lightboxIndex + 1}`} className="w-full h-[80vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortableDoubleToiletBlockContent
