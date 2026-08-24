import { motion } from 'motion/react';

const steps = [
  {
    week: 'Woche 01',
    title: 'Kickoff & Datenmigration',
    description:
      'Wir binden Ihre bestehenden Datenquellen an. Egal ob verstreute Excel-Listen oder veraltete CRM-Systeme – wir strukturieren und importieren Ihre Kontakte verlustfrei.',
  },
  {
    week: 'Woche 02',
    title: 'Workflow Design',
    description:
      'Gemeinsam definieren wir Ihre idealen Sales-Prozesse. Wir übersetzen Ihre Best Practices in automatisierte Regeln und Follow-up-Sequenzen.',
  },
  {
    week: 'Woche 03',
    title: 'Team Onboarding',
    description:
      'In kompakten, praxisnahen Sessions schulen wir Ihr Sales-Team. Der Fokus liegt auf direkter Anwendung, nicht auf theoretischen Funktionen.',
  },
  {
    week: 'Woche 04',
    title: 'Go-Live & Optimierung',
    description:
      'Der offizielle Startschuss. Im laufenden Betrieb analysieren wir die ersten Ergebnisse und schleifen die Automatisierungen für maximale Effizienz fein.',
  },
];

export function ImplementationStrategy() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-8 h-px bg-[#23BAA4]/50" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#23BAA4]">
                Implementation Strategy
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter"
            >
              Startklar in<br />
              <span className="font-serif italic font-normal tracking-normal text-[#E56014]">4 Wochen.</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm pb-4 border-b border-white/15"
          >
            <p className="text-sm leading-relaxed text-white/60">
              Ein CRM-Wechsel muss kein monatelanges IT-Projekt sein. Unser strukturierter
              Onboarding-Prozess garantiert einen reibungslosen Übergang.
            </p>
          </motion.div>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 border-t border-l border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="relative p-10 border-b border-r border-white/10 group hover:bg-white/[0.03] transition-colors"
            >
              {/* Teal vertical connector on left */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#23BAA4]/0 group-hover:bg-[#23BAA4]/40 transition-all duration-400" />

              {/* Week pill */}
              <div className="inline-flex items-center mb-6">
                <span className="bg-[#E56014] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                  {step.week}
                </span>
              </div>

              {/* Step number + title */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[42px] font-serif italic leading-none text-[#23BAA4]/40 shrink-0 -mt-2">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <h4 className="text-xl font-serif italic text-white leading-tight pt-1">{step.title}</h4>
              </div>

              <p className="text-sm leading-relaxed text-white/55 max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
