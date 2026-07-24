'use client';

import Link from 'next/link';
import { ChevronRight, Award, Users, MapPin, Truck, Phone, Box } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Background */}
      <div className="relative bg-blue-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/kiosk.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Cabin Units</h1>
          <p className="text-blue-100 max-w-xl text-lg">
            We supply brand new, EU-manufactured portable cabins, kiosks and
            welfare units from our warehouse in Leicester — insulated,
            pre-wired and delivered ready to work, anywhere in the UK.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
          <div className="md:flex items-start">
            <div className="md:w-2/3 pr-0 md:pr-6">
              <p className="text-gray-700 mb-4">
                Cabin Units is a Leicester-based supplier of compact portable
                buildings: security kiosks, ticket booths, gatehouses, site
                cabins and welfare units. Every unit we sell is brand new and
                manufactured in the EU from insulated steel sandwich panels,
                then pre-wired with lighting, sockets and a fuse box — so it
                works from the day it arrives.
              </p>
              <p className="text-gray-700 mb-4">
                We keep our cabins in stock at our Leicester warehouse
                (LE1 3BW), which means fast dispatch rather than long factory
                lead times — and you're welcome to visit and look inside a
                unit before you buy. Collection is free; UK-wide delivery is
                quoted by postcode.
              </p>
              <p className="text-gray-700">
                Our customers are parking operators, security firms, event
                organisers, councils, facilities teams and construction
                companies across the UK. The photos on our homepage are our
                actual units on real sites — that's the work we stand behind.
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <div
                className="h-64 w-full rounded-lg bg-blue-100"
                style={{
                  backgroundImage: 'url(/kiosk.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* What we promise */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">What we promise</h2>
              </div>
              <p className="text-gray-700">
                Straight answers, honest prices and cabins that match their
                spec sheets. Every price on our site is the real price
                (excluding VAT and shipping), every unit listed as in stock
                is physically in our warehouse, and if a cabin isn't right
                for your job, we'll say so.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">How we work</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>Stock, not lead times:</strong> standard units dispatch fast from Leicester</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>See before you buy:</strong> warehouse viewings welcome by arrangement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>Ready to connect:</strong> pre-wired units your electrician connects on site</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Why buy from Cabin Units?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Award className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">EU-Manufactured</h3>
              <p className="text-gray-600 text-sm">Insulated steel sandwich panel construction with galvanised frames, built to European standards</p>
            </div>

            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Box className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">In Stock</h3>
              <p className="text-gray-600 text-sm">Standard units held at our Leicester warehouse for fast dispatch or free collection</p>
            </div>

            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">UK-Wide Delivery</h3>
              <p className="text-gray-600 text-sm">Delivery to any UK postcode, quoted individually — units arrive fully assembled</p>
            </div>

            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Leicester Based</h3>
              <p className="text-gray-600 text-sm">A real warehouse you can visit: Unit 7D, 66 Friday Street, Leicester LE1 3BW</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-blue-100">
                  Tell us what the cabin is for and where it's going — we'll come back with a price and a delivery date.
                </p>
              </div>
              <Link
                href="/ContactUs"
                className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium"
              >
                Contact Us
                <Phone className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Rich Footer Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="sr-only">Additional Information</h2>
          <p className="text-gray-700 text-sm mb-3">
            <strong>Cabin Units</strong> supplies brand new portable buildings
            including security booths, ticket kiosks, gatehouses, portable
            cabins, toilet blocks and welfare units for commercial use. Every
            unit features fully-insulated steel sandwich panels, integrated
            electrical installations and a forklift-ready base for easy
            transport and repositioning.
          </p>
          <p className="text-gray-700 text-sm">
            Based in Leicester and serving the entire United Kingdom, we
            supply parking operators, security companies, event organisers,
            councils and construction sites. Browse our{' '}
            <Link href="/portable-cabins" className="text-blue-700 font-medium hover:underline">
              portable cabins
            </Link>
            ,{' '}
            <Link href="/kiosks" className="text-blue-700 font-medium hover:underline">
              kiosk range
            </Link>{' '}
            and{' '}
            <Link href="/welfare-cabins" className="text-blue-700 font-medium hover:underline">
              welfare cabins
            </Link>
            , or visit our Leicester warehouse to see the units in person.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;