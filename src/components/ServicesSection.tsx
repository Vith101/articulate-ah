import React from 'react';

const ServiceCard: React.FC<{ title: string; className?: string}> = ({ title, className}) => (
  <div className={"bg-pink-950 text-white p-6 shadow rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100" + className} >
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
  </div>
);

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="container max-w-7xl mx-auto px-4">
          <p className="text-left">
            We currently offer Speech Pathology services. Our holistic speech pathology practice  offers comprehensive, client-centered care for both children and adults, integrating
            evidence-based therapy with a whole-person approach. We address communication, feeding and swallowing needs while considering emotional, sensory and environmental factors
            that impact well-being.
          </p>
          <p className="text-left">
            Our approach emphasises collaboration, mindufllness and individualised care, supporting clients not just in achieving clinical goals, but in building confidence, connection
            and quality of life.
          </p>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div><ServiceCard title="Assessments"/></div>
            <div><ServiceCard title="Intervention" /></div>
            <div><ServiceCard title="Preeschool screeners"/></div>
            <div><ServiceCard title="School readiness programs"/></div>
            <div className='col-span-2'><ServiceCard title="Speech pathology supervision" className=' text-center'/></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
