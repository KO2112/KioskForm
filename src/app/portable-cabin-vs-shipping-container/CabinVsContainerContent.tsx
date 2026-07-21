import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"

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
    <div className="bg-slate-50 min-h-screen pt-6">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-slate-700">Portable Cabin vs Shipping Container</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Buying Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Portable Cabin vs Converted Shipping Container: What's the Difference?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            They can look similar in a photo, but a purpose-built portable
            cabin and a converted shipping container are very different
            products underneath — in how they're made, how they handle British
            weather, what they weigh, and what they cost to actually make
            usable. Here's an honest comparison to help you pick the right one.
          </p>
          <div className="flex items-center gap-3 mt-5 text-sm text-slate-500">
            <span>By the Cabin Units team</span>
            <span>·</span>
            <time dateTime="2026-07-21">21 July 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </header>

        {/* Key takeaway */}
        <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-lg p-5 mb-10">
          <h2 className="font-bold text-slate-900 mb-2 text-base">Key takeaway</h2>
          <p className="text-slate-700 text-sm leading-6">
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

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Two products that solve the same problem differently
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              Both products answer the same brief: "I need a weatherproof
              space on my site, fast, without constructing a building." The
              difference is where they start from.
            </p>
            <p className="text-slate-700 leading-7 mb-4">
              A <Link href="/portable-cabins" className="text-blue-700 font-medium hover:underline">portable cabin</Link>{" "}
              is engineered as a workspace from the first drawing. The walls
              are insulated sandwich panels — steel skins bonded to a rigid
              polyurethane core — so insulation isn't an add-on, it's the
              wall itself. Windows sit where a person working inside needs
              sightlines. The electrics are designed in, not chased in. The
              whole unit is built light enough to move with a forklift.
            </p>
            <p className="text-slate-700 leading-7">
              A converted container starts as a corrugated steel box built to
              stack nine-high on a cargo ship. Converting one means cutting
              openings into structural steel, welding in frames, then lining
              the inside to make it habitable. Done well it produces a very
              tough unit — but every workspace feature is retro-fitted into a
              structure designed for a completely different job.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Side-by-side comparison
            </h2>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-[110px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] bg-blue-950 text-white text-xs sm:text-sm font-semibold">
                <div className="px-3 sm:px-4 py-3"></div>
                <div className="px-3 sm:px-4 py-3">Portable cabin</div>
                <div className="px-3 sm:px-4 py-3">Converted container</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[110px_1fr_1fr] sm:grid-cols-[160px_1fr_1fr] text-xs sm:text-sm ${
                    i % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <div className="px-3 sm:px-4 py-3 font-mono uppercase tracking-wide text-slate-500 text-[10px] sm:text-xs">
                    {row.label}
                  </div>
                  <div className="px-3 sm:px-4 py-3 text-slate-800 border-l border-slate-100">
                    {row.cabin}
                  </div>
                  <div className="px-3 sm:px-4 py-3 text-slate-700 border-l border-slate-100">
                    {row.container}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              The condensation problem nobody mentions
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              This is the difference that matters most through a British
              winter. A shipping container is a single skin of steel, and
              steel is an excellent conductor of cold. When warm, damp air
              inside — from a heater, a kettle, or simply a person breathing —
              meets that cold steel, it condenses. Unlined containers drip.
              That's why serious container conversions add insulation lining,
              anti-condensation coatings or both, and why cheap ones develop
              damp paperwork and mouldy corners by February.
            </p>
            <p className="text-slate-700 leading-7">
              Insulated panel cabins don't have this problem to solve, because
              there's no cold single skin for moisture to find. The internal
              wall surface stays close to room temperature, the heater's
              output stays in the room instead of leaking through steel, and
              running costs stay lower. If people will spend full shifts
              inside the unit, this single factor should weigh heavily.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Weight, transport and where you can put it
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              An empty 10ft container weighs well over a tonne; a 20ft unit
              more than two. Moving one usually means a HIAB lorry or crane,
              a driver who can position it, and ground that can take the
              load. Our compact cabins weigh from roughly 300kg to about
              495kg — any site forklift or pallet truck arrangement can
              shift one, and it can sit on ordinary tarmac or paving without
              a second thought.
            </p>
            <p className="text-slate-700 leading-7">
              Size flexibility matters too. Containers come in shipping
              sizes, because that's what they are. Purpose-built cabins come
              in workspace sizes — from a 1.1m × 1.3m kiosk that fits a
              single parking bay upward. If your position is a barrier, a
              kerbside or a gate, a container simply may not fit where the
              work is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              When a converted container is genuinely the better choice
            </h2>
            <p className="text-slate-700 leading-7 mb-4">
              An honest comparison cuts both ways. If you need unattended,
              high-security storage on a remote or high-risk site — tools,
              plant, materials left overnight where theft is a real threat —
              the container's weldable, near-impenetrable steel shell is the
              right tool, and no panel cabin matches it for brute resistance.
              The same is true if you need units stacked two-high, or a
              structure that will be craned between rough sites for a decade
              with zero sympathy.
            </p>
            <p className="text-slate-700 leading-7">
              But those are storage and heavy-plant jobs. If the unit's
              purpose is a person working inside it — taking payments,
              checking vehicles in, watching a gate, doing paperwork — you're
              buying a workspace, and a structure designed as one from the
              start does that job better, for less.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              The bottom line
            </h2>
            <p className="text-slate-700 leading-7">
              Choose a converted container when security of contents is the
              whole job. Choose a purpose-built portable cabin when a human
              being is the contents. Our insulated cabins start at £1,799 ex
              VAT, arrive pre-wired with heating, lighting and sockets, and
              can be working the day they're delivered — no lining, no
              retro-fit, no drips.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-950 text-white rounded-lg p-6 sm:p-8">
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
              className="inline-flex items-center justify-center bg-amber-400 text-blue-950 px-5 py-2.5 rounded-md font-bold hover:bg-amber-300 transition-colors text-sm"
            >
              View Portable Cabins <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/ContactUs?interest=portable-cabin"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-white/20 transition-colors text-sm"
            >
              Get a Quote
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
                href="/portable-cabin-planning-permission"
                className="text-blue-700 font-medium hover:underline"
              >
                Do you need planning permission for a portable cabin?
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