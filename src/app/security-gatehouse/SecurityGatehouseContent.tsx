"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, CheckCircle, Shield, Lock, Truck, Building2 } from "lucide-react"

const heroPoints = [
  { icon: Shield, label: "Secure entry point for staff and visitors" },
  { icon: Lock, label: "Lockable access and strong internal layout" },
  { icon: Truck, label: "Compact footprint with forklift-ready transport" },
]

const kiosks = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Security Gatehouse",
    tag: "Best for compact entrances",
    price: "£1,799",
    dimensions: "110×130 cm",
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
    dimensions: "110×150 cm",
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
    dimensions: "150×210 cm",
    image: "/150x210 Kiosk.jpg",
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
    a: "A security gatehouse is a compact, secure cabin used for access control, visitor management, and day-to-day site operations at entrances and sensitive locations.",
  },
  {
    q: "Why choose a modular gatehouse over a temporary office?",
    a: "A modular gatehouse is faster to install, weather-resistant, and purpose-built for security staff who need a dependable and professional control point.",
  },
  {
    q: "Can it be used for construction or industrial sites?",
    a: "Yes. These cabins are ideal for construction sites, industrial estates, warehouses, schools, public buildings and private facilities.",
  },
  {
    q: "Is the gatehouse suitable for all weather conditions?",
    a: "Yes. Each unit is fully insulated and designed to remain comfortable and practical in both winter and summer conditions.",
  },
]

export default function SecurityGatehouseContent() {
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
          <span className="mx-1">/</span> <span className="text-gray-700">Security Gatehouse</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-sky-400/20 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Secure entry solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">
            Security Gatehouse Cabins for Safe, Professional Site Entry
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-lg">
            Create a dependable control point for visitors, deliveries and staff with a robust gatehouse cabin that combines security, comfort and easy installation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=security-gatehouse"
              className="inline-flex items-center justify-center bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-400 transition-colors"
            >
              Request a Gatehouse Quote
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">A secure gatehouse that works hard from day one</h2>
              <p className="text-gray-700 text-sm leading-7 mb-3">
                Our security gatehouse cabins are built for entrances, barriers and controlled access points where staff need a professional, weatherproof place to work. They provide a clear point of contact for visitors while helping your site feel organised and protected.
              </p>
              <p className="text-gray-700 text-sm leading-7">
                Whether you manage a construction site, commercial estate, school, warehouse or private facility, a gatehouse helps improve visibility, reinforce entry procedures and create a stronger first impression for everyone arriving on site.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Common applications</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Site entry and access control</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Visitor check-in and reception points</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Construction and industrial security huts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-10">
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
            <h2 className="text-xl font-bold text-gray-900 mb-5">Why secure sites choose these gatehouse cabins</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Shield className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Strong security presence</h3>
                  <p className="text-gray-600 text-sm">A dedicated control point helps staff manage access and keep the entrance organised.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Lock className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Weatherproof and practical</h3>
                  <p className="text-gray-600 text-sm">Insulated panels and fitted utilities help protect staff and equipment throughout the year.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Building2 className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Professional first impression</h3>
                  <p className="text-gray-600 text-sm">A well-finished gatehouse makes the arrival experience feel orderly, secure and welcoming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Questions about security gatehouses</h2>
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
                <h2 className="text-2xl font-bold mb-2">Need a site entry cabin?</h2>
                <p className="text-slate-200">
                  Tell us about your site, access requirements and preferred size and we will help you choose the right gatehouse.
                </p>
              </div>
              <Link
                href="/ContactUs?interest=security-gatehouse"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a security gatehouse?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              A security gatehouse is a dedicated cabin used to manage access to a site, welcome visitors and support security teams at entry points. It gives staff a clear, protected base for checking vehicles, recording arrivals and maintaining a professional presence from the moment someone enters the premises.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              For many sites, a gatehouse is more than a booth. It becomes the first point of contact for deliveries, contractors, guests and employees, helping to keep the site secure, organised and easy to manage throughout the day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why a modular gatehouse makes sense</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              Modular gatehouse cabins are quick to install, strong in build quality and designed for year-round use. They can be placed at the entrance of a construction site, warehouse, industrial unit, school campus or private facility without the delay or cost of a traditional building.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              They also offer a practical working environment for security staff, with insulation, lighting, power and lockable access helping your team stay comfortable and prepared even during long shifts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who benefits from a gatehouse cabin?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              These cabins are widely used by construction companies, facilities managers, commercial sites, schools, public buildings and private estates. They are ideal where there is a need for secure entry management, visible on-site presence and a professional control point without the commitment of a permanent structure.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              The result is a simple, durable and attractive solution that supports both security goals and day-to-day operations from the very first arrival.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm leading-7">
          Our security gatehouse cabins are supplied as new, insulated, and ready for connection, giving sites across the UK a dependable control point for access, protection and visitor management.
        </p>
      </div>
    </div>
  )
}
