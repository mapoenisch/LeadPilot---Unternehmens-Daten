import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Wie lange dauert die Implementierung im Team?',
    answer:
      'Da LeadPilot bewusst schlank gehalten ist, dauert das Setup in der Regel weniger als 24 Stunden. Ihr Team kann nach einer kurzen 30-minütigen Einführung sofort produktiv arbeiten – ohne wochenlange IT-Projekte.',
  },
  {
    question: 'Ist die Software DSGVO-konform?',
    answer:
      'Ja, zu 100%. Wir hosten alle Daten ausschließlich auf zertifizierten Servern in Deutschland (ISO 27001). Ihre Daten und die Ihrer Kunden sind nach den höchsten europäischen Standards geschützt.',
  },
  {
    question: 'Lässt sich LeadPilot in unsere bestehenden Systeme integrieren?',
    answer:
      'Absolut. LeadPilot bietet offene REST-APIs und native Integrationen zu gängigen Tools wie Zapier, Make, Office 365 und Google Workspace. So fügt sich das System nahtlos in Ihre bestehende Landschaft ein.',
  },
  {
    question: 'Gibt es eine Mindestvertragslaufzeit?',
    answer:
      'Nein. Wir glauben, dass Software durch Leistung überzeugen sollte, nicht durch Knebelverträge. Sie können LeadPilot flexibel monatlich kündigen oder anpassen.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left sticky col */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-8 h-px bg-[#E56014]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">FAQ</span>
              </div>
              <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                Häufige<br />
                <span className="font-serif italic font-normal tracking-normal text-[#23BAA4]">Fragen.</span>
              </h3>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/60 max-w-sm">
                Antworten auf die wichtigsten Fragen zur Einführung, Sicherheit und Nutzung von LeadPilot.
              </p>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="md:col-span-7">
            <div className="border-t border-[#1A1A1A]/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={`relative border-b border-[#1A1A1A]/10 transition-colors ${isOpen ? 'bg-white' : ''}`}
                  >
                    {/* Orange left bar when open */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                        isOpen ? 'bg-[#E56014] opacity-100' : 'bg-[#E56014] opacity-0'
                      }`}
                    />

                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center py-7 px-6 text-left group"
                    >
                      <span
                        className={`font-serif italic text-lg md:text-xl pr-8 transition-colors ${
                          isOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A] group-hover:text-[#E56014]'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 flex items-center justify-center w-9 h-9 border transition-colors ${
                          isOpen
                            ? 'bg-[#E56014] text-white border-[#E56014]'
                            : 'border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#E56014] group-hover:text-white group-hover:border-[#E56014]'
                        }`}
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 px-6 text-sm leading-relaxed text-[#1A1A1A]/65 max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
