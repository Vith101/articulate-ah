import React from 'react';
import { HoverCard } from './HoverCard';

import assessments from '../../assets/assessments.png';
import intervention from '../../assets/intervention.png';
import preschoolScreeners from '../../assets/preschool-screeners.png';
import schoolReadinessPrograms from '../../assets/school-readiness.png';
import speechPathology from '../../assets/speech-pathology.png'

const ServicesSection: React.FC = () => (
  <section id="services" className="py-10 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <p className="text-left">
          We currently offer Speech Pathology services. Our holistic Speech Pathology practice  offers comprehensive, client-centered care for both children and adults, integrating
          evidence-based therapy with a whole-person approach. We address communication, feeding and swallowing needs while considering emotional, sensory and environmental factors
          that impact well-being.
        </p>
        <p className="text-left">
          Our approach emphasises collaboration, mindufllness and individualised care, supporting clients not just in achieving clinical goals, but in building confidence, connection
          and quality of life.
        </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="container max-w-7xl mx-auto px-4"><HoverCard title="Assessments" imageLink={assessments}/></div>
          <div><HoverCard title="Intervention" imageLink={intervention}/></div>
          <div><HoverCard title="Preeschool screeners" imageLink={preschoolScreeners}/></div>
          <div><HoverCard title="School readiness programs" imageLink={schoolReadinessPrograms}/></div>
          {/* MODIFIED: The col-span-2 class is now prefixed with 'lg:' */}
          <div className='lg:col-span-2'>
              <HoverCard title="Speech Pathology supervision" className=' text-center' imageLink={speechPathology}/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
