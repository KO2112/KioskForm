"use client"

import Link from "next/link"
import { ChevronRight, CheckCircle, Box, Shield, Info } from "lucide-react"

const KiosksPage = () => {
  const kiosks = [
    {
      id: "Kiosk-130x130-Reinforced",
      title: "Modular Kiosk 130x130cm Anti-Vandal",
      subtitle: "Security Hut | Ticket Booth | Surveillance Point",
      price: "£1999",
      dimensions: "130×130 cm",
      description: "Compact, durable kiosk with anti-vandal features and steel fence protection for enhanced security.",
      image: "/kiosk-130x130-1.png",
      features: [
        "Anti-vandal door/windows with steel fence protection",
        "Steel sandwich panels with weather-resistant insulation",
        "Internal reception desk and corner shelf included",
        "Complete electrical installation with double plug socket",
        "PVC flooring and lockable door for security",
        "Upward sliding and fixed windows for ventilation",
        "Weight: 170 kg approx.",
        "Internal height: 2.35 meters",
      ],
      applications: [
        "Security huts",
        "Surveillance points",
        "Ticket booths",
        "Gatehouses",
        "Car park attendants",
        "Information points",
        "Welfare units",
      ],
      icon: Shield,
    },
    {
      id: "Modular-Kiosk-130x130",
      title: "Modular Kiosk 130x130cm",
      subtitle: "Ticket Booth | Information Point | Catering Unit",
      price: "£1999",
      dimensions: "130×130 cm",
      description: "Versatile compact kiosk perfect for commercial applications with built-in reception desk.",
      image: "/modular-kiosk-130x130-1.jpg",
      features: [
        "Steel sandwich panels with weather-resistant insulation",
        "Internal reception desk and corner shelf included",
        "Complete electrical installation with double plug socket",
        "PVC flooring and lockable door for security",
        "Upward sliding and fixed windows for ventilation",
        "Customizable with logos and signboards",
        "Weight: 170 kg approx.",
        "Internal height: 2.35 meters",
      ],
      applications: [
        "Ticket booths",
        "Information points",
        "Coffee shops",
        "Catering units",
        "Portable offices",
        "Reception areas",
        "Customer service points",
      ],
      icon: Box,
    },
    {
      id: "small-kiosk",
      title: "Small Modular Kiosk",
      subtitle: "Ticket Booth | Security Kiosk | Catering Unit",
      price: "£1999",
      dimensions: "143×143 cm",
      description: "Brand new, strong and durable, fully insulated modular kiosk perfect for versatile applications.",
      image: "/kiosk2.jpg", // Replace with your actual image path
      features: [
        "Fully insulated steel sandwich panels for weather resistance",
        "Forklift pockets in the base for easy transportation",
        "Electrical installation: Light, socket, fuse box (16 Amps)",
        "Upward sliding and fixed windows",
        "Internal height: 2.10 meters",
        "Windows: W64×H80 cm, foldable window W64×H40 cm",
        "Weight: 350 kg approx.",
        "Customizable for brand identity and signage",
      ],
      applications: [
        "Ticket booths",
        "Security cabins",
        "Information points",
        "Coffee shops",
        "Gatehouses",
        "Car park attendant huts",
        "Surveillance points",
      ],
      icon: Box,
    },
    {
      id: "large-kiosk",
      title: "Large Modular Kiosk",
      subtitle: "Security Booth | Office | Catering Unit",
      price: "£2499",
      dimensions: "218×143 cm",
      description:
        "Spacious, durable and fully insulated modular building suitable for various commercial applications.",
      image: "/kiosk.jpg", // Replace with your actual image path
      features: [
        "Tough, weather-resistant steel sandwich panel construction",
        "Forklift pockets included in the base",
        "Electrical installation: Light, socket, fuse box (16 Amps)",
        "Upward sliding and fixed windows",
        "Internal height: 2.10 meters",
        "Windows: W128×H80 cm, foldable window W128×H40 cm",
        "Weight: 400 kg approx.",
        "Customizable exterior for branding needs",
      ],
      applications: [
        "Gatehouses",
        "Offices",
        "Security cabins",
        "Ticket kiosks",
        "Catering units",
        "Welfare units",
        "Information points",
      ],
      icon: Shield,
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
            <h1 className="text-2xl font-bold text-gray-900">Premium Modular Kiosks</h1>
            <p className="text-sm text-gray-600">EU manufactured portable buildings for commercial applications</p>
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
              Our high-quality modular kiosks are manufactured in the EU to exceptional standards, providing durable and
              versatile solutions for your business needs.
            </p>
          </div>
        </div>

        {/* Products Grid - Improved Layout with Larger Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {kiosks.map((kiosk) => (
            <div
              key={kiosk.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Product Image - Increased Height */}
              <div
                className="h-96 sm:h-128 w-full relative bg-blue-100" // Increased image heights
                style={{
                  backgroundImage: `url(${kiosk.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-block">
                      {kiosk.dimensions}
                    </span>
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {kiosk.price}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{kiosk.title}</h2>
                  <p className="text-blue-100 text-sm">{kiosk.subtitle}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700">{kiosk.description}</p>
                  <span className="text-green-600 font-bold text-lg ml-3">{kiosk.price}</span>
                </div>

                {/* Key Features */}
                <span className="font-bold text-gray-900 mb-2 text-sm">KEY FEATURES</span>
                <ul className="space-y-2 mb-5">
                  {kiosk.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Applications Tags */}
                <span className="font-bold text-gray-900 mb-2 text-sm">APPLICATIONS</span>
                <div className="flex flex-wrap gap-2">
                  {kiosk.applications.slice(0, 5).map((app, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                  {kiosk.applications.length > 5 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{kiosk.applications.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <Link
                  href={`/products/${kiosk.id}`}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full text-sm font-medium"
                >
                  View Kiosk
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight Section */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8 border border-gray-100">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Why Choose Our Modular Kiosks?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Weather Resistant</h3>
                  <p className="text-gray-600 text-sm">
                    Fully insulated steel sandwich panels protect against all elements
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Easy Transport</h3>
                  <p className="text-gray-600 text-sm">Forklift pockets in the base for simple relocation</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors">
                <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Ready to Use</h3>
                  <p className="text-gray-600 text-sm">Complete electrical installation included</p>
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
                <h2 className="text-2xl font-bold mb-2">Need a Custom Solution?</h2>
                <p className="text-blue-100">
                  Our modular kiosks can be customized to meet your specific requirements.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Modular Kiosk Solutions</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">What Makes Our Kiosks Different?</h3>
          <p className="text-gray-700 mb-4">
            Our modular kiosks represent the latest in portable building technology, manufactured to the highest
            European standards. Each unit combines durability with versatility, providing businesses with flexible space
            solutions that can be deployed quickly and efficiently. Unlike traditional construction, our modular
            approach allows for rapid installation without compromising on quality or functionality.
          </p>
          <p className="text-gray-700">
            Every kiosk is engineered with premium materials that ensure longevity even in challenging environments. The
            steel sandwich panel construction offers superior insulation properties, maintaining comfortable internal
            temperatures while minimizing energy consumption. This sustainable approach makes our kiosks both
            environmentally responsible and economically efficient for businesses of all sizes.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Versatile Applications Across Industries</h3>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Security Solutions</h4>
          <p className="text-gray-700 mb-4">
            For security professionals, our kiosks provide weatherproof, secure environments perfect for site monitoring
            and access control. The strategic window placement offers excellent visibility while maintaining security.
            Each unit can be equipped with additional security features to meet specific site requirements.
          </p>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Retail & Hospitality</h4>
          <p className="text-gray-700 mb-4">
            From ticket booths to coffee kiosks, our modular units create inviting customer service points with minimal
            setup time. The customizable exterior allows businesses to create brand-consistent experiences, while the
            durable construction ensures reliability even in high-traffic locations. Food service applications benefit
            from the easy-clean surfaces and robust electrical installations.
          </p>

          <h4 className="text-lg font-medium text-gray-800 mb-2">Event Management</h4>
          <p className="text-gray-700">
            Event organizers appreciate the portability and rapid deployment of our kiosks for temporary installations.
            Whether managing large festivals or corporate functions, these units provide professional-grade information
            points, ticketing solutions, and security stations that can be repositioned as needed throughout the event
            lifecycle.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Installation & Maintenance</h3>
          <p className="text-gray-700 mb-4">
            Each modular kiosk arrives ready for immediate use with minimal site preparation required. The integrated
            forklift pockets allow for straightforward positioning, while pre-installed electrical systems eliminate the
            need for specialized contractors. This plug-and-play approach significantly reduces deployment costs
            compared to traditional building methods.
          </p>
          <p className="text-gray-700">
            Our kiosks are designed for minimal maintenance with weather-resistant exteriors that require only routine
            cleaning. The robust construction ensures excellent longevity even in challenging environments, providing
            businesses with reliable service for years to come. All units include comprehensive documentation for any
            maintenance requirements that may arise.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Customization Options</h3>
          <p className="text-gray-700 mb-4">
            While our standard models meet most business requirements, we understand that some applications demand
            specialized features. Our design team can adapt any unit to accommodate specific operational needs, from
            additional service windows to specialized security features. Custom branding options ensure your kiosk
            becomes a seamless extension of your business identity.
          </p>
          <p className="text-gray-700">
            The modular nature of our construction allows for future expansion or reconfiguration as your business
            evolves. This adaptability represents a future-proof investment that can grow alongside your operations,
            offering remarkable value compared to fixed structures or less durable temporary solutions.
          </p>
        </div>
      </div>
      {/* SEO Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 mt-6">
        <p className="text-gray-600 text-sm">
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
