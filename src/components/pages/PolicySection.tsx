import React from 'react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import PolicyDocument from '../ui/PolicyDocument';
import { POLICY_PAGE } from '../../data/policies';

/** Aggregated policy page listing every policy plus after-hours contact details. */
const PolicySection: React.FC = () => (
  <Section id="policies" padding="lg">
    {POLICY_PAGE.map((policy) => (
      <Reveal key={policy.slug}>
        <PolicyDocument policy={policy} />
      </Reveal>
    ))}
  </Section>
);

export default PolicySection;
