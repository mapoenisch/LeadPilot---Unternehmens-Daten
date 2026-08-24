import { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';
import { DemoVideoModal } from './DemoVideoModal';
import { SignupModal } from './SignupModal';

const trustItems = [
  { icon: ShieldCheck, label: 'DSGVO-konform' },
  { icon: CreditCard, label: 'Keine Kreditkarte' },
  { icon: Clock, label: 'Startbereit in 2 Min.' },
];

const kpiTicker = [
  { value: '+22%', label: 'Win Rate' },
  { value: '-85%', label: 'Reaktionszeit' },
  { value: '100%', label: 'Pipeline-Transparenz' },
  { value: '4 Wo.', label: 'Go-Live' },
  { value: '+22%', label: 'Win Rate' },
  { value: '-85%', label: 'Reaktionszeit' },
];

export function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="relative pt-20 pb-0 overflow-hidden bg-[#F9F8F6]">
        {/* Decorative grid background */}
        <div className="absolute inset-0 lp-grid-bg pointer-events-none" />

        {/* Decorative large background text */}
        <div className="absolute -right-8 top-8 text-[200px] font-black tracking-tighter leading-none text-[#1A1A1A]/[0.03] pointer-events-none select-none hidden lg:block">
          LP
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">

            {/* Left — Main copy */}
            <div className="md:col-span-8 flex flex-col justify-center pt-12 pb-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <div className="inline-flex items-center gap-2 mb-10">
                  <span className="w-8 h-px bg-[#E56014]" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">
                    Automatisierte Lead-Generierung
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-[52px] md:text-[80px] lg:text-[100px] leading-[0.88] font-black uppercase tracking-tighter mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Kein Lead<br />
                wird mehr<br />
                <span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/30">
                  vergessen.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-[#1A1A1A]/65 mb-12 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
              >
                LeadPilot weist jedem Lead automatisch den nächsten fälligen Schritt zu.
                Das KI-gestützte Sales-CRM, das sich ohne IT-Projekt in Tagen einführen lässt.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
              >
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="group relative overflow-hidden w-full sm:w-auto bg-[#E56014] text-white px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-[#c95310] transition-colors flex items-center gap-3"
                >
                  <span>14 Tage kostenlos testen</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="group flex items-center gap-3 w-full sm:w-auto font-serif italic text-xl text-[#1A1A1A] hover:text-[#23BAA4] transition-colors"
                >
                  <span className="underline underline-offset-8 decoration-1">Produktdemo ansehen</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>
              </motion.div>

              {/* Trust items */}
              <motion.div
                className="flex flex-wrap items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.36 }}
              >
                {trustItems.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-[#1A1A1A]/50">
                    <Icon className="w-3.5 h-3.5 text-[#23BAA4]" strokeWidth={2} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Stats sidebar */}
            <motion.div
              className="md:col-span-4 border-l-0 md:border-l border-[#1A1A1A]/10 md:pl-10 pt-12 pb-20 flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <div className="space-y-10 mb-12 md:mb-0">
                <div className="group">
                  <span className="text-[44px] font-serif italic block mb-2 leading-none text-[#23BAA4]">01.</span>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-2 group-hover:text-[#E56014] transition-colors">Zentrales CRM</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/55">
                    Bündeln Sie alle Kundeninteraktionen an einem Ort. Keine verstreuten Excel-Listen mehr.
                  </p>
                </div>
                <div className="group">
                  <span className="text-[44px] font-serif italic block mb-2 leading-none text-[#23BAA4]">02.</span>
                  <h3 className="text-[10px] uppercase tracking-widest font-bold mb-2 group-hover:text-[#E56014] transition-colors">Smart Automation</h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/55">
                    Individuelle Workflows, die Leads qualifizieren, während Ihr Team sich auf Abschlüsse fokussiert.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#1A1A1A]/10">
                <div className="text-[60px] font-black tracking-tighter leading-none text-[#E56014]">+22%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/35 mt-2">
                  Ø Conversion Steigerung
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* KPI Ticker Band */}
        <div className="relative border-t border-b border-[#1A1A1A]/10 bg-[#1A1A1A] overflow-hidden">
          <div
            className="flex gap-0"
            style={{
              animation: 'ticker 28s linear infinite',
            }}
          >
            {[...kpiTicker, ...kpiTicker].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-10 py-4 border-r border-white/10 shrink-0"
              >
                <span className="text-[#E56014] font-black text-lg tracking-tighter font-serif italic whitespace-nowrap">
                  {item.value}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      <DemoVideoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}
