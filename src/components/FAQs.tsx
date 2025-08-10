import React from 'react';
import { Link } from 'react-router-dom';
import FAQDropDown from './FAQDropDown';

const FAQs: React.FC = () => (
  <section id="faq" className="py-20 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h3 className="text-3xl font-semibold text-center mb-10">FAQs</h3>
        <div className="container max-w-7xl mx-auto px-4 pb-8">
            <FAQDropDown
            question="1. What is speech pathology?"
            answer="Speech pathology supports people of all ages with communication, language, speech, social skills, voice, and swallowing difficulties. We help individuals speak clearly, understand and express language, interact socially, and eat and drink safely."     
            />
            <FAQDropDown
            question="2. Who do you work with?"
            answer="We work with children, adolescents, and adults. This includes support for developmental delays, autism, neurological conditions, speech sound disorders, literacy challenges, swallowing difficulties, and more."
            />
            <FAQDropDown
            question="3. What is a holistic approach?"
            answer="Our holistic approach means we look at the whole person – not just symptoms. We consider emotional well-being, sensory needs, environment, and lifestyle. Therapy may include mindfulness, play-based methods, collaboration with other professionals, and family involvement."
            />
            <FAQDropDown
            question="4. Do you accept NDIS funding?"
            answer="Yes. We welcome self-managed and plan-managed NDIS participants. Our services can be claimed under Capacity Building – Improved Daily Living. We are happy to collaborate with your support coordinator or plan manager to make the process smooth."
            />
            <FAQDropDown
            question="5. Do I need a referral?"
            answer="No referral is needed to access our services. However, some clients may be referred by a GP, paediatrician, or another health professional. We're also happy to work with any professionals already involved in your care."
            />
            <FAQDropDown
            question="6. Where do sessions take place?"
            answer="We offer flexible options, including clinic-based, telehealth, and home or school visits (location dependent). Our therapy spaces are warm, calm, and sensory-aware."
            />
            <FAQDropDown
            question="7. How long are the sessions?"
            answer="Sessions typically run for 45 minutes, with 15mins for clinical case notes. Session frequency is discussed during your initial consultation."
            />
            <FAQDropDown
            question="8. What happens at the first appointment?"
            answer="Your first session will include a detailed discussion of your goals. We’ll develop a therapy plan together and answer any questions you have. From there we will complete an assessment or begin intervention"
            />
            <FAQDropDown
            question="9. Do you provide reports and goal-setting for NDIS?"
            answer="Yes, we provide assessment reports, progress updates, and goal-setting documents to support NDIS reviews and funding applications."
            />
            <FAQDropDown
            question="10. Can I claim a rebate through my private health insurance?"
            answer="Yes. If your policy includes extras cover for speech pathology, you may be eligible for a rebate. You’ll need to pay the full invoice upfront, and then claim the rebate directly through your private health fund using the receipt we provide. We recommend checking with your insurer about your specific level of cover."
            />
            <FAQDropDown
            question="11. Can I claim a Medicare rebate for speech therapy?"
            answer="Yes, if you have a Chronic Disease Management Plan (CDMP)—also known as an EPC plan—from your GP, you may be eligible for a Medicare rebate for up to 5 allied health sessions per calendar year. You will need to pay the full fee upfront, and we will provide an invoice so you can claim the rebate through Medicare. Talk to your GP to find out if you're eligible."
            />
            <FAQDropDown
            question="12. How do I book an appointment?"
            answer={<>You can contact us via our online {<Link to="/contact" className='text-blue-300 underline'>enquiry form</Link>}, email, or call us directly. We’ll guide you through the process.</>}
            />
        </div>
    </div>
  </section>
);

export default FAQs;