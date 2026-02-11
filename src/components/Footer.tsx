'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 w-full">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Modular Building Solutions</h4>
              <p className="text-gray-700 mb-4">
              High-quality modular kiosks and portable buildings, built in the EU to top-tier standards.
              As one of the UK's leading modular building companies, we offer custom solutions for retail, security, catering, and more.
             </p>

              <div className="text-gray-700">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@cabinunits.co.uk</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>07497954779</span>
                </div>
              </div>
            </div>
            
           
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/AboutUs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    About Cabinunits
                  </Link>
                </li>
                <li>
                  <Link href="/kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Our Kiosk Products
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Modular Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Security Kiosks
                  </Link>
                </li>
                <li>
                  <Link href="/kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Ticket Booths
                  </Link>
                </li>
                <li>
                  <Link href="/kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Portable Offices
                  </Link>
                </li>
                <li>
                  <Link href="/kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Custom Modular Buildings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="bg-gray-800 py-6 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Modular Building Solutions. All rights reserved. 
             <span className="block md:inline md:ml-1">
               A trusted UK modular building manufacturer, delivering high-quality portable buildings nationwide.</span>
            </p>
            <div className="flex space-x-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;