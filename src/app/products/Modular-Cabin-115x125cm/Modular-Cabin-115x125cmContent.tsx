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
  Coffee,
  Ticket,
  Users,
  HelpCircle,
  Home,
  Building,
  X,
  ZoomIn,
  Flame,
  ChevronLeft,
} from "lucide-react"
import ContactForm from '../../../components/ContactForm'

const PortableKiosk110x130Content = () => {
  const [activeTab, setActiveTab] = useState("specifications")
  const [activeThumbnail, setActiveThumbnail] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // 9 real photos of the 110x130cm security cabin
  const images = [
    "/110x130Kiosk.jpg",
    "/110x130Kiosk%201.jpg",
    "/110x130Kiosk%202.jpg",
    "/110x130Kiosk%203.jpg",
    "/110x130Kiosk%204.jpg",
    "/110x130Kiosk%205.jpg",
    "/110x130Kiosk%206.jpg",
    "/110x130Kiosk%207.jpg",
    "/110x130Kiosk%208.jpg",
  ]

  // Alt text per image — adjust the order/wording if your photos don't follow this sequence
  const imageAlts = [
    "Portable Kiosk Security Cabin 110x130cm - main exterior view",
    "110x130cm security cabin - front exterior view",
    "110x130cm security cabin - angled exterior view showing insulated panel walls",
    "Security cabin 110x130cm - side view showing window placement",
    "110x130cm ticket booth cabin - close-up of window and frame",
    "Portable security hut 110x130cm - lockable outward-opening PVC door",
    "110x130cm modular cabin interior - reception desk and utility shelf",
    "Security cabin 110x130cm - internal electrical fitting, fuse box and socket",
    "110x130cm portable kiosk - base detail showing forklift transport slots",
  ]

  const specs = [
    { icon: Ruler, name: "Outer Dimensions", value: "Approx. 1.10m (W) x 1.30m (L) — external footprint" },
    { icon: Ruler, name: "Window Dimensions", value: "Two windows, 60cm (W) x 100cm (H), inward-opening" },
    {
      icon: ThermometerSnowflake,
      name: "Wall Construction",
      value: "Steel double-skin sandwich panels with 40mm polyurethane core insulation",
    },
    { icon: Flame, name: "Heating", value: "Portable heater fitted as standard" },
    { icon: BatteryCharging, name: "Electrical", value: "Internal LED lighting, double plug socket, fuse box, external site socket" },
    { icon: Home, name: "Interior Features", value: "Internal reception desk, utility shelf, durable PVC flooring" },
    { icon: Building, name: "Door", value: "Lockable, outward-opening PVC door" },
    { icon: Box, name: "Transport", value: "Fully assembled before dispatch, suitable for forklift transport" },
  ]

  const applications = [
    { icon: Building, name: "Security Huts" },
    { icon: Ticket, name: "Ticket Kiosks" },
    { icon: Box, name: "Gatehouses" },
    { icon: Users, name: "Welfare Units" },
    { icon: Box, name: "Car Park Attendants" },
    { icon: Coffee, name: "Catering Units" },
    { icon: Info, name: "Information Points" },
  ]

  const faqs = [
    {
      question: "What are the key features of this 110x130cm security cabin?",
      answer:
        "This compact cabin is built from steel double-skin sandwich panels with a 40mm polyurethane insulated core. It includes an internal reception desk, utility shelf, LED lighting, a double plug socket, a fuse box, an external site socket, a lockable outward-opening PVC door, and a portable heater fitted as standard.",
    },
    {
      question: "Does this cabin come with heating?",
      answer:
        "Yes — a portable heater is fitted as standard. That makes this size a popular choice for staff working shifts through the colder months.",
    },
    {
      question: "What are the window and door dimensions?",
      answer:
        "The cabin has two inward-opening windows measuring 60cm x 100cm, plus a lockable, outward-opening PVC door for secure access.",
    },
    {
      question: "How is the cabin installed and moved?",
      answer:
        "It arrives fully assembled and is suitable for forklift transport, so your team can position or reposition it on site with standard site equipment.",
    },
    {
      question: "What are the delivery and pickup options?",
      answer:
        "Nationwide delivery is available. Free in-person pick-up is available from our warehouse at LE13BW. For a delivery cost, please provide your postcode. Contact us at Mobile: 07497 954779.",
    },
    {
      question: "What applications is this cabin best suited for?",
      answer:
        "This cabin suits security huts, ticket kiosks, gatehouses, welfare units, car park attendant booths, catering units, and information points — popular across construction sites, car parks, and commercial premises.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-16 overflow-x-hidden">
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
            <span className="text-gray-900 font-medium">Portable Kiosk 110x130cm</span>
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
                  src={images[activeThumbnail]}
                  alt={imageAlts[activeThumbnail]}
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

            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`border-2 ${activeThumbnail === index ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-400"} rounded-md overflow-hidden h-20 bg-white flex items-center justify-center transition-all`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img
                    src={img}
                    alt={imageAlts[index]}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-3">Click on the main image to expand</p>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130cm</h1>
            <p className="text-gray-600 mb-4">Security Hut | Ticket Booth | Gatehouse | With Built-In Heater</p>

            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,799</span>
              <span className="ml-2 text-sm text-gray-500">excluding VAT</span>
            </div>

            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, insulated security cabin with an approximate external footprint of 1.10m (W) x 1.30m (L).
                Fitted with a portable heater as standard, ready to place and connect to power. Made in the EU.
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
                  <Flame className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Built-In Heater</span>
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
                <span className="text-sm text-gray-700">Compact Footprint</span>
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

          <div className="py-8 w-full max-w-full">
            {activeTab === "specifications" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                  <div className="prose prose-blue max-w-none w-full text-gray-700 prose-sm sm:prose-base">
                    <p>
                      <strong>Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130cm</strong> — a brand new, insulated security cabin with an approximate external footprint of 1.10m (W) x 1.30m (L).
                    </p>
                    <p>
                      <strong>Key Construction Features:</strong> Built from steel double-skin sandwich panels with a 40mm polyurethane insulated core for durability and weather resistance. Two inward-opening windows measure 60cm (W) x 100cm (H). The lockable door opens outward for secure, easy access. An internal reception desk and utility shelf are fitted as standard.
                    </p>
                    <p>
                      <strong>Electrical Specification:</strong> Internal LED lighting, a double plug socket, a fuse box, and an external site socket. A portable heater is included as standard — ready to place and connect to a suitable power supply.
                    </p>
                    <p>
                      <strong>Additional Details:</strong> Flooring is durable PVC. The cabin is fully assembled before dispatch and suitable for forklift transport. Made in the EU.
                    </p>
                    <h4 className="font-bold mt-3 mb-2">🏗️ Ideal Uses</h4>
                    <p>
                      A strong fit for a <Link href="/kiosks" className="text-blue-600 hover:underline font-semibold">security hut or gatehouse</Link>, ticket kiosk, welfare unit, or car park attendant booth. The built-in heater makes it a practical choice for staff working through colder months.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                <p className="text-gray-700 mb-8">
                  The 110x130cm cabin's compact footprint and built-in heater make it well suited to
                  staffed checkpoints where space is limited but comfort still matters — construction sites,
                  car parks, and commercial premises alike.
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
                  <h4 className="font-semibold text-blue-900 mb-2">Ideal Uses & Applications</h4>
                  <p className="text-blue-800 mb-3">
                    Perfect as a <strong>security hut or gatehouse</strong>, <strong>ticket kiosk</strong>, welfare unit, car park attendant booth, catering unit, or information point. A cost-effective, heater-equipped alternative to traditional construction.
                  </p>
                  <p className="text-blue-800">
                    Explore our full range of <Link href="/kiosks" className="font-semibold text-blue-700 hover:underline">modular cabins and portable kiosks</Link> to find the right fit for your site.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Steel double-skin sandwich panels with 40mm polyurethane core insulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Portable heater fitted as standard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Two inward-opening windows, 60cm x 100cm</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Internal reception desk, utility shelf, durable PVC flooring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete electrical: LED lighting, double plug socket, fuse box, external site socket</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lockable, outward-opening PVC door for secure access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Fully assembled before dispatch, suitable for forklift transport. Made in the EU</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-5 w-full">
                      <div className="flex gap-2 sm:gap-3 mb-3">
                        <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</h4>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base ml-7 sm:ml-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Need more information?</h4>
                  <p className="text-gray-700 mb-4">
                    Our team is ready to help with any questions about this security cabin.
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

      {/* Comparison Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Compares to Our Other Security Cabins</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="w-full">
              <thead className="bg-blue-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">110x130cm<br/>(This Unit)</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">110x150cm</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">150x210cm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Dimensions</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">1.10 × 1.30m</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">1.10 × 1.50m</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">1.50 × 2.10m</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Built-in Heater</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">Yes</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">—</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">—</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Price</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">£1,799</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">£1,949</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">£1,999</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Best For</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">Tight entrances, single attendant</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">Busier checkpoints, desk space</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">Main entrances, full-time teams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Other Security Cabin Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/products/Portable-Kiosk-110x150" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center">
              <span className="text-white font-bold text-lg">110×150cm</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Security Cabin 110×150cm</h3>
              <p className="text-sm text-gray-600 mb-3">More desk space for busier checkpoints</p>
              <p className="text-lg font-bold text-green-600">£1,949</p>
            </div>
          </Link>

          <Link href="/products/Portable-Kiosk-150x210" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 h-32 flex items-center justify-center">
              <span className="text-white font-bold text-lg">150×210cm</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Security Cabin 150×210cm</h3>
              <p className="text-sm text-gray-600 mb-3">Full-size cabin for main entrances</p>
              <p className="text-lg font-bold text-green-600">£1,999</p>
            </div>
          </Link>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h3 className="font-semibold text-blue-900 mb-2">Can't Find the Right Size?</h3>
          <p className="text-blue-800 mb-4">
            We offer several security cabin sizes to suit different sites and budgets. Browse our complete range of <Link href="/kiosks" className="font-semibold hover:underline">portable cabins and kiosks</Link>, or <Link href="/ContactUs" className="font-semibold hover:underline">contact us</Link> for custom solutions.
          </p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Ready to learn more about this Security Cabin?</h2>
              <p className="text-blue-100">
                Our team is available to answer any questions and help with your order.
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
          <h2>Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130cm</h2>
          <p>
            Brand new, insulated security cabin with an approximate external footprint of 1.10m (W) x 1.30m (L). Built from steel double-skin sandwich panels with a 40mm polyurethane insulated core for durability and weather resistance.
          </p>
          <p>
            <strong>Key Features:</strong> Two inward-opening windows measuring 60cm (W) x 100cm (H). Lockable, outward-opening PVC door. Internal reception desk and utility shelf. Durable PVC flooring throughout. A portable heater is fitted as standard, making this cabin a practical choice for staff working through colder months.
          </p>
          <p>
            <strong>Electrical Specification:</strong> Internal LED lighting, a double plug socket, a fuse box, and an external site socket. Ready to use — simply position the unit and connect to a suitable power supply.
          </p>
          <p>
            <strong>Additional Details:</strong> Fully assembled before dispatch and suitable for forklift transport. Made in the EU. Well suited to security huts and gatehouses, ticket kiosks, welfare units, car park attendant booths, catering units, and information points. Nationwide delivery available, with free in-person pick-up from our warehouse at LE13BW.
            <br/><br/>
            For more information about our range of <Link href="/kiosks" className="text-blue-600 hover:underline font-semibold">portable kiosks and security cabins</Link>, or to compare with our <Link href="/products/Portable-Kiosk-110x150" className="text-blue-600 hover:underline font-semibold">110×150cm cabin</Link>, please contact our team or visit our main <Link href="/" className="text-blue-600 hover:underline font-semibold">website</Link>.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
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

          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={imageAlts[lightboxIndex]}
              className="max-w-full max-h-[85vh] object-contain"
            />
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
                  lightboxIndex === index
                    ? "border-white ring-2 ring-white/50"
                    : "border-white/30 hover:border-white/60"
                } bg-transparent`}
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(index)
                }}
              >
                <img src={img} alt={imageAlts[index]} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PortableKiosk110x130Content