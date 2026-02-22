'use client';

import React from "react"
import { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
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

const ContactForm = () => {
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    gtag_report_conversion();
    
    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
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
