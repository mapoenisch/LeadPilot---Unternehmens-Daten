import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

const slides = [
  {
    id: 'pipeline',
    title: 'Pipeline im Blick',
    description:
      'Sehen Sie sofort, wo jeder Lead steht. Engpässe werden durch das System automatisch farblich hervorgehoben.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    annotations: [
      { top: '30%', left: '20%', text: 'Deal Stage' },
      { top: '60%', left: '60%', text: 'Umsatz-Forecast' },
    ],
  },
  {
    id: 'details',
    title: '360° Lead Profil',
    description:
      'Alle Interaktionen, E-Mails und Notizen an einem Ort. Keine Informationsverluste bei Urlaubsübergaben.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80',
    annotations: [{ top: '40%', left: '45%', text: 'Aktivitäten-Historie' }],
  },
  {
    id: 'workflows',
    title: 'Visual Workflow Builder',
    description:
      'Definieren Sie Wenn-Dann-Regeln für Follow-Ups. Komplett ohne Code, einfach per Drag & Drop.',
    image:
      'https://images.unsplash.com/photo-1618788372246-ce5f4ef07130?auto=format&fit=crop&w=2000&q=80',
    annotations: [{ top: '50%', left: '50%', text: 'Auto-Follow-Up' }],
  },
];

export function InterfaceTour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev: number) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev: number) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-32 bg-white border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#E56014]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">
                Tour the Interface
              </span>
            </div>
            <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter">
              Klarheit im<br />
              <span className="font-serif italic font-normal tracking-normal text-[#23BAA4]">Dashboard.</span>
            </h3>
          </div>

          <div className="flex items-center gap-4 pb-4">
            <button
              onClick={prev}
              className="w-11 h-11 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#E56014] hover:text-white hover:border-[#E56014] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#E56014] hover:text-white hover:border-[#E56014] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Slide tabs — left */}
          <div className="md:col-span-4 flex flex-col gap-0 border-t border-[#1A1A1A]/10">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative text-left py-7 px-1 border-b border-[#1A1A1A]/10 transition-all group ${
                    isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                  }`}
                >
                  {/* Left active bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#E56014] transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="flex items-center gap-4 mb-2 pl-4">
                    <span className="text-lg font-serif italic text-[#23BAA4]">0{index + 1}.</span>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">
                      {slide.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm leading-relaxed text-[#1A1A1A]/60 overflow-hidden pl-4"
                      >
                        {slide.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}

            {/* Progress dots */}
            <div className="flex items-center gap-2 pt-6 pl-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex
                      ? 'w-6 h-1.5 bg-[#E56014]'
                      : 'w-1.5 h-1.5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Screenshot — right */}
          <div className="md:col-span-8">
            {/* Browser chrome */}
            <div className="border border-[#1A1A1A]/10 overflow-hidden shadow-xl">
              <div className="bg-[#F9F8F6] border-b border-[#1A1A1A]/10 px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#1A1A1A]/15" />
                  <span className="w-3 h-3 rounded-full bg-[#1A1A1A]/15" />
                  <span className="w-3 h-3 rounded-full bg-[#1A1A1A]/15" />
                </div>
                <div className="flex-1 bg-white border border-[#1A1A1A]/10 rounded px-3 py-1.5 text-[10px] text-[#1A1A1A]/30 font-mono">
                  app.leadpilot.de/pipeline
                </div>
              </div>
              <div className="relative aspect-[16/10] bg-[#1A1A1A] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="w-full h-full object-cover opacity-75 mix-blend-luminosity grayscale"
                    />

                    {/* Annotations */}
                    {slides[currentIndex].annotations.map((ann, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.45 + i * 0.15, type: 'spring', stiffness: 300 }}
                        className="absolute flex items-center gap-2 bg-[#E56014] text-white px-3 py-2 text-[10px] uppercase tracking-widest font-bold shadow-2xl"
                        style={{ top: ann.top, left: ann.left }}
                      >
                        <Plus className="w-3 h-3" />
                        {ann.text}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Progress bar under screenshot */}
              <div className="h-0.5 bg-[#1A1A1A]/5">
                <motion.div
                  key={currentIndex}
                  className="h-full bg-[#E56014]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
