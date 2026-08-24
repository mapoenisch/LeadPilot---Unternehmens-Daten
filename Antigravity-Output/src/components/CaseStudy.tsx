import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

export function CaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-[#1A1A1A] text-white border-b border-[#1A1A1A]/10 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Left */}
            <div className="md:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 mb-8">
                  <span className="w-8 h-px bg-white/20" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Success Story</span>
                </div>

                <h3 className="text-[38px] md:text-[56px] leading-[0.9] font-black uppercase tracking-tighter mb-12">
                  Wachstum durch{' '}
                  <span className="font-serif italic font-normal tracking-normal text-white/50">Struktur.</span>
                </h3>

                {/* Key result stats */}
                <div className="grid grid-cols-2 gap-0 border-t border-white/10">
                  {[
                    { val: '+22%', label: 'Win-Rate', color: 'text-[#23BAA4]' },
                    { val: '−85%', label: 'Reaktionszeit', color: 'text-[#E56014]' },
                  ].map(({ val, label, color }) => (
                    <div key={label} className="py-8 pr-8 border-b border-white/10">
                      <div className={`text-[48px] font-serif italic leading-none mb-2 ${color}`}>{val}</div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-white/35">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Quote */}
            <div className="md:col-span-6 md:pl-10 md:border-l border-white/10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Large decorative quote mark */}
                <div className="text-[100px] font-serif italic leading-none text-white/10 select-none -mb-6 -ml-2">
                  "
                </div>

                {/* Pull quote with orange left bar */}
                <div className="border-l-4 border-[#E56014] pl-8 mb-10">
                  <p className="text-xl md:text-2xl leading-relaxed text-white/85 font-serif italic">
                    Bevor wir LeadPilot nutzten, war unser Sales-Prozess stark von einzelnen Mitarbeitern
                    abhängig. Fiel jemand aus, blieben Leads in der Excel-Tabelle liegen. Heute wird jeder
                    Kontakt automatisch zugewiesen – wir verlieren keine wertvollen Opportunities mehr.
                  </p>
                </div>

                <div className="mb-12 pl-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-white">Thomas Weber</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1.5">
                    Head of Sales, Maschinenbau Müller GmbH
                  </p>
                </div>

                <div className="pl-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-white hover:text-[#23BAA4] transition-colors"
                  >
                    <span className="border-b border-white group-hover:border-[#23BAA4] pb-0.5 transition-colors">
                      Ganze Story lesen
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal — unchanged functionality */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-sm p-4 sm:p-6 lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#F9F8F6] text-[#1A1A1A] w-full max-w-4xl max-h-[90vh] overflow-y-auto border-8 border-white shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-10 md:p-16">
                <div className="mb-16 border-b border-[#1A1A1A]/10 pb-16">
                  <span className="text-[10px] uppercase tracking-[0.4em] mb-6 font-semibold text-[#1A1A1A]/50 block">
                    Case Study: Maschinenbau Müller GmbH
                  </span>
                  <h2 className="text-[40px] md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                    Vom{' '}
                    <span className="font-serif italic font-normal tracking-normal text-[#1A1A1A]/40">Zettel-Chaos</span>
                    <br />
                    zur digitalen Sales-Maschine.
                  </h2>
                  <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest font-bold">
                    <div>
                      <span className="text-[#1A1A1A]/40 block mb-1">Branche</span>
                      <span>Sondermaschinenbau</span>
                    </div>
                    <div>
                      <span className="text-[#1A1A1A]/40 block mb-1">Mitarbeiter</span>
                      <span>150+</span>
                    </div>
                    <div>
                      <span className="text-[#1A1A1A]/40 block mb-1">Sales-Team</span>
                      <span>12 Personen</span>
                    </div>
                  </div>
                </div>

                <div className="max-w-none">
                  <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-8 text-sm leading-relaxed text-[#1A1A1A]/80">
                      <p>
                        <span className="float-left text-[60px] leading-[50px] font-serif italic text-[#1A1A1A] mr-4 mt-2">D</span>
                        ie Maschinenbau Müller GmbH gehört zu den Hidden Champions der Region. Über Jahrzehnte
                        wuchs das Unternehmen organisch, vor allem durch Empfehlungen. Doch mit der Expansion
                        in neue Märkte wuchsen auch die Herausforderungen im Vertrieb.
                      </p>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mt-12 mb-4">
                        Die Ausgangslage: Wer ist zuständig?
                      </h4>
                      <p>
                        «Unsere Leads kamen über Messen, die Website und Telefonanrufe rein», erinnert sich Thomas
                        Weber, Head of Sales. «Wir haben sie in eine große Excel-Liste eingetragen. Jeder Vertriebler
                        sollte sich theoretisch selbst bedienen.» In der Praxis führte dies zum bekannten{' '}
                        <em>Bystander-Effekt</em>: Wenn alle zuständig sind, ist es letztlich niemand.
                      </p>
                      <p>
                        Die Folgen waren spürbar: Die durchschnittliche Reaktionszeit auf eine Web-Anfrage lag
                        bei fast 4 Tagen. In einer Branche, in der es um Projekte im sechsstelligen Bereich geht,
                        ein fataler Wettbewerbsnachteil.
                      </p>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mt-12 mb-4">
                        Der Wendepunkt: LeadPilot
                      </h4>
                      <p>
                        Mit LeadPilot änderte sich der Prozess fundamental. Statt einer passiven Liste gibt es
                        nun aktive Zuweisungen. Ein neuer Lead wird anhand von Postleitzahl und Branche automatisch
                        dem richtigen Mitarbeiter zugeordnet.
                      </p>
                      <div className="my-10 p-8 bg-white border border-[#1A1A1A]/10 border-l-4 border-l-[#E56014]">
                        <p className="font-serif italic text-lg m-0">
                          «Das Beste an LeadPilot ist nicht, was man damit alles machen kann. Das Beste ist, was
                          man nicht mehr machen muss. Das System nimmt uns das Denken an den Prozess ab, sodass
                          wir uns auf den Kunden konzentrieren können.»
                        </p>
                      </div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mt-12 mb-4">
                        Die Resultate
                      </h4>
                      <p>
                        Heute wird jeder neue Kontakt innerhalb von durchschnittlich 14 Stunden angerufen –
                        eine Reduktion der Reaktionszeit um 85%. Die Win-Rate bei Neukunden stieg innerhalb der
                        ersten 6 Monate um 22%.
                      </p>
                    </div>

                    <div className="md:col-span-4">
                      <div className="sticky top-10">
                        <div className="bg-[#1A1A1A] text-white p-8 mb-8">
                          <h5 className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-6">
                            Key Results
                          </h5>
                          <ul className="space-y-6">
                            {[
                              { val: '−85%', label: 'Reaktionszeit (Time-to-Contact)' },
                              { val: '+22%', label: 'Steigerung der Win-Rate' },
                              { val: '100%', label: 'Transparenz im Sales-Funnel' },
                            ].map(({ val, label }, i) => (
                              <li key={i} className={i > 0 ? 'border-t border-white/10 pt-6' : ''}>
                                <div className="text-2xl font-serif italic mb-1">{val}</div>
                                <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">{label}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="w-full text-center border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors py-4 text-[10px] uppercase tracking-widest font-bold"
                        >
                          Schließen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
