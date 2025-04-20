'use client';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          About Us
        </h3>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            We supply secure, easy-to-install kiosks and portable buildings made in the EU to the highest quality standards.
          </p>
          
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Versatile Kiosks Range</h4>
            <p className="leading-relaxed">
              Our kiosks range serves many different needs:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Retail shops and pop-up stores</li>
              <li>Security cabins and gate houses</li>
              <li>Ticket and information kiosks</li>
              <li>Office spaces and welfare units</li>
              <li>Catering buildings and coffee shops</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Bespoke Design Solutions</h4>
            <p className="leading-relaxed">
              All our buildings offer bespoke design options. We tailor size, layout, and branding to match your exact needs.
            </p>
            <p className="leading-relaxed mt-2">
              With over 10 years of experience, we've perfected our manufacturing to ensure lasting quality and functionality.
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Industry Leadership</h4>
            <p className="leading-relaxed">
              We lead among UK modular building companies, setting industry standards. Our buildings don't just provide space – they create environments that inspire and fulfill specific needs.
            </p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Solutions</h4>
            <p className="leading-relaxed">
              Our kiosks range includes everything from compact ticket booths to fully-equipped portable offices. European quality and innovation place us at the forefront of the UK market.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h4>
            <p className="leading-relaxed">
              We started with a simple goal: revolutionize modular building by combining practicality with modern design.
            </p>
            <p className="leading-relaxed mt-2">
              Today, as a leading manufacturer, we continue pushing boundaries. Every project showcases our expertise – whether it's a bespoke design kiosk capturing your brand essence or a modular building combining efficiency with style.
            </p>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">EU Quality</div>
            <p className="text-gray-600">European manufacturing excellence</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">10+ Years</div>
            <p className="text-gray-600">Industry expertise</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">Bespoke Design</div>
            <p className="text-gray-600">Custom-made solutions</p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600 text-xl mb-2">Complete Range</div>
            <p className="text-gray-600">Kiosks for every need</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;