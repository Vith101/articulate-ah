import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { Stagger, StaggerItem } from '../ui/Reveal';
import { whatHappensNext } from '../../data/services';

const WhatHappensNextSection: React.FC = () => (
  <Section id="what-happens-next">
    <Container>
      <SectionHeading>What Happens Next?</SectionHeading>
      <p className="text-left mb-8">
        We understand that starting speech-pathology is a big step - so we aim to make that process as smooth and supportive as possible. Here's what to expect when you begin your
        journey with us.
      </p>
      <Stagger className="grid lg:grid-cols-3 gap-8 md:gap-16 items-start mt-10 group">
        {whatHappensNext.map((step, i) => (
          <StaggerItem key={i}>
            <ContentCard variant="flip" title={step.title} imageLink={step.image} desc={step.desc} />
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  </Section>
);

export default WhatHappensNextSection;
