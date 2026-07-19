"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  CloudRain,
  Ticket,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react"

const booths = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Ticket Booth",
    tag: "Best for compact entry points",
    price: "£1,799",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 130 cm",
    image: "/110x130Kiosk.jpg",
    description:
      "A compact, heated booth for single-gate ticketing, staff check-in or a tight entry position.",
    features: [
      "Portable heater fitted as standard",
      "40mm insulated steel panels",
      "Internal fuse box and external site socket",
      "Reception desk and utility shelf built in",
    ],
  },
  {
    id: "Portable-Kiosk-110x150",
    title: "110x150cm Ticket Booth",
    tag: "Best for a small queue or booth desk",
    price: "£1,949",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 150 cm",
    image: "/110x150.jpg",
    description:
      "A slightly larger booth for ticketing, info points or gate operations where staff need a bit more workspace.",
    features: [
      "Strong galvanised steel frame",
      "Two 60×100cm inward-opening windows",
      "Internal LED lighting and double socket",
      "Durable PVC flooring",
    ],
  },
  {
    id: "Portable-Kiosk-150x210",
    title: "150x210cm Ticket Booth",
    tag: "Best for main box office / entry gates",
    price: "£1,999",
    priceNote: "ex VAT & shipping",
    dimensions: "150 × 210 cm",
    image: "/150x210%20Kiosk.jpg",
    description:
      "A spacious booth with room for ticket sales, staff seating and equipment at larger events or main entrances.",
    features: [
      "Two 100×100cm inward-opening windows",
      "Internal reception desk",
      "Internal LED lighting and double socket",
      "Lockable outward-opening PVC door",
    ],
  },
]

const faqs = [
  {
    q: "Are the booths weatherproof for multi-day outdoor events?",
    a: "Yes. Every booth uses insulated steel sandwich panels and a galvanised steel frame, built to stay comfortable and secure across multi-day events regardless of weather.",
  },
  {
    q: "How fast can I get a ticket booth before my event?",
    a: "Standard units are typically available for fast dispatch. Get in touch with your event date as early as possible, especially if you want multiple units or custom branding.",
  },
  {
    q: "Can I order multiple booths for different entry points?",
    a: "Yes, many event organisers order several booths at once to cover multiple gates or box office points. Contact us with your numbers and we'll put together a combined quote.",
  },
  {
    q: "Is there room for a card machine, ticket printer, or till?",
    a: "Yes, each booth has a built-in reception desk and internal plug sockets, giving you space and power for card machines, printers, or a cash till.",
  },
  {
    q: "Can we brand the booth with our festival's colours or logo?",
    a: "Yes, our units can be customised with branding to match your event identity. Let us know your requirements when you request a quote.",
  },
  {
    q: "Do you supply portable toilets for festivals too?",
    a: "Yes, our portable toilet blocks are commonly ordered alongside ticket booths for festivals and outdoor events needing welfare facilities.",
  },
]

export default function FestivalTicketContent() {
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
          <span className="mx-1">/</span> <span className="text-slate-700">Festival Ticket Booths</span>
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
            Built for festivals & outdoor events
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Festival Ticket Booths &amp; Box Office Cabins
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Weatherproof, fully wired booths for box offices and entry gates — professional enough
            for your audience and built to withstand a busy event weekend.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=festival-ticket-booth"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Get a Quote for Your Event
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
              { k: "Weather", v: "All-weather build" },
              { k: "Power", v: "Pre-wired" },
              { k: "Branding", v: "Custom available" },
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
            <h2 className="text-2xl font-bold text-slate-900">Our ticket booth range</h2>
            <Link
              href="/kiosks"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              All units <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {booths.map((booth) => (
              <div
                key={booth.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-md transition-all"
              >
                <Link
                  href={`/products/${booth.id}`}
                  className="block h-72 lg:h-80 relative bg-white overflow-hidden"
                >
                  <img
                    src={booth.image}
                    alt={booth.title}
                    className="h-full w-full object-contain p-2"
                  />
                  <span className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-mono px-2 py-1 rounded">
                    {booth.dimensions}
                  </span>
                </Link>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                      {booth.tag}
                    </span>
                    <div className="text-right">
                      <span className="block text-lg font-bold text-blue-900 leading-none">
                        {booth.price}
                      </span>
                      <span className="text-[11px] text-slate-500">{booth.priceNote}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{booth.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{booth.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {booth.features.map((f, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${booth.id}`}
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
              Box office cabins that look professional and work hard
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              Our festival ticket booths are designed for event organisers who need a strong,
              professional first impression at the gate while still keeping operations efficient
              behind the scenes.
            </p>
            <p className="text-slate-700 leading-7">
              From single entry points to multi-day events with several check-in areas, we supply
              insulated booths that are ready to wire, brand and use on short lead times.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Common event setups</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Main box office and entry gates
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Secondary ticketing or info points
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                VIP, accreditation or staff access booths
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Made for a field, not just a storefront</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: CloudRain,
                title: "All-weather build",
                text: "Insulated steel panels keep staff and equipment protected across a full weekend.",
              },
              {
                icon: Ticket,
                title: "Ready for ticketing",
                text: "Built-in desks and sockets for card readers, printers and tills from day one.",
              },
              {
                icon: Zap,
                title: "Multiple units, one quote",
                text: "Covering several gates or box office points? We'll quote the full set together.",
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What is a festival ticket booth?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              A festival ticket booth is a weatherproof cabin used for ticket sales, access control
              and guest check-in at events. It gives staff a professional space to work while
              keeping queues organised and customers moving quickly. These booths are built to
              handle busy entrances, changing weather and the fast pace of live events.
            </p>
            <p className="text-slate-700 leading-7">
              They are often placed at the main gate, a secondary entry point or a VIP access lane
              where a clear and secure setup is essential. A ticket booth helps create a polished
              first impression while making event operations easier to manage throughout the day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why do festivals need ticket booths?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              Festivals need fast, reliable entry points and a clear place for ticketing staff to
              operate. A ticket booth helps improve guest flow, protects equipment and creates a
              strong first impression for attendees arriving at the gate. It also gives staff a
              comfortable and practical workspace when the site is busy or the weather turns.
            </p>
            <p className="text-slate-700 leading-7">
              Good entry management matters for safety and customer experience. A booth helps
              teams welcome guests, check credentials, manage queues and keep the process smooth
              from the first arrival to the final entry. That makes the event feel more organised
              and professional from the start.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Who uses festival ticket booths?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              These booths are used by event organisers, festival teams, venue operators and
              temporary site managers. They are ideal for box offices, VIP entry points, staff
              access gates and general event check-in areas. They are also useful for multi-day
              events where a dependable point of service is needed across several entrances.
            </p>
            <p className="text-slate-700 leading-7">
              Whether you are running a small community event or a large-scale festival, a ticket
              booth can support a smoother guest experience. It is a practical solution for teams
              that want a secure, branded and easy-to-use setup without the complexity of a
              permanent building.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common questions from event organisers</h2>
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
                <h2 className="text-2xl font-bold mb-2">Planning an event?</h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us how many gates or box office points you need to cover and we'll put
                  together a quote.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=festival-ticket-booth"
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
            Our festival ticket booths and box office cabins are supplied brand new, fully
            insulated and wired ready to use, with custom branding available. Used across the UK
            for festivals, outdoor events and box office points, and available alongside our
            portable toilet blocks for event welfare facilities.
          </p>
        </div>
      </div>
    </div>
  )
}