import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SignupModal } from './SignupModal';

export function CTASection() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="relative py-32 bg-[#1A1A1A] text-white overflow-hidden">
        {/* Diagonal grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Decorative diagonal line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(135deg, transparent 49.5%, rgba(255,255,255,0.03) 49.5%, rgba(255,255,255,0.03) 50.5%, transparent 50.5%)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 mb-10">
                  <span className="w-8 h-px bg-[#23BAA4]/50" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#23BAA4]">Next Steps</span>
                </div>

                <h3 className="text-[38px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                  Verlorene Leads sind ein Zeichen von{' '}
                  <span className="font-serif italic font-normal tracking-normal text-white/45">
                    fehlender Struktur.
                  </span>
                </h3>
                <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-xl">
                  Und Struktur lässt sich nachrüsten. Testen Sie LeadPilot 14 Tage kostenlos und
                  verschaffen Sie sich selbst den Überblick.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button
                    onClick={() => setIsSignupOpen(true)}
                    className="group relative overflow-hidden bg-[#E56014] text-white px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-[#c95310] transition-colors flex items-center gap-3"
                  >
                    <span>Kostenlos testen</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#23BAA4]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                        Keine Kreditkarte
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#23BAA4]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                        Startklar in 2 Min.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Large watermark */}
            <div className="md:col-span-4 flex justify-end items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-[160px] md:text-[200px] font-serif italic leading-none text-white/[0.06] pointer-events-none select-none"
              >
                LP.
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}
