'use client';

import Link from 'next/link';
import { ChevronRight, Award, Users, History, Truck, Phone } from 'lucide-react';

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
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Modular Kiosks</h1>
          <p className="text-blue-100 max-w-xl text-lg">
            Leading UK supplier of premium quality modular kiosks and portable buildings 
            designed for versatility, durability, and exceptional performance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="md:flex items-start">
            <div className="md:w-2/3 pr-0 md:pr-6">
              <p className="text-gray-700 mb-4">
                Since 2010, Modular Kiosks has been at the forefront of providing high-quality portable 
                buildings and kiosks to businesses across the UK. We specialize in manufacturing durable, 
                versatile, and customizable modular structures that meet the evolving needs of our diverse clientele.
              </p>
              <p className="text-gray-700">
                Our EU-manufactured kiosks are designed to exceptional standards, combining 
                functionality with aesthetic appeal. Whether you need security cabins, ticket booths, 
                or customized commercial spaces, our team delivers solutions that exceed expectations.
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

        {/* Core Values & Mission Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Statement */}
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To provide innovative, high-quality modular building solutions that enable businesses 
                to expand their operational capabilities with flexible, durable, and cost-effective 
                structures tailored to their specific requirements.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Our Values</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>Quality:</strong> Uncompromising standards in materials and craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>Innovation:</strong> Continuously improving our products and processes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full p-1 mr-2">
                    <ChevronRight className="h-3 w-3 text-blue-700" />
                  </span>
                  <span className="text-gray-700"><strong>Reliability:</strong> Dependable service and products you can trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Why Choose Modular Kiosks?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Award className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">EU-manufactured units built to exceptional standards with high-grade materials</p>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <History className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Extensive industry knowledge and proven track record of excellence</p>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Truck className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">UK-Wide Delivery</h3>
              <p className="text-gray-600 text-sm">Fast and reliable delivery service to all locations across the UK</p>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="bg-blue-100 rounded-full p-3 mb-3 group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Customer-Focused</h3>
              <p className="text-gray-600 text-sm">Dedicated support team ensuring your complete satisfaction</p>
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
                  Contact our team today to discuss how our modular kiosks can benefit your business.
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
            <strong>Modular Kiosks UK</strong> specializes in premium quality portable buildings including 
            security booths, ticket kiosks, information points, and custom modular structures for commercial 
            applications. Our EU-manufactured units feature fully-insulated steel sandwich panels, integrated 
            electrical installations, and forklift pockets for easy transportation.
          </p>
          <p className="text-gray-700 text-sm">
            Based in London and serving the entire United Kingdom, we provide versatile modular kiosk solutions 
            for various industries including construction, events, retail, security, and hospitality. Our buildings 
            are designed for durability, weather resistance, and long-term performance in all conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;