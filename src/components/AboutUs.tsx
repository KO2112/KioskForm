'use client';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          About Us
        </h2>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            We specialise in the supply of secure and easy-to-install kiosks and modern portable buildings manufactured in the EU with superior quality standards.
          </p>
          
          <p>
            Our kiosks and portable buildings are extremely versatile and are suitable for a wide range of applications, including shops, security cabins, ticket & information kiosks, gate houses, offices, welfare units, catering buildings, coffee shops and more.
          </p>
          
          <p>
            All our buildings can be tailor-made in terms of size, layout and branding to suit our clients' individual requirements. With over 10 years of experience, we've perfected our manufacturing processes to ensure durability and functionality.
          </p>
          
          <p>
            At our company, we pride ourselves as front-runners among modular building companies in the UK, setting the standard in the modular construction industry. Our offerings are about providing space and creating environments that inspire and fulfil specific functional needs.
          </p>
          
          <p>
            As a leading modular building company, we specialise in various modular solutions, ranging from compact yet versatile ticket kiosks to expansive, fully-equipped portable offices. Our expertise in this field and our commitment to European quality and innovation place us at the forefront of modular building companies in the UK.
          </p>
          
          <p>
            Our journey began with a simple vision: to revolutionise the modular building sector by combining practicality with state-of-the-art design. Today, as a prominent modular building manufacturer, we continue to push the boundaries of what's possible in modular construction. Each project is a testament to our expertise, whether it's a custom-designed kiosk that captures the essence of a brand or a modular building that embodies efficiency and style.
          </p>
        </div>
        
        {/* Simple Features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="font-bold text-blue-600 text-xl mb-1">EU Quality</div>
            <p className="text-gray-600 text-sm">European manufacturing standards</p>
          </div>
          
          <div className="p-4">
            <div className="font-bold text-blue-600 text-xl mb-1">10+ Years</div>
            <p className="text-gray-600 text-sm">Industry experience</p>
          </div>
          
          <div className="p-4">
            <div className="font-bold text-blue-600 text-xl mb-1">Customizable</div>
            <p className="text-gray-600 text-sm">Tailor-made solutions</p>
          </div>
          
          <div className="p-4">
            <div className="font-bold text-blue-600 text-xl mb-1">Versatile</div>
            <p className="text-gray-600 text-sm">Multiple applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;