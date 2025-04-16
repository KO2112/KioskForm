'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building, Phone, Settings, Info } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage or not
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar styling based on page and scroll
  const navbarBg = scrolled 
    ? 'bg-white shadow-lg py-2' 
    : isHomePage 
      ? 'bg-transparent py-4' 
      : 'bg-white py-4 shadow-md'; // Non-home pages get white bg by default

  // Text color based on whether navbar is transparent
  const textColor = (scrolled || !isHomePage) ? 'text-gray-700' : 'text-white';
  const logoColor = (scrolled || !isHomePage) ? 'text-blue-700' : 'text-white';
  const hoverBg = (scrolled || !isHomePage) ? 'hover:bg-gray-100' : 'hover:bg-white/10';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building className={`w-8 h-8 ${logoColor}`} />
              <span className={`text-2xl font-bold ${logoColor}`}>KioskForm</span>
            </Link>
            
            
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} ${hoverBg}`}>Home</Link>
            <Link href="/kiosks" className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} ${hoverBg}`}>Kiosks</Link>
            
            <Link href="/AboutUs" className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} ${hoverBg}`}>About</Link>
            <Link href="/ContactUs" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center">
              <Phone className="w-4 h-5 mr-1" />
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverBg}`}
              aria-expanded="false"
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
            
            <Link href="/about" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Info className="w-4 h-4 mr-2" />
              About
            </Link>
            <Link href="/contact" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;