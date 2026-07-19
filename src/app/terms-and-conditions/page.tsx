import React from 'react';
import { FileText, Download, Mail, Phone } from 'lucide-react';

// Suggested route: app/terms-and-conditions/page.tsx

export const metadata = {
  title: 'Terms & Conditions | Cabin Units',
  description:
    'Cabin Units terms and conditions, including our cosmetic condition, use & liability acknowledgement for modular cabins, kiosks and portable buildings supplied in the UK.',
};

const sections = [
  {
    title: '1. Cosmetic condition of modular cabins and kiosks',
    body: [
      'The Customer understands that modular cabins, kiosks and portable buildings are practical commercial structures. During manufacture, storage, loading, transport, unloading and normal handling, a unit may have minor cosmetic imperfections. These may include light scratches, scuffs, small dents, paint or coating variations, minor surface marks, sealant marks and other minor finish variations.',
      "Where an imperfection is purely cosmetic and does not materially affect the safety, structural integrity, weather resistance, operation or intended use of the unit, the Customer accepts that the presence of such a cosmetic imperfection alone will not automatically entitle the Customer to compensation, a discount, a refund or rejection of the unit, subject always to the Customer's statutory rights and applicable law.",
    ],
  },
  {
    title: '2. Nature of acceptance',
    body: [
      'The Customer confirms that they are purchasing a modular commercial cabin/kiosk with the understanding that minor cosmetic marks can occur and that a utility structure is not supplied on the basis that every visible surface will be cosmetically perfect or free from every minor mark. This acknowledgement applies only to genuinely cosmetic matters and does not excuse a material structural, safety, functional or other defect for which the Seller is legally responsible.',
    ],
  },
  {
    title: '3. Delivery, positioning, foundations and later movement',
    body: [
      'Unless Cabin Units has expressly agreed in writing to carry out the relevant work, the Customer is responsible for ensuring that the delivery location, access, ground, base, foundations, supports, anchoring and final position are suitable for the unit and its intended use.',
    ],
    bullets: [
      'Cabin Units is not responsible for damage, movement, tilting, sinking, collapse, dropping or impact caused by unsuitable ground or foundations, incorrect supports or anchoring, overloading, collision, or improper positioning.',
      'Once the unit has been delivered and responsibility for it has passed to the Customer, Cabin Units is not responsible for damage caused by the Customer or any third party moving, lifting, craning, towing, dropping, striking, modifying or relocating the unit.',
      "Where Cabin Units is separately contracted to carry out installation, positioning or other work, this clause does not exclude responsibility for loss caused by Cabin Units' own breach, negligence or other liability that cannot lawfully be excluded.",
    ],
  },
  {
    title: '4. Fire, electrical equipment, heating and third-party installations',
    body: [
      'The Customer must use the unit responsibly and must ensure that any electrical, gas, heating, cooking, charging, machinery or other equipment used in or connected to the unit is suitable, safely installed, maintained and operated by appropriately competent persons where required.',
    ],
    bullets: [
      'To the fullest extent permitted by law, Cabin Units is not responsible for fire, smoke damage, electrical damage or related loss caused by customer misuse, overloaded circuits, unsafe appliances, combustible materials, third-party installations, tampering, unauthorised alterations, poor maintenance or failure to follow safety instructions.',
      'This does not exclude liability where a fire or other incident is caused by a defect, breach or negligence for which Cabin Units is legally responsible and that liability cannot lawfully be excluded or restricted.',
    ],
  },
  {
    title: '5. Personal belongings, stock and business property',
    body: [
      "The Customer is responsible for deciding what property, stock, equipment, documents, valuables or other belongings are kept in the unit and for arranging appropriate insurance. To the fullest extent permitted by law, Cabin Units is not responsible for loss of or damage to such items where the loss results from customer misuse, third-party acts, insecure use, improper installation, unauthorised modification, unsuitable site conditions, external impact or other causes outside Cabin Units' reasonable control.",
    ],
  },
  {
    title: '6. Misuse, alteration and maintenance',
    body: [
      "The Customer accepts responsibility for loss or damage caused by misuse, deliberate damage, neglect, lack of reasonable maintenance, use outside the unit's intended purpose, excessive loading, unauthorised structural alteration, drilling/cutting that affects the unit, removal of safety features, or work carried out by third parties after delivery. Normal wear and tear and cosmetic deterioration arising through use are not manufacturing defects.",
    ],
  },
  {
    title: '7. Claims and dishonest or fraudulent conduct',
    body: [
      'The Customer agrees to provide honest and accurate information in relation to any complaint or claim. The Customer must not knowingly make a false, fabricated, dishonest or materially exaggerated claim, including falsely alleging that damage caused after delivery was present beforehand or was caused by Cabin Units. Cabin Units may retain photographs, delivery records, communications and other evidence and may provide relevant information to insurers, legal advisers, law enforcement or other appropriate bodies where fraud or attempted fraud is reasonably suspected.',
      'Nothing in this clause prevents the Customer from making a genuine complaint, pursuing a legitimate claim or exercising any legal right.',
    ],
  },
  {
    title: '8. Limitation of liability and legal rights',
    body: [
      'Nothing in this document excludes or restricts liability to the extent that it would be unlawful to do so. In particular, nothing excludes or restricts liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, liability for a defective product where such liability cannot legally be excluded, or any mandatory statutory rights available to a consumer. Any other exclusion or limitation in this document applies only to the fullest extent permitted by applicable UK law.',
    ],
  },
];

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4" />
            Terms &amp; Conditions
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-600 mt-3">
            Cosmetic condition, use &amp; liability acknowledgement for modular cabins, kiosks,
            portable buildings and related units supplied by Cabin Units.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Document reference: CU-CLA-01 · UK version
          </p>
        </div>

        {/* Intro note */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
          <h2 className="font-semibold text-blue-900 mb-1.5">Please read carefully</h2>
          <p className="text-blue-900/80 text-sm leading-relaxed">
            These terms record the customer's understanding of the cosmetic nature of modular
            cabins/kiosks and allocate responsibility for events caused after delivery by misuse,
            mishandling, third-party work or unsuitable site conditions. They do not remove rights
            or liabilities that cannot lawfully be excluded.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map(section => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 mt-1">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                      <span className="text-blue-700 mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-1.5">Important</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            These terms are intended to clarify the difference between minor cosmetic
            imperfections and material defects, and to allocate responsibility for damage or
            incidents caused by the Customer, third parties, site conditions or events after
            delivery. They should be read alongside the applicable quotation, invoice, order
            confirmation, warranty and terms of sale.
          </p>
        </div>

        {/* Contact / footer */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Questions about these terms?</h2>
          <p className="text-gray-600 mb-4 text-sm">
            If anything is unclear, get in touch and we'll be happy to explain.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@cabinunits.co.uk"
              className="inline-flex items-center px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@cabinunits.co.uk
            </a>
            <a
              href="tel:+447497954779"
              className="inline-flex items-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              07497 954 779
            </a>
            {/* Optional: link a downloadable signed-copy PDF here */}
            {/* <a href="/documents/CU-CLA-01.pdf" className="inline-flex items-center px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-lg transition-colors">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </a> */}
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Cabin Units — Unit 7D, 66 Friday Street, Leicester, Leicestershire, LE1 3BW, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;