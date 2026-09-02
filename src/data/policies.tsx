import React from 'react';

export interface PolicyBlock {
  heading?: string;
  intro?: React.ReactNode;
  bullets?: React.ReactNode[];
  outro?: React.ReactNode;
}

export interface Policy {
  /** URL slug (also used as the section id). */
  slug: string;
  id: string;
  title: string;
  intro?: React.ReactNode;
  blocks: PolicyBlock[];
}

const termsAndConditions: Policy = {
  slug: 'terms-and-conditions',
  id: 'termsandconditions',
  title: 'Terms and Conditions',
  blocks: [
    {
      heading: '1. Appointments',
      bullets: [
        <>All appointments are by <b>booking only</b>. Session times will be confirmed in advance via email or phone.</>,
        <>Please arrive on time. Late arrivals may result in a shorter session or the need to reschedule.</>,
      ],
    },
    {
      heading: '2. Cancellations and Missed Appointments',
      bullets: [
        <>We require at least <b>24 hours’ notice</b> for cancellations or rescheduling.</>,
        <>Cancellations with less than 24 hours’ notice or non-attendance may incur up to <b>100% of the session fee</b>.</>,
        <><b>NDIS participants</b>: Cancellations in line with the NDIS Short Notice Cancellation Policy (less than 7 days’ notice) may be charged in full.</>,
      ],
    },
    {
      heading: '3. Privacy and Confidentiality',
      bullets: [
        <>All personal and health information is collected, stored, and managed in accordance with the <b>Australian Privacy Principles (APPs)</b>.</>,
        <>Information will not be shared without your consent, except when legally required (e.g., risk of harm or court order).</>,
        <>You have the right to access your records at any time upon written request.</>,
      ],
    },
    {
      heading: '4. NDIS Clients',
      bullets: [
        <>We provide services for <b>self-managed and plan-managed NDIS participants</b>.</>,
        <>It is the participant's or plan manager’s responsibility to ensure sufficient funding is available for services.</>,
        <>Service Agreements are provided and must be signed prior to commencement of ongoing therapy.</>,
      ],
    },
    {
      heading: '5. Reports and Documentation',
      bullets: [
        <>Reports, therapy plans, and goal summaries are available upon request and may incur a fee depending on the time required to prepare.</>,
        <>Please allow up to <b>10 working days</b> for report completion, unless otherwise agreed.</>,
      ],
    },
    {
      heading: '6. Telehealth',
      bullets: [
        <>Telehealth sessions are available and billed at the same rate as in-person therapy.</>,
        <>It is the client’s responsibility to ensure they have appropriate technology and internet access.</>,
        <>We use secure platforms to protect your privacy during online sessions.</>,
      ],
    },
    {
      heading: '7. Code of Conduct',
      bullets: [
        <>Our therapists are certified and registered professionals who abide by the <b>Speech Pathology Australia Code of Ethics</b>.</>,
        <>We are committed to providing respectful, inclusive, and evidence-based care.</>,
      ],
    },
  ],
};

const cancellationPolicy: Policy = {
  slug: 'cancellation-policy',
  id: 'cancellation',
  title: 'Cancellation Policy',
  intro:
    'We understand that life is unpredictable, and you may occasionally need to reschedule or cancel an appointment. To help us manage our schedule and support all clients fairly, we kindly ask that you follow our cancellation policy outlined below:',
  blocks: [
    {
      heading: 'Notice Period & Fees',
      bullets: [
        <><b>More than 48 hours' notice:</b> No cancellation fee.</>,
        <><b>24–48 hours' notice:</b> 50% of the session fee will be charged.</>,
        <><b>Less than 24 hours' notice or no-show:</b> The full session fee will be charged.</>,
      ],
      outro: 'Cancellation fees must be paid in full before the next session can proceed.',
    },
    {
      heading: 'Reminders',
      intro:
        'SMS reminders are sent as a courtesy only. Failure to receive a reminder (e.g., due to technical issues or incorrect contact details) does not waive cancellation fees.',
    },
    {
      heading: 'Provider Cancellations',
      intro:
        'We reserve the right to reschedule appointments in the event of staff illness, office closure, or unforeseen emergencies. If this occurs, we will contact you as soon as possible to arrange an alternative time.',
    },
  ],
};

const paymentPolicy: Policy = {
  slug: 'payment-policy',
  id: 'payment',
  title: 'Payment Policy',
  intro:
    'At Articulate Allied Health, we aim to provide a smooth and transparent billing process to ensure continuity of care for all our clients. Please read our payment policy carefully:',
  blocks: [
    {
      heading: '1. Payment Terms',
      bullets: [
        'Payment is due on the date of invoice.',
        'Invoices must be paid in full prior to the next scheduled session to avoid disruptions to ongoing therapy.',
      ],
    },
    {
      heading: '2. Overdue Payments',
      intro: 'Accounts that remain unpaid 30 days after the invoice date will:',
      bullets: [
        'Incur a late fee.',
        'Risk having future appointments suspended or cancelled.',
        'Have their session slot offered to another client on our waitlist.',
      ],
    },
    {
      heading: '3. Invoice Details',
      intro: 'All invoices include the necessary information for clients to:',
      bullets: [
        'Claim a rebate from private health insurance (if covered).',
        'Claim a Medicare rebate (if using a valid Chronic Disease Management Plan).',
        'Submit for NDIS reimbursement (if self-managed or plan-managed).',
      ],
    },
    {
      heading: '4. Payment Methods',
      intro: 'Payment instructions are provided on each invoice and may include:',
      bullets: ['Bank transfer', 'Credit/debit card', 'Secure online payment links'],
    },
  ],
};

const zeroTolerance: Policy = {
  slug: 'zero-tolerance',
  id: 'zero-tolerance',
  title: 'Zero Tolerance Policy',
  intro:
    'At Articulate Allied Health, we are committed to providing a safe, respectful, and supportive environment for all clients, families, and staff.',
  blocks: [
    {
      heading: 'Zero Tolerance Policy',
      intro: 'We have a zero tolerance policy for any form of:',
      bullets: [
        'Verbal or physical abuse',
        'Harassment, discrimination, or bullying',
        'Threatening or aggressive behaviour',
        'Intimidation or inappropriate conduct',
      ],
      outro: 'Such behaviour is unacceptable and will not be tolerated under any circumstances.',
    },
    {
      heading: 'Right to Leave',
      intro:
        'If any client, family member, or visitor behaves in a manner that is disrespectful, abusive, or unsafe, the therapist or staff member has the right to:',
      bullets: [
        'Immediately end or suspend the therapy session',
        'Ask the individual to leave the premises',
        'Report the incident to relevant authorities if necessary',
      ],
    },
    {
      heading: 'Consequences',
      intro: 'Clients who breach this policy may:',
      bullets: [
        'Have services suspended or terminated',
        'Be required to arrange alternative providers',
        'Be reported to professional bodies or law enforcement, depending on the severity',
      ],
    },
  ],
};

const privacyPolicy: Policy = {
  slug: 'privacy-policy',
  id: 'privacy',
  title: 'Privacy Policy',
  intro: (
    <>
      At Articulate Allied Health, we are committed to protecting your privacy and ensuring that all personal and health information is handled with the utmost care and in accordance with the <b>Australian Privacy Principles (APPs)</b> under the Privacy Act 1988 (Cth).
    </>
  ),
  blocks: [
    {
      heading: '1. What Information We Collect',
      intro:
        'We collect personal and health-related information to provide high-quality Speech Pathology services. This may include:',
      bullets: [
        'Name, contact details, date of birth',
        'Medical and developmental history',
        'Assessment results, reports, and therapy notes',
        'Medicare, NDIS, or private health insurance details',
      ],
    },
    {
      heading: '2. How We Use Your Information',
      intro: 'We use your information to:',
      bullets: [
        'Deliver therapy and communicate with you',
        'Liaise with other professionals (e.g., GPs, schools, support coordinators) with your consent',
        'Process billing and funding (e.g., NDIS, Medicare)',
        'Maintain clinical records as required by law and professional standards',
      ],
    },
    {
      heading: '3. Confidentiality',
      intro:
        'Your information is kept strictly confidential and will not be shared without your written consent, except in circumstances where:',
      bullets: [
        'There is a legal obligation (e.g. court order or subpoena)',
        'There is a risk of harm to you or another person',
        'Required for professional supervision (anonymised)',
      ],
    },
    {
      heading: '4. Storage and Security',
      intro:
        'We securely store your data using encrypted, password-protected digital systems. Physical records (if any) are stored in locked facilities. Only authorised staff have access to client information.',
    },
    {
      heading: '5. Recording of Sessions',
      intro:
        'Clients are not permitted to record therapy sessions (audio, video, or otherwise) without the prior consent of the treating therapist. Unauthorized recording may result in service termination or escalation.',
    },
    {
      heading: '6. Use of Artificial Intelligence (AI)',
      intro:
        'AI tools may be used to assist with tasks such as documentation or scheduling, but all outputs must be clinically reviewed before use. Personal client information must only be entered into AI systems that are privacy-compliant, and clients must be informed if AI is used in their care process.',
    },
    {
      heading: '7. Access and Corrections',
      intro:
        'You have the right to request access to your personal information or ask for corrections. Requests must be made in writing, and we will respond within a reasonable timeframe.',
    },
    {
      heading: '8. Telehealth Privacy',
      intro:
        'All telehealth sessions are conducted through secure, encrypted platforms. You are responsible for ensuring your device and internet connection are private and stable.',
    },
    {
      heading: '9. Retention of Records',
      intro:
        'We are legally required to retain client records for a minimum of 7 years, or until a child turns 25 years old, whichever is longer.',
    },
    {
      heading: 'Questions or Complaints',
      intro: (
        <>
          If you have any concerns about your privacy or how your information is handled, please contact us at:
          <br />
          📧 <b>admin@articulateah.com.au</b>
        </>
      ),
    },
  ],
};

/** After-hours contact information — shown at the foot of the aggregated policy page. */
const afterHours: Policy = {
  slug: 'after-hours',
  id: 'after-hours',
  title: 'After hours contact',
  intro:
    'If you or a loved one requires urgent support outside of our office hours, please contact one of the following services:',
  blocks: [
    {
      heading: 'Emergency Services',
      bullets: [<><b>Police, Fire, Ambulance:</b> 000 (Australia-wide emergency number)</>],
    },
    {
      heading: 'Mental Health Crisis Support',
      bullets: [
        <><b>Lifeline:</b> 13 11 14 (24/7 crisis support and suicide prevention)</>,
        <><b>Beyond Blue:</b> 1300 22 4636 (24/7 mental health support)</>,
        <><b>Kids Helpline:</b> 1800 55 1800 (24/7 counselling for children and young people)</>,
        <><b>MensLine Australia:</b> 1300 78 99 78 (24/7 support for men)</>,
      ],
    },
    {
      heading: 'NDIS Participants',
      bullets: [<><b>NDIS Emergency Hotline:</b> 1800 800 110 (for urgent NDIS-related support)</>],
    },
    {
      heading: 'Other Support Services',
      bullets: [
        <><b>Poison Information Centre:</b> 13 11 26</>,
        <><b>Health Direct:</b> 1800 022 222 (health advice and information)</>,
      ],
    },
    {
      heading: 'Questions or Concerns',
      intro: (
        <>
          If you would like to discuss any of our policies or your individual circumstances, please contact our team at <b>admin@articulateah.com.au</b>
        </>
      ),
    },
  ],
};

/** Individually routed policies, keyed by URL slug. */
export const POLICIES: Record<string, Policy> = {
  [termsAndConditions.slug]: termsAndConditions,
  [cancellationPolicy.slug]: cancellationPolicy,
  [paymentPolicy.slug]: paymentPolicy,
  [zeroTolerance.slug]: zeroTolerance,
  [privacyPolicy.slug]: privacyPolicy,
};

/** Order in which every policy (plus after-hours contact) appears on the aggregated policy page. */
export const POLICY_PAGE: Policy[] = [
  termsAndConditions,
  cancellationPolicy,
  paymentPolicy,
  zeroTolerance,
  privacyPolicy,
  afterHours,
];
