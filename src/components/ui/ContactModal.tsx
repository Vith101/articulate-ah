import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

/** Contact enquiry form presented in an overlay modal, opened from anywhere via useContactModal. */
const ContactModal: React.FC = () => {
  const { isOpen, close } = useContactModal();

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            className="relative flex h-[90vh] w-full max-w-lg flex-col rounded-2xl bg-pink-100 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close contact form"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-pink-950 shadow transition hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            <h3
              id="contact-modal-title"
              className="flex-shrink-0 px-6 pb-4 pt-8 text-center text-3xl font-semibold"
            >
              Contact Us
            </h3>

            <div className="min-h-0 flex-1 px-6 pb-6">
              <iframe
                src="https://articulate-allied-health.splose.com/public-form/747b15b1-827b-4164-8424-2457c1edf104"
                name="embeddableForm"
                title="Contact enquiry form"
                className="h-full w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
