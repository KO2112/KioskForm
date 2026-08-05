'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Clock, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  One image for the whole Product Uses panel.                        */
/*  File must live at /public/150x210kiosk2.jpg                        */
/* ------------------------------------------------------------------ */
const USES_IMAGE = '/150x210kiosk2.jpg';

/* Where the "Show all" button points */
const USES_SHOW_ALL = { href: '/kiosks', label: 'Show All Cabins & Kiosks' };

const productUses = [
  { href: '/portable-cabins', label: 'Portable cabins' },
  { href: '/security-gatehouse', label: 'Security gatehouses' },
  { href: '/festival-ticket-booths', label: 'Festival ticket booths' },
  { href: '/construction-site-security-cabins', label: 'Construction site cabins' },
  { href: '/car-park-kiosks', label: 'Car park kiosks' },
];

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/kiosks', label: 'Cabins & Kiosks' },
  { href: '/welfare-cabins', label: 'Welfare Cabins' },
];

const endLinks = [
  { href: '/AboutUs', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUsesOpen, setMobileUsesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const usesRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Hover intent: short grace period so the mouse can travel into the panel */
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = (delay = 220) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), delay);
  };
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  /* Close everything on navigation */
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileUsesOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  /* Subtle lift once the page starts scrolling */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape closes; click anywhere outside closes the dropdown */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (usesRef.current && !usesRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  /* Lock body scroll while the drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const usesActive = productUses.some((u) => pathname.startsWith(u.href));

  const linkClass = (active: boolean) =>
    `relative px-3.5 py-3 text-[16px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
      active ? 'text-[#0B4FD1]' : 'text-slate-700 hover:text-[#0B4FD1]'
    }`;

  const underline = (active: boolean) =>
    `absolute inset-x-3.5 -bottom-0.5 h-[3px] bg-[#F97316] origin-left motion-safe:transition-transform motion-safe:duration-200 ${
      active ? 'scale-x-100' : 'scale-x-0'
    }`;

  /* Notched corner, cut from the same geometry as the logo mark */
  const notch = { clipPath: 'polygon(0 0, 100% 0, 100% 62%, 88% 100%, 0 100%)' } as const;

  /* One row in the mega menu */
  const usesRow = (u: { href: string; label: string }) => {
    const active = pathname.startsWith(u.href);
    return (
      <Link
        key={u.href}
        href={u.href}
        className={`group flex items-center justify-between gap-4 border-b border-slate-200 py-4 text-[15px] font-medium tracking-tight motion-safe:transition-colors ${
          active ? 'text-[#F97316]' : 'text-slate-700 hover:text-[#0B4FD1]'
        }`}
      >
        <span className="motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-1">
          {u.label}
        </span>
        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-[#0B4FD1]" />
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[100px] border-b border-slate-200/80 bg-white motion-safe:transition-shadow ${
          scrolled ? 'shadow-[0_2px_18px_rgba(10,27,61,0.10)]' : ''
        }`}
      >
        <div className="mx-auto flex h-[100px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          {/* ---------- Logo, hard left ---------- */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Cabin Units — home">
            <div className="relative h-[76px] w-[205px] 2xl:h-[82px] 2xl:w-[225px]">
              <Image
                src="/CABINUNITSLOGOUKCU.png"
                alt="Cabin Units Logo"
                fill
                priority
                sizes="(min-width: 1536px) 225px, 205px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* ---------- Links, centre ---------- */}
          <div className="hidden flex-1 items-center justify-center xl:flex">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(isActive(l.href))}>
                {l.label}
                <span className={underline(isActive(l.href))} />
              </Link>
            ))}

            {/* Product Uses */}
            <div ref={usesRef} className="relative" onMouseEnter={openMega} onMouseLeave={() => closeMega()}>
              <button
                type="button"
                onClick={() => (megaOpen ? closeMega(0) : openMega())}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={`${linkClass(usesActive)} flex items-center gap-1.5`}
              >
                Product Uses
                <ChevronDown
                  className={`h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 ${
                    megaOpen ? 'rotate-180' : ''
                  }`}
                />
                <span className={underline(usesActive)} />
              </button>

              {/* Invisible bridge so the mouse can travel down without closing */}
              <span aria-hidden="true" className={`absolute -inset-x-8 top-full h-10 ${megaOpen ? 'block' : 'hidden'}`} />

              {/* ---------- Compact mega panel ---------- */}
              <div
                onMouseEnter={openMega}
                className={`fixed left-1/2 top-[100px] z-40 w-[min(92vw,980px)] -translate-x-1/2 rounded-b-2xl border-b border-slate-200 bg-[#F7F8FA] shadow-[0_24px_40px_-20px_rgba(10,27,61,0.30)] motion-safe:transition-all motion-safe:duration-250 motion-safe:ease-out ${
                  megaOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="mx-auto grid max-w-[980px] grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)_200px] gap-x-8 px-4 py-6 sm:px-6 lg:px-8">
                  {/* --- Picture, left --- */}
                  <div className="h-[240px] w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
                    {USES_IMAGE ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={USES_IMAGE} alt="" className="h-full w-full object-cover" />
                    ) : null}
                  </div>

                  {/* --- Column one --- */}
                  <div>{productUses.slice(0, 3).map(usesRow)}</div>

                  {/* --- Column two --- */}
                  <div>{productUses.slice(3).map(usesRow)}</div>

                  {/* --- Show all --- */}
                  <div>
                    <Link
                      href={USES_SHOW_ALL.href}
                      className="block border border-slate-300 bg-white px-5 py-4 text-[15px] font-medium tracking-tight text-slate-700 motion-safe:transition-colors hover:border-[#0B4FD1] hover:text-[#0B4FD1]"
                    >
                      {USES_SHOW_ALL.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {endLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(isActive(l.href))}>
                {l.label}
                <span className={underline(isActive(l.href))} />
              </Link>
            ))}
          </div>

          {/* ---------- Contact + CTA, right ---------- */}
          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <div className="flex flex-col items-end leading-tight">
              <a
                href="tel:07497954779"
                className="flex items-center gap-2 text-[16px] font-bold tracking-tight text-[#0A1B3D] hover:text-[#0B4FD1]"
              >
                <Phone className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
                <span className="tabular-nums">07497 954 779</span>
              </a>
              <a
                href="mailto:info@cabinunits.co.uk"
                className="mt-1 hidden text-[12px] font-medium text-slate-500 hover:text-[#0B4FD1] 2xl:block"
              >
                info@cabinunits.co.uk
              </a>
              <span className="mt-1 flex items-center gap-1.5 text-[12px] font-medium text-slate-500 2xl:hidden">
                <Clock className="h-3 w-3" aria-hidden="true" />
                Mon–Sat 08:00–18:00
              </span>
            </div>

            <span className="h-11 w-px bg-slate-200" aria-hidden="true" />

            <Link
              href="/ContactUs?interest=quote"
              style={notch}
              className="group inline-flex min-h-14 items-center gap-2.5 bg-[#F97316] px-7 py-4 text-[16px] font-bold tracking-tight text-white hover:bg-[#EA6306] motion-safe:transition-colors"
            >
              Get a quote
              <ArrowRight className="h-[18px] w-[18px] motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ---------- Mobile controls ---------- */}
          <div className="flex items-center gap-1 xl:hidden">
            <a
              href="tel:07497954779"
              aria-label="Call Cabin Units"
              className="inline-flex h-12 w-12 items-center justify-center rounded-md text-[#0B4FD1] hover:bg-slate-100"
            >
              <Phone className="h-[22px] w-[22px]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-md text-slate-800 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="h-[26px] w-[26px]" /> : <Menu className="h-[26px] w-[26px]" />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A1B3D]/40 motion-safe:transition-opacity xl:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl motion-safe:transition-transform motion-safe:duration-300 xl:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-slate-200 px-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-800 hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b border-slate-100 py-3.5 text-[17px] font-semibold tracking-tight ${
                isActive(l.href) ? 'text-[#0B4FD1]' : 'text-slate-800'
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div className="border-b border-slate-100">
            <button
              type="button"
              onClick={() => setMobileUsesOpen((v) => !v)}
              aria-expanded={mobileUsesOpen}
              className={`flex w-full items-center justify-between py-3.5 text-[17px] font-semibold tracking-tight ${
                usesActive ? 'text-[#0B4FD1]' : 'text-slate-800'
              }`}
            >
              Product Uses
              <ChevronDown
                className={`h-5 w-5 text-slate-400 motion-safe:transition-transform ${
                  mobileUsesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileUsesOpen && (
              <div className="border-l-2 border-[#F97316] pb-3 pl-3">
                {productUses.map((u) => (
                  <Link
                    key={u.href}
                    href={u.href}
                    className={`block py-2 text-[15px] font-medium ${
                      pathname.startsWith(u.href) ? 'text-[#0B4FD1]' : 'text-slate-600'
                    }`}
                  >
                    {u.label}
                  </Link>
                ))}
                <Link
                  href={USES_SHOW_ALL.href}
                  className="mt-2 block border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-medium text-slate-700"
                >
                  {USES_SHOW_ALL.label}
                </Link>
              </div>
            )}
          </div>

          {endLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b border-slate-100 py-3.5 text-[17px] font-semibold tracking-tight ${
                isActive(l.href) ? 'text-[#0B4FD1]' : 'text-slate-800'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t border-slate-200 bg-slate-50 p-5">
          <Link
            href="/ContactUs?interest=quote"
            style={notch}
            className="flex items-center justify-center gap-2 bg-[#F97316] px-5 py-3.5 text-[16px] font-bold text-white"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-4 space-y-2 text-[14px]">
            <a href="tel:07497954779" className="flex items-center gap-2.5 font-semibold text-slate-800">
              <Phone className="h-4 w-4 text-[#0B4FD1]" />
              07497 954 779
            </a>
            <a href="mailto:info@cabinunits.co.uk" className="flex items-center gap-2.5 text-slate-600">
              <Mail className="h-4 w-4 text-[#0B4FD1]" />
              info@cabinunits.co.uk
            </a>
            <p className="flex items-center gap-2.5 text-slate-600">
              <Clock className="h-4 w-4 text-[#0B4FD1]" />
              Mon–Sat, 08:00–18:00
            </p>
          </div>
        </div>
      </div>

      {/* Keep this at 100px so the breadcrumb/content spacing does not increase. */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;