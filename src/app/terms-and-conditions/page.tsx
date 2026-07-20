import React from 'react';
import { FileText, Mail, Phone } from 'lucide-react';

// Suggested route: app/terms-and-conditions/page.tsx

export const metadata = {
  title: 'Terms & Conditions | Cabin Units',
  description:
    'Cabin Units terms and conditions of sale, including product condition, cosmetic imperfections, delivery, installation, customer responsibilities and liability provisions.',
};

type TermsSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: TermsSection[] = [
  {
    title: '1. Definitions',
    paragraphs: [
      '"Cabin Units", "we", "us" or "our" means MOTORCYCLE PARTS AND EQUIPMENT LTD trading as Cabin Units.',
      '"Product" means any cabin, kiosk, gatehouse, toilet block, modular unit, portable building, accessory, component or related item supplied by Cabin Units.',
      '"Customer" or "you" means the person, firm, company, organisation, public authority or other entity purchasing or seeking to purchase a Product from Cabin Units.',
      '"Consumer" means an individual acting wholly or mainly outside that individual\'s trade, business, craft or profession. "Business Customer" means any Customer who is not a Consumer.',
      '"Cosmetic Imperfection" means a superficial or visual mark or variation that does not materially prevent the Product from being safely and ordinarily used for its intended purpose, including minor scratches, scuffs, dents, paint or coating variations, sealant marks, surface marks and similar blemishes.',
    ],
  },
  {
    title: '2. Application of these Conditions',
    paragraphs: [
      'These Conditions apply to each sale of Products by Cabin Units unless we expressly agree different written terms for a particular order.',
      'By placing an order, paying a deposit or invoice, accepting delivery or collection, or signing a related acknowledgement, the Customer agrees that these Conditions form part of the contract.',
      'We may update these Conditions for future orders. The version applying to an order is the version provided or made available to the Customer when that order is accepted. Changes will not retrospectively alter an existing contract unless both parties agree in writing or the law requires the change.',
    ],
  },
  {
    title: '3. Product information, images and availability',
    paragraphs: [
      'Stock availability may change and website or advertising information may not always reflect real-time availability. A Product is not reserved until an order is accepted and any required deposit or payment is received.',
      'Photographs, illustrations, measurements, colours and descriptions are intended to give a reasonable representation of the Product. Minor variations may occur, particularly in commercial, modular, made-to-order, refurbished, display or stock units, provided the Product remains materially consistent with the agreed description.',
      'Any material specification that is essential to the Customer must be confirmed in writing before the order is accepted.',
    ],
  },
  {
    title: '4. Orders and formation of contract',
    paragraphs: [
      'A quotation is an invitation to place an order unless it expressly states otherwise. A contract is formed when Cabin Units confirms acceptance of the order in writing, issues an accepted invoice or order confirmation, or accepts payment in circumstances clearly indicating acceptance.',
      'Rental arrangements, hire agreements and separately contracted services may be subject to additional terms.',
    ],
  },
  {
    title: '5. Prices, VAT and payment',
    paragraphs: [
      'Prices are stated exclusive of VAT unless expressly stated otherwise. VAT will be charged where applicable at the prevailing rate.',
      'Unless otherwise agreed in writing, all sums due must be paid before delivery or collection. We may withhold delivery or collection while any amount due remains unpaid.',
      'Payment may be made by bank transfer, card or another method accepted by Cabin Units. Cleared funds may be required before release of the Product.',
      'For Business Customers, overdue sums may be subject to any statutory interest and recovery rights available to us. This clause does not affect any mandatory rights of a Consumer.',
    ],
  },
  {
    title: '6. Delivery, collection and access',
    paragraphs: [
      'Any delivery date or time is an estimate unless expressly agreed in writing as a fixed contractual deadline. We will use reasonable efforts to meet estimated dates, but delays may occur because of transport, manufacturing, weather, access, third-party carriers or other circumstances outside our reasonable control.',
      'The Customer must provide accurate delivery information and ensure safe, lawful and suitable access for the delivery vehicle, crane, forklift or other equipment reasonably required. The Customer is responsible for informing us in advance of restricted access, soft ground, overhead cables, low bridges, narrow roads, weight restrictions, permits or other site hazards.',
      'Where delivery cannot safely be completed because of site conditions, access restrictions or inaccurate information supplied by the Customer, we may abort or reschedule delivery and charge the reasonable additional transport, waiting, storage or redelivery costs incurred, subject to applicable law.',
      'Where the Customer collects the Product, delivery is completed when the Product is handed over to the Customer or to the Customer\'s nominated carrier.',
    ],
  },
  {
    title: '7. Transport, risk and title',
    paragraphs: [
      'For a Consumer, risk of accidental loss or damage passes when the Consumer, or a person identified by the Consumer, takes physical possession of the Product, except where the Consumer arranges a carrier independently and that carrier was not offered by Cabin Units, in which case risk may pass when that carrier takes possession as permitted by law.',
      'For a Business Customer, risk passes when the Product is loaded onto the Customer\'s or its carrier\'s vehicle for collection, or when delivery is completed at the agreed delivery point, whichever applies.',
      'After risk has passed, the Customer is responsible for loss, theft, vandalism, accidental damage, handling, storage and use of the Product, except to the extent that loss or damage is caused by Cabin Units\' breach of contract, negligence or another matter for which liability cannot lawfully be excluded.',
      'Unless otherwise agreed, ownership of the Product passes only when Cabin Units has received full cleared payment for that Product and delivery or collection has occurred.',
    ],
  },
  {
    title: '8. Site preparation, foundations and positioning',
    paragraphs: [
      'Unless Cabin Units has expressly agreed in writing to provide site preparation or foundation works, the Customer is responsible for ensuring that the site, base, floor, ground or foundation is suitable, level, stable, adequately drained and capable of safely supporting the Product and its intended load.',
      'The Customer must obtain any planning permission, landlord consent, licence, building control approval or other permission required for the location and use of the Product unless Cabin Units expressly agrees in writing to obtain it.',
      'Cabin Units is not responsible for movement, sinking, tilting, cracking, distortion, water pooling, door or window misalignment or other damage caused by an unsuitable, unstable or inadequately prepared base or site after delivery, except where Cabin Units itself contracted to provide the relevant base or site work and the issue is caused by our breach or negligence.',
    ],
  },
  {
    title: '9. Assembly, installation, utilities and third parties',
    paragraphs: [
      'Assembly or installation will only be included where expressly stated in the quotation, invoice or order confirmation. Otherwise, the Customer is responsible for arranging competent installation at its own cost and risk.',
      'Any electrical, plumbing, drainage, gas, heating, air-conditioning, data or other utility connection must be carried out by a suitably competent and, where required, appropriately qualified person in accordance with applicable law and the requirements of the relevant service provider.',
      'Cabin Units is not responsible for damage, fire, electrical fault, water damage, leakage, injury or other loss caused by unauthorised alterations, incorrect connections, overloaded circuits, unsuitable appliances, third-party workmanship or installation work not carried out by or on behalf of Cabin Units.',
      'Where the Customer separately appoints a carrier, crane operator, installer, electrician, plumber, groundworker or other contractor, that contractor is responsible for its own work and services. Cabin Units is not responsible for the acts or omissions of an independent third party appointed by the Customer.',
    ],
  },
  {
    title: '10. Cosmetic condition – important customer acknowledgement',
    paragraphs: [
      'The Customer acknowledges and accepts that portable cabins, kiosks and modular units may contain minor Cosmetic Imperfections.',
      'These may include scratches, scuffs, small dents, surface marks, paint or coating variations, sealant marks, minor finishing marks or similar visual imperfections arising from manufacture, storage, handling, loading, transport, unloading or normal commercial preparation.',
      'The Customer is not required to inspect every surface or panel before purchase or delivery in order for this acknowledgement to apply. This clause is intended to make clear, before the contract is concluded, that minor visual imperfections may be a characteristic of the Product supplied.',
      'A Cosmetic Imperfection which is minor and does not materially affect the Product\'s safety, structural integrity, weather resistance, access, essential specification or ordinary intended use will not, by itself, entitle the Customer to reject the Product, demand a refund, obtain compensation or require a price reduction, except where applicable law gives the Customer a non-excludable right or Cabin Units expressly agrees otherwise in writing.',
      'This clause does not excuse significant damage, a material defect, a safety issue, a structural failure, a Product that is materially not as described, or any other matter for which Cabin Units is responsible under applicable law.',
    ],
  },
  {
    title: '11. Guarantee and manufacturing defects',
    paragraphs: [
      'Where a written guarantee or warranty period is stated for a Product, that guarantee is additional to any statutory rights that cannot be excluded.',
      'Subject to the applicable guarantee terms, Cabin Units may repair or replace a defective component where a proven defect in materials or manufacture materially interferes with ordinary intended use during the stated guarantee period.',
      'A guarantee does not cover Cosmetic Imperfections described in Clause 10, fair wear and tear, accidental damage, misuse, neglect, vandalism, unauthorised modifications, unsuitable foundations, third-party installation, customer-arranged transport, relocation, craning or lifting after delivery, or damage caused by external events unless expressly stated otherwise.',
      'The Customer must provide reasonable proof of purchase and reasonable evidence of the alleged defect so that the issue can be assessed.',
    ],
  },
  {
    title: '12. Complaints, repairs, refunds and other remedies',
    paragraphs: [
      'The Customer should notify Cabin Units promptly after discovering a problem and provide reasonable details, photographs or other evidence where requested. We may ask for a reasonable opportunity to inspect the Product or arrange an inspection before deciding the appropriate response.',
      'Any repair, replacement, refund, price reduction or other remedy will be dealt with in accordance with the contract, any applicable written guarantee and the Customer\'s mandatory legal rights.',
      'Nothing in these Conditions removes or restricts a Consumer\'s statutory rights in relation to faulty goods, goods not as described or other rights that cannot lawfully be excluded.',
      'Where a refund is lawfully due and the Product must be returned, the parties will arrange the return or collection as required by applicable law and the circumstances of the case. Refunds will normally be made to the original payment method where reasonably possible.',
    ],
  },
  {
    title: '13. Cancellation and amendment of orders',
    paragraphs: [
      'Orders may not be cancelled or amended after acceptance without Cabin Units\' written agreement, except where the Customer has a statutory right to cancel or amend.',
      'Where the Customer is a Consumer buying at a distance or off-premises, any statutory cancellation rights that apply will be honoured. Certain goods made to the Consumer\'s specifications or clearly personalised may be exempt from cancellation rights where the law provides.',
      'For Business Customers, or where no statutory cancellation right applies, any agreed cancellation may be subject to reasonable costs and losses actually incurred, including manufacturing, customisation, transport, administration and storage costs.',
      'Any requested change to specification, quantity, delivery date or site may result in a revised price and timetable, which will be confirmed before the change is accepted.',
    ],
  },
  {
    title: '14. Customer-caused delay and storage',
    paragraphs: [
      'If the Customer asks us to delay delivery or collection, or is not ready to receive the Product on the agreed date, we may store the Product and charge reasonable storage, handling, transport or redelivery costs actually incurred.',
      'For Business Customers, where delay caused by the Customer continues for more than 30 days, we may also propose a reasonable price adjustment where our underlying costs have materially increased. Any adjustment will be notified and will not apply where prohibited by law.',
    ],
  },
  {
    title: '15. Customer responsibilities after delivery',
    paragraphs: [
      'After risk passes, the Customer is responsible for the safe custody, operation, maintenance and security of the Product and for using it only for suitable and lawful purposes.',
    ],
    bullets: [
      'Keep the Product on a suitable and stable base and follow any anchoring or positioning requirements relevant to the site.',
      'Arrange appropriate routine maintenance and promptly address leaks, damaged seals, blocked drainage, corrosion, electrical issues or other maintenance concerns.',
      'Do not overload floors, roofs, shelves, electrical circuits or structural components.',
      'Do not make structural alterations, cut openings, drill into critical components or modify electrical or plumbing systems without competent advice.',
      'Keep exits and access points clear and maintain appropriate fire-safety equipment and procedures for the intended use.',
      'Take reasonable steps to protect the Product and its contents from theft, vandalism, extreme weather and accidental damage, and obtain appropriate insurance where necessary.',
    ],
  },
  {
    title: '16. Fire, collapse, dropping, damage to property and personal belongings',
    paragraphs: [
      'To the fullest extent permitted by law, Cabin Units is not responsible for fire, smoke, heat damage, explosion, collapse, tipping, sinking, falling, dropping, impact damage, water damage, theft, vandalism, or loss of or damage to the Customer\'s stock, equipment, vehicles, personal belongings or other property where the event occurs after risk has passed and is caused by or results from matters outside Cabin Units\' reasonable control, including:',
    ],
    bullets: [
      'Misuse, neglect, overloading or failure to maintain the Product.',
      'An unsuitable, unstable or inadequately prepared base, foundation or site.',
      'Movement, lifting, craning, towing, loading, unloading or relocation by the Customer or a third party.',
      'Collision, impact, dropping or mishandling after delivery.',
      'Third-party electrical, plumbing, gas, heating, air-conditioning or other installations.',
      'Unsafe appliances, overloaded circuits, heaters, cooking equipment, flammable materials or other items introduced by the Customer or third parties.',
      'Unauthorised structural changes, drilling, cutting, alterations or repairs.',
      'Acts or omissions of carriers, installers, contractors, visitors or other third parties not appointed by Cabin Units.',
      'Theft, vandalism, severe weather or other external events for which Cabin Units is not legally responsible.',
    ],
  },
  {
    title: '17. Relocation, lifting and customer-arranged transport',
    paragraphs: [
      'Portable units can be damaged if lifted, moved or transported incorrectly. Unless Cabin Units expressly agrees in writing to perform or manage a later relocation, all risk associated with moving, lifting, craning or transporting the Product after delivery is the Customer\'s responsibility.',
      'The Customer must use suitably competent operators, appropriate lifting points and equipment of adequate capacity. Cabin Units is not responsible for damage or injury caused by incorrect lifting, securing, transportation or placement by the Customer or a third party.',
      'If Cabin Units provides advice about lifting or positioning, that advice does not make Cabin Units responsible for the independent acts or equipment of a third-party carrier or crane operator appointed by the Customer.',
    ],
  },
  {
    title: '18. False, misleading or fraudulent claims',
    paragraphs: [
      'Cabin Units will consider genuine complaints fairly. The Customer must not knowingly make a false, misleading, fabricated or exaggerated claim, deliberately damage or alter a Product to create or increase a claim, or misrepresent when or how damage occurred.',
      'Where there are reasonable grounds to investigate a claim, Cabin Units may request photographs, video, delivery records, site information, inspection access or other reasonable evidence.',
      'Where fraud or deliberate misrepresentation is established, Cabin Units may reject the fraudulent part of the claim, preserve and use relevant evidence, refer the matter to insurers, legal advisers or appropriate authorities, and seek recovery of losses and costs to the extent permitted by law. This clause does not restrict any genuine statutory or contractual claim.',
    ],
  },
  {
    title: '19. Limitation of liability',
    paragraphs: [
      'Nothing in these Conditions excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or mandatory statutory consumer rights.',
      'Subject to the paragraph above, Cabin Units is not liable for loss that was not reasonably foreseeable when the contract was made or for loss caused by the Customer\'s own act, omission, misuse, failure to follow instructions, unsuitable site conditions or third-party contractors outside Cabin Units\' control.',
      'For Business Customers only, and to the fullest extent permitted by law, Cabin Units will not be liable for indirect or consequential loss, loss of profit, loss of business, loss of revenue, loss of anticipated savings or business interruption.',
      'For Business Customers only, Cabin Units\' total aggregate liability arising from a particular order will not exceed the total price paid or payable for that order, except where liability cannot lawfully be limited.',
      'The limitations applicable to Business Customers do not apply to Consumers where consumer law prevents such limitation.',
    ],
  },
  {
    title: '20. Events outside our reasonable control',
    paragraphs: [
      'Cabin Units is not responsible for delay or failure caused by events outside our reasonable control, including severe weather, transport disruption, road closure, industrial action, fire, flood, epidemic, war, civil disturbance, government action, utility failure or supply-chain disruption, provided we take reasonable steps to minimise the effect of the event and comply with any mandatory legal obligations.',
    ],
  },
  {
    title: '21. Default, suspension and termination – Business Customers',
    paragraphs: [
      'This clause applies to Business Customers only. If a Business Customer fails to pay sums when due, commits a serious breach that is not remedied within a reasonable period after notice, enters insolvency or administration, or ceases or threatens to cease business, Cabin Units may suspend performance or terminate the affected contract, subject to applicable insolvency law and any rights that cannot be excluded.',
      'Termination does not affect rights and obligations that accrued before termination.',
    ],
  },
  {
    title: '22. Governing law and jurisdiction',
    paragraphs: [
      'These Conditions and any dispute or claim arising from them are governed by the laws of England and Wales.',
      'For Business Customers, the courts of England and Wales will have exclusive jurisdiction unless the parties agree otherwise in writing.',
      'A Consumer retains any mandatory right to bring proceedings in the courts available to that Consumer under applicable law.',
    ],
  },
  {
    title: '23. General provisions',
    paragraphs: [
      'If any provision of these Conditions is found invalid or unenforceable, the remaining provisions will continue in force. The invalid provision will be treated as modified only to the minimum extent necessary to make it valid and enforceable where the law permits.',
      'A delay or failure by either party to exercise a right does not waive that right.',
      'No person other than Cabin Units and the Customer has a right to enforce these Conditions, except where applicable law provides otherwise.',
      'Any notice under these Conditions should be sent using the contact details stated on the relevant invoice, order confirmation or on our website.',
    ],
  },
];

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            <FileText className="h-4 w-4" />
            Terms &amp; Conditions of Sale
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Terms &amp; Conditions of Sale
          </h1>

          <p className="mt-3 text-gray-600">
            Product Condition &amp; Liability Acknowledgement for cabins, kiosks, modular units,
            portable buildings and related products supplied by Cabin Units.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Cabin Units is a trading name of MOTORCYCLE PARTS AND EQUIPMENT LTD.
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Version 1.0 · July 2026
          </p>
        </div>

        {/* Important notice */}
        <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 font-bold text-amber-950">
            Important – please read before ordering
          </h2>

          <p className="text-sm leading-relaxed text-amber-950/80">
            Our portable cabins, kiosks and modular units are commercial products that may
            contain minor cosmetic imperfections, including scratches, scuffs, small dents,
            marks, paint variations, sealant marks or other superficial blemishes. These do
            not necessarily affect the safety, structural integrity, weather resistance or
            ordinary intended use of the Product.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-amber-950/80">
            Acceptance of these Conditions does not require the Customer to inspect every
            panel or surface before delivery. Please read Clause 10 carefully.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-10 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm leading-relaxed text-blue-950/80">
            These Conditions form part of the contract between Cabin Units and the Customer.
            Any quotation, invoice, order confirmation or written special terms agreed for a
            particular order are read together with these Conditions. If a specific written
            term agreed for an order conflicts with these Conditions, the specific written
            term will take priority, except where the law provides otherwise.
          </p>
        </div>

        {/* Terms */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-24">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-3 leading-relaxed text-gray-600"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start leading-relaxed text-gray-600"
                    >
                      <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.title.startsWith('16.') && (
                <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm leading-relaxed text-gray-700">
                    The Customer is responsible for assessing the intended use and
                    site-specific risks and for arranging suitable insurance and safety
                    measures where appropriate.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    Nothing in this clause excludes or limits liability for death or personal
                    injury caused by Cabin Units&apos; negligence, fraud or fraudulent
                    misrepresentation, breach of statutory rights that cannot be excluded, or
                    any other liability that cannot lawfully be excluded or limited.
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Customer acknowledgement */}
        <div className="mt-12 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">
            Customer Acknowledgement
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-blue-950/80">
            By placing an order, paying a deposit or invoice, accepting delivery or
            collection, or otherwise entering into a contract with Cabin Units, the Customer
            confirms that they have read and accepted these Terms and Conditions.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-blue-950/80">
            The Customer specifically acknowledges that the Product may contain minor Cosmetic
            Imperfections such as scratches, scuffs, small dents, marks, paint variations or
            similar superficial blemishes, and that a minor Cosmetic Imperfection which does
            not materially affect safety, structure, weather resistance or ordinary intended
            use will not by itself entitle the Customer to compensation, a refund, rejection
            or a price reduction except where the law provides otherwise.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-blue-950/80">
            The Customer also acknowledges that, after risk has passed, Cabin Units is not
            responsible for loss, fire, collapse, dropping, mishandling, relocation damage,
            third-party installation, unsuitable foundations, misuse, unauthorised alterations
            or damage to belongings where the loss is not caused by Cabin Units and is outside
            Cabin Units&apos; legal responsibility.
          </p>

          <p className="mt-3 text-sm font-medium leading-relaxed text-blue-950">
            Nothing in these Terms removes any legal right or liability that cannot lawfully
            be excluded or limited.
          </p>
        </div>

        {/* Contact / footer */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            Questions about these terms?
          </h2>

          <p className="mb-4 text-sm text-gray-600">
            If anything is unclear, please contact Cabin Units before placing or confirming
            your order.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@cabinunits.co.uk"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              <Mail className="mr-2 h-4 w-4" />
              info@cabinunits.co.uk
            </a>

            <a
              href="tel:+447497954779"
              className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
            >
              <Phone className="mr-2 h-4 w-4" />
              07497 954 779
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-gray-400">
            Cabin Units — a trading name of MOTORCYCLE PARTS AND EQUIPMENT LTD.
            <br />
            Unit 7D, 66 Friday Street, Leicester, Leicestershire, LE1 3BW, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;