import React from 'react';
import { Link } from 'react-router-dom';

import assessments from '../../assets/assessments.png';
import intervention from '../../assets/intervention.png';
import preschoolScreeners from '../../assets/preschool-screeners.png';
import schoolReadiness from '../../assets/school-readiness.png';
import speechPathology from '../../assets/speech-pathology.png';
import telehealth from '../../assets/telehealth.png';
import communityBased from '../../assets/community-based.png';
import next1 from '../../assets/next1.png';
import next2 from '../../assets/next2.png';
import next3 from '../../assets/next3.png';
import assessments2 from '../../assets/assessments-2.png';
import languageDevelopment from '../../assets/language-development.png';
import articulation from '../../assets/articulation.png';
import literacy from '../../assets/literacy-reading-writing.png';
import socialCommunication from '../../assets/social-communication.png';
import swallowing from '../../assets/swallowing.png';
import fluency from '../../assets/fluency.png';
import preschoolReadiness from '../../assets/preeschool-screeners-2.png';
import alternativeCommunication from '../../assets/alternative-communication.png';

export interface ServiceCard {
  title: React.ReactNode;
  image: string;
  desc?: React.ReactNode;
}

/** Cards shown in the home-page "Our Services" overview. */
export const homeServices: ServiceCard[] = [
  { title: 'Assessments', image: assessments },
  { title: 'Intervention', image: intervention },
  { title: 'Preschool screeners', image: preschoolScreeners },
  { title: 'School readiness programs', image: schoolReadiness },
];

/** Full-width card beneath the home-page services grid. */
export const supervisionHighlight: ServiceCard = {
  title: 'Speech Pathology supervision',
  image: speechPathology,
};

/** Delivery-method cards. */
export const deliveryModes: ServiceCard[] = [
  { title: 'Telehealth', image: telehealth },
  { title: 'Community-based', image: communityBased },
];

/** "What happens next?" journey steps. */
export const whatHappensNext: ServiceCard[] = [
  {
    title: (
      <>
        1. Submit an{' '}
        <Link to="/contact" className="text-blue-300 underline">
          enquiry form
        </Link>
        .
      </>
    ),
    image: next1,
    desc: 'Your journey starts with our simple, online enquiry form. This helps us gather some initial details about your needs.',
  },
  {
    title: '2. Initial consultation.',
    image: next2,
    desc: "We'll schedule an initial online consultation. During this session, we'll get to know you, discuss concerns, gather relevant history and explain how we can help.",
  },
  {
    title: '3. Assessment and intervention.',
    image: next3,
    desc: "Following the consultation we may recommend a formal assessment to better understand strengths and areas for support. Based on the results, we'll create an individualised therapy plan tailored to your goals.",
  },
];

/** Detailed service offerings shown on the Services page. */
export const servicesWeProvide: ServiceCard[] = [
  {
    title: 'Assessments',
    image: assessments2,
    desc: 'Thorough and personalised assessments to understand your unique needs. This helps us identify strengths and areas for growth, so we can tailor the best therapy plan for you or your loved one.',
  },
  {
    title: 'Language Development',
    image: languageDevelopment,
    desc: 'From building vocabulary to understanding grammar and sentence structure, we assist children and adults in developing strong language skills for everyday life.',
  },
  {
    title: 'Articulation',
    image: articulation,
    desc: 'If your child or adult is having trouble pronouncing sounds clearly, we provide targeted therapy to improve speech clarity and confidence.',
  },
  {
    title: 'Literacy, Reading and Writing',
    image: literacy,
    desc: 'Speech and language skills form the foundation for literacy. We provide support for reading, writing, and language development to boost confidence and academic success.',
  },
  {
    title: 'Social Communication',
    image: socialCommunication,
    desc: 'Effective communication is about more than just words. We help improve skills like understanding social cues, taking turns in conversation, and expressing thoughts clearly.',
  },
  {
    title: 'Swallowing',
    image: swallowing,
    desc: 'Difficulty swallowing can affect health and quality of life. Our specialised swallowing assessments and therapy ensure safe and comfortable eating and drinking.',
  },
  {
    title: 'Fluency',
    image: fluency,
    desc: 'We support individuals experiencing stuttering or other fluency challenges with strategies to enhance smooth, effective communication.',
  },
  {
    title: 'Preschool Screeners and School Readiness Programs',
    image: preschoolReadiness,
    desc: 'We offer early screening to identify any speech or language difficulties in young children. Our school readiness programs help prepare little ones for success in their first years of school by building essential communication and social skills.',
  },
  {
    title: 'Augmentative and Alternative Communication',
    image: alternativeCommunication,
    desc: 'Supporting non-verbal and limited verbal clients through providing low and high-tech modes of communication.',
  },
];
