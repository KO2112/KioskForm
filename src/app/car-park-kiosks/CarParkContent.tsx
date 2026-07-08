"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Thermometer,
  Lock,
  Car,
  Truck,
} from "lucide-react"

const heroPoints = [
  { icon: Thermometer, label: "Portable heater fitted as standard" },
  { icon: Lock, label: "Lockable door and secure internal layout" },
  { icon: Truck, label: "Compact footprint, forklift-ready" },
]

const kiosks = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Car Park Kiosk",
    tag: "Best for single-bay footprint",
    price: "£1,799",
    dimensions: "110×130 cm",
    image: "/110x130Kiosk.jpg",
    description:
      "Our most compact car park kiosk, with a portable heater fitted as standard — ideal for barriers, pay-and-display points, or a tight entrance position.",
    features: [
      "Portable heater fitted as standard",
      "40mm polyurethane insulated panels",
      "Internal fuse box and external site socket",
      "Reception desk and utility shelf built in",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Car Park Kiosk",
    tag: "Best for extra desk space",
    price: "£1,949",
    dimensions: "110×150 cm",
    image: "/110x150.jpg",
    description:
      "Slightly deeper than our 110x130 model, giving staff more room for a barrier control panel, payment terminal, or paperwork.",
    features: [
      "Strong galvanised steel frame",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable PVC flooring",
    ],
  },
]

const faqs = [
  {
    q: "Will staff be warm in winter?",
    a: "Our 110x130cm kiosk comes with a portable heater fitted as standard, and all units are fully insulated with 40mm polyurethane core panels to keep the inside comfortable.",
  },
  {
    q: "How much space does the kiosk take up?",
    a: "Our compact models start at 110x130cm, designed to fit into a single car parking bay or a tight kerbside position without taking up valuable space.",
  },
  {
    q: "Is the kiosk secure enough for handling cash?",
    a: "Yes. Each kiosk is supplied with secure lockable access and a strong steel construction, and we can recommend reinforced options for higher-risk or cash-handling locations.",
  },
  {
    q: "Can the kiosk be relocated if the car park layout changes?",
    a: "Yes, every unit has forklift pockets built into the base, so it can be lifted and repositioned if your car park layout or barrier positions change.",
  },
  {
    q: "Does the kiosk need a mains connection?",
    a: "Yes. Each kiosk arrives pre-wired with an internal fuse box and external site socket, so it needs to be connected to a power supply on site rather than running independently.",
  },
  {
    q: "How quickly can a kiosk be delivered?",
    a: "Standard units are typically available for fast dispatch. Confirm the exact lead time with our team at enquiry stage if you're working to a fixed operational start date.",
  },
]

export default function CarParkContent() {
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
          <span className="mx-1">/</span> <span className="text-gray-700">Car Park Kiosks</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-sky-400/20 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
              <Car className="w-3.5 h-3.5" /> Built for parking operators
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">
            Car Park Kiosks for Parking Operators and Councils
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-lg">
            Compact, insulated parking kiosks for barrier control, pay stations and reception points — built to keep staff comfortable and your site running smoothly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=car-park-kiosk"
              className="inline-flex items-center justify-center bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-400 transition-colors"
            >
              Get a Quote for Your Car Park
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">Practical parking kiosks that work from day one</h2>
              <p className="text-gray-700 text-sm leading-7 mb-3">
                Our car park kiosks are designed for operators who need a robust, weatherproof booth without sacrificing comfort or ease of installation. Each unit arrives insulated, fully wired and ready for a fast handover on site.
              </p>
              <p className="text-gray-700 text-sm leading-7">
                Whether you are fitting out a single bay, several entrances or a full multi-storey operation, we can help you choose a kiosk layout that supports staff comfort, secure access and straightforward maintenance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Typical setups</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Barrier control and ticketing points</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Parking office or reception-style positions</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Car parks, council sites and facilities management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {kiosks.map((kiosk) => (
            <div
              key={kiosk.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${kiosk.id}`} className="block h-72 w-full relative bg-slate-100 overflow-hidden">
                <img
                  src={kiosk.image}
                  alt={kiosk.title}
                  className="h-full w-full object-contain bg-white p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-slate-900/80 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {kiosk.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {kiosk.price}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{kiosk.title}</h2>
                </div>
              </Link>
              <div className="p-5 flex-grow">
                <span className="inline-block text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-2 py-1 mb-3">
                  {kiosk.tag}
                </span>
                <p className="text-gray-700 text-sm mb-4">{kiosk.description}</p>
                <ul className="space-y-2">
                  {kiosk.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${kiosk.id}`}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-12 border border-gray-100">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Built for a full shift, every shift</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Thermometer className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Heated & insulated</h3>
                  <p className="text-gray-600 text-sm">Portable heating and insulated wall panels help keep staff comfortable all day.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Lock className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Secure by design</h3>
                  <p className="text-gray-600 text-sm">Lockable access as standard, with reinforced layouts available for more sensitive locations.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Truck className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Fits a single bay</h3>
                  <p className="text-gray-600 text-sm">Compact dimensions from 110x130cm, with forklift pockets for easy repositioning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Common questions from parking operators</h2>
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
                <h2 className="text-2xl font-bold mb-2">Fitting out a car park?</h2>
                <p className="text-slate-200">
                  Tell us how many bays or kiosk points you need to cover and we'll put together a quote.
                </p>
              </div>
              <Link
                href="/ContactUs?interest=car-park-kiosk"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a car park kiosk?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              A car park kiosk is a compact, secure cabin used by parking attendants, site staff and reception teams to manage access and customer interaction. It gives your staff a dedicated place to handle ticketing, payments, visitor questions and site control in one practical location. In many car parks, it becomes the visible hub of the operation, helping drivers and visitors understand where to go and who to speak to.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              These kiosks are designed to be durable, comfortable and easy to use. They are often installed at entrances, exits, pay points or barrier positions where a simple but professional setup is needed. A well-placed kiosk can improve service, support security and keep the overall site feeling organised from the first arrival.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why do you need a car park kiosk?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              A kiosk helps your car park run more smoothly. It creates a clear check-in point, improves staff visibility and gives your team a safe, weatherproof space to work from during busy shifts. This is especially useful for sites with high traffic, changing weather conditions or a need for secure access control.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              It also makes day-to-day operations easier to manage. Staff can respond to customers quickly, handle payments or passes with confidence and keep the entrance line moving without confusion. For operators, that means better service, stronger site control and a more professional experience for everyone using the car park.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who uses car park kiosks?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              These kiosks are commonly used by parking operators, councils, facilities managers and private sites. They are ideal for barrier control, ticketing points, pay stations and general reception duties. They also work well for sites that need a practical and professional booth without the cost of a full building.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              Their compact size, insulation and built-in features make them a smart option for busy car parks and public-facing locations. Whether you manage a single entrance or a larger multi-site operation, a kiosk can support your team and improve the experience for drivers, visitors and staff alike.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm leading-7">
          Our car park kiosks are supplied brand new, fully insulated and wired ready to connect, with a portable heater fitted as standard on our compact model. Used by parking operators, facilities managers and councils across the UK for entry control, ticketing and reception points.
        </p>
      </div>
    </div>
  )
}