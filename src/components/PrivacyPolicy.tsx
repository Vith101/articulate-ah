import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <section id="privacy" className="py-20 bg-pink-100">
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
            <div className="space-y-8">
        <p className="text-gray-700">
          At Articulate Allied Health, we are committed to protecting your privacy and ensuring that all personal and health information is handled with the utmost care and in accordance with the <b>Australian Privacy Principles (APPs)</b> under the Privacy Act 1988 (Cth).
        </p>

        {/* What Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">1. What Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal and health-related information to provide high-quality Speech Pathology services. This may include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Name, contact details, date of birth</li>
            <li>Medical and developmental history</li>
            <li>Assessment results, reports, and therapy notes</li>
            <li>Medicare, NDIS, or private health insurance details</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your information to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Deliver therapy and communicate with you</li>
            <li>Liaise with other professionals (e.g., GPs, schools, support coordinators) with your consent</li>
            <li>Process billing and funding (e.g., NDIS, Medicare)</li>
            <li>Maintain clinical records as required by law and professional standards</li>
          </ul>
        </div>

        {/* Confidentiality */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">3. Confidentiality</h2>
          <p className="text-gray-700">
            Your information is kept strictly confidential and will not be shared without your written consent, except in circumstances where:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>There is a legal obligation (e.g. court order or subpoena)</li>
            <li>There is a risk of harm to you or another person</li>
            <li>Required for professional supervision (anonymised)</li>
          </ul>
        </div>

        {/* Storage and Security */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">4. Storage and Security</h2>
          <p className="text-gray-700">
            We securely store your data using encrypted, password-protected digital systems. Physical records (if any) are stored in locked facilities. Only authorised staff have access to client information.
          </p>
        </div>

        {/* Recording of Sessions */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">5. Recording of Sessions</h2>
          <p className="text-gray-700">
            Clients are not permitted to record therapy sessions (audio, video, or otherwise) without the prior consent of the treating therapist. Unauthorized recording may result in service termination or escalation.
          </p>
        </div>

        {/* Use of Artificial Intelligence (AI) */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">6. Use of Artificial Intelligence (AI)</h2>
          <p className="text-gray-700">
            AI tools may be used to assist with tasks such as documentation or scheduling, but all outputs must be clinically reviewed before use. Personal client information must only be entered into AI systems that are privacy-compliant, and clients must be informed if AI is used in their care process.
          </p>
        </div>

        {/* Access and Corrections */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">7. Access and Corrections</h2>
          <p className="text-gray-700">
            You have the right to request access to your personal information or ask for corrections. Requests must be made in writing, and we will respond within a reasonable timeframe.
          </p>
        </div>
        
        {/* Telehealth Privacy */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">8. Telehealth Privacy</h2>
          <p className="text-gray-700">
            All telehealth sessions are conducted through secure, encrypted platforms. You are responsible for ensuring your device and internet connection are private and stable.
          </p>
        </div>

        {/* Retention of Records */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">9. Retention of Records</h2>
          <p className="text-gray-700">
            We are legally required to retain client records for a minimum of 7 years, or until a child turns 25 years old, whichever is longer.
          </p>
        </div>
        
        {/* Questions or Complaints */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Questions or Complaints</h2>
          <p className="text-gray-700">
            If you have any concerns about your privacy or how your information is handled, please contact us at:
            <br />
            📧 <b>admin@articulateah.com.au</b>
          </p>
        </div>

      </div>
        </div>
    </section>
);

export default PrivacyPolicy;