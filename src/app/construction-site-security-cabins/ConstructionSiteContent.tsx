"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  ShieldCheck,
  Truck,
  Zap,
  HardHat,
  Info,
} from "lucide-react"

const heroPoints = [
  { icon: ShieldCheck, label: "Reinforced security options available" },
  { icon: Zap, label: "Pre-wired, 32A site socket" },
  { icon: Truck, label: "Forklift-ready, relocate anytime" },
]

const cabins = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Compact Gatehouse",
    tag: "Best for tight site entrances",
    price: "£1,799",
    dimensions: "110×130 cm",
    image: "/110x130Kiosk.jpg",
    description:
      "A compact gatehouse cabin with a built-in heater, ideal where entrance space is limited but you still need a manned checkpoint.",
    features: [
      "Portable heater fitted as standard",
      "40mm polyurethane insulated panels",
      "Internal fuse box and external site socket",
      "Reception desk and utility shelf built in",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Site Office Cabin",
    tag: "Best for sign-in points and site offices",
    price: "£1,949",
    dimensions: "110×150 cm",
    image: "/110x150.jpg",
    description:
      "Extra depth over the 110x130 for a proper desk setup — suited to sign-in points, deliveries control, or a small site office.",
    features: [
      "Strong galvanised steel frame",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable PVC flooring",
    ],
  },
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Security Hut & Gatehouse",
    tag: "Best for main site entrances",
    price: "£1,999",
    dimensions: "150×210 cm",
    image: "/150x210%20Kiosk.jpg",
    description:
      "Our largest gatehouse cabin — enough room to work comfortably while monitoring a main site entrance or vehicle checkpoint.",
    features: [
      "Steel double-skin sandwich panels, 40mm insulation",
      "Internal fuse box and external 32A site socket",
      "Two 100×100cm inward-opening windows",
      "Internal reception desk",
    ],
  },
]

const welfareAddOns = [
  {
    id: "Portable-Double-Toilet-Block",
    title: "Portable Double Toilet Block",
    price: "£2,699.99",
    image: "/DoubleToilet.png",
    description: "Two separate WC cubicles, pre-plumbed and pre-wired, ready to connect to site services.",
  },
  {
    id: "Disabled-Portable-Toilet-Block",
    title: "Disabled Portable Toilet Block",
    price: "£2,999",
    image: "/DisabledToiletKiosk1.jpg",
    description: "Wheelchair access ramp and grab rails, ready to connect for full welfare compliance on site.",
  },
]

const faqs = [
  {
    q: "How quickly can a security cabin be delivered to site?",
    a: "Standard units are typically available for fast dispatch. If you need a specific delivery date for a project start, confirm the exact lead time with our team at enquiry stage, especially if you're adding custom branding or a non-standard configuration.",
  },
  {
    q: "Are these cabins suitable for exposed or high-risk entrances?",
    a: "Yes. For exposed or sensitive locations, we can recommend reinforced glazing, secure access points and a layout that helps protect staff, equipment and site access.",
  },
  {
    q: "Do the cabins come with electrics already installed?",
    a: "Yes. Every cabin ships with internal LED lighting, a plug socket, an internal fuse box, and an external site socket, so it's ready to connect to your site supply on arrival.",
  },
  {
    q: "Can the cabins be moved between sites or repositioned on site?",
    a: "Yes, every unit has forklift pockets built into the base, so it can be lifted, relocated, or repositioned as your site layout changes.",
  },
  {
    q: "Do I need planning permission for a site security cabin?",
    a: "Temporary cabins used for the duration of construction works are generally treated differently to permanent structures, but requirements can vary by site and local authority. We'd always recommend checking with your principal contractor or local planning office before installation.",
  },
  {
    q: "Can I get welfare facilities alongside a security cabin?",
    a: "Yes. Many construction sites order a security cabin alongside one of our portable toilet blocks to cover welfare requirements in the same delivery.",
  },
]

export default function ConstructionSiteContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>{" "}
          <span className="mx-1">/</span>{" "}
          <Link href="/kiosks" className="hover:text-blue-600">
            Kiosks
          </Link>{" "}
          <span className="mx-1">/</span> <span className="text-gray-700">Construction Site Security Cabins</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-sky-400/20 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
              <HardHat className="w-3.5 h-3.5" /> Built for construction sites
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">
            Construction Site Security Cabins &amp; Gatehouses
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-lg">
            Insulated, fully wired cabins for site entrances, gatehouses and sign-in points — built for live construction conditions and ready to connect on arrival.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=construction-security-cabin"
              className="inline-flex items-center justify-center bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-400 transition-colors"
            >
              Get a Quote for Your Site
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/kiosks"
              className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View All Kiosks
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {heroPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                  <Icon className="w-5 h-5 text-sky-300 flex-shrink-0" />
                  <span className="text-sm text-slate-100">{point.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Site-ready cabins for entrances, offices and welfare points</h2>
              <p className="text-gray-700 text-sm leading-7 mb-3">
                Our construction site security cabins are made for busy projects where speed, durability and straightforward delivery matter. They are supplied insulated, fully wired and ready to connect as soon as they arrive on site.
              </p>
              <p className="text-gray-700 text-sm leading-7">
                From temporary gatehouses and sign-in points to full site office setups, our cabins help contractors keep access controlled without slowing down day-to-day operations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Popular applications</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Main entrance gatehouses</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Visitor sign-in and security points</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Site offices and temporary welfare setups</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {cabins.map((cabin) => (
            <div
              key={cabin.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${cabin.id}`} className="block h-72 w-full relative bg-slate-100 overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.title}
                  className="h-full w-full object-contain bg-white p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-slate-900/80 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {cabin.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {cabin.price}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{cabin.title}</h2>
                </div>
              </Link>
              <div className="p-5 flex-grow">
                <span className="inline-block text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-2 py-1 mb-3">
                  {cabin.tag}
                </span>
                <p className="text-gray-700 text-sm mb-4">{cabin.description}</p>
                <ul className="space-y-2">
                  {cabin.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${cabin.id}`}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Need welfare facilities on the same site?</h2>
          <p className="text-gray-600 text-sm mb-6">
            A lot of our construction customers order a security cabin alongside a portable toilet block to cover welfare requirements in one delivery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {welfareAddOns.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="flex items-center gap-4 border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-20 h-20 rounded-md flex-shrink-0 bg-slate-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                  <span className="text-green-600 font-bold text-sm mt-1 inline-block">{item.price}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-12 border border-gray-100">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Built for working sites, not showrooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <ShieldCheck className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Reinforced options</h3>
                  <p className="text-gray-600 text-sm">Extra security features available for exposed or higher-risk locations.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Zap className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Site-ready power</h3>
                  <p className="text-gray-600 text-sm">32A external site socket and internal fuse box wired in before it leaves the factory.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Truck className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Forklift-ready</h3>
                  <p className="text-gray-600 text-sm">Built-in forklift pockets so your team can reposition it as the site evolves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Common questions from site managers</h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((item, i) => (
              <div key={i} className="py-3">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-sky-900 to-blue-800 text-white rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Fitting out a site?</h2>
                <p className="text-slate-200">
                  Tell us your entrance, welfare or gatehouse requirements and we'll recommend the right setup.
                </p>
              </div>
              <Link
                href="/ContactUs?interest=construction-security-cabin"
                className="inline-flex items-center bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-400 transition-colors shadow-md font-semibold"
              >
                Request a Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a construction site security cabin?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              A construction site security cabin is a robust, weatherproof building used for gatehouses, site offices and access control points. It gives your team a secure place to manage entry, visitors and site operations from day one. These cabins are built for real working conditions, with strong materials and practical features that support daily site activity.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              They are often placed at the main entrance or a key access point so staff can monitor movement, check credentials and manage deliveries without leaving the site exposed. A secure cabin helps create a clear, organised setup from the moment the project begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why do construction sites need security cabins?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              Construction sites need clear control at the entrance and a safe place for staff to work. A security cabin helps protect materials, manage access and create a professional first impression for visitors, contractors and delivery drivers. It also gives your team a reliable base for monitoring the site and keeping operations running smoothly.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              During busy phases of a build, organisation matters. A cabin provides a dedicated point for site checks, sign-in procedures and communication between staff and visitors. That makes it easier to maintain safety, reduce downtime and keep the site running efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who uses site security cabins?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              These cabins are commonly used by main contractors, developers, facilities teams and site managers. They are ideal for temporary offices, welfare support, entry points and secure monitoring areas where a permanent building is not practical. They are especially useful on projects that need fast deployment and dependable functionality.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              From large infrastructure jobs to smaller commercial builds, a site security cabin offers a flexible solution that can be moved, reused or adapted as the project changes. It is a practical option for teams that need safety, durability and a professional presence on site.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm leading-7">
          Our construction site security cabins are supplied brand new, fully insulated and wired ready to connect, with secure access and power fitted as standard. Used across the UK as gatehouses, sign-in points and site offices, and available alongside our portable toilet blocks for full welfare compliance on site.
        </p>
      </div>
    </div>
  )
}