import React from 'react';
import TeamSection from './TeamSection';
import { ValueSection } from './ValuesSection';

const AboutSection: React.FC = () => (
    
  <section id="about" className="py-10 bg-pink-100 h-full">
     <h3 className="text-3xl font-semibold text-center mb-10">About us</h3>
     <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <p className="mb-4 text-lg leading-relaxed">
            At Articulate Allied Health, we are passionate about providing high-quality, personalised Speech Pathology services to individuals of all ages. Based in Melbourne and servicing surrounding suburbs, our practice is dedicated to supporting both paediatric and adult clients across a wide range of communication and swallowing needs.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
            We believe in the power of connection and communication—and that everyone deserves the opportunity to express themselves confidently. Whether it’s supporting a child’s early speech and language development or helping an adult regain communication skills after injury or illness, our experienced team delivers therapy with care, compassion, and clinical excellence.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
            Our services are delivered in community-based settings—including homes, schools, aged care facilities, and other locations where clients feel most comfortable—ensuring therapy is functional, relevant, and empowering.
        </p>
        <p className="mb-3 text-lg font-semibold">
            We are committed to:
        </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-lg leading-relaxed">
            <li>Tailored, evidence-based therapy for each individual</li>
            <li>Collaborative care with families, caregivers, and allied health professionals</li>
            <li>Respectful and inclusive support across all ages and abilities</li>
            <li>Flexible mobile service delivery throughout Melbourne. Geelong and nearby suburbs</li>
            </ul>
        <p className="text-lg leading-relaxed">
            Let us support you or your loved one on the journey to clearer, more confident communication.
        </p>
     </div>
     <ValueSection />
    <TeamSection />
  </section>
)

export default AboutSection