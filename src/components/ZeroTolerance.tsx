import React from 'react';

const ZeroTolerance: React.FC = () => (
    <section id="zero-tolerance" className="py-20 bg-pink-100">
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Zero Tolerance Policy</h1>
                <div className="space-y-8">
        <p className="text-gray-700">
          At Articulate Allied Health, we are committed to providing a safe, respectful, and supportive environment for all clients, families, and staff.
        </p>

        {/* Zero Tolerance Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Zero Tolerance Policy</h2>
          <p className="text-gray-700">
            We have a zero tolerance policy for any form of:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Verbal or physical abuse</li>
            <li>Harassment, discrimination, or bullying</li>
            <li>Threatening or aggressive behaviour</li>
            <li>Intimidation or inappropriate conduct</li>
          </ul>
          <p className="mt-4 font-bold text-gray-800">
            Such behaviour is unacceptable and will not be tolerated under any circumstances.
          </p>
        </div>

        {/* Right to Leave */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Right to Leave</h2>
          <p className="text-gray-700">
            If any client, family member, or visitor behaves in a manner that is disrespectful, abusive, or unsafe, the therapist or staff member has the right to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Immediately end or suspend the therapy session</li>
            <li>Ask the individual to leave the premises</li>
            <li>Report the incident to relevant authorities if necessary</li>
          </ul>
        </div>

        {/* Consequences */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Consequences</h2>
          <p className="text-gray-700">
            Clients who breach this policy may:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Have services suspended or terminated</li>
            <li>Be required to arrange alternative providers</li>
            <li>Be reported to professional bodies or law enforcement, depending on the severity</li>
          </ul>
        </div>
      </div>
        </div>
    </section>
);  

export default ZeroTolerance;
