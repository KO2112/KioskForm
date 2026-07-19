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
  ArrowRight,
  Phone,
} from "lucide-react"

const cabins = [
  {
    id: "Portable-Kiosk-110x130",
    title: "110x130cm Compact Gatehouse",
    tag: "Best for tight site entrances",
    price: "£1,799",
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 130 cm",
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
    priceNote: "ex VAT & shipping",
    dimensions: "110 × 150 cm",
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
    priceNote: "ex VAT & shipping",
    dimensions: "150 × 210 cm",
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
          <span className="mx-1">/</span> <span className="text-slate-700">Construction Site Security Cabins</span>
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
            Built for construction sites
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            Construction Site Security Cabins &amp; Gatehouses
          </h1>
          <p className="mt-5 text-blue-100 max-w-2xl text-lg leading-relaxed">
            Insulated, fully wired cabins for site entrances, gatehouses and sign-in points — built
            for live construction conditions and ready to connect on arrival.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ContactUs?interest=construction-security-cabin"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-6 py-3 rounded-md font-bold hover:bg-amber-300 transition-colors"
            >
              Get a Quote for Your Site
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
              { k: "Power", v: "32A site socket" },
              { k: "Security", v: "Reinforced options" },
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
            <h2 className="text-2xl font-bold text-slate-900">Our site cabin range</h2>
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
              Site-ready cabins for entrances, offices and welfare points
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              Our construction site security cabins are made for busy projects where speed,
              durability and straightforward delivery matter. They are supplied insulated, fully
              wired and ready to connect as soon as they arrive on site.
            </p>
            <p className="text-slate-700 leading-7">
              From temporary gatehouses and sign-in points to full site office setups, our cabins
              help contractors keep access controlled without slowing down day-to-day operations.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 bg-white rounded-r-lg shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Popular applications</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Main entrance gatehouses
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Visitor sign-in and security points
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                Site offices and temporary welfare setups
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- WHY CHOOSE ---------------- */}
        <section className="pb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Built for working sites, not showrooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Reinforced options",
                text: "Extra security features available for exposed or higher-risk locations.",
              },
              {
                icon: Zap,
                title: "Site-ready power",
                text: "32A external site socket and internal fuse box wired in before it leaves the factory.",
              },
              {
                icon: Truck,
                title: "Forklift-ready",
                text: "Built-in forklift pockets so your team can reposition it as the site evolves.",
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What is a construction site security cabin?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              A construction site security cabin is a robust, weatherproof building used for
              gatehouses, site offices and access control points. It gives your team a secure
              place to manage entry, visitors and site operations from day one. These cabins are
              built for real working conditions, with strong materials and practical features
              that support daily site activity.
            </p>
            <p className="text-slate-700 leading-7">
              They are often placed at the main entrance or a key access point so staff can
              monitor movement, check credentials and manage deliveries without leaving the site
              exposed. A secure cabin helps create a clear, organised setup from the moment the
              project begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why do construction sites need security cabins?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              Construction sites need clear control at the entrance and a safe place for staff to
              work. A security cabin helps protect materials, manage access and create a
              professional first impression for visitors, contractors and delivery drivers. It
              also gives your team a reliable base for monitoring the site and keeping operations
              running smoothly.
            </p>
            <p className="text-slate-700 leading-7">
              During busy phases of a build, organisation matters. A cabin provides a dedicated
              point for site checks, sign-in procedures and communication between staff and
              visitors. That makes it easier to maintain safety, reduce downtime and keep the site
              running efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Who uses site security cabins?</h2>
            <p className="text-slate-700 leading-7 mb-3">
              These cabins are commonly used by main contractors, developers, facilities teams and
              site managers. They are ideal for temporary offices, welfare support, entry points
              and secure monitoring areas where a permanent building is not practical. They are
              especially useful on projects that need fast deployment and dependable
              functionality.
            </p>
            <p className="text-slate-700 leading-7">
              From large infrastructure jobs to smaller commercial builds, a site security cabin
              offers a flexible solution that can be moved, reused or adapted as the project
              changes. It is a practical option for teams that need safety, durability and a
              professional presence on site.
            </p>
          </section>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <section className="pb-14">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common questions from site managers</h2>
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
                <h2 className="text-2xl font-bold mb-2">Fitting out a site?</h2>
                <p className="text-blue-100 max-w-xl">
                  Tell us your entrance, welfare or gatehouse requirements and we'll recommend the
                  right setup.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/ContactUs?interest=construction-security-cabin"
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
            Our construction site security cabins are supplied brand new, fully insulated and
            wired ready to connect, with secure access and power fitted as standard. Used across
            the UK as gatehouses, sign-in points and site offices, and available alongside our
            portable toilet blocks for full welfare compliance on site.
          </p>
        </div>
      </div>
    </div>
  )
}