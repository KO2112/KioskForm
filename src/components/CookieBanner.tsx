'use client';

import { useState, useEffect } from 'react';
import CookiePreferencesModal from './CookiePreferencesModal';

interface CookiePreferences {
  functional: boolean;
  statistics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem('cookie-consent');
    
    if (storedConsent === null) {
      setIsVisible(true);
    } else {
      setHasConsent(storedConsent === 'accepted');
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      functional: true,
      statistics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(allPreferences));
    setHasConsent(true);
    setIsVisible(false);
    
    // Update Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
      });
    }
  };

  const handleDeny = () => {
    const deniedPreferences: CookiePreferences = {
      functional: true,
      statistics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', 'denied');
    localStorage.setItem('cookie-preferences', JSON.stringify(deniedPreferences));
    setHasConsent(false);
    setIsVisible(false);
    
    // Update Google Analytics consent to denied
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });
    }
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'custom');
    
    // Update Google Analytics based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.statistics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
      });
    }
    
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 shadow-lg z-40 rounded-lg max-w-sm">
        <div>
          <h3 className="text-base font-semibold mb-2">This website uses cookies</h3>
          <p className="text-xs text-gray-300 mb-3">
            We use cookies for personalization and analytics. Learn more in our{' '}
            <a href="/cookies" className="text-blue-400 hover:text-blue-300 underline">
              cookie policy
            </a>
            {' '}and{' '}
            <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
              privacy policy
            </a>
            .
          </p>
          
          <div className="flex flex-col gap-2">
            <button
              onClick={handleAcceptAll}
              className="w-full px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleDeny}
              className="w-full px-3 py-2 text-xs font-medium text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            >
              Deny
            </button>
            <button
              onClick={() => setShowPreferencesModal(true)}
              className="w-full px-3 py-2 text-xs font-medium text-gray-900 bg-gray-300 hover:bg-gray-400 rounded transition-colors"
            >
              View Preferences
            </button>
          </div>
        </div>
      </div>

      <CookiePreferencesModal
        isOpen={showPreferencesModal}
        onClose={() => setShowPreferencesModal(false)}
        onSave={handleSavePreferences}
      />
    </>
  );
}

// Type declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
