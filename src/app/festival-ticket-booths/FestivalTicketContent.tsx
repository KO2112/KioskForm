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
  Music,
  Info,
} from "lucide-react"

const heroPoints = [
  { icon: CloudRain, label: "Insulated, weatherproof for multi-day events" },
  { icon: Zap, label: "Built-in reception desk & power" },
  { icon: Ticket, label: "Custom branding available" },
]

const booths = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Ticket Booth",
    tag: "Best for compact entry points",
    price: "£1,799",
    dimensions: "110×130 cm",
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
    dimensions: "110×150 cm",
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
    dimensions: "150×210 cm",
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

const welfareAddOns = [
  {
    id: "Portable-Double-Toilet-Block",
    title: "Portable Double Toilet Block",
    price: "£2,699.99",
    image: "/DoubleToilet.png",
    description: "Two separate WC cubicles, pre-plumbed and pre-wired, ready to connect for event welfare.",
  },
  {
    id: "Disabled-Portable-Toilet-Block",
    title: "Disabled Portable Toilet Block",
    price: "£2,999",
    image: "/DisabledToiletKiosk1.jpg",
    description: "Wheelchair access ramp and grab rails, ready to connect for accessible event welfare.",
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
          <span className="mx-1">/</span> <span className="text-gray-700">Festival Ticket Booths</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-sky-400/20 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
              <Music className="w-3.5 h-3.5" /> Built for festivals & outdoor events
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl leading-tight">
            Festival Ticket Booths &amp; Box Office Cabins
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-lg">
            Weatherproof, fully wired booths for box offices and entry gates — professional enough for your audience and built to withstand a busy event weekend.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=festival-ticket-booth"
              className="inline-flex items-center justify-center bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-400 transition-colors"
            >
              Get a Quote for Your Event
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">Box office cabins that look professional and work hard</h2>
              <p className="text-gray-700 text-sm leading-7 mb-3">
                Our festival ticket booths are designed for event organisers who need a strong, professional first impression at the gate while still keeping operations efficient behind the scenes.
              </p>
              <p className="text-gray-700 text-sm leading-7">
                From single entry points to multi-day events with several check-in areas, we supply insulated booths that are ready to wire, brand and use on short lead times.
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Common event setups</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Main box office and entry gates</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>Secondary ticketing or info points</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5"/>VIP, accreditation or staff access booths</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {booths.map((booth) => (
            <div
              key={booth.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${booth.id}`} className="block h-72 w-full relative bg-slate-100 overflow-hidden">
                <img
                  src={booth.image}
                  alt={booth.title}
                  className="h-full w-full object-contain bg-white p-4"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-slate-900/80 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {booth.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {booth.price}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{booth.title}</h2>
                </div>
              </Link>
              <div className="p-5 flex-grow">
                <span className="inline-block text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-2 py-1 mb-3">
                  {booth.tag}
                </span>
                <p className="text-gray-700 text-sm mb-4">{booth.description}</p>
                <ul className="space-y-2">
                  {booth.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${booth.id}`}
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">Need welfare facilities for your event too?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Our portable toilet blocks are a common add-on for festivals and outdoor events alongside a ticket booth.
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
            <h2 className="text-xl font-bold text-gray-900 mb-5">Made for a field, not just a storefront</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <CloudRain className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">All-weather build</h3>
                  <p className="text-gray-600 text-sm">Insulated steel panels keep staff and equipment protected across a full weekend.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Ticket className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Ready for ticketing</h3>
                  <p className="text-gray-600 text-sm">Built-in desks and sockets for card readers, printers and tills from day one.</p>
                </div>
              </div>
              <div className="flex items-start p-3">
                <div className="bg-sky-100 rounded-full p-2 mr-3">
                  <Zap className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Multiple units, one quote</h3>
                  <p className="text-gray-600 text-sm">Covering several gates or box office points? We'll quote the full set together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Common questions from event organisers</h2>
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
                <h2 className="text-2xl font-bold mb-2">Planning an event?</h2>
                <p className="text-slate-200">
                  Tell us how many gates or box office points you need to cover and we'll put together a quote.
                </p>
              </div>
              <Link
                href="/ContactUs?interest=festival-ticket-booth"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a festival ticket booth?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              A festival ticket booth is a weatherproof cabin used for ticket sales, access control and guest check-in at events. It gives staff a professional space to work while keeping queues organised and customers moving quickly. These booths are built to handle busy entrances, changing weather and the fast pace of live events.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              They are often placed at the main gate, a secondary entry point or a VIP access lane where a clear and secure setup is essential. A ticket booth helps create a polished first impression while making event operations easier to manage throughout the day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why do festivals need ticket booths?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              Festivals need fast, reliable entry points and a clear place for ticketing staff to operate. A ticket booth helps improve guest flow, protects equipment and creates a strong first impression for attendees arriving at the gate. It also gives staff a comfortable and practical workspace when the site is busy or the weather turns.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              Good entry management matters for safety and customer experience. A booth helps teams welcome guests, check credentials, manage queues and keep the process smooth from the first arrival to the final entry. That makes the event feel more organised and professional from the start.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who uses festival ticket booths?</h2>
            <p className="text-gray-700 leading-7 text-sm sm:text-base">
              These booths are used by event organisers, festival teams, venue operators and temporary site managers. They are ideal for box offices, VIP entry points, staff access gates and general event check-in areas. They are also useful for multi-day events where a dependable point of service is needed across several entrances.
            </p>
            <p className="text-gray-700 leading-7 text-sm sm:text-base mt-3">
              Whether you are running a small community event or a large-scale festival, a ticket booth can support a smoother guest experience. It is a practical solution for teams that want a secure, branded and easy-to-use setup without the complexity of a permanent building.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm leading-7">
          Our festival ticket booths and box office cabins are supplied brand new, fully insulated and wired ready to use, with custom branding available. Used across the UK for festivals, outdoor events and box office points, and available alongside our portable toilet blocks for event welfare facilities.
        </p>
      </div>
    </div>
  )
}