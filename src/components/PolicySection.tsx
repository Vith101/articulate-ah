import React from "react"
import TermsAndConditions from "./TermsAndConditions"
import CancellationPolicy from "./CancellationPolicy"
import PaymentPolicy from "./PaymentPolicy"
import ZeroTolerance from "./ZeroTolerance"
import PrivacyPolicy from "./PrivacyPolicy"
import { Reveal } from "./Reveal"

const PolicySection: React.FC = () => (
     <section id="policies" className="py-20 bg-pink-100">
        <Reveal>
          <TermsAndConditions />
        </Reveal>
        <Reveal>
          <CancellationPolicy />
        </Reveal>
        <Reveal>
          <PaymentPolicy />
        </Reveal>
        <Reveal>
          <ZeroTolerance />
        </Reveal>
        <Reveal>
          <PrivacyPolicy />
        </Reveal>
        <Reveal>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">After hours contact</h1>
          <div className="space-y-8">
        <p className="text-gray-700">
          If you or a loved one requires urgent support outside of our office hours, please contact one of the following services:
        </p>

        {/* Emergency Services */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Emergency Services</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>Police, Fire, Ambulance:</b> 000 (Australia-wide emergency number)</li>
          </ul>
        </div>

        {/* Mental Health Crisis Support */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Mental Health Crisis Support</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>Lifeline:</b> 13 11 14 (24/7 crisis support and suicide prevention)</li>
            <li><b>Beyond Blue:</b> 1300 22 4636 (24/7 mental health support)</li>
            <li><b>Kids Helpline:</b> 1800 55 1800 (24/7 counselling for children and young people)</li>
            <li><b>MensLine Australia:</b> 1300 78 99 78 (24/7 support for men)</li>
          </ul>
        </div>

        {/* NDIS Participants */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">NDIS Participants</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>NDIS Emergency Hotline:</b> 1800 800 110 (for urgent NDIS-related support)</li>
          </ul>
        </div>

        {/* Other Support Services */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Other Support Services</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>Poison Information Centre:</b> 13 11 26</li>
            <li><b>Health Direct:</b> 1800 022 222 (health advice and information)</li>
          </ul>
        </div>

        {/* Questions or Concerns */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Questions or Concerns</h2>
          <p className="text-gray-700">
            If you would like to discuss any of our policies or your individual circumstances, please contact our team at <b>admin@articulateah.com.au</b>
          </p>
        </div>
        </div>
      </div>
      </Reveal>
     </section>
)

export default PolicySection
