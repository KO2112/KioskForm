"use client"

import Link from "next/link"
import { ChevronRight, CheckCircle, Box, Shield, Info } from "lucide-react"

const WelfareCabinsPage = () => {
  const welfareCabins = [
    {
      id: "Portable-Double-Toilet-Block",
      title: "Portable Double Toilet Block",
      subtitle: "Prefabricated WC Unit | Insulated Welfare Unit | Ready for Connection",
      price: "£2,699.99",
      dimensions: "160×210×256 cm",
      description: "Brand new, heavy-duty portable double welfare unit with two separate WC cubicles and full ready-to-connect plumbing and electrical systems.",
      image: "/DoubleToilet.png",
      features: [
        "Two separate toilet cubicles with ceramic flushing toilets",
        "Integrated wash basins, vanity cabinets, mirrors, and soap dispensers",
        "Fully insulated construction with heavy-duty steel frame",
        "Pre-wired and pre-plumbed for mains water, waste, and electricity",
        "Automatic sensor-controlled LED lighting and ventilation",
        "Suitable for construction sites, events, farms, and commercial premises",
      ],
      applications: [
        "Construction sites",
        "Outdoor events",
        "Festivals",
        "Sports facilities",
        "Farms",
        "Temporary accommodation",
        "Commercial workplaces",
      ],
      icon: Box,
    },
    {
      id: "Disabled-Portable-Toilet-Block",
      title: "Disabled Portable Toilet Block",
      subtitle: "Accessible Welfare Unit | Wheelchair Access | Ready for Connection",
      price: "£2,999",
      dimensions: "170×170×256 cm",
      description: "Heavy-duty accessible welfare unit with ramp, grab rails, ceramic toilet, wash basin, and full ready-to-connect services.",
      image: "/DisabledToiletKiosk1.jpg",
      features: [
        "Wheelchair access ramp and grab rails",
        "Ceramic flushing toilet and integrated wash basin",
        "Fully insulated construction with galvanised steel frame",
        "Pre-wired and pre-plumbed for mains water, sewer, and electricity",
        "Automatic sensor-controlled LED lighting and ventilation",
        "Suitable for construction sites, events, farms, and commercial premises",
      ],
      applications: [
        "Construction sites",
        "Outdoor events",
        "Festivals",
        "Sports facilities",
        "Farms",
        "Temporary accommodation",
        "Commercial workplaces",
      ],
      icon: Box,
    },
  ]

  const faqs = [
    {
      q: "Do construction sites legally need welfare units?",
      a: "Yes. UK health and safety law requires sites to provide proper welfare facilities. That includes toilets and washing points for everyone on site. Our welfare units help you meet that requirement fast.",
    },
    {
      q: "What's the difference between the double and disabled welfare unit?",
      a: "The double welfare unit has two separate cubicles for general use. The disabled welfare unit is a single, wheelchair-accessible cubicle. It has a ramp and grab rails, sized to meet accessibility needs.",
    },
    {
      q: "Are the welfare units ready to connect on delivery?",
      a: "Yes. Both units are pre-wired and pre-plumbed for mains water, waste, and electricity. They also have sensor-controlled LED lighting. A plumber and electrician can connect it the same day it arrives.",
    },
    {
      q: "What are the delivery and pickup options?",
      a: "Nationwide delivery is available, with cost quoted by postcode. Free in-person pick-up is available from our warehouse at LE13BW, Leicester.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {" "}
      {/* Added pt-16 to account for fixed navbar height */}
      {/* Header Section - Now properly spaced below navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Welfare Units & Portable Toilet Blocks</h1>
            <p className="text-sm text-gray-600">Insulated, ready-to-connect welfare units for sites and events</p>
          </div>
          <Link
            href="/ContactUs"
            className="inline-flex items-center bg-blue-600 text-white px-3 py-2 text-sm rounded hover:bg-blue-700 transition-colors shadow-sm font-medium"
          >
            Request a Quote
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
      {/* Product Overview Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-blue-50 rounded-lg p-4 mb-8 border border-blue-100">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              UK sites are required to provide adequate welfare facilities for everyone working there.
              Our welfare units are brand new, fully insulated, and ready to connect on delivery.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-5">Our Welfare Unit Range</h2>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {welfareCabins.map((cabin) => (
            <div
              key={cabin.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Product Image - Increased Height */}
              <Link href={`/products/${cabin.id}`} className="block h-96 sm:h-128 w-full relative bg-blue-100 overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${cabin.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {cabin.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {cabin.price}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{cabin.title}</h2>
                  <p className="text-blue-100 text-sm">{cabin.subtitle}</p>
                </div>
              </Link>

              {/* Product Details */}
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700">{cabin.description}</p>
                  <span className="text-green-600 font-bold text-lg ml-3">{cabin.price}</span>
                </div>

                {/* Key Features */}
                <span className="font-bold text-gray-900 mb-2 text-sm">KEY FEATURES</span>
                <ul className="space-y-2 mb-5">
                  {cabin.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Applications Tags */}
                <span className="font-bold text-gray-900 mb-2 text-sm">APPLICATIONS</span>
                <div className="flex flex-wrap gap-2">
                  {cabin.applications.slice(0, 5).map((app, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                  {cabin.applications.length > 5 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{cabin.applications.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${cabin.id}`}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight Section */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8 border border-gray-100">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Why Choose Our Welfare Units?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Fully Insulated</h3>
                  <p className="text-gray-600 text-sm">
                    Heavy-duty steel construction protects against all elements
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Ready to Connect</h3>
                  <p className="text-gray-600 text-sm">Pre-plumbed and pre-wired for mains water, waste, and power</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Hygienic & Accessible</h3>
                  <p className="text-gray-600 text-sm">Sensor-controlled lighting, ventilation, and accessible options</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Need a Welfare Unit on Site?</h2>
                <p className="text-blue-100">
                  Tell us your site size and headcount and we'll help you choose the right unit.
                </p>
              </div>
              <Link
                href="/ContactUs"
                className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium"
              >
                Request a Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- LONG-FORM SEO CONTENT ---------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-8 mb-8">

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Welfare Unit?</h2>
        <p className="text-gray-700 mb-3">
          A welfare unit is a self-contained cabin. It gives people on site somewhere clean and
          private to use the toilet and wash their hands. Some call it a welfare cabin or a
          portable toilet block. The job is the same: proper hygiene facilities, ready to use,
          with no building work needed. The term covers a range of products. Some are a single
          basic cubicle. Others have multiple toilets, wash basins, and rest space.
        </p>
        <p className="text-gray-700 mb-3">
          A basic portaloo is different. A welfare unit is insulated. It's wired for lighting and
          power. It's plumbed in before delivery. Ours also have a ceramic flushing toilet and a
          wash basin, not a chemical tank. That makes them feel closer to a normal bathroom.
        </p>
        <p className="text-gray-700">
          The unit is fully assembled off-site. It arrives as one piece. There's no waiting on
          tradespeople to build anything. You position it, connect the power and water, and it's
          ready the same day.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Welfare Unit vs Portable Toilet: What's the Difference?
        </h2>
        <p className="text-gray-700 mb-3">
          The terms get used loosely. Here's the difference. A standard portable toilet, or
          portaloo, is a single cubicle with a chemical tank. It has no running water. It's cheap
          and quick to place. But it doesn't meet every site's needs on its own. It also needs
          regular emptying by a service contractor.
        </p>
        <p className="text-gray-700">
          A welfare unit goes further. Ours connect to mains water and waste. They flush like a
          normal toilet. Each one has a wash basin with soap. They're insulated, so they stay
          usable in winter. Sensor-controlled lighting means no light switches to touch. If your
          site needs to meet welfare standards, not just provide a toilet, a welfare unit is the
          right choice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where Are Welfare Units Used?</h2>
        <p className="text-gray-700 mb-4">
          The same welfare unit adapts to almost anywhere people are working or gathering away
          from a permanent building.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Construction Sites</h3>
        <p className="text-gray-700 mb-4">
          This is the most common use. UK construction sites must provide welfare facilities by
          law. A welfare unit is the fastest way to have that in place before work starts. Our
          double and accessible units suit crews of different sizes. They arrive pre-plumbed, so
          they're ready before the first fix work even begins. Many contractors order a welfare
          unit alongside a security cabin or site office. That way, the whole welfare and access
          setup arrives in one trip.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Cafés, Catering & Food Trucks</h3>
        <p className="text-gray-700 mb-4">
          Mobile catering units, food trucks, and outdoor cafés often trade with no nearby
          plumbing. A welfare unit placed alongside gives staff and customers proper hand-washing
          and toilet facilities. It also helps meet food hygiene expectations at markets, pop-ups,
          and outdoor pitches. For seasonal or weekend trading, buying a welfare unit outright can
          work out cheaper than hiring facilities every time.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Outdoor Events & Festivals</h3>
        <p className="text-gray-700 mb-4">
          Event organisers use welfare units when large numbers of people need clean facilities
          for a short time. Each unit is self-contained. You can group several together at a
          festival or show ground with no permanent plumbing needed. Position them near ticket
          booths or main gathering points. That keeps queues and footfall manageable across a busy
          weekend.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Farms & Rural Sites</h3>
        <p className="text-gray-700 mb-4">
          Farms, stables, and other rural sites often sit far from the nearest bathroom. A welfare
          unit gives workers and visitors somewhere reliable to go, year-round. You avoid the cost
          of running mains plumbing to a field or outbuilding. The insulated build stays usable
          through a full British winter. That matters for sites that work outdoors in all weather.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sports Clubs & Community Facilities</h3>
        <p className="text-gray-700">
          Sports grounds, community events, and temporary clubhouses use welfare units for extra
          toilet capacity. This works well on match days or during a rebuild. The facility stays
          open while permanent work is done. One unit can cover a busy weekend fixture. An
          accessible unit means spectators and players with additional needs aren't left without
          proper facilities.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do You Need a Welfare Unit by Law?</h2>
        <p className="text-gray-700 mb-3">
          If you run a construction site in the UK, yes. Health and safety law requires sites to
          provide proper welfare facilities. That includes toilets and washing points for everyone
          working there. This isn't optional. It applies from day one, not just once the site is
          established.
        </p>
        <p className="text-gray-700">
          Outside construction, a welfare unit isn't always a legal requirement. But it's often
          the practical choice anywhere people work or gather without a permanent bathroom nearby.
          Not sure what your site needs? Your principal contractor or local authority can confirm
          the exact requirement.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing the Right Welfare Unit</h2>
        <p className="text-gray-700 mb-3">
          Our double welfare unit has two separate cubicles. It suits general site use, where a
          few people may need the facilities at once. It's the more common choice for construction
          crews and event welfare.
        </p>
        <p className="text-gray-700 mb-3">
          Our accessible welfare unit is a single wheelchair-accessible cubicle. It has a ramp and
          grab rails, sized to meet accessibility needs. Sites often order it alongside a double
          unit. That way, you offer both standard and accessible facilities together.
        </p>
        <p className="text-gray-700">
          Neither standard option quite fit? Our team can talk through extra cubicles or
          reinforced accessibility features to match your site.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Much Does a Welfare Unit Cost?</h2>
        <p className="text-gray-700 mb-3">
          Prices vary by size and spec. Our range starts at £2,699.99 for the double welfare unit
          and £2,999 for the accessible unit. Both are brand new and fully insulated. They're
          supplied ready to connect, so there are no extra fit-out costs once the unit arrives.
        </p>
        <p className="text-gray-700">
          When comparing prices, check what's included. A cheaper shell that still needs plumbing,
          wiring, or a wash basin fitted often costs more by the time it's usable. Ours arrive
          ready to plumb in and switch on. There's nothing extra to buy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Buying vs Hiring a Welfare Unit</h2>
        <p className="text-gray-700 mb-3">
          Hiring a welfare unit can suit a very short project. But the costs add up fast. Weekly
          hire charges, delivery and collection fees, and servicing costs stack up. After a few
          months, you may have spent close to the price of buying outright, without ever owning
          the unit.
        </p>
        <p className="text-gray-700">
          Need welfare facilities for more than a few months? Buying is usually cheaper in the
          long run. A purchased unit can move between sites. You can store it between projects, or
          sell it later. That makes it an asset, not an ongoing cost.
        </p>


        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation, Delivery & Connection</h2>
        <p className="text-gray-700 mb-3">
          Every welfare unit arrives ready for use, with little site prep needed. Each one is
          pre-wired and pre-plumbed for mains water, waste, and electricity. That makes connection
          a straightforward job for your plumber and electrician on delivery day.
        </p>
        <p className="text-gray-700">
          We deliver nationwide, with cost quoted by postcode. Or collect free from our warehouse
          in Leicester. Once connected, the sensor-controlled lighting and ventilation keep
          day-to-day upkeep down to routine cleaning.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Long Does a Welfare Unit Last?</h2>
        <p className="text-gray-700 mb-3">
          A well-maintained welfare unit lasts for years, not months. The steel frame resists
          rust. The insulated panels don't rot or warp like timber can. There's no paintwork to
          redo each season.
        </p>
        <p className="text-gray-700">
          Day-to-day upkeep is simple. Clean the cubicles as you would any bathroom. Check the
          plumbing and electrics at the same time as the rest of your site equipment. That's
          usually all it takes to keep a unit working properly for years of use.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-4">
          Here are the questions we hear most often from site managers, event organisers, and
          facilities teams ordering a welfare unit for the first time.
        </p>
        <div className="divide-y divide-gray-100">
          {faqs.map((item, i) => (
            <div key={i} className="py-4">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1.5">{item.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-6">
          Still not sure which welfare unit fits your site? Get in touch with your headcount and
          location. Our team will recommend the right size, confirm delivery timing, and talk
          through accessibility needs before you order.
        </p>
      </div>

      {/* SEO Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm">
          Our welfare units and portable toilet blocks suit construction sites, outdoor events,
          farms, and commercial premises. Each one is fully insulated, pre-plumbed, and pre-wired.
          They come in standard and wheelchair-accessible layouts, built to be easy to transport
          and simple to connect.
        </p>
      </div>
    </div>
  )
}

export default WelfareCabinsPage