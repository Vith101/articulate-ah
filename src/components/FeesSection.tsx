import React from 'react';
import { HoverCard } from './HoverCard';
import FlipabbleCard from './FlippableCard';

import next2 from '../../assets/next2.png';
import assessment from '../../assets/assessments.png';
import interventionSession from '../../assets/assessments-2.png';
import itp from '../../assets/itp.png';
import reports from '../../assets/reports-conferencing.png';
import travel from '../../assets/travel.png';
import ndis from '../../assets/ndis.png';
import medicare from '../../assets/medicare-logo.png';
import privateHealth from '../../assets/private-health-insurance.png';

const FeesSection: React.FC = () => (
  <section id="servicesWeProvide" className="py-10 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Fees and Rebates</h3>
      <h4 className="text-2xl font-semibold text-center mb-10">Our Fees</h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
            {/* <div><HoverCard title="Assessments" imageLink="/assets/assessments.png"/></div> */}
            <FlipabbleCard
                imageLink={next2} // Use the imported variable here
                title='Initial Consultation'
                desc={<>1 hour initial meeting to complete relevant forms, collect information and determine assessment and therpay needs.{<br />}$193.99</>}
            />
            <FlipabbleCard
                imageLink={assessment} // Use the imported variable here
                title='Comprehensive Assessment & Report'
                desc={<>Consists of 2 hour assessment + 3 hour report writing.{<br />}$969.95</>}
            />
            <FlipabbleCard
                imageLink={interventionSession} // Use the imported variable here
                title='Intervention Session'
                desc={<>15 minute session planning.{<br />}50 minute session.{<br />}10 minute clinical case notes. {<br />}$242.48</>}
            />
            <FlipabbleCard
                imageLink={itp} // Use the imported variable here
                title='Individual Therapy Program'
                desc={<>ITP is completed each quarter and maintains a level of therapy excellence. It also supports clinicians and clients to monitor skills and ensure progress towards long term goals.{<br />}$193.99</>}
            />
            <FlipabbleCard
                imageLink={reports} // Use the imported variable here
                title='Reports/Case conferencing'
                desc={<>Charged at the hourly rate when requied.{<br />}$193.99</>}
            />
            <FlipabbleCard
                imageLink={travel} // Use the imported variable here
                title='Travel'
                desc='Travel fees consist of labour (time travelled) and non-labour costs (distance travelled). Rate per session will be confirmed during the service agreement and based on the location of intervention.'
            />
          </div>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h4 className="text-2xl font-semibold text-center mb-10">Rebates</h4>
          <p className="text-left mb-8">
          We understand that starting speech-pathology is a big step - so we aim to make that process as smooth and supportive as possible. Here's what to expect when you begin your
          journey with us.
          </p>
          <div className='grid lg:grid-cols-3 gap-8 md:gap-16 items-start mt-10 group'>
          <FlipabbleCard
               imageLink={ndis} // Use the imported variable here
               title='National Disablility Insurance Scheme (NDIS)'
               desc='Our services are availlable to self-managed and plan-managed clients'
          />
          <FlipabbleCard
               imageLink={medicare} // Use the imported variable here
               title='Chronic Disease Management Plan (CDMP)'
               desc={<>Your GP can organise a CDMP plan for your child, whihc offers partial Medicare rebates for 5 sessions within a 12-month period.{<br />}Please contact your GP to find out more.</>}
          />
          <FlipabbleCard
               imageLink={privateHealth} // Use the imported variable here
               title='Private Health Insurance'
               desc="Your health insurance may cover a portion of therapy costs. Please contact your private health to find out more."
          />
          </div>
     </div>
    </div>
  </section>
);

export default FeesSection;
