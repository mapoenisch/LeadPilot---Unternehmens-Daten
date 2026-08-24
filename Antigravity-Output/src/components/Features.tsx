import { BrainCircuit, ListChecks, LineChart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: ListChecks,
    num: '01',
    title: 'Automatische Lead-Zuweisung',
    description:
      'Nach jedem Kontakt legt das System automatisch die nächste fällige Aktivität an. Nie wieder Excel-Tabellen pflegen.',
  },
  {
    icon: BrainCircuit,
    num: '02',
    title: 'KI-gestütztes Scoring',
    description:
      'Unsere Engine priorisiert Ihre Leads nach Abschlusswahrscheinlichkeit, damit Sie Ihre Zeit in die richtigen Kunden investieren.',
  },
  {
    icon: LineChart,
    num: '03',
    title: 'Echtzeit-Pipeline',
    description:
      'Ein klares Dashboard zeigt dem Vertriebsleiter sofort, welche Leads überfällig sind und wie sich die Umsätze entwickeln.',
  },
  {
    icon: ShieldCheck,
    num: '04',
    title: 'Made für den Mittelstand',
    description:
      'Einfacher als Salesforce oder HubSpot. Innerhalb weniger Tage eingeführt und zu 100% DSGVO-konform (Hosting in Europa).',
  },
];

export function Features() {
  return (
    <section id="funktionen" className="py-32 bg-[#F9F8F6] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#E56014]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">Software</span>
            </div>
            <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter">
              Alles für den<br />strukturierten<br />
              <span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/35">Vertrieb.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="max-w-sm pb-4 border-b border-[#1A1A1A]/10"
          >
            <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
              Wir haben LeadPilot bewusst schlank gehalten. Keine überladenen Menüs, keine unnötigen
              Marketing-Features – reiner Fokus auf Ihren Sales-Erfolg.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 border-t border-l border-[#1A1A1A]/10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative p-12 border-b border-r border-[#1A1A1A]/10 bg-white group hover:bg-[#1A1A1A] transition-colors duration-400 overflow-hidden"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
              >
                {/* Large decorative background number */}
                <span className="absolute right-4 bottom-2 text-[120px] font-black tracking-tighter leading-none text-[#1A1A1A]/[0.04] group-hover:text-white/[0.04] transition-colors select-none pointer-events-none">
                  {feature.num}
                </span>

                {/* Teal icon badge */}
                <div className="mb-10 relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#23BAA4]/10 group-hover:bg-[#23BAA4]/20 transition-colors border border-[#23BAA4]/20">
                    <Icon className="h-6 w-6 text-[#23BAA4]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-[#1A1A1A] group-hover:text-[#23BAA4] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/55 group-hover:text-white/65 transition-colors duration-400">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom orange accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E56014] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
