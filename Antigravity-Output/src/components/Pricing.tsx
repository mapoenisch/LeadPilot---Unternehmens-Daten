import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { SignupModal } from './SignupModal';

const tiers = [
  {
    name: 'Starter',
    priceMonthly: '49',
    priceAnnual: '39',
    description: 'Für kleine Teams, die Excel hinter sich lassen wollen.',
    features: [
      '1–10 Nutzer',
      'Zentrale Lead-Erfassung',
      'Automatische Aufgaben-Zuweisung',
      'Basis-Dashboard & Pipeline',
      'E-Mail-Support',
    ],
    highlighted: false,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Growth',
    priceMonthly: '89',
    priceAnnual: '75',
    description: 'Für wachsende Teams mit Fokus auf KI und Effizienz.',
    features: [
      '10–50 Nutzer',
      'Alles aus Starter',
      'KI-Lead-Scoring',
      'Erweiterte Automatisierungen',
      'Persönliches Onboarding',
    ],
    highlighted: true,
    cta: 'Kostenlos testen',
  },
  {
    name: 'Pro',
    priceMonthly: 'Individuell',
    priceAnnual: 'Individuell',
    description: 'Für etablierte Vertriebsorganisationen.',
    features: [
      '50+ Nutzer',
      'Erweiterte Integrationen',
      'Individuelle Rollen & Rechte',
      'Dedizierter Customer Success',
      'SLA & API-Zugang',
    ],
    highlighted: false,
    cta: 'Vertrieb kontaktieren',
  },
];

export function Pricing() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isAnnual, setIsAnnual] = useState(true);

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsSignupOpen(true);
  };

  return (
    <>
      <section id="preise" className="py-32 bg-white border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-8 h-px bg-[#E56014]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">Investment</span>
              </div>
              <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter mb-8 md:mb-0">
                Einfache<br />
                <span className="font-serif italic font-normal tracking-normal text-[#23BAA4]">Preise.</span>
              </h3>
            </div>

            <div className="flex flex-col items-start md:items-end gap-8">
              {/* Billing toggle */}
              <div className="flex items-center p-1 bg-[#F9F8F6] border border-[#1A1A1A]/10">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${
                    !isAnnual ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                  }`}
                >
                  Monatlich
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${
                    isAnnual ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                  }`}
                >
                  Jährlich
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${isAnnual ? 'bg-[#23BAA4] text-[#1A1A1A]' : 'bg-[#23BAA4]/15 text-[#23BAA4]'}`}>
                    −20%
                  </span>
                </button>
              </div>

              <div className="max-w-sm pb-4 border-b border-[#1A1A1A]/10 md:text-right">
                <p className="text-sm leading-relaxed text-[#1A1A1A]/60">
                  Jeder verlorene Lead kostet mehr als unsere Software. Investieren Sie in Struktur,
                  die sich ab Tag 1 auszahlt.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 border-t border-l border-[#1A1A1A]/10">
            {tiers.map((tier, index) => {
              const currentPrice = isAnnual ? tier.priceAnnual : tier.priceMonthly;
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col p-10 border-b border-r border-[#1A1A1A]/10 ${
                    tier.highlighted
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-white text-[#1A1A1A]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  {/* Most popular badge */}
                  {tier.highlighted && (
                    <div className="absolute top-0 right-0 bg-[#E56014] text-white text-[9px] font-bold uppercase tracking-widest py-2 px-4">
                      Am beliebtesten
                    </div>
                  )}

                  {/* Plan name + desc */}
                  <div className="mb-10 pb-8 border-b border-current/10">
                    <h4 className={`text-2xl font-serif italic mb-3 ${tier.highlighted ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      {tier.name}
                    </h4>
                    <p className={`text-sm min-h-[40px] ${tier.highlighted ? 'text-white/50' : 'text-[#1A1A1A]/50'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-10">
                    <div className="flex items-start gap-1">
                      {currentPrice !== 'Individuell' && (
                        <span className={`text-lg font-medium mt-2 ${tier.highlighted ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>€</span>
                      )}
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-[58px] font-black tracking-tighter leading-none ${tier.highlighted ? 'text-white' : 'text-[#1A1A1A]'}`}
                      >
                        {currentPrice}
                      </motion.span>
                    </div>
                    {currentPrice !== 'Individuell' && (
                      <div className={`text-[10px] uppercase tracking-widest font-bold mt-2 ${tier.highlighted ? 'text-white/35' : 'text-[#1A1A1A]/35'}`}>
                        / Nutzer / Monat
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                          tier.highlighted
                            ? 'bg-[#23BAA4]/20 border border-[#23BAA4]/40'
                            : 'bg-[#23BAA4]/10 border border-[#23BAA4]/30'
                        }`}>
                          <Check className="w-2.5 h-2.5 text-[#23BAA4]" strokeWidth={2.5} />
                        </span>
                        <span className={`text-sm ${tier.highlighted ? 'text-white/75' : 'text-[#1A1A1A]/70'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <button
                    onClick={() => handlePlanClick(`${tier.name} Plan`)}
                    className={`w-full py-4 text-[10px] uppercase tracking-widest font-bold transition-colors ${
                      tier.highlighted
                        ? 'bg-[#E56014] text-white hover:bg-[#c95310]'
                        : 'bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        title={`Anfrage: ${selectedPlan}`}
      />
    </>
  );
}
