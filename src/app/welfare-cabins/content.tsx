"use client"

import Link from "next/link"
import { ChevronRight, CheckCircle, Box, Shield, Info } from "lucide-react"

const WelfareCabinsPage = () => {
  const welfareCabins = [
    {
      id: "Portable-Double-Toilet-Block",
      title: "Portable Double Toilet Block",
      subtitle: "Prefabricated WC Unit | Insulated Toilet Cabin | Ready for Connection",
      price: "£2,699.99",
      dimensions: "160×210×256 cm",
      description: "Brand new, heavy-duty portable double toilet cabin with two separate WC cubicles and full ready-to-connect plumbing and electrical systems.",
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
      subtitle: "Accessible WC Unit | Wheelchair Access | Ready for Connection",
      price: "£2,999",
      dimensions: "170×170×256 cm",
      description: "Heavy-duty accessible portable toilet cabin with ramp, grab rails, ceramic toilet, wash basin, and full ready-to-connect services.",
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

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {" "}
      {/* Added pt-16 to account for fixed navbar height */}
      {/* Header Section - Now properly spaced below navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Welfare Cabins & Portable Toilet Blocks</h1>
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
              Our welfare cabins are brand new, fully insulated, and ready to connect on delivery.
            </p>
          </div>
        </div>

       

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
            <h2 className="text-xl font-bold text-gray-900 mb-5">Why Choose Our Welfare Cabins?</h2>
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
                <h2 className="text-2xl font-bold mb-2">Need Welfare Facilities on Site?</h2>
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
      {/* Product Information Section - Add this before the SEO Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Welfare Cabin Solutions</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What Makes Our Welfare Cabins Different?</h3>
          <p className="text-gray-700 mb-4">
            Our welfare cabins represent the latest in portable building technology, manufactured to the highest
            standards. Each unit combines durability with hygiene, providing sites with flexible facilities
            that can be deployed quickly and connected the same day they arrive. Unlike traditional construction, our modular
            approach allows for rapid installation without compromising on quality or functionality.
          </p>
          <p className="text-gray-700">
            Every unit is engineered with premium materials that ensure longevity even in challenging environments. The
            insulated steel construction offers superior weather resistance, while sensor-controlled lighting and
            ventilation keep interiors comfortable and clean. This approach makes our welfare cabins both
            practical and cost-effective for sites of all sizes.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Versatile Applications Across Industries</h3>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Construction Sites</h4>
          <p className="text-gray-700 mb-4">
            UK sites are required to provide adequate welfare facilities for everyone working there. Our welfare
            cabins give site managers a fast way to meet that requirement, with double and accessible options to
            suit any size of workforce.
          </p>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Events & Festivals</h4>
          <p className="text-gray-700 mb-4">
            Event organizers rely on our welfare cabins for clean, private facilities that can be positioned
            anywhere on site and connected quickly, with no need to wait on permanent plumbing work.
          </p>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Farms & Rural Sites</h4>
          <p className="text-gray-700">
            Farms and rural commercial premises use our welfare cabins where permanent facilities aren't practical,
            giving workers and visitors reliable access to toilets and washing points year-round.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Installation & Maintenance</h3>
          <p className="text-gray-700 mb-4">
            Each welfare cabin arrives ready for immediate use with minimal site preparation required. Pre-wired and
            pre-plumbed for mains water, waste, and electricity, connection is a simple job for your plumber and
            electrician on the day it arrives.
          </p>
          <p className="text-gray-700">
            Our welfare cabins are designed for minimal maintenance with weather-resistant exteriors and
            sensor-controlled systems that require only routine cleaning. The robust construction ensures excellent
            longevity even in challenging environments, providing sites with reliable service for years to come.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Customization Options</h3>
          <p className="text-gray-700 mb-4">
            While our standard models meet most site requirements, we understand that some applications demand
            specialized features. Our design team can adapt any unit to accommodate specific operational needs, from
            additional cubicles to reinforced accessibility features.
          </p>
          <p className="text-gray-700">
            The modular nature of our construction allows for future expansion or reconfiguration as your site
            evolves, offering remarkable value compared to fixed structures or less durable temporary solutions.
          </p>
        </div>
      </div>
      {/* SEO Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm">
          Our welfare cabins and portable toilet blocks are designed for construction sites, outdoor events, farms,
          and commercial premises. Each unit features fully insulated construction, pre-plumbed electrical and water
          installations, and easy transportation options. Available in standard and wheelchair-accessible layouts,
          our welfare cabins provide durable and hygienic facilities for sites across various industries.
        </p>
      </div>
    </div>
  )
}

export default WelfareCabinsPage