import { FormEvent, MouseEvent, ReactNode, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentModal } from './ContentModal';
import { Logo } from './Logo';
import {
  impressumContent,
  datenschutzContent,
  agbContent,
  blogContent,
  webinarContent,
  helpCenterContent,
  customerCasesContent,
  integrationsContent,
  updatesContent,
} from '../data/dummyContent';

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [modalConfig, setModalConfig] = useState<{ isOpen: boolean; title: string; content: ReactNode | null }>({
    isOpen: false,
    title: '',
    content: null,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const openModal = (e: MouseEvent, title: string, content: ReactNode) => {
    e.preventDefault();
    setModalConfig({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalConfig((prev: typeof modalConfig) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <footer className="bg-[#F9F8F6] text-[#1A1A1A] border-t border-[#1A1A1A]/10">
        <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#1A1A1A]/10 border-b border-[#1A1A1A]/10">
          {/* Brand col */}
          <div className="p-10 flex flex-col justify-between min-h-[300px] md:col-span-4">
            <div>
              <Logo className="block mb-6" />
              <p className="text-sm leading-relaxed text-[#1A1A1A]/55 max-w-sm">
                Das KI-gestützte Sales-CRM, das dafür sorgt, dass kein Lead im B2B-Mittelstand mehr vergessen wird.
              </p>
            </div>
            {/* Brand accent */}
            <div className="mt-8">
              <div className="w-12 h-0.5 bg-[#E56014] mb-3" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/30">
                KI-gestütztes Sales CRM
              </span>
            </div>
          </div>

          {/* Produkt col */}
          <div className="p-10 flex flex-col md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-[#E56014]">Produkt</h4>
            <ul className="space-y-4">
              <li>
                <a href="#funktionen" className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors">Funktionen</a>
              </li>
              <li>
                <a href="#dashboard" className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors">Dashboard</a>
              </li>
              <li>
                <a href="#preise" className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors">Preise</a>
              </li>
              <li>
                <a href="#" onClick={(e: MouseEvent) => openModal(e, 'Integrationen & API', integrationsContent)} className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors">Integrationen</a>
              </li>
              <li>
                <a href="#" onClick={(e: MouseEvent) => openModal(e, 'Produkt-Updates & Release Notes', updatesContent)} className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors">Updates</a>
              </li>
            </ul>
          </div>

          {/* Ressourcen col */}
          <div className="p-10 flex flex-col md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-[#E56014]">Ressourcen</h4>
            <ul className="space-y-4">
              {[
                { label: 'Blog', content: blogContent },
                { label: 'Webinare', content: webinarContent },
                { label: 'Hilfe-Center', content: helpCenterContent },
                { label: 'Kunden-Cases', content: customerCasesContent },
              ].map(({ label, content }) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(e: MouseEvent) => openModal(e, label, content)}
                    className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 hover:text-[#E56014] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter col */}
          <div className="p-10 flex flex-col justify-between min-h-[300px] md:col-span-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-[#E56014]">
                B2B Automation Insights
              </h4>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/55 mb-8 max-w-sm">
                Erhalten Sie monatlich praxisnahe Strategien zur Vertriebsautomatisierung direkt in Ihr Postfach.
              </p>

              {subscribed ? (
                <div className="text-sm font-bold text-[#1A1A1A] flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#23BAA4] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  Erfolgreich abonniert.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-0 max-w-sm">
                  <div className="relative border-b-2 border-[#1A1A1A]/15 focus-within:border-[#23BAA4] transition-colors pb-2 mb-6">
                    <input
                      type="email"
                      placeholder="Ihre E-Mail Adresse"
                      className="w-full bg-transparent text-sm focus:outline-none placeholder:text-[#1A1A1A]/35 font-serif italic"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group self-start flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E56014] transition-colors"
                  >
                    <span className="border-b border-[#1A1A1A] group-hover:border-[#E56014] pb-0.5 transition-colors">
                      Abonnieren
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30">
            © {new Date().getFullYear()} LeadPilot Technology Group
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Impressum', content: impressumContent },
              { label: 'Datenschutz', content: datenschutzContent },
              { label: 'AGB', content: agbContent },
            ].map(({ label, content }) => (
              <a
                key={label}
                href="#"
                onClick={(e: MouseEvent) => openModal(e, label, content)}
                className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 hover:text-[#E56014] transition-colors"
              >
                {label}
              </a>
            ))}
            <span className="text-[#1A1A1A]/15">|</span>
            {['LinkedIn', 'Twitter'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 hover:text-[#E56014] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <ContentModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        content={modalConfig.content}
      />
    </>
  );
}
