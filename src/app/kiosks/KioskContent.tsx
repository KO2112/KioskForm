"use client"

import Link from "next/link"

/* Notched corner, same geometry as the navbar, footer and About CTA */
const notch = { clipPath: "polygon(0 0, 100% 0, 100% 62%, 88% 100%, 0 100%)" } as const

const KiosksPage = () => {
  const kiosks = [
    {
      id: "Portable-Kiosk-150x210",
      title: "Portable Kiosk Cabin Booth Security Ticket Hut Modular Gate House 150x210 cm",
      subtitle: "Security Hut | Ticket Booth | Gatehouse",
      price: "£1999",
      dimensions: "150×210 cm",
      description:
        "Brand new modular kiosk cabin with insulation, electrical installation, and immediate dispatch availability.",
      image: "/150x210%20Kiosk.jpg",
      features: [
        "Strong galvanised steel frame structure",
        "Steel double-skin sandwich panels with 40 mm polyurethane core insulation",
        "Internal LED lighting and double plug socket",
        "Internal fuse box and external 32A site socket",
        "Internal reception desk and durable PVC flooring",
        "Two 100×100 cm inward-opening windows",
        "Outward-opening 70×200 cm lockable PVC door",
        "Suitable for forklift transport and fully assembled",
      ],
      applications: [
        "Security huts",
        "Ticket kiosks",
        "Gatehouses",
        "Car park attendant booths",
        "Information points",
        "Construction site offices",
        "Catering units",
      ],
    },
    {
      id: "Portable-Kiosk-110x150",
      title: "Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x150 cm",
      subtitle: "Security Hut | Ticket Booth | Modular Cabin",
      price: "£1,949",
      dimensions: "110×150 cm",
      description:
        "Brand new durable modular cabin with full insulation, LED lighting, plug sockets, fuse box, and immediate dispatch availability.",
      image: "/110x150.jpg",
      features: [
        "Strong galvanised steel frame structure",
        "20 mm inner and outer steel sheet panels with 40 mm polyurethane insulation",
        "Internal LED lighting and internal double plug socket",
        "Internal fuse box and external site socket",
        "Durable PVC flooring and lockable outward-opening PVC door",
        "Two 60×100 cm inward-opening windows",
        "Internal reception desk and utility shelf",
        "Suitable for forklift transport and fully assembled",
      ],
      applications: [
        "Security huts",
        "Ticket kiosks",
        "Gatehouses",
        "Welfare units",
        "Car park attendant booths",
        "Catering units",
        "Information points",
      ],
    },
    {
      id: "Portable-Kiosk-110x130",
      title: "Portable Kiosk Cabin Booth Security Ticket Hut Modular Cabin 110x130 cm",
      subtitle: "Security Hut | Ticket Booth | Modular Cabin",
      price: "£1,799",
      dimensions: "110×130 cm",
      description:
        "Brand new compact modular kiosk with insulation, electrical installation, heater, and immediate dispatch availability.",
      image: "/110x130Kiosk.jpg",
      features: [
        "Strong galvanised steel frame structure",
        "Steel double-skin sandwich panels with 40 mm polyurethane core insulation",
        "Internal LED lighting and internal double plug socket",
        "Internal fuse box, external site socket, and portable heater",
        "Durable PVC flooring and lockable outward-opening PVC door",
        "Two 60×100 cm inward-opening windows",
        "Internal reception desk and utility shelf",
        "Suitable for forklift transport and fully assembled",
      ],
      applications: [
        "Security huts",
        "Ticket kiosks",
        "Gatehouses",
        "Welfare units",
        "Car park attendant booths",
        "Catering units",
        "Information points",
      ],
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-4 sm:pt-4">
      {/* ---------- Slim header: everything below it is product ---------- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-baseline gap-x-3">
          <h1 className="text-lg font-bold tracking-tight text-[#0A1B3D]">
            Portable | Modular Cabins and Kiosks
          </h1>
          <p className="text-xs text-slate-500">
            EU manufactured, in stock in Leicester, delivered UK-wide
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ---------- Products, straight away ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {kiosks.map((kiosk) => (
            <div
              key={kiosk.id}
              className="bg-white overflow-hidden flex flex-col h-full border border-slate-200 hover:border-[#0B4FD1]/40 hover:shadow-[0_18px_40px_-20px_rgba(10,27,61,0.35)] transition-all"
            >
              {/* Product image */}
              <Link href={`/products/${kiosk.id}`} className="block h-96 sm:h-128 w-full relative bg-slate-100 overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${kiosk.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-3">
                    <span className="bg-[#0B4FD1] text-white text-[13px] font-bold tracking-tight px-3 py-1.5">
                      {kiosk.dimensions}
                    </span>
                    <span className="bg-[#F97316] text-white text-[15px] font-bold tracking-tight px-3.5 py-1.5">
                      {kiosk.price}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-bold leading-tight tracking-tight text-white">{kiosk.title}</h2>
                  <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.12em] text-white">
                    {kiosk.subtitle}
                  </p>
                </div>
              </Link>

              {/* Product details */}
              <div className="p-5 flex-grow">
                <p className="text-[15px] leading-relaxed text-slate-700">{kiosk.description}</p>

                <p className="mt-5 mb-1 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F97316] border-b border-slate-200">
                  Key features
                </p>
                <ul className="mb-5">
                  {kiosk.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="border-b border-slate-100 py-2.5 text-[14px] leading-snug text-slate-700">
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F97316]">Applications</p>
                <div className="flex flex-wrap gap-1.5">
                  {kiosk.applications.slice(0, 5).map((app, i) => (
                    <span key={i} className="border border-slate-200 bg-slate-50 text-slate-600 text-xs font-medium px-2.5 py-1">
                      {app}
                    </span>
                  ))}
                  {kiosk.applications.length > 5 && (
                    <span className="border border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium px-2.5 py-1">
                      +{kiosk.applications.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="p-5 border-t border-slate-200">
                <Link
                  href={`/products/${kiosk.id}`}
                  className="flex justify-center items-center bg-[#0A1B3D] text-white px-4 py-3 hover:bg-[#0B4FD1] transition-colors w-full text-sm font-bold tracking-tight"
                >
                  View this kiosk
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Why choose ---------- */}
        <div className="bg-white border border-slate-200 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold tracking-tight text-[#0A1B3D]">Why choose our modular cabin kiosks?</h2>
            <span aria-hidden="true" className="mt-3 block h-[3px] w-10 bg-[#F97316]" />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200">
              <div className="bg-white p-5">
                <h3 className="text-[16px] font-bold tracking-tight text-[#0A1B3D]">Weather resistant</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fully insulated steel sandwich panels protect against all elements
                </p>
              </div>
              <div className="bg-white p-5">
                <h3 className="text-[16px] font-bold tracking-tight text-[#0A1B3D]">Easy transport</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Forklift pockets in the base for simple relocation
                </p>
              </div>
              <div className="bg-white p-5">
                <h3 className="text-[16px] font-bold tracking-tight text-[#0A1B3D]">Ready to use</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Complete electrical installation included
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Call to action ---------- */}
        <div className="bg-[#0A1B3D] text-white">
          <div className="p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-5 md:mb-0">
                <h2 className="text-2xl font-bold tracking-tight leading-tight">Not sure which size you need?</h2>
                <p className="mt-2 text-slate-300">
                  Tell us the job and the site. We&apos;ll point you at the right unit and quote delivery to your postcode.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-5">
                <a
                  href="tel:07497954779"
                  className="text-[18px] font-bold tabular-nums tracking-tight text-white hover:text-[#F97316] transition-colors"
                >
                  07497 954 779
                </a>
                <Link
                  href="/ContactUs"
                  style={notch}
                  className="inline-flex items-center bg-[#F97316] text-white px-6 py-3.5 font-bold tracking-tight hover:bg-[#EA6306] transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Long-form information ---------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white border border-slate-200 mt-8 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A1B3D]">Understanding portable cabin and kiosk solutions</h2>
        <span aria-hidden="true" className="mt-3 mb-6 block h-[3px] w-12 bg-[#F97316]" />

        <div className="mb-8 max-w-4xl">
          <h3 className="text-lg font-bold tracking-tight text-[#0A1B3D] mb-3">What makes our cabin kiosks different?</h3>
          <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
            Our modular kiosks represent the latest in portable building technology, manufactured to the highest
            European standards. Each unit combines durability with versatility, providing businesses with flexible space
            solutions that can be deployed quickly and efficiently. Unlike traditional construction, our modular
            approach allows for rapid installation without compromising on quality or functionality.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Every kiosk is engineered with premium materials that ensure longevity even in challenging environments. The
            steel sandwich panel construction offers superior insulation properties, maintaining comfortable internal
            temperatures while minimizing energy consumption. This sustainable approach makes our kiosks both
            environmentally responsible and economically efficient for businesses of all sizes.
          </p>
        </div>

        <div className="mb-8 max-w-4xl">
          <h3 className="text-lg font-bold tracking-tight text-[#0A1B3D] mb-4">Where our cabins and kiosks are used</h3>

          <div className="border-l-2 border-slate-200 pl-5 mb-5">
            <h4 className="text-[16px] font-bold tracking-tight text-[#0A1B3D] mb-2">Security solutions</h4>
            <p className="text-[15px] leading-relaxed text-slate-700">
              For security professionals, our kiosks provide weatherproof, secure environments perfect for site
              monitoring and access control. The strategic window placement offers excellent visibility while
              maintaining security. Each unit can be equipped with additional security features to meet specific site
              requirements.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-5 mb-5">
            <h4 className="text-[16px] font-bold tracking-tight text-[#0A1B3D] mb-2">Retail &amp; hospitality</h4>
            <p className="text-[15px] leading-relaxed text-slate-700">
              From ticket booths to coffee kiosks, our modular units create inviting customer service points with
              minimal setup time. The clean, neutral exterior suits any setting, while the durable construction ensures
              reliability even in high-traffic locations. Food service
              applications benefit from the easy-clean surfaces and robust electrical installations.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-5">
            <h4 className="text-[16px] font-bold tracking-tight text-[#0A1B3D] mb-2">Event management</h4>
            <p className="text-[15px] leading-relaxed text-slate-700">
              Event organizers appreciate the portability and rapid deployment of our kiosks for temporary
              installations. Whether managing large festivals or corporate functions, these units provide
              professional-grade information points, ticketing solutions, and security stations that can be repositioned
              as needed throughout the event lifecycle.
            </p>
          </div>
        </div>

        <div className="mb-8 max-w-4xl">
          <h3 className="text-lg font-bold tracking-tight text-[#0A1B3D] mb-3">Cabin installation &amp; maintenance</h3>
          <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
            Each modular kiosk arrives ready for immediate use with minimal site preparation required. The integrated
            forklift pockets allow for straightforward positioning, while pre-installed electrical systems eliminate the
            need for specialized contractors. This plug-and-play approach significantly reduces deployment costs
            compared to traditional building methods.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Our kiosks are designed for minimal maintenance with weather-resistant exteriors that require only routine
            cleaning. The robust construction ensures excellent longevity even in challenging environments, providing
            businesses with reliable service for years to come. All units include comprehensive documentation for any
            maintenance requirements that may arise.
          </p>
        </div>

        <div className="max-w-4xl">
          <h3 className="text-lg font-bold tracking-tight text-[#0A1B3D] mb-3">Cabin delivery, collection and stock</h3>
          <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
            Every portable cabin and kiosk listed here is a standard, brand new unit held at our Leicester warehouse,
            so there is no factory lead time to wait out. Collection from Leicester is free if you have transport, and
            you are welcome to come and look inside a cabin before you commit. UK-wide delivery is quoted individually
            by postcode, and units arrive fully assembled and ready to position.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Because the cabins are supplied as standard specifications rather than bespoke builds, the price you see is
            the price you pay, excluding VAT and shipping. If you are unsure which size suits the job, tell us what the
            cabin is for and where it is going and we will point you at the unit that fits.
          </p>
        </div>
      </div>

      {/* ---------- SEO footer content ---------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-slate-600 text-sm leading-relaxed">
          Our premium modular kiosks are designed for ticket booths, security cabins, information points, coffee shops,
          and various commercial applications. Each unit features fully insulated construction, electrical
          installations, and easy transportation options. Available in multiple sizes to suit your specific needs, our
          kiosks provide durable and versatile solutions for businesses across various industries.
        </p>
      </div>
    </div>
  )
}

export default KiosksPage