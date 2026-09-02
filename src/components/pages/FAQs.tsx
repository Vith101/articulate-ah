import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../data/faqs';

const FAQs: React.FC = () => (
  <Section id="faq" padding="lg">
    <Container>
      <SectionHeading>FAQs</SectionHeading>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Container>
  </Section>
);

export default FAQs;
