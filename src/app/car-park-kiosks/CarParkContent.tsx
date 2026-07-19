"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Thermometer,
  Lock,
  Truck,
  ArrowRight,
  Phone,
} from "lucide-react"

const kiosks = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Car Park Kiosk",
    tag: "Best for single-bay footprint",
    price: "£1,799",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 130 cm",
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
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 150 cm",
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
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Car Park Kiosk",
    tag: "Best for multi-storey or main entrances",
    price: "£1,999",
    priceNote: "ex VAT & shipping",
    dimensions: "150 × 210 cm",
    image: "/150x210%20Kiosk.jpg",
    description:
      "Our largest car park kiosk, giving staff room to manage barriers, payments and enquiries at a busy main entrance or multi-storey exit.",
    features: [
      "Steel double-skin sandwich panels, 40mm insulation",
      "Internal fuse box and external 32A site socket",
      "Two 100×100cm inward-opening windows",
      "Internal reception desk",
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
    <div className="bg-slate-50 min-h-screen pt-6">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>{" "}
          <span className="mx-1">/</span>{" "}
          <Link href="/kiosks" className="hover:text-blue-600">
            Kiosks
          </Link>{" "}
          <span className="mx-1">/</span> <span className="text-slate-700">Car Park Kiosks</span>
        </div>
      </div>

      {/* ---------------- HERO ---------------- */}
      <div className="relative bg-blue-950 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-4">
            Built for parking operators
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Car Park Kiosks for Parking Operators and Councils
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Compact, insulated parking kiosks for barrier control, pay stations and reception
            points — built to keep staff comfortable and your site running smoothly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=car-park-kiosk"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Get a Quote for Your Car Park
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <a
              href="#range"
              className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View the Range
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 border border-white/15 rounded-lg bg-white/5 backdrop-blur-sm">
            {[
              { k: "From", v: "£1,799" },
              { k: "Heating", v: "Portable heater" },
              { k: "Access", v: "Lockable" },
              { k: "Transport", v: "Forklift-ready" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-4 text-center">
                <div className="text-[11px] uppercase tracking-wider text-blue-300">{s.k}</div>
                <div className="text-base sm:text-lg font-bold text-white mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- RANGE ---------------- */}
        <section id="range" className="py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Our car park kiosk range</h2>
            <Link
              href="/kiosks"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              All units <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kiosks.map((kiosk) => (
              <div
                key={kiosk.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-md transition-all"
              >
                <Link
                  href={`/products/${kiosk.id}`}
                  className="block h-72 lg:h-80 relative bg-white overflow-hidden"
                >
                  <img
                    src={kiosk.image}
                    alt={kiosk.title}
                    className="h-full w-full object-contain p-2"
                  />
                  <span className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-mono px-2 py-1 rounded">
                    {kiosk.dimensions}
                  </span>
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                      {kiosk.tag}
                    </span>
                    <div className="text-right">
                      <span className="block text-lg font-bold text-blue-900 leading-none">
                        {kiosk.price}
                      </span>
                      <span className="text-[11px] text-slate-500">{kiosk.priceNote}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{kiosk.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{kiosk.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {kiosk.features.map((f, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${kiosk.id}`}
                    className="mt-auto inline-flex justify-center items-center bg-blue-700 text-white px-4 py-2.5 rounded font-medium text-sm hover:bg-blue-600 transition-colors"
                  >
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            All prices exclude VAT and shipping. Nationwide UK delivery quoted by postcode.
          </p>
        </section>

        {/* ---------------- INTRO ---------------- */}
        <section className="pb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Practical parking kiosks that work from day one
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              Our car park kiosks are designed for operators who need a robust, weatherproof booth
              without sacrificing comfort or ease of installation. Each unit arrives insulated,
              fully wired and ready for a fast handover on site.
            </p>
            <p className="text-slate-700 leading-7">
              Whether you are fitting out a single bay, several entrances or a full multi-storey
              operation, we can help you choose a kiosk layout that supports staff comfort, secure
              access and straightforward maintenance.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Typical setups</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Barrier control and ticketing points
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Parking office or reception-style positions
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Car parks, council sites and facilities management
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Built for a full shift, every shift</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Thermometer,
                title: "Heated & insulated",
                text: "Portable heating and insulated wall panels help keep staff comfortable all day.",
              },
              {
                icon: Lock,
                title: "Secure by design",
                text: "Lockable access as standard, with reinforced layouts available for more sensitive locations.",
              },
              {
                icon: Truck,
                title: "Fits a single bay",
                text: "Compact dimensions from 110x130cm, with forklift pockets for easy repositioning.",
              },
            ].map((u, i) => {
              const Icon = u.icon
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-5">
                  <div className="inline-flex bg-blue-50 rounded-md p-2 mb-3">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{u.title}</h3>
                  <p className="text-slate-600 text-sm leading-6">{u.text}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ---------------- LONG-FORM SEO ---------------- */}
        <div className="max-w-3xl space-y-12 pb-14">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What is a car park kiosk?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              A car park kiosk is a compact, secure cabin used by parking attendants, site staff
              and reception teams to manage access and customer interaction. It gives your staff a
              dedicated place to handle ticketing, payments, visitor questions and site control in
              one practical location. In many car parks, it becomes the visible hub of the
              operation, helping drivers and visitors understand where to go and who to speak to.
            </p>
            <p className="text-slate-700 leading-7">
              These kiosks are designed to be durable, comfortable and easy to use. They are often
              installed at entrances, exits, pay points or barrier positions where a simple but
              professional setup is needed. A well-placed kiosk can improve service, support
              security and keep the overall site feeling organised from the first arrival.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why do you need a car park kiosk?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              A kiosk helps your car park run more smoothly. It creates a clear check-in point,
              improves staff visibility and gives your team a safe, weatherproof space to work
              from during busy shifts. This is especially useful for sites with high traffic,
              changing weather conditions or a need for secure access control.
            </p>
            <p className="text-slate-700 leading-7">
              It also makes day-to-day operations easier to manage. Staff can respond to customers
              quickly, handle payments or passes with confidence and keep the entrance line moving
              without confusion. For operators, that means better service, stronger site control
              and a more professional experience for everyone using the car park.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Who uses car park kiosks?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              These kiosks are commonly used by parking operators, councils, facilities managers
              and private sites. They are ideal for barrier control, ticketing points, pay
              stations and general reception duties. They also work well for sites that need a
              practical and professional booth without the cost of a full building.
            </p>
            <p className="text-slate-700 leading-7">
              Their compact size, insulation and built-in features make them a smart option for
              busy car parks and public-facing locations. Whether you manage a single entrance or
              a larger multi-site operation, a kiosk can support your team and improve the
              experience for drivers, visitors and staff alike.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common questions from parking operators</h2>
            <div className="divide-y divide-slate-100">
              {faqs.map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center w-full text-left"
                    aria-expanded={openFaq === i}
                  >
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base pr-4">{item.q}</h3>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="pb-16">
          <div className="relative bg-blue-950 text-white rounded-lg overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative p-8 md:p-10 md:flex items-center justify-between gap-8">
              <div className="mb-5 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Fitting out a car park?</h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us how many bays or kiosk points you need to cover and we'll put together a
                  quote.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=car-park-kiosk"
                  className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
                >
                  Request a Quote <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  href="/ContactUs"
                  className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" /> Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* footer strip */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-slate-600 text-sm leading-7">
            Our car park kiosks are supplied brand new, fully insulated and wired ready to
            connect, with a portable heater fitted as standard on our compact model. Used by
            parking operators, facilities managers and councils across the UK for entry control,
            ticketing and reception points.
          </p>
        </div>
      </div>
    </div>
  )
}