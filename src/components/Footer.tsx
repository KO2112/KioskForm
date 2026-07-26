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
              <h4 className="text-lg font-bold text-gray-900 mb-4">Cabin Units</h4>
              <p className="text-gray-700 mb-4">
              High-quality modular kiosks and portable buildings, built in the EU to top-tier standards.
              As one of the UK's leading modular building companies, we offer custom solutions for retail, security, catering, and more.
             </p>

              <div className="text-gray-700 mb-4">
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

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://uk.pinterest.com/CabinUnits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cabin Units on Pinterest"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#E60023] hover:border-[#E60023]/40 transition-colors"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.283 1.194.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.487 0-2.869-2.062-4.877-5.007-4.877-3.41 0-5.409 2.559-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.436-2.878-2.436-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.361-.629-2.75-1.378l-.748 2.854c-.271 1.043-1.002 2.351-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.607 0 11.979-5.367 11.979-11.987C23.996 5.367 18.624 0 12.017 0z"/>
                  </svg>
                </a>
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
                <li>
                  <Link href="/terms-and-conditions" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Modular Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/security-gatehouse" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Security Gatehouses
                  </Link>
                </li>
                <li>
                  <Link href="/festival-ticket-booths" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Ticket Booths
                  </Link>
                </li>
                <li>
                  <Link href="/portable-cabins" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Portable Cabins
                  </Link>
                </li>
                <li>
                  <Link href="/welfare-cabins" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Welfare Cabins
                  </Link>
                </li>
                <li>
                  <Link href="/construction-site-security-cabins" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Construction Site Cabins
                  </Link>
                </li>
                <li>
                  <Link href="/car-park-kiosks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center text-base font-medium">
                    <svg className="h-3 w-3 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Car Park Kiosks & Cabins
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
              © {currentYear} Cabin Units. All rights reserved. 
             <span className="block md:inline md:ml-1">
               A trusted UK modular building manufacturer, delivering high-quality portable buildings nationwide.</span>
            </p>
            <div className="flex space-x-6">
              <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;