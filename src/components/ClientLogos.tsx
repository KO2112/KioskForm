'use client';

const logos = [
  { src: '/BEDMAX.png', alt: 'Bedmax' },
  { src: '/ControlGear.png', alt: 'Control Gear' },
  { src: '/Davis-bowring.png', alt: 'Davis & Bowring' },
  { src: '/OXBOW.png', alt: 'Oxbow' },
  { src: '/pureleisuregroup.png', alt: 'Pure Leisure Group' },
  {
    src: '/Sandbachcommercial.png',
    alt: 'Sandbach Commercial Dismantlers',
  },
  { src: '/Londonbridgerooftop.png', alt: 'London Bridge Rooftop' },
  { src: '/Ribblecars.png', alt: 'Ribble Cars' },
  { src: '/RK9.png', alt: 'RK9' },
  { src: '/taylor-lindsey-logo.png', alt: 'Taylor Lindsey' },
  { src: '/Totalhireandsales.png', alt: 'Total Hire & Sales' },
  { src: '/VWsporthorses.png', alt: 'VW Sporthorses' },
  { src: '/xeeniegroup.png', alt: 'Xeenie Engineering Group' },
];

export default function ClientLogos() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#F97316] mb-8">
          Trusted by businesses across the UK
        </p>
      </div>

      <div className="marquee">
        {/* Static edge fades, sitting above the moving track */}
        <div aria-hidden="true" className="marquee__fade marquee__fade--left" />
        <div aria-hidden="true" className="marquee__fade marquee__fade--right" />

        <div className="marquee__track">
          {/* First set */}
          <div className="marquee__half">
            {logos.map((logo) => (
              <div key={`a-${logo.alt}`} className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          {/* Second set */}
          <div className="marquee__half" aria-hidden="true">
            {logos.map((logo) => (
              <div key={`b-${logo.alt}`} className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt="" />
              </div>
            ))}
          </div>

          {/* Third set prevents empty space on wider screens */}
          <div className="marquee__half" aria-hidden="true">
            {logos.map((logo) => (
              <div key={`c-${logo.alt}`} className="logo-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee__fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4rem;
          z-index: 10;
          pointer-events: none;
        }

        .marquee__fade--left {
          left: 0;
          background: linear-gradient(to right, #f8fafc, rgba(248, 250, 252, 0));
        }

        .marquee__fade--right {
          right: 0;
          background: linear-gradient(to left, #f8fafc, rgba(248, 250, 252, 0));
        }

        @media (min-width: 640px) {
          .marquee__fade {
            width: 6rem;
          }
        }

        .marquee__track {
          display: flex;
          width: max-content;

          animation: marquee-scroll 45s linear infinite;

          /* Helps prevent animation flickering/glitches */
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }

        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }

        .marquee__half {
          display: flex;
          flex-shrink: 0;
        }

        @keyframes marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            /*
             * We now have 3 identical sections.
             * Move exactly the width of ONE section.
             */
            transform: translate3d(-33.333333%, 0, 0);
          }
        }

        .logo-card {
          flex-shrink: 0;

          width: 12rem;
          height: 6rem;

          margin: 0 0.75rem;
          padding: 0 1.5rem;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;

          box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
        }

        .logo-card img {
          display: block;

          max-height: 3rem;
          max-width: 100%;

          width: auto;
          height: auto;

          object-fit: contain;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }

          .marquee {
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}