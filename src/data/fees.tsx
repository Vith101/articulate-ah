import React from 'react';

import next2 from '../../assets/next2.png';
import assessment from '../../assets/assessments.png';
import interventionSession from '../../assets/assessments-2.png';
import itp from '../../assets/itp.png';
import reports from '../../assets/reports-conferencing.png';
import travel from '../../assets/travel.png';
import ndis from '../../assets/ndis.png';
import medicare from '../../assets/medicare-logo.png';
import privateHealth from '../../assets/private-health-insurance.png';

export interface FeeCard {
  title: string;
  image: string;
  desc: React.ReactNode;
}

/** Individual service fees. */
export const fees: FeeCard[] = [
  {
    title: 'Initial Consultation',
    image: next2,
    desc: (
      <>
        1 hour initial meeting to complete relevant forms, collect information and determine assessment and therpay needs.
        <br />
        $193.99
      </>
    ),
  },
  {
    title: 'Comprehensive Assessment & Report',
    image: assessment,
    desc: (
      <>
        Consists of 2 hour assessment + 3 hour report writing.
        <br />
        $969.95
      </>
    ),
  },
  {
    title: 'Intervention Session',
    image: interventionSession,
    desc: (
      <>
        15 minute session planning.
        <br />
        45 minute session.
        <br />
        15 minute clinical case notes. <br />
        $242.48
      </>
    ),
  },
  {
    title: 'Individual Therapy Program',
    image: itp,
    desc: (
      <>
        ITP is completed each quarter and maintains a level of therapy excellence. It also supports clinicians and clients to monitor skills and ensure progress towards long term goals.
        <br />
        $193.99
      </>
    ),
  },
  {
    title: 'Reports/Case conferencing',
    image: reports,
    desc: (
      <>
        Charged at the hourly rate when requied.
        <br />
        $193.99
      </>
    ),
  },
  {
    title: 'Travel',
    image: travel,
    desc: 'Travel fees consist of labour (time travelled) and non-labour costs (distance travelled). Rate per session will be confirmed during the service agreement and based on the location of intervention.',
  },
];

/** Funding and rebate options. */
export const rebates: FeeCard[] = [
  {
    title: 'National Disablility Insurance Scheme (NDIS)',
    image: ndis,
    desc: 'Our services are available to self-managed and plan-managed clients',
  },
  {
    title: 'Chronic Disease Management Plan (CDMP)',
    image: medicare,
    desc: (
      <>
        Your GP can organise a CDMP plan for your child, whihc offers partial Medicare rebates for 5 sessions within a 12-month period.
        <br />
        Please contact your GP to find out more.
      </>
    ),
  },
  {
    title: 'Private Health Insurance',
    image: privateHealth,
    desc: 'Your health insurance may cover a portion of therapy costs. Please contact your private health to find out more.',
  },
];
