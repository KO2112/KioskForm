'use client';

import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../../../lib/resend';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178176.12546445066!2d-1.1281356780872747!3d52.594668197432085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761d675102bb7%3A0x4ebd0d79a0e721aa!2sCabin%20Units%20%7C%20Uk%20portable%20buildings%20company!5e0!3m2!1sen!2suk!4v1784482157063!5m2!1sen!2suk';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail({ ...formData });
      if (result.success) {
        setFormStatus({ submitted: true, error: false, message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setFormStatus({ submitted: false, error: true, message: 'There was an error sending your message. Please try again later.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ submitted: false, error: true, message: 'There was an error sending your message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white transition-colors';

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* 50/50 split: form left, map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Send us a message</h1>
            <p className="text-gray-600 text-sm mb-5">We aim to respond within 24 hours.</p>

            {/* Quick contact buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <a
                href="tel:+447497954779"
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                07497 954 779
              </a>
              <a
                href="https://wa.me/447497954779"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5b] text-white text-sm font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@cabinunits.co.uk"
                className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg px-4 py-3 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email us
              </a>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-xs text-gray-400 uppercase tracking-wide">or fill in the form</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800">Thank you!</h3>
                  <p className="text-green-700 mt-1 text-sm">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus.error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{formStatus.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full name*
                    </label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      required className={inputClass} placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email*
                    </label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      required className={inputClass} placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className={inputClass} placeholder="+44 7123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                      className={inputClass} placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject*
                  </label>
                  <input
                    type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                    required className={inputClass} placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message*
                  </label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange}
                    required rows={5} className={inputClass}
                    placeholder="Please provide details about your enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  {!isSubmitting && <ChevronRight className="w-4 h-4 ml-2" />}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200">
            <div className="flex-1 min-h-[400px] lg:min-h-0">
              <iframe
                src={MAP_SRC}
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Cabin Units location map"
              />
            </div>
            {/* Address + hours strip under map */}
            <div className="bg-gray-50 border-t border-gray-200 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-blue-700 mr-2.5 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700">
                  Unit 7D, 66 Friday Street, Leicester, LE1 3BW, UK
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-blue-700 mr-2.5 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700">
                  Mon – Sat: 9 AM – 7 PM · Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can you deliver a modular kiosk?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We typically deliver standard modular kiosks within 1–2 days from order confirmation. Custom units may take 4–6 weeks depending on specifications.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide installation services?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, we offer professional installation services throughout the UK. Our experienced team will ensure your kiosk is properly set up and ready for use.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can modular kiosks be customised with branding?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We offer full customisation options including custom colours, branding, signage, and special features to match your business identity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What warranty do you provide?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our modular kiosks come with a standard 12-month warranty covering manufacturing defects. Extended warranty options are available upon request.
              </p>
            </div>
          </div>
        </div>

        {/* SEO copy */}
        <div className="mt-12 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How we can help you with UK kiosks</h2>
          <div className="text-gray-600 space-y-4 max-w-4xl">
            <p>
              Our dedicated team of kiosk specialists is ready to assist you with any enquiries about our modular kiosk solutions — specifications, customisation options, pricing, or delivery timeframes.
            </p>
            <p>
              When you reach out, you'll be connected with knowledgeable professionals who understand the requirements of retail, hospitality, healthcare, transport, construction, and events. We take the time to understand your specific needs before recommending solutions, and offer ongoing support and maintenance long after installation.
            </p>
            <p>
              For urgent matters, call our direct line during business hours. For detailed enquiries or project specifications, the contact form above helps us gather what we need to give you an accurate, helpful response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;