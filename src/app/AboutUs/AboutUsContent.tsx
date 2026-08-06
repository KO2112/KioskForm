'use client';

import Link from 'next/link';

/* Notched corner, same geometry as the navbar and footer CTA */
const notch = { clipPath: 'polygon(0 0, 100% 0, 100% 62%, 88% 100%, 0 100%)' } as const;

const facts = [
  { k: 'Based', v: 'Leicester, LE1 3BW' },
  { k: 'Built', v: 'EU manufactured' },
  { k: 'Stock', v: 'Held, not ordered' },
  { k: 'Delivery', v: 'Any UK postcode' },
];

const method = [
  {
    n: '01',
    t: 'Stock, not lead times',
    d: 'Standard units sit in the Leicester warehouse and dispatch fast. You are not waiting on a factory slot.',
  },
  {
    n: '02',
    t: 'See before you buy',
    d: 'Come and walk inside a unit by arrangement. Collection from Leicester is free if you want to take it yourself.',
  },
  {
    n: '03',
    t: 'Ready to connect',
    d: 'Lighting, sockets and a fuse box are fitted before it leaves us. Your electrician connects it on site.',
  },
];

const reasons = [
  {
    t: 'EU manufactured',
    d: 'Insulated steel sandwich panels on galvanised frames, built to European standards.',
  },
  {
    t: 'In stock',
    d: 'Standard units held at our Leicester warehouse for fast dispatch or free collection.',
  },
  {
    t: 'UK-wide delivery',
    d: 'Quoted by postcode. Units arrive fully assembled and forklift-ready for repositioning.',
  },
  {
    t: 'A real warehouse',
    d: 'Unit 7D, 66 Friday Street, Leicester LE1 3BW. Visit it, look inside, decide then.',
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-[#0A1B3D] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'url(/kiosk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0A1B3D] via-[#0A1B3D]/85 to-[#0A1B3D]/40" />

        <div className="relative mx-auto max-w-[1280px] px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F97316]">About us</p>
          <h1 className="mt-4 max-w-3xl text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px]">
            Brand new cabins, in stock in Leicester, working the day they land.
          </h1>
          <span aria-hidden="true" className="mt-6 block h-[3px] w-16 bg-[#F97316]" />
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-300">
            We supply EU-manufactured portable cabins, kiosks and welfare units from our own warehouse — insulated,
            pre-wired and delivered ready to work, anywhere in the UK.
          </p>
        </div>

        {/* Facts strip */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {facts.map((f, i) => (
              <div
                key={f.k}
                className={`py-6 lg:py-7 ${i % 2 === 1 ? 'border-l border-white/10 pl-6' : ''} ${
                  i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''
                } ${i >= 1 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{f.k}</p>
                <p className="mt-1.5 text-[16px] font-bold tracking-tight text-white sm:text-[17px]">{f.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
          <div>
            <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#0A1B3D] sm:text-[32px]">
              Who we are
            </h2>
            <span aria-hidden="true" className="mt-4 block h-[3px] w-12 bg-[#F97316]" />

            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-slate-700">
              <p>
                Cabin Units is a Leicester-based supplier of compact portable buildings: security kiosks, ticket
                booths, gatehouses, site cabins and welfare units. Every unit we sell is brand new and manufactured in
                the EU from insulated steel sandwich panels, then pre-wired with lighting, sockets and a fuse box.
              </p>
              <p>
                We keep our cabins in stock at our Leicester warehouse, which means fast dispatch rather than long
                factory lead times — and you&apos;re welcome to visit and look inside a unit before you buy.
                Collection is free; UK-wide delivery is quoted by postcode.
              </p>
              <p>
                Our customers are parking operators, security firms, event organisers, councils, facilities teams and
                construction companies across the UK. The photos on our homepage are our actual units on real sites.
                That&apos;s the work we stand behind.
              </p>
            </div>
          </div>

          <div className="lg:pt-2">
            <div
              className="h-[300px] w-full border border-slate-200 bg-slate-100 lg:h-[380px]"
              style={{ backgroundImage: 'url(/kiosk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <p className="mt-3 text-[13px] text-slate-500">A standard unit at our Leicester warehouse.</p>
          </div>
        </div>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#0A1B3D] sm:text-[32px]">
            How we work
          </h2>
          <span aria-hidden="true" className="mt-4 block h-[3px] w-12 bg-[#F97316]" />

          <div className="mt-10 grid gap-px bg-slate-200 md:grid-cols-3">
            {method.map((m) => (
              <div key={m.n} className="bg-slate-50 p-7 md:p-8">
                <p className="text-[34px] font-bold leading-none tracking-tight text-[#F97316]">{m.n}</p>
                <h3 className="mt-5 text-[19px] font-bold tracking-tight text-[#0A1B3D]">{m.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What we promise ---------- */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="border-l-4 border-[#F97316] pl-7 sm:pl-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">What we promise</p>
          <p className="mt-5 max-w-3xl text-[22px] font-semibold leading-[1.45] tracking-tight text-[#0A1B3D] sm:text-[26px]">
            Every price on this site is the real price, excluding VAT and shipping. Every unit listed as in stock is
            physically in our warehouse. And if a cabin isn&apos;t right for your job, we&apos;ll tell you so.
          </p>
        </div>
      </section>

      {/* ---------- Why buy from us ---------- */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#0A1B3D] sm:text-[32px]">
            Why buy from Cabin Units
          </h2>
          <span aria-hidden="true" className="mt-4 block h-[3px] w-12 bg-[#F97316]" />

          <dl className="mt-10 border-t border-slate-200">
            {reasons.map((r) => (
              <div
                key={r.t}
                className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[260px_minmax(0,1fr)] sm:gap-10 sm:py-7"
              >
                <dt className="text-[17px] font-bold tracking-tight text-[#0A1B3D]">{r.t}</dt>
                <dd className="text-[16px] leading-relaxed text-slate-600">{r.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-[#0A1B3D] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-7 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-[26px] font-bold leading-tight tracking-tight sm:text-[30px]">
              Tell us what it&apos;s for and where it&apos;s going.
            </h2>
            <p className="mt-2.5 max-w-xl text-[16px] leading-relaxed text-slate-300">
              We&apos;ll come back with a price and a delivery date. No forms to chase.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-5">
            <a
              href="tel:07497954779"
              className="text-[19px] font-bold tabular-nums tracking-tight text-white hover:text-[#F97316] motion-safe:transition-colors"
            >
              07497 954 779
            </a>
            <Link
              href="/ContactUs"
              style={notch}
              className="inline-flex min-h-14 items-center bg-[#F97316] px-7 py-4 text-[16px] font-bold tracking-tight text-white hover:bg-[#EA6306] motion-safe:transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Detail / SEO ---------- */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="sr-only">Additional information</h2>
          <div className="max-w-4xl space-y-4 text-[14px] leading-relaxed text-slate-600">
            <p>
              <strong className="font-semibold text-slate-800">Cabin Units</strong> supplies brand new portable
              buildings including security booths, ticket kiosks, gatehouses, portable cabins, toilet blocks and
              welfare units for commercial use. Every unit features fully-insulated steel sandwich panels, integrated
              electrical installations and a forklift-ready base for easy transport and repositioning.
            </p>
            <p>
              Based in Leicester and serving the entire United Kingdom, we supply parking operators, security
              companies, event organisers, councils and construction sites. Browse our{' '}
              <Link href="/portable-cabins" className="font-semibold text-[#0B4FD1] hover:underline">
                portable cabins
              </Link>
              ,{' '}
              <Link href="/kiosks" className="font-semibold text-[#0B4FD1] hover:underline">
                kiosk range
              </Link>{' '}
              and{' '}
              <Link href="/welfare-cabins" className="font-semibold text-[#0B4FD1] hover:underline">
                welfare cabins
              </Link>
              , or visit our Leicester warehouse to see the units in person.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;