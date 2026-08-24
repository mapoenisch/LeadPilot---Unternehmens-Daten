import { useState, FormEvent, MouseEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Lock, Mail, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (email: string, org: string) => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      const userOrg = email.includes('@') ? email.split('@')[1].replace('.de', '').replace('.com', '').toUpperCase() : 'DEMO WORKSPACE';
      if (onLoginSuccess) {
        onLoginSuccess(email || 'demo@leadpilot.de', userOrg);
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Smooth scroll to CRM Dashboard
        const dashboardEl = document.getElementById('dashboard');
        if (dashboardEl) {
          dashboardEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1200);
    }, 800);
  };

  const handleQuickDemoLogin = () => {
    setEmail('t.weber@maschinenbau-mueller.de');
    setPassword('••••••••••••');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      if (onLoginSuccess) {
        onLoginSuccess('t.weber@maschinenbau-mueller.de', 'Maschinenbau Müller GmbH');
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        const dashboardEl = document.getElementById('dashboard');
        if (dashboardEl) {
          dashboardEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1200);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/90 backdrop-blur-sm p-4 sm:p-6 lg:p-10"
          onClick={(e: MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="bg-[#F9F8F6] w-full max-w-lg relative overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Top orange accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#E56014] via-[#23BAA4] to-[#E56014]" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/05 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-10 md:p-12">
              {isSuccess ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1, stiffness: 260, damping: 20 }}
                    className="w-16 h-16 bg-[#23BAA4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#23BAA4]/30"
                  >
                    <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-[#1A1A1A]">
                    Willkommen zurück!
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 font-serif italic mb-4">
                    Workspace wird geladen... Sie werden direkt zum Dashboard weitergeleitet.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#E56014] bg-[#E56014]/10 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#E56014] animate-ping" />
                    Live Dashboard Sync aktiv
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-6 h-px bg-[#E56014]" />
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E56014]">
                        LeadPilot Workspace
                      </span>
                    </div>
                    <h2 className="text-[28px] md:text-[34px] leading-[0.95] font-black uppercase tracking-tighter mb-3">
                      Login
                    </h2>
                    <p className="text-sm leading-relaxed text-[#1A1A1A]/60 font-serif italic">
                      Melden Sie sich an, um Ihre Leads, Automatisierungen und Pipeline-Forecasts einzusehen.
                    </p>
                  </div>

                  {/* 1-Click Quick Demo Access */}
                  <div className="mb-6 p-4 bg-white border border-[#23BAA4]/30 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#23BAA4]" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">
                          Schnell-Demozugang
                        </span>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#23BAA4]/15 text-[#136a5e] px-2 py-0.5 rounded">
                        1-Click
                      </span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/65 mb-3">
                      Als Thomas Weber (Head of Sales @ Maschinenbau Müller) direkt in den Live-Workspace einsteigen:
                    </p>
                    <button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 bg-[#23BAA4] hover:bg-[#1fa390] text-white py-2.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Demo-Workspace öffnen</span>
                    </button>
                  </div>

                  <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-[#1A1A1A]/10"></div>
                    <span className="flex-shrink mx-4 text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                      oder mit Zugangsdaten
                    </span>
                    <div className="flex-grow border-t border-[#1A1A1A]/10"></div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 mb-2 flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-[#E56014]" />
                        Arbeits-E-Mail
                      </label>
                      <div className="relative border-b-2 border-[#1A1A1A]/15 focus-within:border-[#E56014] transition-colors pb-1.5">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                          placeholder="vertrieb@unternehmen.de"
                          className="w-full bg-transparent text-sm focus:outline-none placeholder:text-[#1A1A1A]/30 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-[#E56014]" />
                          Passwort
                        </label>
                        <a
                          href="#preise"
                          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            alert('Passwort-Reset-Link wurde an Ihre registrierte E-Mail-Adresse versendet.');
                          }}
                          className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/40 hover:text-[#E56014] transition-colors"
                        >
                          Vergessen?
                        </a>
                      </div>
                      <div className="relative border-b-2 border-[#1A1A1A]/15 focus-within:border-[#E56014] transition-colors pb-1.5">
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full bg-transparent text-sm focus:outline-none placeholder:text-[#1A1A1A]/30 font-sans"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all mt-4 flex items-center justify-between group cursor-pointer shadow-md"
                    >
                      <span>{isLoading ? 'Anmeldung läuft...' : 'Im Workspace Anmelden'}</span>
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] text-[#1A1A1A]/40">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#23BAA4]" />
                      256-Bit SSL Verschlüsselt
                    </span>
                    <span>Server: Frankfurt (DE)</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
