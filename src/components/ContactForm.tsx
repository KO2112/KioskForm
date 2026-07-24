'use client';

import React from "react"
import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, AlertCircle, MessageCircle, Tag } from 'lucide-react';
import { sendContactEmail } from '../../lib/resend';

// Google Ads conversion tracking function
declare let gtag: (...args: any[]) => void;

function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-707974874/QsZfCIfa-vwbENqty9EC',
      'event_callback': callback
    });
  }
  return false;
}

// Turns "Portable-Kiosk-110x130" or "car-park-kiosk" into "Portable Kiosk 110x130" / "Car Park Kiosk"
function prettifySlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // What the enquiry is about, captured from the URL (?interest=...) and the referring page
  const [reference, setReference] = useState({
    interest: '',
    referrer: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  // Read ?interest= from the URL and the page the visitor came from.
  // Done in useEffect (not useSearchParams) so no Suspense boundary is needed.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest') || params.get('product') || '';
    const referrer =
      document.referrer && !document.referrer.includes('/ContactUs')
        ? document.referrer
        : '';

    if (interest || referrer) {
      setReference({ interest, referrer });
    }

    // Prefill the subject so the customer sees (and can edit) what the enquiry is about
    if (interest) {
      setFormData(prev =>
        prev.subject ? prev : { ...prev, subject: `Enquiry: ${prettifySlug(interest)}` }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    gtag_report_conversion();

    // Build a reference footer so the email always says what the customer was looking at
    const referenceLines: string[] = [];
    if (reference.interest) {
      referenceLines.push(`Product / page of interest: ${prettifySlug(reference.interest)} (${reference.interest})`);
    }
    if (reference.referrer) {
      referenceLines.push(`Came from: ${reference.referrer}`);
    }
    if (typeof window !== 'undefined') {
      referenceLines.push(`Form URL: ${window.location.href}`);
    }

    const messageWithReference =
      referenceLines.length > 0
        ? `${formData.message}\n\n----------------\n${referenceLines.join('\n')}`
        : formData.message;

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: messageWithReference,
      });

      if (result.success) {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
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
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Get In Touch</h3>

      {/* Shows the customer what their enquiry is tagged with */}
      {reference.interest && !formStatus.submitted && (
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-md px-3 py-2 mb-4">
          <Tag className="h-4 w-4 text-blue-600 flex-shrink-0" />
          <span className="text-sm text-blue-800">
            Enquiring about: <span className="font-semibold">{prettifySlug(reference.interest)}</span>
          </span>
        </div>
      )}

      {formStatus.submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-green-800">Thank You!</h4>
            <p className="text-green-700 text-sm">
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
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800 text-sm">Error</h4>
                <p className="text-red-700 text-sm">{formStatus.message}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+44 7123 456789"
            />
          </div>

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
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your inquiry..."
            />
          </div>

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
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us more..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md font-medium text-white transition-colors flex items-center justify-center ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <ChevronRight className="w-4 h-4 ml-2" />}
          </button>
        </form>
      )}

      {/* WhatsApp Button */}
      <div className="mt-4">
        <a
          href="https://wa.me/447497954779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactForm;