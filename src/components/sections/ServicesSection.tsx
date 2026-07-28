import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { homeServices, supervisionHighlight } from '../../data/services';

const ServicesSection: React.FC = () => (
  <Section id="services">
    <Container>
      <SectionHeading>Our Services</SectionHeading>

      <div className="max-w-3xl mx-auto px-4 pb-12 text-center space-y-4">
        <p>
          We currently offer Speech Pathology services. Our holistic Speech Pathology practice offers comprehensive, client-centered care for both children and adults, integrating evidence-based therapy with a whole-person approach.
        </p>
        <p>
          Our approach emphasises collaboration, mindfulness and individualised care, supporting clients in building confidence, connection and quality of life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {homeServices.map((service) => (
          <ContentCard key={String(service.title)} variant="hover" title={service.title} imageLink={service.image} />
        ))}

        <div className="lg:col-span-2">
          <ContentCard
            variant="hover"
            title={supervisionHighlight.title}
            imageLink={supervisionHighlight.image}
            className="text-center"
          />
        </div>
      </div>
    </Container>
  </Section>
);

export default ServicesSection;
