'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle, 
  Box, 
  
  Info, 
  
  Truck,
  Ruler,
  ThermometerSnowflake,
  BatteryCharging,
  
  Star,
  Image as ImageIcon,
  Shield as ShieldIcon,
  Coffee,
  Ticket,
  Users,
  HelpCircle
} from 'lucide-react';

const SmallKioskPage = () => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  // Images would be replaced with actual kiosk photos
  const images = [
    '/kiosk2.jpg',
    '/smallkiosk1.jpg',
    '/smallkiosk2.jpg',
    '/smallkiosk3.jpg',
  ];
  
  const specs = [
    { icon: Ruler, name: 'Dimensions', value: '143 × 143 cm (5ft × 5ft)' },
    { icon: Ruler, name: 'Interior Height', value: '2.10 meters' },
    { icon: Ruler, name: 'Window Dimensions', value: 'W64×H80 cm, foldable window W64×H40 cm' },
    { icon: Ruler, name: 'Weight', value: '350 kg approx.' },
    { icon: ThermometerSnowflake, name: 'Insulation', value: 'Fully insulated steel sandwich panels' },
    { icon: BatteryCharging, name: 'Electrical', value: 'Light, socket, fuse box (16 Amps)' },
  ];
  
  const applications = [
    { icon: Ticket, name: 'Ticket Booths' },
    { icon: ShieldIcon, name: 'Security Cabins' },
    { icon: Info, name: 'Information Points' },
    { icon: Coffee, name: 'Coffee/Beverage Shops' },
    { icon: Box, name: 'Gatehouses' },
    { icon: Box, name: 'Car Park Attendant Huts' },
    { icon: ShieldIcon, name: 'Surveillance Points' },
    { icon: Users, name: 'Welfare Units' },
  ];
  
  const faqs = [
    {
      question: 'How is the kiosk transported?',
      answer: 'The kiosk includes forklift pockets located within the base for easy transportation and positioning. It can be easily moved with standard forklift equipment.'
    },
    {
      question: 'Is installation included?',
      answer: 'Basic installation guidance is provided, but professional installation is recommended. The kiosk should be placed on a concrete base or steel beams for optimal stability and durability.'
    },
    {
      question: 'Can the kiosk be customized?',
      answer: 'Yes, the kiosk is suitable for adding brand identity, logos, and signboards. Custom color options and additional fixtures can be discussed when placing your order.'
    },
    {
      question: 'What electrical systems are included?',
      answer: 'The kiosk comes with basic electrical installation including lighting, power socket, and a 16 Amp fuse box. All electrical components meet EU safety standards.'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/kiosks" className="text-gray-500 hover:text-gray-700">Kiosks</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Small Modular Kiosk</span>
          </nav>
        </div>
      </div>

      {/* Product Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Images */}
          <div className="mb-8 lg:mb-0">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md mb-4">
              <div className="h-96 w-full relative bg-gray-100 flex items-center justify-center">
                <img 
                  src={images[activeThumbnail]} 
                  alt="Kiosk view" 
                  className="max-h-full max-w-full object-contain"
                />
                {/* 360 View Button */}
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all">
                  <ImageIcon className="h-5 w-5 text-blue-700" />
                </button>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => (
                <button 
                  key={index}
                  className={`border ${activeThumbnail === index ? 'border-blue-600' : 'border-gray-200'} rounded-md overflow-hidden h-20 bg-white flex items-center justify-center`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Small Modular Kiosk</h1>
            <p className="text-gray-600 mb-4">Ticket Booth | Security Kiosk | Catering Unit</p>
            
            {/* Price Tag */}
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">£1,999</span>
              <span className="ml-2 text-sm text-gray-500">including VAT</span>
            </div>
            
            {/* Short Description */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
              <p className="text-blue-800 text-sm">
                Brand new, strong and durable, fully insulated modular kiosk perfect for versatile applications.
                Built with premium materials to EU standards for durability in all weather conditions.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fully insulated steel sandwich panels for weather resistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Forklift pockets in the base for easy transportation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete electrical installation (Light, socket, 16 Amp fuse box)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Upward sliding and fixed windows for ventilation options</span>
                </li>
              </ul>
            </div>
            
            {/* Action Button */}
            <div className="space-y-3 mb-8">
              <Link 
                href="/ContactUs" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium shadow-sm transition-colors flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Delivery Info */}
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <Truck className="h-5 w-5 text-gray-500 mr-2" />
              <span>Free UK mainland delivery | Usually dispatched within 7-10 working days</span>
            </div>
            
            {/* USPs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Star className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">EU Manufactured</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <ThermometerSnowflake className="h-4 w-4 text-blue-700" />
                </div>
                <span className="text-sm text-gray-700">Fully Insulated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200">
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'applications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'faqs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="py-8">
            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                      {specs.map((spec, index) => (
                        <li key={index} className="px-4 py-3 flex items-center">
                          <div className="bg-blue-100 rounded-full p-2 mr-3">
                            <spec.icon className="h-4 w-4 text-blue-700" />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">{spec.name}</span>
                            <p className="text-sm text-gray-600">{spec.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Product Description</h3>
                  <div className="prose prose-blue max-w-none text-gray-700">
                    <p>
                      Our Small Modular Kiosk is brand new, strong, and durable, fully insulated with dimensions of 143×143 cm. 
                      This versatile unit is perfect for a wide range of applications.
                    </p>
                    <p>
                      Made of steel sandwich panels which provide tough, weather-resistant insulation, this kiosk
                      is designed to withstand various weather conditions while maintaining a comfortable interior environment.
                    </p>
                    <p>
                      The kiosk comes with forklift pockets located within the base for easy transportation and positioning. 
                      It's suitable to add brand identity, logos, and signboards to customize it for your specific needs.
                    </p>
                    <p>
                      For optimal stability and longevity, we recommend placing the kiosk on a concrete base or steel beams, 
                      making it a cost-effective alternative to traditional construction methods.
                    </p>
                    <p>
                      The unit features upward sliding and fixed windows, and comes with complete electrical 
                      installation including lighting, power socket, and a 16 Amp fuse box.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Versatile Applications</h3>
                <p className="text-gray-700 mb-8">
                  The Small Modular Kiosk can be utilized in numerous ways and is an ideal solution for many outdoor events 
                  and surveillance at various locations, including construction sites, industrial areas, and commercial premises.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {applications.map((app, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
                      <div className="bg-blue-100 rounded-full p-3 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                        <app.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <h4 className="font-medium text-gray-900">{app.name}</h4>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Customization Options</h4>
                  <p className="text-blue-800">
                    Our Small Modular Kiosk can be customized to meet your specific requirements. 
                    Contact us to discuss custom colors, additional fixtures, or special configurations 
                    to better suit your business needs.
                  </p>
                </div>
              </div>
            )}
            
            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-5">
                      <h4 className="font-medium text-gray-900 flex items-start mb-2">
                        <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Have more questions?</h4>
                  <p className="text-gray-700 mb-4">
                    Our team is ready to assist you with any inquiries regarding our modular kiosks.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Ready to learn more about our Small Modular Kiosk?</h2>
              <p className="text-blue-100">
                Our team is available to answer any questions and help you with your inquiry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/ContactUs"
                className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors shadow-md font-medium text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-blue max-w-none text-gray-600 text-sm">
          <h2>Modular Kiosk Ticket Booth Security Kiosk Catering Coffee Unit Portable Cabin</h2>
          <p>
            Our Small Modular Kiosk is a brand new, strong and durable, fully insulated unit measuring 143×143 cm. 
            It's designed to be useful in many ways and can be used as gatehouses, car park attendants, ticket kiosks, 
            information points, catering units, security cabins, offices, welfare units, catering buildings, 
            coffee/beverage shops, and many other uses.
          </p>
          <p>
            This modular kiosk is an ideal solution for many outdoor events and surveillance at various locations, 
            including construction sites, industrial areas, and commercial premises. We recommend placing it on a concrete base 
            or steel beams, thus making it a cost-effective alternative to traditional constructions.
          </p>
          <p>
            Made of steel sandwich panels which provide tough, weather-resistant insulation, our kiosk comes with forklift pockets 
            located within the base for easy transportation. It's suitable to add brand identity elements such as logos and signboards.
          </p>
          <p>
            The Small Modular Kiosk features outer dimensions of 1.43 meters × 1.43 meters (5ft × 5ft) with an interior height of 2.10 meters. 
            It includes windows measuring W64×H80 cm and a foldable window measuring W64×H40 cm. The unit weighs approximately 350 kg 
            and comes with upward sliding and fixed windows.
          </p>
          <p>
            Each kiosk is equipped with electrical installation including light, socket, and fuse box with 16 Amps power capacity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallKioskPage;