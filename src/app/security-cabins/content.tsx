"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Shield,
  Zap,
  Truck,
  Building2,
  MapPin,
} from "lucide-react"

const products = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Security Cabin",
    bestFor: "Best for tight entrances & compact checkpoints",
    price: "£1,799",
    dimensions: "110×130 cm",
    image: "/110x130Kiosk.jpg",
    altText: "110x130cm compact security cabin kiosk with ticket window and built-in heater",
    description:
      "A compact security cabin with a built-in heater, ideal where footprint is limited but you still need a manned checkpoint.",
    features: [
      "Portable heater fitted as standard",
      "40mm polyurethane insulated panels",
      "Internal fuse box and external site socket",
      "Reception desk and utility shelf built in",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Security Cabin",
    bestFor: "Best for staffed checkpoints needing more desk space",
    price: "£1,949",
    dimensions: "110×150 cm",
    image: "/110x150.jpg",
    altText: "110x150cm medium insulated security cabin gatehouse with dual windows",
    description:
      "Extra depth over the 110×130 for a proper working desk — suited to sign-in points, screens, and day-to-day paperwork.",
    features: [
      "Strong galvanised steel frame",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable PVC flooring",
    ],
  },
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Security Cabin",
    bestFor: "Best for main entrances & full-time security teams",
    price: "£1,999",
    dimensions: "150×210 cm",
    image: "/150x210%20Kiosk.jpg",
    altText: "150x210cm large prefabricated security guard kiosk with deep observation window",
    description:
      "Our largest standard security cabin — enough room to work comfortably while monitoring a busy entrance or vehicle checkpoint.",
    features: [
      "Steel double-skin sandwich panels, 40mm insulation",
      "Internal fuse box and external 32A site socket",
      "Two 100×100cm inward-opening windows",
      "Internal reception desk and lockable PVC door",
    ],
  },
]

const relatedUseCases = [
  {
    title: "Security Gatehouses",
    description: "Purpose-built for site entrances, barriers and visitor access control.",
    href: "/security-gatehouse",
  },
  {
    title: "Construction Site Security Cabins",
    description: "Site-ready cabins for gatehouses, sign-in points and site offices.",
    href: "/construction-site-security-cabins",
  },
  {
    title: "Car Park Kiosks & Cabins",
    description: "Attendant booths and pay points built for car park operations.",
    href: "/car-park-kiosks",
  },
]

const faqs = [
  {
    q: "What is a security cabin used for?",
    a: "A security cabin is a compact, insulated structure used to give security staff, gatekeepers or attendants a secure, weatherproof base to work from. They're used for access control, visitor sign-in, monitoring entrances, and general site security across construction, retail, industrial, and event locations.",
  },
  {
    q: "Do I need planning permission for a security cabin?",
    a: "Most temporary or relocatable security cabins used on a site you already operate don't require planning permission, but this depends on how long it stays in place and your local authority's rules. If you're unsure, we'd recommend checking with your local planning office before installation, and our team can help point you in the right direction.",
  },
  {
    q: "Are the cabins ready to use on delivery?",
    a: "Yes. Every cabin is supplied brand new, fully insulated, and pre-wired with an internal fuse box and external site socket. You'll need a qualified electrician to connect to your power supply, but no further fit-out work is required.",
  },
  {
    q: "Can a security cabin be moved once it's on site?",
    a: "Yes. All our cabins are built with forklift pockets in the base, so they can be repositioned or relocated as your site or requirements change.",
  },
  {
    q: "What sizes are available?",
    a: "Our standard range covers 110×130cm, 110×150cm and 150×210cm cabins, suiting anything from a compact single-person checkpoint to a larger, fully equipped entrance station. Custom sizing is available if none of our standard options fit your site.",
  },
]

const SecurityCabinsContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>{" "}
          <span className="mx-1">/</span>{" "}
          <Link href="/kiosks" className="hover:text-blue-600">
            Kiosks
          </Link>{" "}
          <span className="mx-1">/</span> <span className="text-gray-700">Security Cabins</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 max-w-3xl">
            Security Cabins for Sites, Gatehouses & Access Points Across the UK
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mb-6">
            Insulated, fully wired security cabins built for construction sites, car parks,
            warehouses, retail sites and events. Delivered ready to connect, with forklift-ready
            transport and immediate dispatch available.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/ContactUs?interest=security-cabin"
              className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded hover:bg-blue-700 transition-colors shadow-sm font-medium"
            >
              Request a Security Cabin Quote
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/kiosks"
              className="inline-flex items-center bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded hover:bg-blue-50 transition-colors font-medium"
            >
              View All Kiosks
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-700">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-blue-600 mr-2" />
              Lockable, insulated & weatherproof
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              Pre-wired, ready to connect
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 text-blue-600 mr-2" />
              Forklift-ready, relocate anytime
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Products (MOVED ON TOP) */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Security Cabin Range</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Three standard sizes covering everything from a single-person checkpoint to a fully
            equipped entrance station. All units are new, insulated, and dispatched ready to
            connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <Link href={`/products/${product.id}`} className="relative h-56 w-full block bg-slate-100/50">
                  <Image
                    src={product.image}
                    alt={product.altText}
                    fill
                    className="object-contain p-4"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {product.dimensions}
                  </span>
                  <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.price}
                  </span>
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-blue-700 text-xs font-medium mb-2">{product.bestFor}</p>
                  <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                  <ul className="space-y-1.5 mb-4 flex-grow">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 text-green-600 mr-1.5 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${product.id}`}
                    className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            A secure cabin for wherever your site needs one
          </h2>
          <p className="text-gray-700 mb-6 max-w-4xl">
            Our security cabins give staff a proper, weatherproof base for access control, visitor
            management and general site security. They're built from insulated steel sandwich
            panels on a galvanised frame, arrive fully wired, and can be positioned wherever your
            site needs a manned presence — a main entrance, a car park barrier, a warehouse gate,
            or a temporary checkpoint at an event.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Designed for Instant Logistics and Immediate Field Deployment
          </h2>
          <p className="text-gray-700 max-w-4xl">
            Whether you need a single compact cabin for a small site or a fleet of units across
            multiple locations, every cabin is supplied new, ready for immediate dispatch, and
            built to the same European manufacturing standard across our whole range.
          </p>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Versatile Deployments Across Industries</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            From industrial footprints to corporate entry points, our cabins seamlessly fit into any structural ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {[
            {
              icon: Building2,
              title: "Construction & Industrial Sites",
              text: "Gatehouses, sign-in points and site security huts.",
            },
            {
              icon: MapPin,
              title: "Car Parks & Estates",
              text: "Attendant booths and pay-point security cabins.",
            },
            {
              icon: Shield,
              title: "Retail & Commercial Sites",
              text: "Loss-prevention posts and staffed entry points.",
            },
            {
              icon: Truck,
              title: "Warehouses & Distribution",
              text: "Gate checks and delivery control points.",
            },
            {
              icon: CheckCircle,
              title: "Events & Festivals",
              text: "Temporary security and access control for crowds.",
            },
            {
              icon: Shield,
              title: "Schools & Public Buildings",
              text: "Visitor sign-in and controlled site entry.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex items-start"
            >
              <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                <item.icon className="h-4 w-4 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Key Operational Advantages for Modern Sites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="bg-blue-100 rounded-full p-2 w-fit mb-2">
                <Shield className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Weatherproof & insulated</h3>
              <p className="text-gray-600 text-sm">
                40mm polyurethane-insulated steel panels keep staff comfortable year-round.
              </p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full p-2 w-fit mb-2">
                <Zap className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Ready to connect</h3>
              <p className="text-gray-600 text-sm">
                Internal fuse box, sockets and external site power fitted before dispatch.
              </p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full p-2 w-fit mb-2">
                <Truck className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Fast dispatch</h3>
              <p className="text-gray-600 text-sm">
                Forklift-ready and available for immediate dispatch across the UK.
              </p>
            </div>
          </div>
        </div>

        {/* Related use cases */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Tailored Gatehouses for Specific Security Requirements</h2>
          <p className="text-gray-600 mb-5 max-w-3xl">
            Every cabin below is built from the same range — these pages go into detail on the
            setup that matches your exact use case.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedUseCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <span className="text-blue-600 text-xs font-medium inline-flex items-center">
                  Explore <ChevronRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Frequently Asked Questions on Installation and Operations
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-3">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 flex-shrink-0 ml-3 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && <p className="text-gray-600 text-sm mt-2 pr-6">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg overflow-hidden mb-14">
          <div className="p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Need a security cabin on site?</h2>
                <p className="text-blue-100">
                  Tell us about your entrance, checkpoint or access requirements and we'll help
                  you choose the right size.
                </p>
              </div>
              <Link
                href="/ContactUs?interest=security-cabin"
                className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium"
              >
                Request a Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Long-form SEO content */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8 border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is a Security Cabin?
          </h2>
          <p className="text-gray-700 mb-4">
            A security cabin is a self-contained, insulated structure used to give staff a secure,
            weatherproof place to work from at an entrance, checkpoint, or monitoring position.
            Unlike a permanent building, a security cabin is manufactured off-site, delivered
            ready to use, and can be repositioned as your operation changes.
          </p>
          <p className="text-gray-700 mb-6">
            Most cabins in this category share the same core build: a galvanised steel frame,
            insulated sandwich panels, lockable doors, and windows positioned for clear visibility
            over the area being monitored. Electrics — lighting, sockets, and an external site
            connection — are fitted before the cabin leaves the factory, so there's minimal setup
            once it arrives.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where Security Cabins Are Typically Used
          </h2>
          <p className="text-gray-700 mb-4">
            Security cabins turn up wherever a site needs a staffed access point. On construction
            sites they double as gatehouses and sign-in points. In car parks and business estates
            they house attendants managing barriers and payments. Retailers use them for staffed
            loss-prevention posts, while warehouses and distribution centres rely on them for gate
            checks at goods-in and goods-out points. Event organisers use the same cabins as
            temporary security and ticket-control posts for the duration of a festival or show.
          </p>
          <p className="text-gray-700 mb-6">
            The common thread across all of these settings is the need for a controlled point of
            contact — somewhere staff can check credentials, monitor movement, and manage entry
            without being exposed to the weather or working from an unsecured spot.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Understanding the Construction and Design Standards
          </h2>
          <p className="text-gray-700 mb-6">
            To ensure sustained performance in exposed environments, strict engineering protocols must
            be met. The outer walls utilize specialized steel finishes that resist saline air erosion and 
            structural wear, offering long-term stability even during repeated repositioning with heavy 
            site machinery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choosing the Right Size for Your Operation
          </h2>
          <p className="text-gray-700 mb-4">
            Smaller cabins, around 110×130cm, suit tight entrances where footprint is limited but
            a manned checkpoint is still required — a single attendant checking passes or
            deliveries. Mid-sized units, around 110×150cm, give staff enough room for a desk,
            screens, and paperwork, which suits sign-in points and busier checkpoints. Larger
            cabins, at 150×210cm, are built for main entrances and full-time security teams who
            need to work comfortably across a shift.
          </p>
          <p className="text-gray-700 mb-4">
            If none of our standard sizes fit your entrance or site layout, our team can talk
            through a custom configuration, including additional windows, extra desk space, or
            reinforced options for exposed or higher-risk locations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Benefits of Using a Security Cabin
          </h2>
          <p className="text-gray-700 mb-4">
            A security cabin gives staff a safe and comfortable place to work. It provides shelter from
            the weather while allowing clear views of entrances, gates, and access points. This helps
            security teams monitor visitors, deliveries, and vehicles throughout the day.
          </p>
          <p className="text-gray-700">
            Unlike a permanent gatehouse, a security cabin can be moved when your site changes. It is a
            cost-effective solution for construction sites, warehouses, business parks, car parks, and
            temporary events. As a result, businesses can improve site security without the time and cost
            of building a permanent structure.
          </p>
          
          
          
        </div>
      </div>

      {/* SEO footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm">
          Our security cabins are supplied brand new, fully insulated, and wired ready to connect,
          for use as gatehouses, checkpoints, attendant booths and staffed entry points across the
          UK. Available in a range of standard sizes with custom configurations on request, and
          suitable alongside our portable toilet blocks where welfare facilities are also needed
          on site.
        </p>
      </div>
    </div>
  )
}

export default SecurityCabinsContent