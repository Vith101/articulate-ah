import React from 'react';
import { Section, Container } from './Section';
import type { Policy } from '../../data/policies';

/** Renders a single policy document from structured data. */
const PolicyDocument: React.FC<{ policy: Policy }> = ({ policy }) => (
  <Section id={policy.id} padding="lg">
    <Container>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{policy.title}</h1>
      <div className="space-y-8">
        {policy.intro && <p className="text-gray-700">{policy.intro}</p>}

        {policy.blocks.map((block, i) => (
          <div key={i}>
            {block.heading && (
              <h2 className="text-2xl font-semibold text-black mb-3">{block.heading}</h2>
            )}
            {block.intro && <p className="text-gray-700">{block.intro}</p>}
            {block.bullets && (
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {block.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            )}
            {block.outro && <p className="mt-4 font-bold text-gray-800">{block.outro}</p>}
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

export default PolicyDocument;
