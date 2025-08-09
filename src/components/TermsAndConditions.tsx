import React from 'react';

const TermsAndConditions: React.FC = () => (
  <section id="termsandconditions" className="py-20 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Terms and Conditions</h3>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <div className="space-y-8">
         {/* Appointments */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">1. Appointments</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>All appointments are by <b>booking only</b>. Session times will be confirmed in advance via email or phone.</li>
             <li>Please arrive on time. Late arrivals may result in a shorter session or the need to reschedule.</li>
           </ul>
         </div>

         {/* Cancellations and Missed Appointments */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">2. Cancellations and Missed Appointments</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>We require at least <b>24 hours’ notice</b> for cancellations or rescheduling.</li>
             <li>Cancellations with less than 24 hours’ notice or non-attendance may incur up to <b>100% of the session fee</b>.</li>
             <li><b>NDIS participants</b>: Cancellations in line with the NDIS Short Notice Cancellation Policy (less than 7 days’ notice) may be charged in full.</li>
           </ul>
         </div>

         {/* Privacy and Confidentiality */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">3. Privacy and Confidentiality</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>All personal and health information is collected, stored, and managed in accordance with the <b>Australian Privacy Principles (APPs)</b>.</li>
             <li>Information will not be shared without your consent, except when legally required (e.g., risk of harm or court order).</li>
             <li>You have the right to access your records at any time upon written request.</li>
           </ul>
         </div>

         {/* NDIS Clients */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">4. NDIS Clients</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>We provide services for <b>self-managed and plan-managed NDIS participants</b>.</li>
             <li>It is the participant's or plan manager’s responsibility to ensure sufficient funding is available for services.</li>
             <li>Service Agreements are provided and must be signed prior to commencement of ongoing therapy.</li>
           </ul>
         </div>

         {/* Reports and Documentation */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">5. Reports and Documentation</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>Reports, therapy plans, and goal summaries are available upon request and may incur a fee depending on the time required to prepare.</li>
             <li>Please allow up to <b>10 working days</b> for report completion, unless otherwise agreed.</li>
           </ul>
         </div>

         {/* Telehealth */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">6. Telehealth</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>Telehealth sessions are available and billed at the same rate as in-person therapy.</li>
             <li>It is the client’s responsibility to ensure they have appropriate technology and internet access.</li>
             <li>We use secure platforms to protect your privacy during online sessions.</li>
           </ul>
         </div>

         {/* Code of Conduct */}
         <div>
           <h2 className="text-2xl font-semibold text-black mb-3">7. Code of Conduct</h2>
           <ul className="list-disc pl-5 text-gray-700 space-y-2">
             <li>Our therapists are certified and registered professionals who abide by the <b>Speech Pathology Australia Code of Ethics</b>.</li>
             <li>We are committed to providing respectful, inclusive, and evidence-based care.</li>
           </ul>
         </div>
       </div>
      </div>
    </div>
</section>);      

export default TermsAndConditions;