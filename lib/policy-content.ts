// Legal policy copy for The Meat Agent (LPJH HOLDINGS PTY LTD, ABN 55 657 961 058).
// Drafted to Australian law (Australian Consumer Law; Privacy Act 1988 / Australian Privacy Principles).
// Business-choice items (24-hour reporting request, 5-business-day refund, one-business-day reply) are marked in the
// hand-over note and should be confirmed by the owner. Have a lawyer review before relying on it in a dispute.

import type { SiteFaq } from '@/lib/site-faqs';

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

export const POLICY_EFFECTIVE = '2026-11-17';
export const POLICY_EFFECTIVE_LABEL = '17 November 2026';

// ---------------------------------------------------------------------------------------------
export const RETURNS_INTRO =
  'This policy explains what happens if there is a problem with an order from The Meat Agent (trading as Meat Direct), operated by LPJH HOLDINGS PTY LTD, ABN 55 657 961 058 ("we", "us"). It applies to orders placed through our website, by email or by phone, and it works alongside your rights under the Australian Consumer Law.';

export const RETURNS_SECTIONS: PolicySection[] = [
  {
    heading: '1. Your rights under the Australian Consumer Law',
    paragraphs: [
      'Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and to compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.',
      'Nothing in this policy excludes, restricts or modifies those rights.',
    ],
  },
  {
    heading: '2. Why we do not accept change-of-mind returns',
    paragraphs: [
      'Meat is perishable, temperature-controlled food. Once an order leaves our cold chain we cannot verify how it has been stored, and food safety rules mean returned meat cannot be restocked or resold. For that reason we do not accept returns, or give refunds, for change of mind, ordering the wrong item or no longer needing the product.',
      'This does not affect your rights in section 1.',
    ],
  },
  {
    heading: '3. When we will replace, credit or refund',
    paragraphs: ['We will put things right if your order:'],
    list: [
      'arrives warm or above a safe temperature (our target is to arrive below 2.5°C), or frozen product arrives thawed;',
      'arrives damaged, leaking or with a broken vacuum seal;',
      'contains the wrong item, a missing item or a short weight compared with your order;',
      'is not of acceptable quality, for example it is spoiled, has an off smell or colour, or contains a foreign object; or',
      'otherwise does not match its description on our website.',
    ],
  },
  {
    heading: '4. How to report a problem',
    paragraphs: [
      'Please tell us as soon as you can, ideally within 24 hours of delivery. The sooner you tell us, the faster we can check the cold chain and fix the problem. This is a request to help us help you, and it does not limit your rights under the Australian Consumer Law.',
    ],
    list: [
      'Email sales@themeatdirect.com.au or call +61 480 804 189.',
      'Give us your name, order reference and the product affected, and describe the problem.',
      'Attach photos of the product, its label showing any batch or use-by details, the vacuum seal, the packaging and the shipping box. If you can, tell us the temperature of the product when it arrived.',
      'Keep the affected product refrigerated or frozen and do not throw it away until we confirm what to do. If you think the product is unsafe, do not eat it.',
    ],
  },
  {
    heading: '5. What we will do',
    paragraphs: [
      'We aim to reply within one business day. Where the problem is not a major failure, we will choose to replace the affected item, give you a credit or refund you. Where it is a major failure, you can choose a replacement or a refund. A refund covers the price of the affected items and, where the whole order is affected, the delivery fee you paid.',
    ],
  },
  {
    heading: '6. How refunds are paid',
    paragraphs: [
      'We refund to the way you paid. If you paid by PayID or bank transfer, we refund to the bank account that made the payment, or to an Australian account you nominate in writing, within five business days after the refund is approved.',
      'If you paid by cryptocurrency, we refund the Australian dollar amount you paid for the order, including any crypto discount you received, to an Australian bank account you nominate. If you ask and we agree, we can instead refund in cryptocurrency at the Australian dollar value on the day of the refund, and we are not responsible for changes in the crypto price after that.',
    ],
  },
  {
    heading: '7. Cancelling an order',
    paragraphs: [
      'Contact us as soon as possible. If your order has not yet been packed and dispatched, we will cancel it and refund you in full. Once an order has been dispatched we cannot cancel it, because chilled and frozen product cannot be returned.',
    ],
  },
  {
    heading: '8. Delivery',
    paragraphs: [
      'Please give us a complete and correct delivery address and make sure someone can receive the order and put it into a fridge or freezer promptly. If a delivery cannot be completed we will contact you. Where a delivery fails because the address was incorrect or incomplete, or because no one was available and no safe arrangement had been made, the cost of the lost or spoiled product is generally yours. Where the courier or we are at fault, we will fix it under section 5.',
    ],
  },
  {
    heading: '9. What is not covered',
    list: [
      'Product that spoiled because it was stored incorrectly after delivery, or left unrefrigerated after arrival.',
      'Change of mind (see section 2).',
      'Natural variation in the appearance, trim and exact weight of fresh cuts within normal tolerances, where the pack weight and description on our website are otherwise accurate.',
    ],
  },
  {
    heading: '10. Trade customers',
    paragraphs: [
      'This policy also applies to restaurants, hotels, cafés, caterers and other trade customers. Consumer guarantees under the Australian Consumer Law may not apply to goods bought for resale or for use in producing other goods. Even so, we will deal with warm, damaged, short or incorrect deliveries to trade customers under sections 3 to 6 on the same basis, and nothing here limits any right you have by law.',
    ],
  },
  {
    heading: '11. Complaints and contact',
    paragraphs: [
      'If you are not happy with how we have handled a problem, tell us and we will review it. You can also contact the Queensland Office of Fair Trading or the Australian Competition and Consumer Commission (accc.gov.au).',
      'The Meat Agent, 164 Brisbane St, Ipswich QLD 4305. Email sales@themeatdirect.com.au. Phone +61 480 804 189.',
    ],
  },
  {
    heading: '12. Changes and governing law',
    paragraphs: [
      'We may update this policy. The version that applies to an order is the one published on our website when you placed it. This policy is governed by the laws of Queensland, Australia.',
    ],
  },
];

export const RETURNS_FAQS: SiteFaq[] = [
  {
    question: 'Can I return meat if I change my mind?',
    answer:
      'No. Meat is perishable, temperature-controlled food and returned meat cannot be restocked or resold for food safety reasons, so we do not accept change-of-mind returns. This does not affect your rights under the Australian Consumer Law if the order is faulty, damaged, incorrect or not of acceptable quality.',
  },
  {
    question: 'What if my order arrives warm, damaged or wrong?',
    answer:
      'Email sales@themeatdirect.com.au or call +61 480 804 189 with your order reference and photos, ideally within 24 hours of delivery. Keep the product refrigerated and do not discard it until we confirm. We will replace, credit or refund the affected items.',
  },
  {
    question: 'How long does a refund take, and how is it paid?',
    answer:
      'We refund to the way you paid. PayID and bank transfer refunds go to the paying bank account, or an Australian account you nominate, within five business days of approval. Crypto orders are refunded as the Australian dollar amount paid, to a nominated bank account.',
  },
  {
    question: 'Can I cancel an order after I have paid?',
    answer:
      'Yes, if it has not been packed and dispatched. Contact us straight away and we will cancel it and refund you in full. Once an order has been dispatched we cannot cancel it, because chilled and frozen product cannot be returned.',
  },
  {
    question: 'Does this policy apply to restaurants and trade customers?',
    answer:
      'Yes. Trade customers are covered for warm, damaged, short or incorrect deliveries on the same basis as other customers, even where consumer guarantees under the Australian Consumer Law may not apply to goods bought for resale. Nothing in the policy limits any right you have by law.',
  },
];

// ---------------------------------------------------------------------------------------------
export const PRIVACY_INTRO =
  'LPJH HOLDINGS PTY LTD, ABN 55 657 961 058, trades as The Meat Agent and Meat Direct ("we", "us"). We respect your privacy and handle personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. This policy explains what we collect, why, who we share it with and how you can access or correct it.';

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    heading: '1. What personal information we collect',
    paragraphs: ['Depending on how you deal with us, we collect:'],
    list: [
      'Order details: your name, email address, phone number, delivery address (street, suburb, state, postcode), delivery notes, the products ordered, the order total and the payment method you chose (PayID, bank transfer or crypto).',
      'Enquiry and trade account details: your name, email, phone number, business name and type, the volumes and products you are interested in, and anything you write in the message.',
      'Payment matching details: the reference, payer name or wallet transaction details we need to match a PayID, bank or crypto payment to your order. We do not collect or store card numbers.',
      'Communications: emails, messages and call notes between you and us.',
      'Technical information: your IP address, browser and device type and pages requested, recorded by our website host in the ordinary course of serving the site.',
    ],
  },
  {
    heading: '2. How we collect it',
    paragraphs: [
      'We collect personal information directly from you when you place an order, submit a contact or wholesale form, email or call us, or pay us. We also receive limited information from couriers about the delivery of your order. We do not buy marketing lists.',
    ],
  },
  {
    heading: '3. Why we use it',
    list: [
      'To process, pack, dispatch and deliver your order and to confirm and reconcile your payment.',
      'To answer enquiries, assess trade account applications and provide customer service, including resolving delivery and quality problems.',
      'To keep records and meet legal obligations, including tax, accounting and food safety requirements. Tax records are generally kept for at least five years.',
      'To keep our website and systems secure and working properly, and to prevent fraud and misuse.',
      'To contact you about your order or, only where you have agreed or would reasonably expect it, about our products. Every marketing message will include a way to unsubscribe, as the Spam Act 2003 (Cth) requires.',
    ],
  },
  {
    heading: '4. Who we share it with',
    paragraphs: ['We share personal information only as needed to run the business:'],
    list: [
      'Couriers and delivery partners, who receive your name, delivery address, phone number and delivery notes so they can deliver your order.',
      'Our service providers, including our website host (Vercel) and our email provider (Zoho), which process data for us under their own security terms.',
      'Your bank or crypto wallet provider, which handles your payment. We do not receive your banking credentials.',
      'Professional advisers such as accountants and lawyers, and government agencies or regulators where the law requires or permits it.',
    ],
    after: ['We do not sell your personal information.'],
  },
  {
    heading: '5. Overseas disclosure',
    paragraphs: [
      'Some of our service providers, such as our website host, may store or process information outside Australia, including in the United States. We take reasonable steps to make sure they handle information consistently with the Australian Privacy Principles.',
    ],
  },
  {
    heading: '6. Cookies and local storage',
    paragraphs: [
      'Your shopping cart is kept in your browser\'s local storage on your own device so it is still there if you come back. As at the date of this policy, our website does not run advertising or analytics tracking scripts. If we add them, we will update this policy first.',
    ],
  },
  {
    heading: '7. Security and how long we keep information',
    paragraphs: [
      'We take reasonable steps to protect personal information from misuse, interference, loss and unauthorised access, including limiting who can see orders and using secure connections. We keep information only as long as we need it for the purposes above or the law requires, then delete or de-identify it. If we have a data breach that is likely to cause serious harm, we will notify you and the Office of the Australian Information Commissioner as the Notifiable Data Breaches scheme requires.',
    ],
  },
  {
    heading: '8. Accessing and correcting your information',
    paragraphs: [
      'You can ask to see the personal information we hold about you and ask us to correct it if it is wrong, out of date or incomplete. Email sales@themeatdirect.com.au. We may need to confirm your identity first, and we will respond within a reasonable time, usually within 30 days. You can also ask us to stop sending marketing messages at any time.',
    ],
  },
  {
    heading: '9. Complaints',
    paragraphs: [
      'If you think we have breached your privacy, email sales@themeatdirect.com.au or write to The Meat Agent, 164 Brisbane St, Ipswich QLD 4305, and we will investigate and reply. If you are not satisfied with our response you can contact the Office of the Australian Information Commissioner at oaic.gov.au or on 1300 363 992.',
    ],
  },
  {
    heading: '10. Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The current version is always on this page, with its effective date at the top.',
    ],
  },
];

export const PRIVACY_FAQS: SiteFaq[] = [
  {
    question: 'What personal information does The Meat Agent collect when I order?',
    answer:
      'We collect your name, email, phone number, delivery address, delivery notes, the items ordered and the payment method you chose. We do not collect or store card numbers, because we take payment by PayID, bank transfer or crypto.',
  },
  {
    question: 'Who do you share my information with?',
    answer:
      'Only as needed to run the business: couriers who deliver your order, service providers such as our website host and email provider, your bank or wallet provider for payment, and advisers or authorities where the law requires. We do not sell personal information.',
  },
  {
    question: 'Does the website use tracking cookies or analytics?',
    answer:
      'No advertising or analytics tracking scripts run on the site as at the date of this policy. Your cart is kept in your browser\'s local storage on your own device. If we add tracking, we will update this policy before we do.',
  },
  {
    question: 'How can I see or correct the information you hold about me?',
    answer:
      'Email sales@themeatdirect.com.au and ask. We may confirm your identity first and will respond within a reasonable time, usually within 30 days. You can also ask us to stop marketing messages, and you can complain to the Office of the Australian Information Commissioner.',
  },
];
