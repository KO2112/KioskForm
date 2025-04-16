import BannerSlider from '@/components/BannerSlider';
import { Metadata } from 'next';
import OurKiosksSection from '@/components/OurKiosksSection';
import AboutUsSection from '@/components/AboutUs';
import SEOEnhancedSection from '@/components/SEOEnhanced';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Modular Kiosk Solutions | Premium UK Kiosk Manufacturer',
  description: 'Leading UK manufacturer of enterprise-grade modular kiosks and interactive touch screen solutions. Bespoke designs and premium quality for modern businesses.',
  keywords: 'modular kiosk, UK kiosk manufacturer, interactive kiosk, touch screen kiosk, digital signage kiosk, custom kiosk design',
  openGraph: {
    title: 'Modular Kiosk Solutions | Premium UK Kiosk Manufacturer',
    description: 'Discover our range of enterprise-grade modular kiosks designed and manufactured in the EU. Custom design service available for all business requirements.',
    images: [
      {
        url: '/kiosk.jpg',
        width: 1200,
        height: 630,
        alt: 'Modular Kiosk Solutions',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modular Kiosk Solutions | Premium UK Kiosk Manufacturer',
    description: 'Discover our range of enterprise-grade modular kiosks designed and manufactured in the EU. Custom design service available for all business requirements.',
    images: ['kiosk.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      
      <BannerSlider />
      <OurKiosksSection/>
      <AboutUsSection/>
      <SEOEnhancedSection/>
      <Footer/>
      
    </main>
  );
}