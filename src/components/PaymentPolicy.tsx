import React from 'react';

const PaymentPolicy: React.FC = () => (
    <section id="payment" className="py-20 bg-pink-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Payment Policy</h1>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="space-y-8">
        <p className="text-gray-700">
          At Articulate Allied Health, we aim to provide a smooth and transparent billing process to ensure continuity of care for all our clients. Please read our payment policy carefully:
        </p>

        {/* Payment Terms */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">1. Payment Terms</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Payment is due on the date of invoice.</li>
            <li>Invoices must be paid in full prior to the next scheduled session to avoid disruptions to ongoing therapy.</li>
          </ul>
        </div>

        {/* Overdue Payments */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">2. Overdue Payments</h2>
          <p className="text-gray-700">
            Accounts that remain unpaid 30 days after the invoice date will:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Incur a late fee.</li>
            <li>Risk having future appointments suspended or cancelled.</li>
            <li>Have their session slot offered to another client on our waitlist.</li>
          </ul>
        </div>

        {/* Invoice Details */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">3. Invoice Details</h2>
          <p className="text-gray-700">
            All invoices include the necessary information for clients to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Claim a rebate from private health insurance (if covered).</li>
            <li>Claim a Medicare rebate (if using a valid Chronic Disease Management Plan).</li>
            <li>Submit for NDIS reimbursement (if self-managed or plan-managed).</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-3">4. Payment Methods</h2>
          <p className="text-gray-700">
            Payment instructions are provided on each invoice and may include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Bank transfer</li>
            <li>Credit/debit card</li>
            <li>Secure online payment links</li>
          </ul>
        </div>
      </div>
        </div>
    </section>
);  

export default PaymentPolicy;