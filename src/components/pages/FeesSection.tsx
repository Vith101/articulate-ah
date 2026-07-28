import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { Reveal } from '../ui/Reveal';
import { fees, rebates } from '../../data/fees';

const FeesSection: React.FC = () => (
  <Section id="fees">
    <Reveal>
      <Container>
        <SectionHeading>Fees and Rebates</SectionHeading>
        <h4 className="text-2xl font-semibold text-center mb-10">Our Fees</h4>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {fees.map((fee) => (
              <ContentCard key={fee.title} variant="flip" imageLink={fee.image} title={fee.title} desc={fee.desc} />
            ))}
          </div>
        </div>
        <Container>
          <h4 className="text-2xl font-semibold text-center mb-10">Rebates</h4>
          <p className="text-left mb-8">
            We understand that starting speech-pathology is a big step - so we aim to make that process as smooth and supportive as possible. Here's what to expect when you begin your
            journey with us.
          </p>
          <div className="grid lg:grid-cols-3 gap-8 md:gap-16 items-start mt-10 group">
            {rebates.map((rebate) => (
              <ContentCard
                key={rebate.title}
                variant="flip"
                imageLink={rebate.image}
                title={rebate.title}
                desc={rebate.desc}
              />
            ))}
          </div>
        </Container>
      </Container>
    </Reveal>
  </Section>
);

export default FeesSection;
