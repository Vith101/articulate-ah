export interface NavLink {
  name: string;
  to: string;
}

/** Policy links listed in the footer. */
export const policyLinks: NavLink[] = [
  { name: 'Policy', to: '/policy' },
  { name: 'Terms & Conditions', to: '/policy/terms-and-conditions' },
  { name: 'Cancellation Policy', to: '/policy/cancellation-policy' },
  { name: 'Payment Policy', to: '/policy/payment-policy' },
  { name: 'Zero Tolerance Policy', to: '/policy/zero-tolerance' },
  { name: 'Privacy Policy', to: '/policy/privacy-policy' },
];
