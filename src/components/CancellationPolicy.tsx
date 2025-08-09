import React from 'react';

const CancellationPolicy: React.FC = () => (
  <section id="cancellation" className="py-20 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cancellation Policy</h1>

      <div className="space-y-8">
        <p className="text-gray-700">
          We understand that life is unpredictable, and you may occasionally need to reschedule or cancel an appointment. To help us manage our schedule and support all clients fairly, we kindly ask that you follow our cancellation policy outlined below:
        </p>

        {/* Notice Period & Fees */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Notice Period & Fees</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><b>More than 48 hours' notice:</b> No cancellation fee.</li>
            <li><b>24–48 hours' notice:</b> 50% of the session fee will be charged.</li>
            <li><b>Less than 24 hours' notice or no-show:</b> The full session fee will be charged.</li>
          </ul>
          <p className="mt-4 font-bold text-gray-800">
            Cancellation fees must be paid in full before the next session can proceed.
          </p>
        </div>

        {/* Reminders */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Reminders</h2>
          <p className="text-gray-700">
            SMS reminders are sent as a courtesy only. Failure to receive a reminder (e.g., due to technical issues or incorrect contact details) does not waive cancellation fees.
          </p>
        </div>

        {/* Provider Cancellations */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">Provider Cancellations</h2>
          <p className="text-gray-700">
            We reserve the right to reschedule appointments in the event of staff illness, office closure, or unforeseen emergencies. If this occurs, we will contact you as soon as possible to arrange an alternative time.
          </p>
        </div>
      </div>
      </div>
    </section>
);

export default CancellationPolicy;