'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CookiePreferences {
  functional: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

export default function CookiePreferencesModal({ isOpen, onClose, onSave }: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functional: true,
    statistics: true,
    marketing: true,
  });

  useEffect(() => {
    // Load current preferences from localStorage
    const storedPreferences = localStorage.getItem('cookie-preferences');
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, [isOpen]);

  const handleToggle = (key: keyof CookiePreferences) => {
    // Don't allow disabling functional cookies
    if (key === 'functional') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    onSave(preferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close preferences"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Functional Cookies */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Functional Cookies</h3>
                <p className="text-sm text-gray-600">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  disabled
                  className="w-5 h-5 text-green-600 rounded cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Statistics Cookies */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Statistics Cookies</h3>
                <p className="text-sm text-gray-600">
                  These cookies help us understand how visitors interact with our website through analytics.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => handleToggle('statistics')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.statistics ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.statistics ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Marketing Cookies</h3>
                <p className="text-sm text-gray-600">
                  These cookies are used to personalize content and track user behavior for marketing purposes.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-6 border-t">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Save Preferences
          </button>
        </div>

        <div className="px-6 py-3 bg-gray-50 border-t text-xs text-gray-600 text-center space-x-1">
          <span>Read more in our</span>
          <a href="/cookies" className="text-blue-600 hover:text-blue-800 underline">
            Cookie Policy
          </a>
          <span>and</span>
          <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
