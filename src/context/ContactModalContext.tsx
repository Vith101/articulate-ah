import React, { createContext, useCallback, useContext, useState } from 'react';

interface ContactModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

/** Provides global open/close control for the contact form modal. */
export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ContactModalContext.Provider>
  );
};

/** Access the contact modal controls from anywhere inside the provider. */
export const useContactModal = (): ContactModalContextValue => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
