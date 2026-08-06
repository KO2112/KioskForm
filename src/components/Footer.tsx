'use client';

import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { href: '/AboutUs', label: 'About Cabinunits' },
  { href: '/kiosks', label: 'Our Cabin | Kiosk Products' },
  { href: '/ContactUs', label: 'Services' },
  { href: '/ContactUs', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const solutions = [
  { href: '/security-gatehouse', label: 'Security Gatehouses' },
  { href: '/festival-ticket-booths', label: 'Ticket Booths' },
  { href: '/portable-cabins', label: 'Portable Cabins' },
  { href: '/welfare-cabins', label: 'Welfare Cabins' },
  { href: '/construction-site-security-cabins', label: 'Construction Site Cabins' },
  { href: '/car-park-kiosks', label: 'Car Park Kiosks & Cabins' },
  { href: '/kiosks', label: 'Modular and Portable Cabins' },
];

/* Notched corner, same geometry as the navbar CTA */
const notch = { clipPath: 'polygon(0 0, 100% 0, 100% 62%, 88% 100%, 0 100%)' } as const;

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link
      href={href}
      className="group relative block py-2 text-[15px] font-medium text-slate-300 motion-safe:transition-colors hover:text-white"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 origin-center scale-y-0 bg-[#F97316] motion-safe:transition-transform motion-safe:duration-200 group-hover:scale-y-100"
      />
      <span className="block motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-2.5">
        {label}
      </span>
    </Link>
  </li>
);

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="relative mb-5 pb-3 text-[13px] font-bold uppercase tracking-[0.16em] text-white">
    {children}
    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-9 bg-[#F97316]" />
  </h4>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A1B3D] text-white">
    
      {/* ---------- Main columns ---------- */}
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Company */}
          <div>
            <h4 className="text-[22px] font-bold tracking-tight text-white">Cabin Units</h4>
            <span aria-hidden="true" className="mt-3 block h-[3px] w-12 bg-[#F97316]" />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-300">
              High-quality modular kiosks and portable buildings, built in the EU to top-tier standards. Cabin Units
              supplies a range of kiosks and cabins for retail, security, catering, and more.
            </p>

            <div className="mt-7 space-y-3.5">
              <a
                href="mailto:info@cabinunits.co.uk"
                className="flex items-center gap-3 text-[15px] text-slate-300 hover:text-white motion-safe:transition-colors"
              >
                <Mail className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                info@cabinunits.co.uk
              </a>
              <a
                href="tel:07497954779"
                className="flex items-center gap-3 text-[15px] font-semibold tabular-nums text-white hover:text-[#F97316] motion-safe:transition-colors"
              >
                <Phone className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                07497 954 779
              </a>
              <p className="flex items-center gap-3 text-[15px] text-slate-300">
                <Clock className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                Mon–Sat, 08:00–18:00
              </p>
              <p className="flex items-center gap-3 text-[15px] text-slate-300">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                Delivered nationwide across the UK
              </p>
            </div>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://uk.pinterest.com/CabinUnits/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cabin Units on Pinterest"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-slate-300 motion-safe:transition-colors hover:border-[#F97316] hover:bg-[#F97316] hover:text-white"
              >
                <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.283 1.194.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.487 0-2.869-2.062-4.877-5.007-4.877-3.41 0-5.409 2.559-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.436-2.878-2.436-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.361-.629-2.75-1.378l-.748 2.854c-.271 1.043-1.002 2.351-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.607 0 11.979-5.367 11.979-11.987C23.996 5.367 18.624 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul>
              {quickLinks.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <ColumnHeading>Modular Solutions</ColumnHeading>
            <ul>
              {solutions.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10 bg-[#08152F]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <p className="text-[13px] leading-relaxed text-slate-400">
            © {currentYear} Cabin Units. All rights reserved.
            <span className="block lg:ml-1 lg:inline">
              A trusted UK modular building manufacturer, delivering high-quality portable buildings nationwide.
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-6">
            <Link href="/terms-and-conditions" className="text-[13px] text-slate-400 hover:text-white motion-safe:transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="text-[13px] text-slate-400 hover:text-white motion-safe:transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;