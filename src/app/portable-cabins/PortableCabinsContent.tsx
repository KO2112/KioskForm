"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Zap,
  ShieldCheck,
  Ruler,
  PoundSterling,
  ArrowRight,
  Phone,
} from "lucide-react"

const cabins = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Portable Cabin",
    tag: "Compact kiosk unit",
    price: "£1,799",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 130 × 256 cm",
    image: "/110x130Kiosk.jpg",
    alt: "110x130cm portable cabin for sale UK — compact insulated kiosk booth with heater",
    description:
      "Our smallest portable cabin — fully insulated and pre-wired, with a portable heater, reception desk and utility shelf fitted as standard. Ideal as a gatehouse, ticket point or single-person workspace.",
    features: [
      "Portable heater fitted as standard",
      "40mm polyurethane insulated panels",
      "LED lighting, fuse box and site socket",
      "Internal reception desk and utility shelf",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Portable Cabin",
    tag: "Extra working depth",
    price: "£1,949",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 150 × 256 cm",
    image: "/110x150.jpg",
    alt: "110x150cm portable cabin for sale — insulated security booth with LED lighting and sockets",
    description:
      "A deeper footprint that gives staff room for a desk, monitor and paperwork — a practical portable cabin for security, parking and site access roles.",
    features: [
      "Galvanised steel frame construction",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable 3mm PVC flooring throughout",
    ],
  },
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Portable Cabin",
    tag: "Room for two staff",
    price: "£1,999",
    priceNote: "ex VAT & shipping",
    dimensions: "150 × 210 × 256 cm",
    image: "/150x210kiosk1.jpg",
    alt: "150x210cm portable cabin for sale UK — insulated modular gatehouse with room for two staff",
    description:
      "Our largest compact cabin, with space for two workstations or a small site office setup. Two 100×100cm windows, a 32A external site socket and a portable heater included.",
    features: [
      "Space for two workstations",
      "Two 100×100cm inward-opening windows",
      "External 32A site socket and fuse box",
      "Mineral wool insulated base, approx. 495kg",
    ],
  },
]

const specRows = [
  { label: "Wall construction", value: "20mm steel sheets with 40mm polyurethane core insulation" },
  { label: "Frame", value: "Galvanised steel columns finished in RAL 7039 anthracite" },
  { label: "Base", value: "Fibre cement board reinforced with galvanised steel frame" },
  { label: "Electrics", value: "LED lighting, double socket, internal fuse box, external site socket" },
  { label: "Heating", value: "Portable heater included (110x130 and 150x210 models)" },
  { label: "Flooring", value: "Durable 3mm PVC floor finish" },
  { label: "Door & windows", value: "Lockable PVC door, inward-opening windows" },
  { label: "Transport", value: "Suitable for forklift transport, delivered fully assembled" },
  { label: "Condition", value: "Brand new, EU manufactured, in stock for immediate dispatch" },
]

const faqs = [
  {
    q: "Do you need planning permission for a portable cabin?",
    a: "In many cases, no. Portable cabins are usually classed as temporary structures, so short-term use on private land — such as a construction site, yard or car park — often doesn't require planning permission. If the cabin will stay in place long term, sit in a conservation area, or be used as living accommodation, you should check with your local planning authority first. We always recommend a quick call to your council before ordering if you're unsure.",
  },
  {
    q: "How much is a portable cabin?",
    a: "Our portable cabins are priced at £1,799 for the 110x130cm unit, £1,949 for the 110x150cm and £1,999 for the 150x210cm, all excluding VAT and shipping. Every unit is brand new, insulated and pre-wired, so there are no hidden fit-out costs after delivery.",
  },
  {
    q: "Are portable cabins insulated?",
    a: "Yes. Every cabin we sell is built from steel double-skin sandwich panels with a 40mm polyurethane core in the walls, plus an insulated base. Combined with the portable heater supplied on the 110x130cm and 150x210cm models, staff stay comfortable through winter shifts.",
  },
  {
    q: "Does a portable cabin need foundations?",
    a: "No concrete foundations are needed for our compact cabins. They sit on any firm, level surface — tarmac, paving or compacted hardcore. Each unit is suitable for forklift transport, which also makes it simple to lift and reposition the cabin later.",
  },
  {
    q: "Do portable cabins come with electrics?",
    a: "Yes. Each cabin arrives pre-wired with an internal fuse box, a double plug socket and LED lighting, plus an external site socket (32A on the 150x210cm model). Your electrician simply connects the unit to a power supply on site and it's ready to use.",
  },
  {
    q: "How long does a portable cabin last?",
    a: "With a galvanised steel frame and steel panel exterior, a well-sited portable cabin will typically last 15–20 years or more. There's no timber in the main structure to rot, and the PVC door and window frames won't need repainting.",
  },
  {
    q: "Can a portable cabin be moved after installation?",
    a: "Yes — that's the point of a portable cabin. Every unit is designed for forklift transport, so it can be lifted, loaded and repositioned whenever your site layout changes, or moved to a completely new site.",
  },
  {
    q: "Should I buy or hire a portable cabin?",
    a: "If you need a cabin for more than around 12 months, buying almost always works out cheaper than hire. Hire suits very short projects, but weekly rates add up quickly, and at the end you own nothing. Buying a new cabin outright means one fixed cost, no return conditions, and an asset you can resell or redeploy later.",
  },
]

export default function PortableCabinsContent() {
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
          <span className="text-slate-700">Portable Cabins</span>
        </div>
      </div>

      {/* ---------------- HERO ---------------- */}
      <div className="relative bg-blue-950 text-white overflow-hidden">
        {/* subtle engineering-grid background */}
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
            New · Insulated · Delivered ready to connect
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Compact Portable Cabins for Sale in the UK
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Small, insulated portable cabins with pre-wired electrics and
            heating — sized for gatehouses, kiosks, pay points and one- or
            two-person site offices where a full-size cabin is overkill. In
            stock in Leicester, delivered anywhere in the UK.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=portable-cabin"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Get a Portable Cabin Quote
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <a
              href="#range"
              className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View the Range
            </a>
          </div>

          {/* spec strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 border border-white/15 rounded-lg bg-white/5 backdrop-blur-sm">
            {[
              { k: "From", v: "£1,799" },
              { k: "Insulation", v: "40mm panels" },
              { k: "Electrics", v: "Pre-wired" },
              { k: "Stock", v: "Fast dispatch" },
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
        {/* ---------------- RANGE (directly under hero) ---------------- */}
        <section id="range" className="py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Our portable cabin range
            </h2>
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
                    alt={cabin.alt}
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
            All prices exclude VAT and shipping. Nationwide UK delivery quoted by
            postcode — free collection from our Leicester warehouse (LE1 3BW).
          </p>
        </section>

        {/* ---------------- INTRO ---------------- */}
        <section className="pb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Portable cabins built for real working sites
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              A portable cabin gives you usable, weatherproof space without the
              cost or delay of a permanent building. Every cabin we sell is
              brand new, EU manufactured and built from steel sandwich panels
              with a 40mm polyurethane core, then pre-wired with a fuse box,
              sockets and LED lighting — so once it lands on site, your
              electrician connects the power and your team moves straight in.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              Our portable cabins are used across the UK as site offices,
              security gatehouses, car park kiosks, ticket booths and welfare
              points. Because each unit sits on a reinforced galvanised steel
              base and is designed for forklift transport, it can be lifted and
              repositioned whenever your site changes — or loaded on a truck
              and moved to the next job entirely.
            </p>
            <p className="text-slate-700 leading-7">
              Unlike hired units, a cabin you own has no weekly charges, no
              return conditions and no wear-and-tear penalties. You pay once,
              and the cabin works for you for years.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Every cabin includes</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Insulated walls, roof and floor",
                "Pre-wired electrics and LED lighting",
                "Lockable PVC door and opening windows",
                "Forklift-ready base for relocation",
                "Brand new — never hired out",
                "UK-wide delivery or free Leicester collection",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- SPEC TABLE ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Portable cabin specification
          </h2>
          <p className="text-slate-700 leading-7 mb-6 max-w-3xl">
            Every portable cabin in our range shares the same core build
            quality. Here's what you get as standard, before you add any
            options:
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

        {/* ---------------- USE CASES ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What are portable cabins used for?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Ruler,
                title: "Portable office cabins",
                text: "A quiet, insulated workspace for site managers, yards and depots — desk in, laptop on, working the same day it arrives.",
              },
              {
                icon: ShieldCheck,
                title: "Gatehouses & security",
                text: "A lockable, heated post at your entrance gives security staff visibility and shelter through every shift.",
              },
              {
                icon: PoundSterling,
                title: "Kiosks & pay points",
                text: "Ticketing, parking control and payment handling — compact cabins that fit a single bay or kerbside position.",
              },
              {
                icon: Zap,
                title: "Welfare & break spaces",
                text: "Somewhere warm and dry for staff to take breaks, store kit and stay comfortable on outdoor sites.",
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

        {/* ---------------- LONG-FORM SEO SECTIONS ---------------- */}
        <div className="max-w-3xl space-y-12 pb-14">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              What is a portable cabin?
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              A portable cabin is a self-contained, transportable building
              delivered to site as a finished unit. Unlike a permanent
              structure, it needs no foundations, no groundworks and no lengthy
              build programme — the cabin arrives on a truck, is lifted into
              position, connected to power and put to work.
            </p>
            <p className="text-slate-700 leading-7">
              Modern portable cabins are a long way from the draughty site huts
              of the past. Insulated steel panel walls keep heat in, pre-wired
              electrics mean lighting and sockets work from day one, and
              galvanised steel frames shrug off British weather for decades.
              For many businesses, a portable cabin does the job of a small
              building at a fraction of the cost and none of the wait.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              How much does a portable cabin cost?
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Portable cabin prices depend mainly on size and specification.
              Our range starts at £1,799 for the 110x130cm cabin, £1,949 for
              the 110x150cm and £1,999 for the 150x210cm — all brand new,
              insulated and pre-wired, excluding VAT and shipping, with no
              fit-out costs to add afterwards.
            </p>
            <p className="text-slate-700 leading-7">
              When comparing prices, check what's actually included. A cheap
              shell that still needs insulation, wiring and heating fitted will
              cost more by the time it's usable than a cabin delivered ready to
              connect. Ours arrive complete: you position it, connect the
              power, and it's a working space the same day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Do you need planning permission for a portable cabin?
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Usually not for temporary use. Because portable cabins are
              classed as temporary, moveable structures, placing one on private
              land for a limited period — a construction project, a seasonal
              operation, a car park — often falls outside planning control.
              This is one of the biggest advantages over a permanent building.
            </p>
            <p className="text-slate-700 leading-7">
              There are exceptions. If the cabin will remain in place
              permanently, sit within a conservation area or listed setting, or
              be used as residential accommodation, planning rules may apply.
              The safest route is a short conversation with your local planning
              authority before you order — most will confirm the position in a
              single call, and we're happy to supply dimensions and
              specifications to support any enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Buying vs hiring a portable cabin
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Portable cabin hire makes sense for very short projects, but the
              maths turns quickly. Weekly hire charges, delivery and collection
              fees, and end-of-hire damage costs add up — and after a year of
              payments you own nothing. If your need runs beyond roughly twelve
              months, buying a new cabin outright is almost always the cheaper
              option.
            </p>
            <p className="text-slate-700 leading-7">
              Ownership also means freedom. Move the cabin between sites
              whenever you like, modify it to suit your operation, and resell
              it when you're done — portable cabins hold their value well
              because the demand for good-condition units never goes away.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Delivery and installation across the UK
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              We deliver portable cabins throughout the UK, with delivery cost
              quoted by postcode. Each unit travels fully assembled and is
              offloaded into position on arrival — all you need is a firm,
              level surface and access for the delivery vehicle. Prefer to see
              a cabin first? Viewing and free collection are available from
              our Leicester warehouse.
            </p>
            <p className="text-slate-700 leading-7">
              Because every cabin is pre-wired with an internal fuse box and an
              external site socket, connection is a simple job for your
              electrician. Most customers have their cabin delivered in the
              morning and staffed by the afternoon. Units are in stock and
              available for immediate dispatch — tell us your timescale at
              enquiry stage and we'll confirm delivery for your postcode.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Portable cabin FAQs
            </h2>
            <div className="divide-y divide-slate-100">
              {faqs.map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center w-full text-left"
                    aria-expanded={openFaq === i}
                  >
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base pr-4">
                      {item.q}
                    </h3>
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
                <h2 className="text-2xl font-bold mb-2">
                  Ready to price up your portable cabin?
                </h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us where the cabin's going and what it's for — we'll
                  come back with a fixed price and a delivery date.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=portable-cabin"
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
            CabinUnits supplies new portable cabins for sale across the UK —
            insulated, pre-wired and delivered ready to connect. Our range
            covers portable office cabins, gatehouses, kiosks and compact site
            cabins for parking operators, councils, facilities teams and
            construction sites. Also see our{" "}
            <Link href="/car-park-kiosks" className="text-blue-700 font-medium hover:underline">
              car park kiosks
            </Link>
            ,{" "}
            <Link href="/security-gatehouse" className="text-blue-700 font-medium hover:underline">
              security gatehouses
            </Link>{" "}
            and{" "}
            <Link href="/kiosks" className="text-blue-700 font-medium hover:underline">
              full kiosk range
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}