'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../../../lib/resend';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    productInterest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using Resend API
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        productInterest: formData.productInterest,
      });
      
      if (result.success) {
        setFormStatus({ 
          submitted: true, 
          error: false, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          productInterest: '',
        });
      } else {
        setFormStatus({ 
          submitted: false, 
          error: true, 
          message: 'There was an error sending your message. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ 
        submitted: false, 
        error: true, 
        message: 'There was an error sending your message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Hero Section with Background */}
      <div className="relative bg-blue-700 text-white">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'url(/kiosk3.jpg)', // Replace with an actual image
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-blue-100 max-w-xl text-lg">
            Have questions about our modular kiosks? Want to request a custom solution?
            Our team is here to help you find the perfect solution for your business needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <MapPin className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Unit 7D, 66 Friday Street, Leicester, Leicestershire, LE13BW, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+44 7729022777</p>
                    <p className="text-sm text-gray-500">Monday to Saturday, 9am - 7pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">kioskform@gmail.com</p>
                    <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Clock className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Replace these with your actual social media icons */}
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3.692c-1.855 0-2.088.007-2.817.04-.728.033-1.224.149-1.66.317-.45.175-.83.41-1.209.787-.378.38-.612.76-.787 1.209-.168.436-.284.932-.317 1.66-.033.73-.04.963-.04 2.818s.007 2.088.04 2.817c.033.728.149 1.224.317 1.66.175.45.41.83.787 1.209.38.378.76.612 1.209.787.436.168.932.284 1.66.317.73.033.963.04 2.818.04s2.088-.007 2.817-.04c.728-.033 1.224-.149 1.66-.317.45-.175.83-.41 1.209-.787.378-.38.612-.76.787-1.209.168-.436.284-.932.317-1.66.033-.73.04-.963.04-2.818s-.007-2.088-.04-2.817c-.033-.728-.149-1.224-.317-1.66-.175-.45-.41-.83-.787-1.209-.38-.378-.76-.612-1.209-.787-.436-.168-.932-.284-1.66-.317-.73-.033-.963-.04-2.818-.04z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.046 6.22c-.652.295-1.348.492-2.069.583.745-.447 1.313-1.152 1.583-1.996-.699.411-1.469.71-2.287.87a3.61 3.61 0 00-6.156 3.29 10.232 10.232 0 01-7.434-3.77 3.61 3.61 0 001.118 4.82 3.591 3.591 0 01-1.635-.451v.046a3.615 3.615 0 002.897 3.542 3.624 3.624 0 01-1.63.06 3.616 3.616 0 003.375 2.506 7.253 7.253 0 01-4.485 1.544c-.292 0-.58-.017-.864-.05a10.215 10.215 0 005.535 1.621c6.64 0 10.273-5.5 10.273-10.273 0-.156-.004-.312-.01-.467.705-.509 1.315-1.144 1.799-1.87z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.55 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.55-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">Thank You!</h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. Our team will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                      className="mt-3 text-sm font-medium text-green-700 hover:text-green-900"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formStatus.error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-red-800">Error</h3>
                        <p className="text-red-700">{formStatus.message}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+44 7123 456789"
                      />
                    </div>
                    
                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  {/* Product Interest */}
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Please select...</option>
                      <option value="small-kiosk">Small Modular Kiosk</option>
                      <option value="large-kiosk">Large Modular Kiosk</option>
                      <option value="custom">Custom Solution</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md font-medium text-white transition-colors ${
                        isSubmitting 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <ChevronRight className="w-4 h-4 ml-2" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Quick Quote Request */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Need a Quick Quote?</h3>
              <p className="text-blue-100 mb-4">
                If you're in a hurry, call us directly at <strong>+44 7729022777</strong> for immediate assistance.
              </p>
              <button
                className="bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Request Callback
                <Phone className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">How quickly can you deliver a modular kiosk?</h3>
              <p className="text-gray-600">
                We typically deliver standard modular kiosks within 2-3 weeks from order confirmation. Custom units may take 4-6 weeks depending on specifications.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you provide installation services?</h3>
              <p className="text-gray-600">
                Yes, we offer professional installation services throughout the UK. Our experienced team will ensure your kiosk is properly set up and ready for use.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can modular kiosks be customized with branding?</h3>
              <p className="text-gray-600">
                Absolutely! We offer full customization options including custom colors, branding, signage, and special features to match your business identity.
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">What warranty do you provide?</h3>
              <p className="text-gray-600">
                All our modular kiosks come with a standard 12-month warranty covering manufacturing defects. Extended warranty options are available upon request.
              </p>
            </div>
          </div>
        </div>
        {/* Additional Contact Information Section */}
      <div className="mt-12">
       <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Can Help You For UK Kiosks</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
         <div className="prose max-w-none">
            <p className="text-gray-600">
               Our dedicated team of kiosk specialists is ready to assist you with any inquiries about our modular kiosk solutions. Whether you need information about specifications, customization options, pricing, or delivery timeframes, we're here to provide comprehensive support throughout your journey.
          </p>
         <p className="text-gray-600 mt-4">
        We pride ourselves on our responsive customer service and technical expertise. When you reach out to us, you'll be connected with knowledgeable professionals who understand the unique challenges and requirements of various industries, from retail and hospitality to healthcare and transportation.
          </p>
         <p className="text-gray-600 mt-4">
        Our consultative approach means we take the time to understand your specific needs before recommending solutions. We believe in building long-term relationships with our clients, offering ongoing support and maintenance services long after your kiosk installation is complete.
         </p>
        <p className="text-gray-600 mt-4">
        For urgent matters, we recommend calling our direct line during business hours. For detailed inquiries or project specifications, the contact form on this page will help us gather the information needed to provide you with the most accurate and helpful response.
          </p>
          <p className="text-gray-600 mt-4">
        We look forward to hearing from you and discussing how our modular kiosk solutions can help achieve your business objectives, enhance customer experiences, and maximize your operational efficiency.
       </p>
     </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ContactPage;