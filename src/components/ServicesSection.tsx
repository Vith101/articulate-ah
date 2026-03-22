import React from 'react';
import { ContentCard } from './ContentCard';

import assessments from '../../assets/assessments.png';
import intervention from '../../assets/intervention.png';
import preschoolScreeners from '../../assets/preschool-screeners.png';
import schoolReadinessPrograms from '../../assets/school-readiness.png';
import speechPathology from '../../assets/speech-pathology.png';

const ServicesSection: React.FC = () => {
  // Shared height class to ensure consistency
  // h-64 or h-80 are usually good sweet spots for content cards
  const cardHeightClass = "h-[300px] w-full"; 

  return (
    <section id="services" className="py-10 bg-pink-100">
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        
        <div className="max-w-3xl mx-auto px-4 pb-12 text-center space-y-4">
          <p>
            We currently offer Speech Pathology services. Our holistic Speech Pathology practice offers comprehensive, client-centered care for both children and adults, integrating evidence-based therapy with a whole-person approach.
          </p>
          <p>
            Our approach emphasises collaboration, mindfulness and individualised care, supporting clients in building confidence, connection and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard Cards */}
          <ContentCard variant="hover" title="Assessments" imageLink={assessments} />
          <ContentCard variant="hover" title="Intervention" imageLink={intervention} />
          <ContentCard variant="hover" title="Preschool screeners" imageLink={preschoolScreeners} />
          <ContentCard variant="hover" title="School readiness programs" imageLink={schoolReadinessPrograms} />
          
          {/* The 2-column card */}
          <div className="lg:col-span-2">
            <ContentCard 
              variant="hover" 
              title="Speech Pathology supervision" 
              imageLink={speechPathology} 
              className="text-center" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;