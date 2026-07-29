import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { ContentCard } from '../ui/ContentCard';
import { Stagger, StaggerItem } from '../ui/Reveal';
import { deliveryModes } from '../../data/services';

const DeliveryModesSection: React.FC = () => (
  <Section id="delivery" padding="lg">
    <Container>
      <SectionHeading>Delivery Methods</SectionHeading>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <p className="text-left">
          Our community-based model means therapy isn't confined to the clinic - <span className="font-bold">we come to you!</span> We provide home visits, school and childcare support, aged care services and
          telehealth sessions, ensuring our servies are accessible, flexible and tailored to each person's goals.
        </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <Stagger className="grid lg:grid-cols-2 gap-16 items-center">
          {deliveryModes.map((mode) => (
            <StaggerItem key={String(mode.title)} className="container max-w-7xl mx-auto px-4">
              <ContentCard variant="hover" title={mode.title} imageLink={mode.image} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Container>
  </Section>
);

export default DeliveryModesSection;
