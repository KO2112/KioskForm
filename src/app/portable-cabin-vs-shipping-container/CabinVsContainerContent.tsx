"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const comparisonRows = [
  {
    label: "How it's built",
    cabin: "Designed from scratch as a workspace: insulated panel walls, windows and door where people need them",
    container: "A steel shipping box cut open and retro-fitted with lining, windows and a door",
  },
  {
    label: "Insulation",
    cabin: "40mm polyurethane-core panels in walls, roof and floor as standard",
    container: "Bare steel unless lined — insulation and anti-condensation lining added at extra cost",
  },
  {
    label: "Condensation",
    cabin: "Insulated sandwich construction keeps internal surfaces warm and dry",
    container: "Single-skin steel sweats; needs treatment or lining to control damp",
  },
  {
    label: "Weight",
    cabin: "From roughly 300–500kg — forklift on any firm surface",
    container: "Typically 2,000kg+ — usually needs a HIAB or crane to move",
  },
  {
    label: "Footprint",
    cabin: "Compact sizes from 1.1m × 1.3m — fits a parking bay or kerbside",
    container: "Standard 10ft/20ft container sizes; rarely smaller",
  },
  {
    label: "Appearance",
    cabin: "Clean panel finish that looks at home at a public-facing entrance",
    container: "Industrial look; visible corrugation and cut lines even after conversion",
  },
  {
    label: "Security",
    cabin: "Lockable door and steel frame — right for staffed, public-facing positions",
    container: "Extremely strong; the better choice for unattended high-risk storage",
  },
  {
    label: "Typical price",
    cabin: "New insulated units from £1,799 ex VAT",
    container: "Basic conversions often start higher, plus lining and fit-out costs",
  },
]

export default function CabinVsContainerContent() {
  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-6">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">Portable Cabin vs Shipping Container</span>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative w-full h-[24rem] sm:h-[28rem] lg:h-[30rem] overflow-hidden">
        <img
          src="/ourkioskcabinwork1.jpeg"
          alt="Purpose-built insulated portable cabin installed on a UK site"
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
            <span className="text-white/70 text-xs font-medium">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            Portable Cabin vs Converted Shipping Container: What's the Difference?
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
        <p className="text-gray-700 leading-7 mb-8 text-lg">
          They can look similar in a photo, but a purpose-built portable
          cabin and a converted shipping container are very different
          products underneath — in how they're made, how they handle British
          weather, what they weigh, and what they cost to actually make
          usable. Here's an honest comparison to help you pick the right one.
        </p>

        {/* Key takeaway */}
        <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-lg p-5 mb-10">
          <h2 className="font-bold text-gray-900 mb-2 text-base">Key takeaway</h2>
          <p className="text-gray-700 text-sm leading-6">
            A portable cabin is designed from day one as a workspace —
            insulated, wired and finished at the factory. A converted
            container starts life as a steel shipping box and has workspace
            features cut and fitted into it afterwards. For staffed,
            public-facing positions like kiosks, gatehouses and pay points,
            the purpose-built cabin is usually warmer, lighter, easier to
            move and cheaper. For unattended secure storage on a rough site,
            the container's brute strength wins.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Two products that solve the same problem differently
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          Both products answer the same brief: "I need a weatherproof
          space on my site, fast, without constructing a building." The
          difference is where they start from.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          A <Link href="/portable-cabins" className="text-blue-600 font-medium hover:underline">portable cabin</Link>{" "}
          is engineered as a workspace from the first drawing. The walls
          are insulated sandwich panels — steel skins bonded to a rigid
          polyurethane core — so insulation isn't an add-on, it's the
          wall itself. Windows sit where a person working inside needs
          sightlines. The electrics are designed in, not chased in. The
          whole unit is built light enough to move with a forklift.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          A converted container starts as a corrugated steel box built to
          stack nine-high on a cargo ship. Converting one means cutting
          openings into structural steel, welding in frames, then lining
          the inside to make it habitable. Done well it produces a very
          tough unit — but every workspace feature is retro-fitted into a
          structure designed for a completely different job.
        </p>

        {/* Image */}
        <figure className="mb-10">
          <img
            src="/110x130Kiosk.jpg"
            alt="Purpose-built 110x130cm insulated portable cabin with fitted door and window"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Side-by-side comparison
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-10">
          <div className="grid grid-cols-[110px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] bg-blue-950 text-white text-xs sm:text-sm font-semibold">
            <div className="px-3 sm:px-4 py-3"></div>
            <div className="px-3 sm:px-4 py-3">Portable cabin</div>
            <div className="px-3 sm:px-4 py-3">Converted container</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[110px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] text-xs sm:text-sm ${
                i % 2 === 1 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="px-3 sm:px-4 py-3 font-mono uppercase tracking-wide text-gray-500 text-[10px] sm:text-xs">
                {row.label}
              </div>
              <div className="px-3 sm:px-4 py-3 text-gray-800 border-l border-gray-100">
                {row.cabin}
              </div>
              <div className="px-3 sm:px-4 py-3 text-gray-700 border-l border-gray-100">
                {row.container}
              </div>
            </div>
          ))}
        </div>

        {/* Section: condensation */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The condensation problem nobody mentions
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          This is the difference that matters most through a British
          winter. A shipping container is a single skin of steel, and
          steel is an excellent conductor of cold. When warm, damp air
          inside — from a heater, a kettle, or simply a person breathing —
          meets that cold steel, it condenses. Unlined containers drip.
          That's why serious container conversions add insulation lining,
          anti-condensation coatings or both, and why cheap ones develop
          damp paperwork and mouldy corners by February.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          Insulated panel cabins don't have this problem to solve, because
          there's no cold single skin for moisture to find. The internal
          wall surface stays close to room temperature, the heater's
          output stays in the room instead of leaking through steel, and
          running costs stay lower. If people will spend full shifts
          inside the unit, this single factor should weigh heavily.
        </p>

        {/* Product spotlight */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 mb-10 sm:flex items-center gap-6">
          <Link
            href="/products/Portable-Kiosk-110x130"
            className="block sm:w-48 flex-shrink-0 bg-white rounded-lg border border-gray-200 mb-4 sm:mb-0"
          >
            <img
              src="/110x130Kiosk.jpg"
              alt="110x130cm portable cabin for sale — insulated and pre-wired, from £1,799"
              className="w-full h-40 object-contain p-2"
            />
          </Link>
          <div className="flex-1">
            <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 inline-block mb-2">
              From our range
            </p>
            <h3 className="font-bold text-gray-900 mb-1">
              110x130cm Portable Cabin — £1,799 ex VAT
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Everything this article describes, in stock: 40mm insulated
              panels, pre-wired electrics, heater included, light enough for
              a forklift. In our Leicester warehouse and ready for fast UK
              delivery.
            </p>
            <Link
              href="/products/Portable-Kiosk-110x130"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              View this cabin <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Section: weight */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Weight, transport and where you can put it
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          An empty 10ft container weighs well over a tonne; a 20ft unit
          more than two. Moving one usually means a HIAB lorry or crane,
          a driver who can position it, and ground that can take the
          load. Our compact cabins weigh from roughly 300kg to about
          495kg — any site forklift or pallet truck arrangement can
          shift one, and it can sit on ordinary tarmac or paving without
          a second thought.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          Size flexibility matters too. Containers come in shipping
          sizes, because that's what they are. Purpose-built cabins come
          in workspace sizes — from a 1.1m × 1.3m kiosk that fits a
          single parking bay upward. If your position is a barrier, a
          kerbside or a gate, a container simply may not fit where the
          work is.
        </p>

        {/* Image */}
        <figure className="mb-10">
          <img
            src="/150x210kiosk1.jpg"
            alt="150x210cm portable cabin delivered fully assembled, positioned by forklift"
            className="w-full rounded-lg"
          />
        </figure>

        {/* Section: when container wins */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          When a converted container is genuinely the better choice
        </h2>
        <p className="text-gray-700 leading-7 mb-4">
          An honest comparison cuts both ways. If you need unattended,
          high-security storage on a remote or high-risk site — tools,
          plant, materials left overnight where theft is a real threat —
          the container's weldable, near-impenetrable steel shell is the
          right tool, and no panel cabin matches it for brute resistance.
          The same is true if you need units stacked two-high, or a
          structure that will be craned between rough sites for a decade
          with zero sympathy.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          But those are storage and heavy-plant jobs. If the unit's
          purpose is a person working inside it — taking payments,
          checking vehicles in, watching a gate, doing paperwork — you're
          buying a workspace, and a structure designed as one from the
          start does that job better, for less.
        </p>

        {/* Bottom line */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The bottom line
        </h2>
        <p className="text-gray-700 leading-7 mb-10">
          Choose a converted container when security of contents is the
          whole job. Choose a purpose-built portable cabin when a human
          being is the contents. Our insulated cabins start at £1,799 ex
          VAT, arrive pre-wired with heating, lighting and sockets, and
          can be working the day they're delivered — no lining, no
          retro-fit, no drips.
        </p>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-6 sm:p-8 mb-4">
          <h2 className="text-xl font-bold mb-2">
            Purpose-built, not a cut-up container
          </h2>
          <p className="text-blue-100 text-sm leading-6 mb-5">
            See our range of compact insulated portable cabins — in stock,
            pre-wired and delivered fully assembled anywhere in the UK.
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
              Get a Quote
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
              <Link href="/portable-cabin-planning-permission">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src="/kiosk4.jpg"
                    alt="Portable cabin sited on private land without planning permission"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">Blog | Buying Guide</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do Portable Buildings Need Planning Permission?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Usually not — but there are exceptions. The 28-day rule, how to check with your council, and more...
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">Read more</span>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href="/portable-cabins">
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src="/110x130Kiosk.jpg"
                    alt="Compact insulated portable cabins for sale from £1,799"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-medium mb-2">Products</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Portable Cabins for Sale
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our full range of compact insulated cabins — in stock from £1,799 ex VAT with fast UK delivery...
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">View range</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}