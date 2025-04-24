// app/blog/BlogContent.tsx - Revised with previews and additional text section
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogContent = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KioskForm Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry insights, product updates, and expert advice on modular kiosks and portable cabin solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Blog Post 1 Preview */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link href="/Security-kiosks-in-the-UK">
              <div className="relative h-48 w-full">
                <Image 
                  src="/kiosk3.jpg" 
                  alt="Portable Office Cabins" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">April 18, 2025</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Security Kiosks in the UK
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover how security kiosks are transforming safety and service efficiency across the UK. Explore innovations in security huts, CCTV monitoring and customizable solutions.
                </p>
                <div className="text-blue-600 font-medium hover:underline">Read More →</div>
              </div>
            </Link>
          </div>

          {/* Blog Post 2 Preview */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link href="/Key-Benefits-of-Portable-Cabins">
              <div className="relative h-48 w-full">
                <Image 
                  src="/kiosk5.jpg" 
                  alt="Portable Office Cabins" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">April 24, 2025</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Benefits of Portable Cabins & Kiosks for Businesses
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover how portable cabins and kiosks can transform your business operations with cost savings, rapid deployment, and versatile applications across industries.
                </p>
                <div className="text-blue-600 font-medium hover:underline">Read More →</div>
              </div>
            </Link>
          </div>

          {/* Blog Post 3 Preview */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link href="/UK-Modular-Building-Manufacturers-Pioneering-Innovation-Sustainability-&-the-Future">
              <div className="relative h-48 w-full">
                <Image 
                  src="/kiosk4.jpg" 
                  alt="Portable Office Cabins" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">April 24, 2025</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  UK Modular Building Manufacturers: Pioneering Innovation, Sustainability & the Future
                </h2>
                <p className="text-gray-600 mb-4">
                 Discover how UK modular building manufacturers are revolutionizing construction with sustainable, efficient, and innovative building solutions.
                </p>
                <div className="text-blue-600 font-medium hover:underline">Read More →</div>
              </div>
            </Link>
          </div>

        </div>
        
        {/* New section about modular and portable kiosk updates */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated on Modular & Portable Solutions</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to the KioskForm blog, your premier resource for the latest developments in modular buildings, portable cabins, and kiosk solutions across the United Kingdom. Our commitment to keeping you informed ensures you'll find a wealth of valuable content updated regularly with industry innovations, case studies, and practical insights.
            </p>
            <p className="mb-4">
              Our team of industry experts continuously monitors emerging trends in modular construction, sustainable building practices, and innovative applications of portable structures across diverse sectors including retail, security, healthcare, education, and construction. Whether you're a facilities manager, business owner, or project developer, our blog posts provide actionable information to help you make informed decisions about modular solutions.
            </p>
            <p className="mb-4">
              From technological advancements in manufacturing processes to regulatory updates affecting the modular building industry, we cover a comprehensive range of topics that matter to professionals invested in space optimization and flexible infrastructure. You'll discover in-depth analyses of cost-efficiency improvements, case studies showcasing successful implementations, and forecasts of future developments in the portable and modular construction landscape.
            </p>
            <p className="mb-4">
              Each article is crafted to deliver practical value, whether you're researching options for your next project, seeking to understand the sustainability benefits of modular solutions, or looking for innovative ways to utilize portable structures in your operations. We regularly feature guest contributors including architects, sustainability experts, and industry pioneers who share their unique perspectives on the evolving world of modular construction.
            </p>
            <p>
              Subscribe to our newsletter to receive notifications when new content is published, and join our growing community of professionals passionate about the transformative potential of modular and portable building solutions. Together, we're reshaping how businesses approach space utilization with flexible, sustainable, and economical alternatives to traditional construction.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogContent;