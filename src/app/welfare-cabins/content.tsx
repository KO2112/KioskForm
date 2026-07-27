"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Droplets,
  Zap,
  Accessibility,
  ArrowRight,
  Phone,
  HardHat,
  Coffee,
  Tent,
  Wheat,
  Trophy,
  Scale,
} from "lucide-react"

const units = [
  {
    id: "Portable-Double-Toilet-Block",
    title: "Portable Double Toilet Block",
    tag: "Two cubicles, general site use",
    price: "£2,699.99",
    priceNote: "ex VAT & shipping",
    dimensions: "160 × 210 × 256 cm",
    image: "/DoubleToilet.png",
    alt: "Portable double toilet block welfare unit — two cubicles, ready to connect",
    description:
      "Two separate WC cubicles with ceramic flushing toilets, wash basins and full ready-to-connect plumbing and electrics — our most popular welfare unit for site crews and events.",
    features: [
      "Two ceramic flushing toilets and wash basins",
      "Pre-wired and pre-plumbed for mains water, waste and power",
      "Sensor-controlled LED lighting and ventilation",
      "Fully insulated, heavy-duty steel-framed construction",
    ],
  },
  {
    id: "Disabled-Portable-Toilet-Block",
    title: "Disabled Portable Toilet Block",
    tag: "Wheelchair-accessible cubicle",
    price: "£2,999",
    priceNote: "ex VAT & shipping",
    dimensions: "170 × 170 × 256 cm",
    image: "/DisabledToiletKiosk1.jpg",
    alt: "Disabled portable toilet block — wheelchair accessible welfare unit with ramp and grab rails",
    description:
      "A single wheelchair-accessible cubicle with ramp and grab rails, so sites can offer standard and accessible welfare facilities together.",
    features: [
      "Wheelchair access ramp and grab rails",
      "Ceramic flushing toilet and integrated wash basin",
      "Pre-wired and pre-plumbed for mains water, sewer and power",
      "Sensor-controlled LED lighting and ventilation",
    ],
  },
]

const useCases = [
  {
    icon: HardHat,
    title: "Construction sites",
    text: "The most common use — UK sites must provide welfare facilities by law, and a pre-plumbed unit is the fastest way to have that in place before work starts.",
  },
  {
    icon: Coffee,
    title: "Cafés & food trucks",
    text: "Mobile catering and outdoor cafés often trade with no nearby plumbing. A unit alongside gives staff and customers proper facilities on the spot.",
  },
  {
    icon: Tent,
    title: "Outdoor events & festivals",
    text: "Self-contained units group together easily at festivals or show grounds with no permanent plumbing needed nearby.",
  },
  {
    icon: Wheat,
    title: "Farms & rural sites",
    text: "Insulated build stays usable through a full British winter — no need to run mains plumbing out to a field or outbuilding.",
  },
  {
    icon: Trophy,
    title: "Sports clubs & community events",
    text: "Extra capacity for match days, tournaments or temporary clubhouses while permanent facilities are rebuilt or upgraded.",
  },
]

const faqs = [
  {
    q: "Do construction sites legally need welfare units?",
    a: "Yes. UK health and safety law requires sites to provide proper welfare facilities, including toilets and washing points for everyone on site. Our welfare units help you meet that requirement from day one, not just once the site is established.",
  },
  {
    q: "What's the difference between a welfare unit and a portable toilet?",
    a: "A standard portable toilet (portaloo) is a single cubicle with a chemical tank and no running water. A welfare unit connects to mains water and waste, flushes like a normal toilet, and includes a wash basin — insulated and built to stay usable through winter.",
  },
  {
    q: "What's the difference between the double and disabled welfare unit?",
    a: "The double unit has two separate cubicles for general use. The disabled unit is a single wheelchair-accessible cubicle with a ramp and grab rails, sized to meet accessibility needs.",
  },
  {
    q: "Are the welfare units ready to connect on delivery?",
    a: "Yes. Both units are pre-wired and pre-plumbed for mains water, waste and electricity, with sensor-controlled LED lighting. A plumber and electrician can connect it the same day it arrives.",
  },
  {
    q: "Are these welfare units brand new or used?",
    a: "Brand new. Every welfare unit we sell is new stock, not secondhand or refurbished, so you know exactly what condition it's in and get the full working life of the unit from day one.",
  },
  {
    q: "How much does a portable toilet block cost?",
    a: "Our range starts at £2,699.99 for the double welfare unit and £2,999 for the accessible unit, excluding VAT and shipping. Both are brand new, fully insulated and supplied ready to connect, with no extra fit-out costs.",
  },
  {
    q: "What are the delivery and pickup options?",
    a: "Nationwide delivery is available, with cost quoted by postcode. Free in-person pick-up is available from our warehouse at LE1 3BW, Leicester.",
  },
]

export default function WelfareCabinsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-slate-50 min-h-screen pt-16 sm:pt-6">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>{" "}
          <span className="mx-1">/</span>{" "}
          <span className="text-slate-700">Welfare Units</span>
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
            Site welfare, ready to connect
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Welfare Units &amp; Portable Toilet Blocks for Sale
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Insulated, pre-plumbed welfare units for construction sites, events and farms — a real
            flushing toilet and wash basin, not a chemical portaloo, delivered ready to connect.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=welfare-unit"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Get a Welfare Unit Quote
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
              { k: "From", v: "£2,699.99" },
              { k: "Plumbing", v: "Pre-connected" },
              { k: "Access", v: "Standard & wheelchair" },
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
        {/* ---------------- RANGE (bigger cards, 2-up) ---------------- */}
        <section id="range" className="py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Our welfare unit range</h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-blue-600 hover:shadow-md transition-all"
              >
                <Link
                  href={`/products/${unit.id}`}
                  className="block h-80 lg:h-96 relative bg-white overflow-hidden"
                >
                  <img
                    src={unit.image}
                    alt={unit.alt}
                    className="h-full w-full object-contain p-4"
                  />
                  <span className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-mono px-2 py-1 rounded">
                    {unit.dimensions}
                  </span>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">
                      {unit.tag}
                    </span>
                    <div className="text-right">
                      <span className="block text-xl font-bold text-blue-900 leading-none">
                        {unit.price}
                      </span>
                      <span className="text-[11px] text-slate-500">{unit.priceNote}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{unit.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{unit.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {unit.features.map((f, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${unit.id}`}
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
              A real flushing toilet, not a chemical portaloo
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              A welfare unit is a self-contained cabin that gives people on site somewhere clean
              and private to use the toilet and wash their hands. Some call it a welfare cabin,
              others a portable toilet block — the job is the same either way: proper hygiene
              facilities, ready to use, with no building work needed.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              A basic portaloo is a single cubicle with a chemical tank and no running water. Our
              welfare units are insulated, wired for lighting and power, and plumbed in before
              delivery — with a ceramic flushing toilet and a wash basin, not a chemical tank. That
              makes them feel much closer to a normal bathroom.
            </p>
            <p className="text-slate-700 leading-7">
              Every unit is fully assembled off-site and arrives as one piece. There's no waiting
              on tradespeople to build anything — you position it, connect the power and water,
              and it's ready the same day.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Every unit includes</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Ceramic flushing toilet and wash basin",
                "Pre-wired and pre-plumbed for mains water, waste and power",
                "Sensor-controlled LED lighting and ventilation",
                "Fully insulated, heavy-duty steel frame",
                "Brand new — never previously used",
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

        {/* ---------------- WELFARE UNIT VS PORTABLE TOILET ---------------- */}
        <section className="pb-14">
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Welfare unit vs portable toilet: what's the difference?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-wide mb-2">
                  <Droplets className="h-4 w-4" /> Standard portaloo
                </div>
                <p className="text-slate-700 text-sm leading-6">
                  A single cubicle with a chemical tank and no running water. Cheap and quick to
                  place, but needs regular emptying by a service contractor and doesn't meet every
                  site's welfare standard on its own.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs uppercase tracking-wide mb-2">
                  <Zap className="h-4 w-4" /> Our welfare unit
                </div>
                <p className="text-slate-700 text-sm leading-6">
                  Connects to mains water and waste, flushes like a normal toilet, and includes a
                  wash basin with soap. Insulated to stay usable in winter, with sensor-controlled
                  lighting — built to meet a genuine welfare standard, not just provide a toilet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- WHERE USED ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Where are welfare units used?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u, i) => {
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
              Do you need a welfare unit by law?
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              If you run a construction site in the UK, yes. Health and safety law requires sites
              to provide proper welfare facilities, including toilets and washing points for
              everyone working there. This isn't optional, and it applies from day one — not just
              once the site is established.
            </p>
            <p className="text-slate-700 leading-7">
              Outside construction, a welfare unit isn't always a legal requirement, but it's often
              the practical choice anywhere people work or gather without a permanent bathroom
              nearby. If you're not sure what your site needs, your principal contractor or local
              authority can confirm the exact requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Choosing the right welfare unit
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Our double welfare unit has two separate cubicles, suited to general site use where
              a few people may need the facilities at once — the more common choice for
              construction crews and event welfare.
            </p>
            <p className="text-slate-700 leading-7">
              Our accessible welfare unit is a single wheelchair-accessible cubicle with a ramp and
              grab rails. Sites often order it alongside a double unit, so standard and accessible
              facilities are covered together. Neither quite fit your site? Get in touch and we'll
              talk through extra cubicles or reinforced accessibility features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              How much does a welfare unit cost?
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Prices vary by size and spec. Our range starts at £2,699.99 for the double welfare
              unit and £2,999 for the accessible unit, both brand new, fully insulated and supplied
              ready to connect — with no extra fit-out costs once the unit arrives.
            </p>
            <p className="text-slate-700 leading-7">
              When comparing prices, check what's actually included. A cheaper shell that still
              needs plumbing, wiring or a wash basin fitted often costs more by the time it's
              usable. Ours arrive ready to plumb in and switch on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Why buy your welfare unit outright
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Owning your welfare unit means one fixed cost and nothing more to think about
              afterwards — no recurring charges, no return conditions, no depending on someone
              else's schedule when your site needs it in place.
            </p>
            <p className="text-slate-700 leading-7">
              A unit you own can move between sites whenever your project changes, be stored
              between jobs, or sold on later — it's an asset on your books, not an ongoing cost.
              That makes it a straightforward choice for any site expecting to need welfare
              facilities for more than a few months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Installation, delivery and connection
            </h2>
            <p className="text-slate-700 leading-7 mb-3">
              Every welfare unit arrives ready for use with little site prep needed. Each one is
              pre-wired and pre-plumbed for mains water, waste and electricity, so connection is a
              straightforward job for your plumber and electrician on delivery day.
            </p>
            <p className="text-slate-700 leading-7">
              We deliver nationwide, with cost quoted by postcode, or you can collect free from our
              warehouse in Leicester. Once connected, the sensor-controlled lighting and
              ventilation keep day-to-day upkeep down to routine cleaning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              How long does a welfare unit last?
            </h2>
            <p className="text-slate-700 leading-7">
              A well-maintained welfare unit lasts for years, not months. The steel frame resists
              rust and the insulated panels don't rot or warp like timber can, so there's no
              repainting each season. Day-to-day upkeep is simple: clean the cubicles as you would
              any bathroom, and check the plumbing and electrics alongside the rest of your site
              equipment.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Welfare unit FAQs
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
                  Need a welfare unit on site?
                </h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us your site size and headcount and we'll help you choose the right unit,
                  standard or accessible.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=welfare-unit"
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
            CabinUnits supplies new welfare units and portable toilet blocks across the UK —
            insulated, pre-plumbed and delivered ready to connect, in standard and
            wheelchair-accessible layouts. Also see our{" "}
            <Link href="/construction-site-security-cabins" className="text-blue-700 font-medium hover:underline">
              construction site cabins
            </Link>
            ,{" "}
            <Link href="/festival-ticket-booths" className="text-blue-700 font-medium hover:underline">
              festival ticket booths
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