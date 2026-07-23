"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PlanningPermissionContent() {
  return (
    <div className="bg-white min-h-screen pt-6">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">Planning Permission for Portable Buildings</span>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative w-full h-[24rem] sm:h-[28rem] lg:h-[30rem] overflow-hidden">
        <img
          src="/kiosk4.jpg"
          alt="Portable cabin installed on a UK commercial site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-900/30" />
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <Link
            href="/blog"
            className="absolute top-6 left-4 sm:left-6 lg:left-8 text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            &lt; All posts
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              Buying Guide
            </span>
            <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              Portable Cabins
            </span>
            <span className="text-white/70 text-xs font-medium">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            Do Portable Buildings Need Planning Permission?
          </h1>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-slate-900 text-xs font-bold">
              CU
            </span>
            <span className="font-medium text-white">Cabin Units team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-07-21">21 July 2026</time>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Intro */}
        <p className="text-gray-700 leading-7 mb-4">
          It's the question we get asked more than any other, usually right
          before someone places an order. The answer for most of our customers
          is no — but it depends on how long the building is staying, how big
          it is, and what you're using it for. This guide covers the actual
          rules, the exceptions, and what to do if you're not sure.
        </p>
        <p className="text-gray-700 leading-7 mb-8">
          One quick note on words before we start: portable building, portable
          cabin, portacabin, site cabin — planning officers don't care which
          one you say. The rules look at what the structure is and how it's
          used, not what the industry calls it.
        </p>

        {/* Featured image */}
        <figure className="mb-10">
          <img
            src="/110x130Kiosk.jpg"
            alt="Compact 110x130cm portable cabin of the type that typically sits within permitted development limits"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Big Question: Do You Need Permission?
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          The short answer for most of our customers is no — a portable
          building generally doesn't need a planning application if it's under
          100m² in floor area and in place for 28 days or less in a calendar
          year. In England, land can be put to a temporary use for up to 28
          days a year without an application, and buildings under 100m²
          attract far less scrutiny than larger ones. A small unit covering an
          event, a seasonal operation or a short project sits comfortably
          inside those limits.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          Construction sites get their own allowance. Buildings needed
          temporarily in connection with building work — site offices, welfare
          units, security cabins — are permitted for the duration of the
          project. No application, as long as they go when the project does.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          For the compact{" "}
          <Link href="/portable-cabins" className="text-blue-600 font-medium hover:underline">
            portable cabins
          </Link>{" "}
          we sell, the size test is never the problem. Our largest unit is
          3.15m² — you could fit thirty of them inside the 100m² limit.
          Duration and use are where the real questions live.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What If the Cabin Is Staying Longer Than 28 Days?
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          This is where most of our customers actually sit. A parking kiosk or
          gatehouse isn't there for a month; it's there for years. Does that
          mean permission is automatically required? Not necessarily — but it
          does mean you should check rather than assume.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          A genuinely moveable structure that isn't fixed to the ground is
          treated differently from built development, and councils take a
          range of views on small units serving an existing, lawful use of the
          land. A ticket kiosk in a car park that already operates as a car
          park is a very different conversation from a new building enabling a
          brand-new use of a field. In practice, plenty of small kiosks and
          gatehouses sit on commercial sites across the UK without ever having
          been through a planning application — and some councils would want
          one. There is no single national answer, which is exactly why the
          phone call matters.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          The situations where you should definitely expect to need
          permission: anything used as living accommodation, anything in a
          conservation area or the setting of a listed building, land with
          restrictive planning conditions already attached, and cases where
          the building changes what the land is used for. Those four come up
          again and again, and none of them are worth gambling on.
        </p>

        {/* Image */}
        <figure className="mb-10">
          <img
            src="/150x210kiosk1.jpg"
            alt="150x210cm portable cabin delivered fully assembled, ready to be positioned by forklift"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Long Does Planning Permission Take?
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          If you do need to apply, budget eight to twelve weeks for a
          decision. Councils aim for eight on straightforward applications;
          twelve is common in practice. Apply early — the application fee is
          modest, and it's far cheaper than an enforcement problem later.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          A typical application needs a location plan and site plan, ownership
          certificates, a short design and access statement for some cases,
          and the fee. Because our cabins arrive as finished units, we can
          send you the exact dimensions, weights and elevation photos the same
          day you ask — customers have used our spec sheets directly in their
          applications.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          And if the need was genuinely urgent and the building went in first?
          Retrospective permission exists for exactly that, and councils grant
          it routinely where the case is honest. But be clear-eyed about the
          risk: if a retrospective application is refused, the council can
          serve an enforcement notice requiring the building's removal. With a
          forklift-moveable cabin that's an afternoon's work rather than a
          demolition — one of the quieter advantages of buying portable — but
          it's still a situation better avoided than managed.
        </p>

        {/* Image */}
        <figure className="mb-10">
          <img
            src="/kiosk3.jpg"
            alt="Compact security kiosk positioned at a site entrance"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Get a Straight Answer From Your Council
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          Every planning authority runs a duty planner service — a planner
          whose job includes answering exactly this kind of question. Ring the
          council, ask for planning, describe the unit, the site and how long
          it's staying. For a clearly temporary business use they'll often
          tell you the position on the spot. While you're at it, search your
          address on the council's online planning portal; any conditions
          attached to the land from past decisions will show up there.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          If you want certainty in writing — say the site is leased and your
          landlord wants proof — a Lawful Development Certificate is the
          formal route. The council confirms in writing that your use doesn't
          need permission. It costs half the fee of a full application and
          turns "the council said it was probably fine" into a document.
        </p>

        {/* Image */}
        <figure className="mb-10">
          <img
            src="/110x150.jpg"
            alt="110x150cm insulated portable cabin pre-wired with fuse box and site socket"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          A Word on Building Regulations
        </h2>
        <p className="text-gray-700 leading-7 mb-10">
          Different system, common confusion. Building regulations govern how
          a structure is constructed; planning governs whether it can be
          placed. Small moveable units used for short-term business purposes
          are generally exempt from building regs. The one part to treat
          properly is the electrical connection: our cabins arrive pre-wired
          with a fuse box and site socket, and the hookup to your supply
          should be done by a qualified electrician who gives you a
          certificate. Keep it with the cabin's paperwork.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Where That Leaves You
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          Most of the cabins we sell go to car parks, site entrances and event
          operations, and most of those customers never needed a planning
          application — short durations, existing commercial sites, small
          units. If that sounds like your situation, you're very likely fine.
          If your cabin is staying for years, sitting somewhere protected, or
          changing what the land does, spend ten minutes on the phone with the
          council first. We'll send whatever specs the conversation needs.
        </p>
        <p className="text-gray-500 text-sm leading-6 italic mb-10">
          This guide is general information based on our experience supplying
          cabins across the UK, not legal or planning advice. Rules differ
          between England, Scotland, Wales and Northern Ireland and change
          over time — your local planning authority is the final word for your
          site.
        </p>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-6 sm:p-8 mb-4">
          <h2 className="text-xl font-bold mb-2">
            Need the spec sheet for a council enquiry?
          </h2>
          <p className="text-blue-100 text-sm leading-6 mb-5">
            Our insulated portable cabins start at £1,799 ex VAT, arrive
            pre-wired and fully assembled, and we'll send dimensions, weights
            and photos for any planning conversation the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/portable-cabins"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-5 py-2.5 rounded-md font-bold hover:bg-blue-50 transition-colors text-sm"
            >
              View Portable Cabins <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/ContactUs?interest=portable-cabin"
              className="inline-flex items-center justify-center bg-blue-700 border border-blue-400 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-800 transition-colors text-sm"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </article>

      {/* Related Resources */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href="/portable-cabin-vs-shipping-container">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src="/150x210kiosk1.jpg"
                    alt="Purpose-built portable cabin compared with a converted shipping container"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">Blog | Buying Guide</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Portable Cabin vs Converted Shipping Container
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    They look similar in photos, but insulation, condensation and weight tell a different story...
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">Read more</span>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href="/Security-kiosks-in-the-UK">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src="/kiosk3.jpg"
                    alt="Security kiosk installed at a UK site entrance"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">Blog</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Security Kiosks in the UK
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    How security kiosks are transforming safety and service efficiency across the UK...
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">Read more</span>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href="/Key-Benefits-of-Portable-Cabins">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src="/kiosk5.jpg"
                    alt="Portable cabin and kiosk units used by UK businesses"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">Blog</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Key Benefits of Portable Cabins & Kiosks
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Cost savings, rapid deployment and versatile applications across industries...
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">Read more</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}