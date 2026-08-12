import React from 'react';
import headshot from '../../assets/headshot.png';

export interface TeamMember {
  name: string;
  role: React.ReactNode;
  image: string;
  imageAlt: string;
  /** Introductory copy shown beside the name. */
  intro: React.ReactNode;
  /** Detail block shown beneath the headshot. */
  detail: React.ReactNode;
}

export const team: TeamMember[] = [
  {
    name: 'Harshini Baskaran-Elango',
    role: (
      <>
        Director <br />
        Principal Speech Pathologist
      </>
    ),
    image: headshot,
    imageAlt: 'Harshini Baskaran-Elango',
    intro: (
      <div className="text-center text-lg leading-relaxed">
        <p className="mb-4">
          As a dedicated clinician working within the NDIS and disability sector, supporting clients with a broad range of communication and swallowing needs across the lifespan. My clinical experience spans <strong>paediatric, adolescent, and adult populations,</strong> with a strong focus on supporting individuals to achieve meaningful and functional outcomes in their everyday environments. I provide services across <strong>all modalities of speech pathology within the community,</strong> including assessment, intervention, consultation, capacity building, functional communication support, report writing and ongoing clinical management.
        </p>
        <p>
          My approach is grounded in collaboration, clinical reasoning and a strong understanding of the NDIS framework. I am particularly experienced in navigating complex presentations, adapting therapeutic approaches to individual needs, and working alongside families and support teams to embed communication strategies into daily life. As a clinician and leader, I am passionate about providing <strong>accessible, practical and high-quality speech pathology services</strong> that empower clients to communicate effectively, participate meaningfully in their communities and work towards their individual goals.
        </p>
      </div>
    ),
    detail: (
      <div className="mb-4 text-lg leading-relaxed">
        Harshini holds a Master&#39;s in Speech and Language Pathology and has extensive expertise in various specialised areas and has the following certifications;
        <ul className="list-disc list-inside space-y-2 mb-4 text-lg leading-relaxed">
          <li>Hanen More Than Words program</li>
          <li>Little Learners Love Literacy program</li>
          <li>Key Word Sign certificate</li>
          <li>SOS Feeding Approach program</li>
          <li>DTTC Childhood Apraxia of Speech program</li>
          <li>Augmentative and Alternative Communication training</li>
          <li>PROMPT Level 1 certified</li>
        </ul>
      </div>
    ),
  },
];
