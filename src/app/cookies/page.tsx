import type { Metadata } from 'next';
import CookiePolicyContent from './CookieContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | Cabin Units',
  description: 'Learn about the cookies we use on our website, how we use them, and how to manage your preferences.',
  keywords: 'cookie policy, cookies, consent, tracking',
  openGraph: {
    title: 'Cookie Policy | Cabin Units',
    description: 'Learn about the cookies we use on our website, how we use them, and how to manage your preferences.',
    type: 'website',
    url: 'https://cabinunits.co.uk/cookies',
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
