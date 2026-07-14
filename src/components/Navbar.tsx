'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building, Phone, Info, FileText, ChevronDown } from 'lucide-react';
import AnnouncementBar from './announcement-bar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productUsesOpen, setProductUsesOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    setMobileMenuOpen(false);
    setProductUsesOpen(false);
  }, [pathname]);

  const navbarBg = 'bg-white py-4 shadow-md';
  const textColor = 'text-gray-700';
  const hoverBg = 'hover:bg-gray-100';

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <nav className={`transition-all duration-300 ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/CABINUNITSLOGO.png" alt="Cabin Units Logo" width={160} height={160} priority style={{ width: 'auto', height: 'auto' }} />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className={`px-4 py-3 rounded-md text-base font-medium ${textColor} ${hoverBg}`}>Home</Link>
              <Link href="/kiosks" className={`px-4 py-3 rounded-md text-base font-medium ${textColor} ${hoverBg}`}>Kiosks</Link>
              <div className="relative group">
                <button
                  type="button"
                  className={`px-4 py-3 rounded-md text-base font-medium ${textColor} ${hoverBg} flex items-center`}
                >
                  Product Uses
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link href="/portable-cabins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Portable cabins</Link>
                  <Link href="/security-gatehouse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Security gatehouses</Link>
                  <Link href="/festival-ticket-booths" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Festival ticket booths</Link>
                  <Link href="/construction-site-security-cabins" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Construction site cabins</Link>
                  <Link href="/car-park-kiosks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car park kiosk & cabins</Link>
                </div>
              </div>
              <Link href="/AboutUs" className={`px-4 py-3 rounded-md text-base font-medium ${textColor} ${hoverBg}`}>About</Link>
              <Link href="/blog" className={`px-4 py-3 rounded-md text-base font-medium ${textColor} ${hoverBg}`}>Blog</Link>
              <Link href="/ContactUs" className="ml-2 bg-blue-600 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-blue-700 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverBg}`}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              <Link href="/" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Home
              </Link>
              <Link href="/kiosks" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Building className="w-4 h-4 mr-2" />
                Kiosks
              </Link>
              <div className="px-3 py-2">
                <button
                  type="button"
                  onClick={() => setProductUsesOpen(!productUsesOpen)}
                  className="mb-2 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-gray-500"
                >
                  <span>Product Uses</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productUsesOpen ? 'rotate-180' : ''}`} />
                </button>
                {productUsesOpen && (
                  <div className="space-y-1">
                    <Link href="/portable-cabins" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Portable cabins
                    </Link>
                    <Link href="/security-gatehouse" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Security gatehouses
                    </Link>
                    <Link href="/festival-ticket-booths" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Festival ticket booths
                    </Link>
                    <Link href="/construction-site-security-cabins" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Construction site cabins
                    </Link>
                    <Link href="/car-park-kiosks" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                      Car park kiosk & cabins
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/AboutUs" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
              <Link href="/blog" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <FileText className="w-4 h-4 mr-2" />
                Blog
              </Link>
              <Link href="/ContactUs" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
    </nav>
    </div>
    {/* Spacer to push content below the fixed navbar + announcement bar */}
    <div className="h-[100px]" />
    </>
  );
};

export default Navbar;