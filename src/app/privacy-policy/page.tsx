import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

// Suggested route: app/privacy-policy/page.tsx

export const metadata = {
  title: 'Privacy Policy | Cabin Units',
  description:
    'How Cabin Units collects, uses and protects your personal data when you use cabinunits.co.uk or contact us about our modular cabins and kiosks.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            Privacy Policy
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-3">
            How Cabin Units collects, uses and protects your personal data.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 19 July 2026</p>
        </div>

        <div className="space-y-10 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who we are</h2>
            <p>
              Cabin Units ("we", "us", "our") supplies modular cabins, kiosks and portable
              buildings across the UK. We operate the website cabinunits.co.uk. For the purposes
              of UK data protection law (the UK GDPR and the Data Protection Act 2018), we are
              the data controller of the personal data described in this policy.
            </p>
            <p className="mt-3">
              Contact: Cabin Units, Unit 7D, 66 Friday Street, Leicester, Leicestershire,
              LE1 3BW, United Kingdom · info@cabinunits.co.uk · +44 7497 954779.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information we collect</h2>
            <p>We may collect and process the following personal data:</p>
            <ul className="space-y-2.5 mt-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Contact details</strong> — your name, email
                  address, phone number and company name, when you fill in our contact form,
                  email us, call us or message us on WhatsApp.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Order and delivery information</strong> —
                  billing details, delivery address, order history and any information needed to
                  supply, deliver or install a unit.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Correspondence</strong> — the content of
                  messages, enquiries, quotes and any complaints or claims, including
                  photographs and delivery records where relevant.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Technical data</strong> — IP address, browser
                  type, device information and pages visited, collected automatically when you
                  use our website (see Cookies below).
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How we use your information</h2>
            <p>We use your personal data to:</p>
            <ul className="space-y-2.5 mt-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>respond to enquiries and provide quotes;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>process and fulfil orders, deliveries and installations;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>provide customer support, warranty service and after-sales care;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>handle complaints, claims and, where necessary, suspected fraud;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>keep records required for accounting, tax and legal purposes;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>improve our website and services.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Legal bases for processing</h2>
            <p>Under the UK GDPR, we rely on the following legal bases:</p>
            <ul className="space-y-2.5 mt-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Contract</strong> — where processing is
                  necessary to provide a quote you have requested or to perform a contract with
                  you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Legitimate interests</strong> — running and
                  improving our business, responding to enquiries, keeping records and
                  preventing fraud, where these interests are not overridden by your rights.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Legal obligation</strong> — where we must
                  process or retain data to comply with the law (for example tax and accounting
                  rules).
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>
                  <strong className="text-gray-900">Consent</strong> — where we ask for it, such
                  as for optional marketing communications. You can withdraw consent at any
                  time.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Who we share data with</h2>
            <p>
              We do not sell your personal data. We may share it with trusted third parties only
              where necessary, including: delivery and haulage partners (to deliver your unit);
              payment providers (to process payments); IT and email service providers that host
              our website and handle our communications (for example our website hosting and
              email delivery services); professional advisers such as accountants, insurers and
              solicitors; and authorities or law enforcement where we are legally required to do
              so or where fraud is reasonably suspected.
            </p>
            <p className="mt-3">
              Where a service provider processes data on our behalf, we require them to protect
              it and to use it only under our instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. International transfers</h2>
            <p>
              Some of our service providers may store or process data outside the UK. Where this
              happens, we ensure appropriate safeguards are in place, such as UK adequacy
              regulations or standard contractual clauses, so that your data receives an
              equivalent level of protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. How long we keep your data</h2>
            <p>
              We keep personal data only for as long as necessary for the purposes described in
              this policy. In general: enquiry data is kept for up to 2 years after our last
              contact; order, invoice and warranty records are kept for 6 years in line with UK
              tax and legal requirements; and records relating to complaints or claims are kept
              for as long as reasonably necessary to deal with the matter and any legal
              proceedings. After this, data is securely deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies and analytics</h2>
            <p>
              Our website uses cookies and similar technologies to make the site work and to
              understand how it is used. Some cookies are essential for the website to function;
              others (such as analytics or embedded content like Google Maps) are used to
              improve the site and may be set by third parties. You can control cookies through
              your browser settings, and where required we will ask for your consent before
              setting non-essential cookies. Embedded third-party content, such as the Google
              Maps embed on our contact page, may collect data in accordance with the relevant
              provider's own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal
              data against unauthorised access, loss, misuse or alteration. However, no method
              of transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Your rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="space-y-2.5 mt-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>access a copy of the personal data we hold about you;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>ask us to correct inaccurate or incomplete data;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>ask us to delete your data in certain circumstances;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>restrict or object to certain processing, including direct marketing;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>receive your data in a portable format in certain circumstances;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                <span>withdraw consent at any time, where processing is based on consent.</span>
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at info@cabinunits.co.uk. We will
              respond within one month. You also have the right to complain to the Information
              Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113, although we
              would appreciate the chance to resolve any concern with you first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Children</h2>
            <p>
              Our products and website are intended for businesses and adults. We do not
              knowingly collect personal data from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The latest version will always be
              available on this page, with the "Last updated" date shown above. Significant
              changes may also be communicated to you directly where appropriate.
            </p>
          </section>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Questions about your data?</h2>
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
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Cabin Units — Unit 7D, 66 Friday Street, Leicester, Leicestershire, LE1 3BW, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;