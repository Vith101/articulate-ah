import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { servicesWeProvide } from '../../data/services';

const ServicesWeProvideSection: React.FC = () => (
  <Section id="servicesWeProvide">
    <Container>
      <SectionHeading>Services we provide</SectionHeading>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <p className="text-left">
          At Articulate Allied Health, we offer a wide range of Speech Pathology services to support both children and adults in the Melbourne community.
          Whether you’re concerned about your child’s early development or looking for support with communication challenges, we’re here to help every step of the way.
        </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {servicesWeProvide.map((service) => (
            <ContentCard
              key={String(service.title)}
              variant="flip"
              imageLink={service.image}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

export default ServicesWeProvideSection;
