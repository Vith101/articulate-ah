import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { valuesLeft, valuesRight, Value } from '../../data/values';
import values from '../../../assets/values.png';

const ValueColumn: React.FC<{ items: Value[] }> = ({ items }) => (
  <div className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between w-full lg:w-1/3">
    {items.map((value) => (
      <div key={value.title}>
        <ContentCard variant="hover" title={value.title} body={value.body} />
      </div>
    ))}
  </div>
);

const ValuesSection: React.FC = () => (
  <Section id="Values">
    <Container>
      <SectionHeading>Our Values</SectionHeading>
      <div className="flex items-center justify-center font-sans">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl lg:h-[700px] space-y-6 lg:space-y-0 lg:space-x-6">
          <ValueColumn items={valuesLeft} />

          <div className="hidden lg:block lg:flex-1 rounded-2xl">
            <img
              src={values}
              alt="A visual representation of the company's core values"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <ValueColumn items={valuesRight} />
        </div>
      </div>
    </Container>
  </Section>
);

export default ValuesSection;
