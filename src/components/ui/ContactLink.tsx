import React from 'react';
import { useContactModal } from '../../context/ContactModalContext';

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
}

/** Inline trigger that opens the contact modal, styled to sit inside body text like a link. */
export const ContactLink: React.FC<ContactLinkProps> = ({ children, className }) => {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={`inline align-baseline ${className ?? ''}`}>
      {children}
    </button>
  );
};
