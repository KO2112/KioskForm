import type { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cabin Units',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information. Learn about our data handling practices and your privacy rights.',
  keywords: 'privacy policy, data protection, GDPR, privacy rights',
  openGraph: {
    title: 'Privacy Policy | Cabin Units',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
    type: 'website',
    url: 'https://cabinunits.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyContent />;
}
