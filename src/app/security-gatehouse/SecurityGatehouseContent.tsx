"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, CheckCircle, Shield, Lock, Building2, ArrowRight, Phone, Zap, Clock, MapPin } from "lucide-react"

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

const specRows = [
  { label: "Wall construction", value: "20mm steel sheets with 40mm polyurethane core insulation" },
  { label: "Frame", value: "Galvanised steel columns finished in RAL 7039 anthracite" },
  { label: "Electrics", value: "LED lighting, double socket, internal fuse box, external site socket" },
  { label: "Door & windows", value: "Lockable PVC door, inward-opening windows" },
  { label: "Transport", value: "Suitable for forklift transport, delivered fully assembled" },
  { label: "Condition", value: "Brand new, EU manufactured, in stock for immediate dispatch" },
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
  {
    q: "How much does a security gatehouse cost?",
    a: "Our gatehouse range is priced at £1,799 for the 110x130cm unit, £1,949 for the 110x150cm and £1,999 for the 150x210cm, all excluding VAT and shipping. Every unit is brand new, insulated and pre-wired, with no extra fit-out costs.",
  },
  {
    q: "Can I view a gatehouse before I buy?",
    a: "Yes — viewings at our Leicester warehouse (LE1 3BW) are welcome by arrangement. Call or message us to book a time and look inside the units before you decide.",
  },
]

export default function SecurityGatehouseContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 pt-4 sm:pt-4">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-3 py-0.5 text-xs text-slate-500 sm:px-6 sm:py-1.5 sm:text-sm lg:px-8">
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
        <div className="relative mx-auto max-w-6xl px-3 py-3 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-400 sm:mb-4 sm:text-xs">
            Secure entry solutions
          </p>
          <h1 className="max-w-3xl text-xl font-bold leading-tight sm:text-5xl">
            Modular Security Gatehouses for Sale in the UK
          </h1>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-blue-100 sm:mt-5 sm:text-lg">
            Buy a dependable gatehouse cabin for secure site entry, visitor management and
            barrier control — insulated, weatherproof construction, in stock and delivered fast.
          </p>
          <div className="mt-2.5 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <Link
              href="/ContactUs?interest=security-gatehouse"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2.5 text-sm font-bold text-blue-950 transition-colors hover:bg-amber-300 sm:px-6 sm:py-3"
            >
              Request a Gatehouse Quote
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <a
              href="#range"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 sm:px-6 sm:py-3"
            >
              View the Range
            </a>
          </div>

          <div className="mt-2.5 grid grid-cols-2 divide-x divide-white/10 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm sm:mt-10 sm:grid-cols-4">
            {[
              { k: "From", v: "£1,799" },
              { k: "Access", v: "Lockable" },
              { k: "Transport", v: "Forklift-ready" },
              { k: "Stock", v: "Fast dispatch" },
            ].map((s, i) => (
              <div key={i} className="px-3 py-3 text-center sm:px-4 sm:py-4">
                <div className="text-[10px] uppercase tracking-wider text-blue-300 sm:text-[11px]">{s.k}</div>
                <div className="mt-1 text-sm font-bold text-white sm:text-base sm:text-lg">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- RANGE ---------------- */}
        <section id="range" className="py-4 sm:py-12">
          <div className="mb-3 flex items-end justify-between sm:mb-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">Our security gatehouse range</h2>
            <Link
              href="/kiosks"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              All units <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-6">
            {cabins.map((cabin) => (
              <div
                key={cabin.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-md transition-all"
              >
                <Link
                  href={`/products/${cabin.id}`}
                  className="relative block h-56 overflow-hidden bg-white sm:h-72 lg:h-80"
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
                <div className="flex flex-grow flex-col p-4 sm:p-5">
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
            All prices exclude VAT and shipping. Nationwide UK delivery quoted by postcode —
            free collection from our Leicester warehouse (LE1 3BW).
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

        {/* ---------------- SPEC TABLE (new) ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Security gatehouse specification
          </h2>
          <p className="text-slate-700 leading-7 mb-6 max-w-3xl">
            Every gatehouse in our range shares the same core build quality. Here's what you get
            as standard, before you add any options:
          </p>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {specRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[240px_1fr] px-5 py-3 gap-1 sm:gap-4"
                >
                  <dt className="text-xs font-mono uppercase tracking-wide text-slate-500 sm:pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-slate-800">{row.value}</dd>
                </div>
              ))}
            </dl>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              In stock vs made to order — why that matters for a gatehouse
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Most gatehouse suppliers quote a bespoke build: your size, your layout, built to
              order — which usually means several weeks before it's anywhere near your site. Our
              range works differently. Every gatehouse cabin is standard-built and already in
              stock at our Leicester warehouse, so there's no factory queue between placing an
              order and having something to install.
            </p>
            <p className="text-slate-700 leading-7">
              For most sites, a bespoke build isn't actually needed — a security cabin's job is
              largely the same wherever it sits: shelter, power, lockable access and a clear line
              of sight. Choosing from a range of ready sizes gets you a working gatehouse in days
              rather than weeks, and you can see the exact unit before you commit rather than
              trusting a drawing.
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

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Delivery and installation
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              We deliver gatehouse cabins throughout the UK, with delivery cost quoted by
              postcode. Each unit travels fully assembled and is offloaded into position on
              arrival — all you need is a firm, level surface and access for the delivery
              vehicle.
            </p>
            <p className="text-slate-700 leading-7">
              Because every cabin is pre-wired with an internal fuse box and external site
              socket, connecting it is a simple job for your electrician. Prefer to see a unit
              first? Viewing and free collection are available from our Leicester warehouse.
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
                  you choose the right gatehouse cabin for your site.
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