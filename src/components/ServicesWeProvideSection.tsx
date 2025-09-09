import React from 'react';
import FlipabbleCard from './FlippableCard';

import assessments2 from '../../assets/assessments-2.png';
import languageDevelopment from '../../assets/language-development.png';
import articulate from '../../assets/language-development.png';
import literacyReadingWriting from '../../assets/literacy-reading-writing.png';
import socialCommunication from '../../assets/social-communication.png';
import swallowing from '../../assets/swallowing.png';
import fluency from '../../assets/fluency.png';
import preschoolAndSchoolReadiness from '../../assets/preeschool-screeners-2.png';

const ServicesWeProvideSection: React.FC = () => (
  <section id="servicesWeProvide" className="py-10 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Services we provide</h3>
        <div className="container max-w-7xl mx-auto px-4 pb-8">
          <p className="text-left">
            At Articulate Allied Health, we offer a wide range of speech pathology services to support both children and adults in the Melbourne community. 
            Whether you’re concerned about your child’s early development or looking for support with communication challenges, we’re here to help every step of the way.
          </p>
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
            <FlipabbleCard
                imageLink={assessments2} // Use the imported variable here
                title='Assessments'
                desc='Thorough and personalised assessments to understand your unique needs. This helps us identify strengths and areas for growth, so we can tailor the best therapy plan for you or your loved one.'
            />
            <FlipabbleCard
                imageLink={languageDevelopment} // Use the imported variable here
                title='Language Development'
                desc='From building vocabulary to understanding grammar and sentence structure, we assist children and adults in developing strong language skills for everyday life.'
            />
            <FlipabbleCard
                imageLink={articulate} // Use the imported variable here
                title='Articulation'
                desc='If your child or adult is having trouble pronouncing sounds clearly, we provide targeted therapy to improve speech clarity and confidence.'
            />
            <FlipabbleCard
                imageLink={literacyReadingWriting} // Use the imported variable here
                title='Literacy, Reading and Writing'
                desc='Speech and language skills form the foundation for literacy. We provide support for reading, writing, and language development to boost confidence and academic success.'
            />
            <FlipabbleCard
                imageLink={socialCommunication} // Use the imported variable here
                title='Social Communication'
                desc='Effective communication is about more than just words. We help improve skills like understanding social cues, taking turns in conversation, and expressing thoughts clearly.'
            />
            <FlipabbleCard
                imageLink={swallowing} // Use the imported variable here
                title='Swallowing'
                desc='Difficulty swallowing can affect health and quality of life. Our specialised swallowing assessments and therapy ensure safe and comfortable eating and drinking.'
            />
            <FlipabbleCard
                imageLink={fluency} // Use the imported variable here
                title='Fluency'
                desc='We support individuals experiencing stuttering or other fluency challenges with strategies to enhance smooth, effective communication.'
            />
            <FlipabbleCard
                imageLink={preschoolAndSchoolReadiness} // Use the imported variable here
                title='Preschool Screeners and School Readiness Programs'
                desc='We offer early screening to identify any speech or language difficulties in young children. Our school readiness programs help prepare little ones for success in their first years of school by building essential communication and social skills.'
            />
          </div>
        </div>
    </div>
  </section>
);

export default ServicesWeProvideSection;
