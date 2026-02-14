import { Phone, Mail, Clock } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-blue-700 text-blue-50 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 sm:gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:07497954779"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>07497 954 779</span>
            </a>
            <a
              href="mailto:info@cabinunits.co.uk"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>info@cabinunits.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Mon - Sat: 08:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
