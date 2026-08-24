import { motion } from 'motion/react';

export function ProblemSection() {
  const problems = [
    {
      num: '01',
      title: 'Zettelwirtschaft & Excel-Chaos',
      body: 'Leads landen in verstreuten Listen, die eigentlich nur eine Person wirklich pflegt. Fällt diese aus, steht der Vertrieb still.',
    },
    {
      num: '02',
      title: 'Unklare Verantwortlichkeiten',
      body: 'Wenn ein Lead theoretisch «dem ganzen Team» gehört, fühlt sich in der Praxis niemand wirklich zuständig.',
    },
    {
      num: '03',
      title: 'Fehlender Prozess',
      body: 'Nach einem Anruf bleibt es bei einem vagen «ich melde mich nächste Woche». Ohne System geht genau das im Tagesgeschäft unter.',
    },
  ];

  const solutions = [
    'Jeder Lead bekommt einen klaren nächsten Schritt',
    'Klare Zuweisung an einen spezifischen Mitarbeiter',
    'Automatische Erinnerungen, bevor ein Lead abkühlt',
  ];

  return (
    <section id="problem" className="py-32 bg-white border-b border-[#1A1A1A]/10 relative overflow-hidden">
      {/* Decorative background number */}
      <div className="absolute right-0 bottom-0 text-[280px] font-black tracking-tighter leading-none text-[#1A1A1A]/[0.025] pointer-events-none select-none hidden lg:block">
        70
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Left — Problems */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="w-8 h-px bg-[#E56014]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">
                  Die Herausforderung
                </span>
              </div>

              <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                Warum bis zu{' '}
                <span className="font-serif italic font-normal tracking-normal text-[#E56014]">
                  70% aller Leads
                </span>{' '}
                nie kontaktiert werden.
              </h3>
              <p className="text-lg text-[#1A1A1A]/60 mb-14 leading-relaxed max-w-xl">
                Ein Interessent füllt das Kontaktformular aus. Zwei Tage später hat noch niemand angerufen.
                Eine Woche später ist der Kontakt im Postfach untergegangen. Kommt Ihnen das bekannt vor?
              </p>

              <div className="space-y-0 border-t border-[#1A1A1A]/10">
                {problems.map((p, i) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-8 py-8 border-b border-[#1A1A1A]/10 group"
                  >
                    <div className="shrink-0 text-[28px] font-serif italic leading-none text-[#23BAA4] mt-1 w-10">
                      {p.num}.
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold mb-3 group-hover:text-[#E56014] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#1A1A1A]/55 max-w-md">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Solution card */}
          <div className="md:col-span-5 md:pl-10 md:border-l border-[#1A1A1A]/10">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Dark solution card */}
              <div className="bg-[#1A1A1A] text-white p-10 mb-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-serif italic mb-2 text-[#23BAA4]">Die Lösung.</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                    Ein klares System statt Vorwürfen an das Team.
                  </p>
                </div>

                <ul className="space-y-0">
                  {solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 py-5 border-b border-white/10 last:border-0 last:pb-0">
                      <span className="w-5 h-5 rounded-full bg-[#23BAA4]/20 border border-[#23BAA4]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#23BAA4]" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/80" dangerouslySetInnerHTML={{
                        __html: s.replace(/Jeder Lead|Klare Zuweisung|Automatische Erinnerungen/, (m) => `<strong class="text-white">${m}</strong>`)
                      }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat block */}
              <div className="border border-[#1A1A1A]/10 p-8 bg-[#F9F8F6]">
                <div className="text-[64px] font-black tracking-tighter leading-none text-[#23BAA4]">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40 mt-2">
                  Transparenz im Prozess
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
