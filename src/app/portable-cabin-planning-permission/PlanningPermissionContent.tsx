"use client"

import Link from "next/link"
import { CheckCircle, AlertTriangle, ChevronRight } from "lucide-react"

export default function PlanningPermissionContent() {
  return (
    <div className="bg-slate-50 min-h-screen pt-6">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-slate-700">Planning Permission for Portable Buildings</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Buying Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Do Portable Buildings Need Planning Permission?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The short answer: usually not. Whether you call it a portable
            building, a portable cabin or a portacabin, the rule is the same —
            in most everyday business situations, a temporary structure on
            private land does not need planning permission. There are a
            handful of exceptions worth knowing before you order. Here's how
            it works in plain English.
          </p>
          <div className="flex items-center gap-3 mt-5 text-sm text-slate-500">
            <span>By the Cabin Units team</span>
            <span>·</span>
            <time dateTime="2026-07-21">21 July 2026</time>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Key takeaway box */}
        <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-lg p-5 mb-10">
          <h2 className="font-bold text-slate-900 mb-2 text-base">Key takeaway</h2>
          <p className="text-slate-700 text-sm leading-6">
            A portable cabin used temporarily on private land — a construction
            site, a car park, a yard — usually doesn't require planning
            permission, because it's a moveable structure rather than a
            permanent building. Permission may be needed if the cabin becomes
            permanent, sits in a protected area, or is used as living
            accommodation. When in doubt, one phone call to your local
            planning authority settles it.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Why portable cabins usually don't need permission
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              "Portable building" is the general term that covers portable
              cabins, portacabins, kiosks and modular units alike — and the
              planning rules don't distinguish between them, so whichever
              term you search for, the answer below applies equally.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              Planning permission exists to control "development" — the
              construction of permanent buildings and permanent changes to how
              land is used. A portable cabin sits outside most of that by
              design. It isn't built on the land; it's delivered to it. It has
              no foundations, it isn't fixed to the ground, and it can be
              lifted away by forklift as easily as it arrived. In planning
              terms, that makes it closer to parking a vehicle than erecting a
              building.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              On top of that, UK planning rules include specific allowances
              that cover the most common cabin uses. Buildings needed
              temporarily in connection with construction work — site offices,
              welfare units, security cabins — are generally permitted for the
              duration of the project without a separate application. And land
              can typically be put to a temporary use for a limited number of
              days per year without permission, which covers many seasonal and
              event setups.
            </p>
            <p className="text-slate-700 leading-7">
              This is one of the biggest practical advantages of a{" "}
              <Link href="/portable-cabins" className="text-blue-700 font-medium hover:underline">
                portable cabin
              </Link>{" "}
              over a permanent building: for a typical business use, you can
              order on Monday and have staff working from it the same week —
              no drawings, no application fees, no eight-week wait for a
              decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              When you might need planning permission
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              The exceptions are about permanence, location and use. You
              should check with your local planning authority before siting a
              cabin if any of the following apply:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                {
                  title: "The cabin is staying put long term.",
                  text: "The longer a structure remains in one place, the more it starts to look like permanent development in the eyes of a planning officer. A cabin serving a two-year construction project is fine; the same cabin still sitting there five years after the project ended may not be.",
                },
                {
                  title: "You're in a conservation area or near a listed building.",
                  text: "Protected areas carry stricter rules, and structures that would be fine elsewhere can require consent here.",
                },
                {
                  title: "The cabin will be lived in.",
                  text: "Residential use is treated completely differently from business use. A cabin used as living accommodation — even in a garden — generally needs permission.",
                },
                {
                  title: "The land has planning conditions attached.",
                  text: "Some sites have conditions from previous planning decisions that restrict what can be placed on them. Your title deeds or the council's planning portal will show these.",
                },
                {
                  title: "The cabin changes how the land is used.",
                  text: "Placing a cabin on a field and running a business from it is a change of use of the land itself, which is a planning matter regardless of how moveable the cabin is.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 leading-6 text-sm">
                    <span className="font-semibold text-slate-900">{item.title}</span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              How to check in under an hour
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              If your situation touches any of the exceptions above, don't
              guess — check. It's faster than most people expect:
            </p>
            <ol className="space-y-3 mb-4 list-none">
              {[
                "Call your local planning authority's duty planner (every council has one) and describe the cabin, the site and how long it'll be there. For a clearly temporary business use, many will confirm the position over the phone.",
                "Search your council's online planning portal for your site to spot any existing conditions on the land.",
                "For certainty in borderline cases, apply for a Lawful Development Certificate — a formal confirmation from the council that your cabin doesn't need permission. It costs a fraction of a full application.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 leading-6 text-sm">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-slate-700 leading-7">
              If you buy from us, we'll happily supply exact dimensions,
              weights and specification sheets for any council enquiry — it's
              a two-minute email and it usually answers every question a
              planning officer has.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              What about building regulations?
            </h2>
            <p className="text-slate-700 leading-7">
              Planning permission and building regulations are separate
              systems, and people often mix them up. Building regulations
              cover how a structure is constructed rather than whether it can
              be placed. Small, moveable units used for short-term business
              purposes are generally exempt — another advantage of a compact
              cabin over converting or constructing something on site. The
              electrical connection is the one part to take seriously: have a
              qualified electrician connect the cabin's pre-wired system to
              your supply, and keep the certificate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              The bottom line
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              For the way most of our customers use portable cabins — parking
              kiosks, security gatehouses, ticket booths, site offices on
              active projects — planning permission is not normally required,
              and the cabin can be working the day it arrives. The exceptions
              are predictable: permanence, protected locations, residential
              use. If none of those apply to you, you're very likely in the
              clear; if one does, a quick call to the council costs nothing
              and settles it.
            </p>
            <p className="text-slate-500 text-sm leading-6 italic">
              This guide is general information, not legal or planning advice.
              Planning rules differ between England, Scotland, Wales and
              Northern Ireland and depend on your specific site — always
              confirm with your local planning authority if you're unsure.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-950 text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-2">
            Ready when you are — no paperwork needed
          </h2>
          <p className="text-blue-100 text-sm leading-6 mb-5">
            Our insulated portable cabins start at £1,799 ex VAT, arrive
            pre-wired and fully assembled, and are in stock for fast UK
            delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/portable-cabins"
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-5 py-2.5 rounded-md font-bold hover:bg-amber-300 transition-colors text-sm"
            >
              View Portable Cabins <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/ContactUs?interest=portable-cabin"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-white/20 transition-colors text-sm"
            >
              Ask a Question
            </Link>
          </div>
        </div>

        {/* Related reading */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <h2 className="font-bold text-slate-900 mb-3 text-base">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <Link
                href="/portable-cabin-vs-shipping-container"
                className="text-blue-700 font-medium hover:underline"
              >
                Portable cabin vs converted shipping container: what's the difference?
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <Link href="/portable-cabins" className="text-blue-700 font-medium hover:underline">
                Compact portable cabins for sale — full range and prices
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}