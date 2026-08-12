import React from 'react';
import { ContactLink } from '../ui/ContactLink';

const CareersSection: React.FC = () => (
  <section id="careers" className="py-10 bg-pink-100 h-full">
    <h3 className="text-3xl font-semibold text-center mb-2">Join Articulate Allied Health</h3>
    <p className="text-xl text-center text-pink-900 font-medium mb-10">Do Meaningful Work. Your Way.</p>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mb-4 text-lg leading-relaxed">
        At Articulate Allied Health, we believe great clinicians thrive when they have the flexibility, support and autonomy to provide genuinely person-centred care.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We are always interested in connecting with passionate and experienced Speech Pathologists and Allied Health professionals who are looking to work as subcontractors within a supportive, collaborative and growing practice.
      </p>
      <p className="mb-8 text-lg leading-relaxed">
        Our clinicians work with clients across the lifespan and a broad range of presentations, including complex NDIS caseloads. We provide opportunities to work across community settings and through telehealth, allowing clinicians to build a caseload that aligns with their clinical interests, experience and availability.
      </p>

      <h4 className="text-2xl font-semibold mb-4">Why work with Articulate Allied Health?</h4>
      <p className="mb-4 text-lg leading-relaxed">
        As a subcontractor, you can enjoy the flexibility and independence of managing your own clinical practice, while having the support of an established allied health team behind you.
      </p>
      <p className="mb-3 text-lg font-semibold">We value clinicians who are:</p>
      <ul className="list-disc list-inside space-y-2 mb-8 text-lg leading-relaxed">
        <li>Passionate about delivering high-quality, evidence-based care</li>
        <li>Confident working with NDIS participants and complex presentations</li>
        <li>Person-centred, collaborative and strengths-based in their approach</li>
        <li>Comfortable working independently across community and telehealth settings</li>
        <li>Committed to professional growth and ongoing learning</li>
        <li>Looking for flexibility and autonomy in their working arrangements</li>
      </ul>
      <p className="mb-8 text-lg leading-relaxed">
        Whether you are an experienced clinician looking to expand your practice or an established practitioner seeking greater flexibility, Articulate Allied Health would love to hear from you.
      </p>

      <h4 className="text-2xl font-semibold mb-4">Interested in joining us?</h4>
      <p className="mb-4 text-lg leading-relaxed">
        If you are a Speech Pathologist or Allied Health professional interested in subcontracting with Articulate Allied Health, we would love to connect.
      </p>
      <p className="text-lg leading-relaxed">
        <ContactLink className="text-pink-900 font-semibold underline underline-offset-2 hover:text-pink-700">
          Contact the Articulate Allied Health team
        </ContactLink>{' '}
        to start a conversation about opportunities to work with us.
      </p>
    </div>
  </section>
);

export default CareersSection;
