'use client';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          About Us
        </h3>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            We provide high-quality, secure kiosks and portable buildings built in the EU. Our units are quick to install, easy to move, and made to last.
          </p>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              A Wide Range of Uses
            </p>
            <p>
              Our kiosks are used across many industries. You’ll find them as:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Retail kiosks and pop-up shops</li>
              <li>Security cabins and gatehouses</li>
              <li>Ticket and information booths</li>
              <li>Portable offices and welfare units</li>
              <li>Catering units and coffee kiosks</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Built Around Your Needs
            </p>
            <p>
              Every project is tailored. We customise size, layout, and finishes to suit your exact requirements and brand.
            </p>
            <p className="mt-2">
              With over a decade of experience, our team delivers smart, functional designs that last.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Industry Leaders
            </p>
            <p>
              We’re proud to be a leading name in the UK modular building industry. Our focus is on more than just space — we help businesses create environments that work.
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Full-Service Solutions
            </p>
            <p>
              Our range includes everything from compact booths to fully equipped portable buildings. All units reflect European quality and innovation — right here in the UK.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </p>
            <p>
              We began with one mission: to redefine modular buildings through smart design and practical features.
            </p>
            <p className="mt-2">
              Today, we’re pushing boundaries. From tailored retail kiosks to high-performance office units, each product combines form, function, and innovation.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">EU Quality</div>
            <p className="text-gray-600">Built to European standards</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">10+ Years</div>
            <p className="text-gray-600">Proven expertise</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">Custom Design</div>
            <p className="text-gray-600">Made to fit your brand</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">Complete Range</div>
            <p className="text-gray-600">Solutions for every use</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
