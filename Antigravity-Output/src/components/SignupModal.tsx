import { useState, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function SignupModal({ isOpen, onClose, title = '14 Tage kostenlos testen' }: SignupModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-sm p-4 sm:p-6 lg:p-10"
          onClick={(e: MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="bg-[#F9F8F6] w-full max-w-xl relative overflow-hidden"
          >
            {/* Top orange accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#E56014] to-[#23BAA4]" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/05 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 md:p-12">
              {submitted ? (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1, stiffness: 260, damping: 20 }}
                    className="w-16 h-16 bg-[#23BAA4] flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Erfolgreich angefragt</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/60 font-serif italic">
                    Wir haben Ihnen soeben eine E-Mail mit den Zugangsdaten geschickt. Sie werden in Kürze
                    weitergeleitet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="w-6 h-px bg-[#E56014]" />
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40">Loslegen</span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] leading-[0.95] font-black uppercase tracking-tighter mb-4">
                      {title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/60 font-serif italic">
                      Geben Sie Ihre Arbeits-E-Mail ein, um Ihren Workspace in wenigen Sekunden einzurichten.
                      Keine Kreditkarte erforderlich.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    {[
                      { label: 'Name', type: 'text', placeholder: 'Max Mustermann' },
                      { label: 'Arbeits E-Mail', type: 'email', placeholder: 'max@unternehmen.de' },
                      { label: 'Unternehmen', type: 'text', placeholder: 'Muster GmbH' },
                    ].map(({ label, type, placeholder }) => (
                      <div key={label} className="group">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 mb-2 block">
                          {label}
                        </label>
                        <div className="relative border-b-2 border-[#1A1A1A]/10 focus-within:border-[#1A1A1A] transition-colors pb-2">
                          <input
                            type={type}
                            required
                            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-[#1A1A1A]/25"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full bg-[#1A1A1A] text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#333] transition-colors mt-2 flex items-center justify-between group"
                    >
                      <span>Jetzt Zugang anfordern</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
