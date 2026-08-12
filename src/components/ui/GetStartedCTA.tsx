import React from 'react';
import { useContactModal } from '../../context/ContactModalContext';

interface GetStartedCTAProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
}

/** Closing call-to-action that invites the visitor to open the contact form modal. */
export const GetStartedCTA: React.FC<GetStartedCTAProps> = ({
  heading = 'Ready to get started?',
  body = 'Get in touch with the Articulate Allied Health team today and we’ll help you take the next step.',
  buttonLabel = 'Contact us now',
}) => {
  const { open } = useContactModal();

  return (
    <div className="mt-16 max-w-3xl mx-auto text-center bg-white/60 rounded-2xl px-6 py-10 shadow-md">
      <h3 className="text-3xl font-semibold mb-3">{heading}</h3>
      <p className="mb-6 text-lg leading-relaxed">{body}</p>
      <button
        type="button"
        onClick={open}
        className="
          inline-block bg-pink-950 text-white rounded-full px-8 py-2.5
          shadow-md transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:shadow-lg hover:bg-pink-900
          active:translate-y-0 active:shadow-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-100
        "
      >
        {buttonLabel}
      </button>
    </div>
  );
};
