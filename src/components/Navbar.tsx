'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building, Phone, Info, FileText } from 'lucide-react';
import AnnouncementBar from './announcement-bar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {

    setMobileMenuOpen(false);
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
