import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'LeadPilot hat unsere Sales-Pipeline revolutioniert. Wir arbeiten jetzt viel strukturierter und effizienter.',
    author: 'Sarah Schmidt',
    role: 'CEO, TechFlow GmbH',
    initials: 'SS',
  },
  {
    quote: 'Dank der Automatisierung verlieren wir keine Leads mehr. Das System denkt für uns mit.',
    author: 'Michael Bauer',
    role: 'Head of Sales, Digital Pioneers',
    initials: 'MB',
  },
  {
    quote: 'Die Einführung war erstaunlich einfach und die Ergebnisse in Form von Abschlüssen sofort sichtbar.',
    author: 'Elena Wagner',
    role: 'Vertriebsleitung, Wagner Maschinenbau',
    initials: 'EW',
  },
];

export function ClientVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev: number) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#1A1A1A]/20" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40">Client Voices</span>
            </div>
            <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter">
              Was unsere<br />
              <span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/35">Kunden sagen.</span>
            </h3>
          </div>

          <div className="flex items-center gap-3 pb-4">
            <button
              onClick={prev}
              className="w-11 h-11 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial slide */}
        <div className="relative min-h-[360px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="absolute inset-0 border-t border-l border-[#1A1A1A]/10 bg-[#F9F8F6] flex flex-col justify-between p-8 md:p-16"
            >
              {/* Decorative quote mark */}
              <div className="text-[120px] font-serif italic leading-none text-[#1A1A1A]/06 select-none absolute top-4 left-8">
                "
              </div>

              <div className="relative z-10">
                <p className="text-2xl md:text-4xl leading-relaxed text-[#1A1A1A] font-serif italic max-w-4xl mb-10">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-white tracking-widest">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mt-1">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicator dots */}
        <div className="flex items-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? 'w-6 h-1.5 bg-[#1A1A1A]'
                  : 'w-1.5 h-1.5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
