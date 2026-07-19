"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, CheckCircle, Shield, Lock, Truck, Building2, ArrowRight, Phone } from "lucide-react"

const cabins = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Security Gatehouse",
    tag: "Best for compact entrances",
    price: "£1,799",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 130 cm",
    image: "/110x130Kiosk.jpg",
    description:
      "A practical and well-insulated gatehouse solution for access control points, visitor checks and security staff welfare at smaller sites.",
    features: [
      "Portable heater fitted as standard",
      "40mm polyurethane insulated panels",
      "Internal fuse box and external site socket",
      "Reception desk and utility shelf built in",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Security Gatehouse",
    tag: "Best for wider reception work",
    price: "£1,949",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 150 cm",
    image: "/110x150.jpg",
    description:
      "A slightly larger security gatehouse that gives operators more space for screens, access controls and day-to-day paperwork.",
    features: [
      "Strong galvanised steel frame",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable PVC flooring",
    ],
  },
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Security Gatehouse",
    tag: "Best for larger control points",
    price: "£1,999",
    priceNote: "ex VAT & shipping",
    dimensions: "150 × 210 cm",
    image: "/150x210%20Kiosk.jpg",
    description:
      "A robust gatehouse cabin for busy entrances, full-time security teams and sites that need a clear, professional control point.",
    features: [
      "Heavy-duty steel construction",
      "Insulated wall panels for all-weather comfort",
      "Internal LED lighting and double plug socket",
      "Internal reception desk and lockable door",
    ],
  },
]

const faqs = [
  {
    q: "What is a security gatehouse used for?",
    a: "A security gatehouse is a compact, secure cabin used for access control, visitor management and day-to-day site operations at entrances and sensitive locations.",
  },
  {
    q: "Why choose a modular gatehouse over a temporary office?",
    a: "A modular gatehouse is faster to install, weather-resistant and purpose-built for security staff who need a dependable and professional control point. It also gives a more polished first impression at the entrance.",
  },
  {
    q: "Can it be used for construction or industrial sites?",
    a: "Yes. These cabins are ideal for construction sites, industrial estates, warehouses, schools, public buildings and private facilities where a secure, visible entry point is needed.",
  },
  {
    q: "Is the gatehouse suitable for all weather conditions?",
    a: "Yes. Each unit is fully insulated and designed to remain comfortable and practical in both winter and summer conditions, with lighting, power and secure access built in.",
  },
]

export default function SecurityGatehouseContent() {
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
          <span className="mx-1">/</span> <span className="text-slate-700">Security Gatehouse</span>
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
            Secure entry solutions
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Modular Security Gatehouse for Sale and Hire in the UK
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Buy or hire a dependable gatehouse cabin for secure site entry, visitor management and
            barrier control with insulated, weatherproof construction and fast delivery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=security-gatehouse"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Request a Gatehouse Quote
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
              { k: "Access", v: "Lockable" },
              { k: "Transport", v: "Forklift-ready" },
              { k: "Option", v: "Buy or hire" },
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
            <h2 className="text-2xl font-bold text-slate-900">Our security gatehouse range</h2>
            <Link
              href="/kiosks"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              All units <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cabins.map((cabin) => (
              <div
                key={cabin.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-md transition-all"
              >
                <Link
                  href={`/products/${cabin.id}`}
                  className="block h-72 lg:h-80 relative bg-white overflow-hidden"
                >
                  <img
                    src={cabin.image}
                    alt={cabin.title}
                    className="h-full w-full object-contain p-2"
                  />
                  <span className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-mono px-2 py-1 rounded">
                    {cabin.dimensions}
                  </span>
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                      {cabin.tag}
                    </span>
                    <div className="text-right">
                      <span className="block text-lg font-bold text-blue-900 leading-none">
                        {cabin.price}
                      </span>
                      <span className="text-[11px] text-slate-500">{cabin.priceNote}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cabin.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{cabin.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {cabin.features.map((f, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${cabin.id}`}
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
              A secure gatehouse that works hard from day one
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              Our security gatehouse cabins are built for entrances, barriers and controlled
              access points where staff need a professional, weatherproof place to work. They
              provide a clear point of contact for visitors while helping your site feel organised
              and protected.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              Whether you manage a construction site, commercial estate, school, warehouse or
              private facility, a gatehouse helps improve visibility, reinforce entry procedures
              and create a stronger first impression for everyone arriving on site.
            </p>
            <p className="text-slate-700 leading-7">
              From single-entry gates to large contractor sites, these cabins provide a clear,
              protected point for staff to manage visitors, deliveries and access control without
              the cost or delay of a permanent build.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Common applications</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Site entry and access control
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Visitor check-in and reception points
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Construction and industrial security huts
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why secure sites choose these gatehouse cabins
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                title: "Strong security presence",
                text: "A dedicated control point helps staff manage access and keep the entrance organised.",
              },
              {
                icon: Lock,
                title: "Weatherproof and practical",
                text: "Insulated panels and fitted utilities help protect staff and equipment throughout the year.",
              },
              {
                icon: Building2,
                title: "Professional first impression",
                text: "A well-finished gatehouse makes the arrival experience feel orderly, secure and welcoming.",
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

        {/* ---------------- HELPFUL GUIDES ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Helpful gatehouse guides</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/construction-site-security-cabins" className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-slate-900">Construction site security cabins</p>
                <p className="mt-1 text-sm text-slate-600">See how gatehouse cabins support temporary and active building sites.</p>
              </Link>
              <Link href="/car-park-kiosks" className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-slate-900">Car park kiosk and cabin solutions</p>
                <p className="mt-1 text-sm text-slate-600">Explore related entry-point cabins for parking operators and facilities teams.</p>
              </Link>
              <Link href="/kiosks" className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-slate-900">View all kiosks and cabins</p>
                <p className="mt-1 text-sm text-slate-600">Compare compact, mid-size and larger cabins for secure access points.</p>
              </Link>
              <Link href="/blog" className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-slate-900">Read our blog</p>
                <p className="mt-1 text-sm text-slate-600">Find practical guidance on modular cabins, portable buildings and site security.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ---------------- LONG-FORM SEO ---------------- */}
        <div className="max-w-3xl space-y-12 pb-14">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What is a security gatehouse?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              A security gatehouse is a dedicated cabin used to manage access to a site, welcome
              visitors and support security teams at entry points. It gives staff a clear,
              protected base for checking vehicles, recording arrivals and maintaining a
              professional presence from the moment someone enters the premises.
            </p>
            <p className="text-slate-700 leading-7">
              For many sites, a gatehouse is more than a booth. It becomes the first point of
              contact for deliveries, contractors, guests and employees, helping to keep the site
              secure, organised and easy to manage throughout the day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why a modular gatehouse makes sense</h2>
            <p className="text-slate-700 leading-7 mb-3">
              Modular gatehouse cabins are quick to install, strong in build quality and designed
              for year-round use. They can be placed at the entrance of a construction site,
              warehouse, industrial unit, school campus or private facility without the delay or
              cost of a traditional building.
            </p>
            <p className="text-slate-700 leading-7">
              They also offer a practical working environment for security staff, with insulation,
              lighting, power and lockable access helping your team stay comfortable and prepared
              even during long shifts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Who benefits from a gatehouse cabin?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              These cabins are widely used by construction companies, facilities managers,
              commercial sites, schools, public buildings and private estates. They are ideal
              where there is a need for secure entry management, visible on-site presence and a
              professional control point without the commitment of a permanent structure.
            </p>
            <p className="text-slate-700 leading-7">
              The result is a simple, durable and attractive solution that supports both security
              goals and day-to-day operations from the very first arrival.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions about security gatehouses</h2>
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
                <h2 className="text-2xl font-bold mb-2">Need a security gatehouse cabin?</h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us about your site, access requirements and preferred size and we will help
                  you choose the right gatehouse cabin for hire or purchase.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=security-gatehouse"
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
            Our security gatehouse cabins are supplied as new, insulated, and ready for connection,
            giving sites across the UK a dependable control point for access, protection and
            visitor management.
          </p>
        </div>
      </div>
    </div>
  )
}