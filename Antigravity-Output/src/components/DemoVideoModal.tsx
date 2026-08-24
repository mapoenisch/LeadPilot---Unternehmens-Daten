import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, RotateCcw, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const chapters = [
  {
    id: 'routing',
    title: '1. Auto-Lead Ingestion & Routing',
    duration: '0:15',
    headline: 'Jeder Inbound-Lead wird in < 2 Sekunden qualifiziert und zugewiesen',
    description: 'Sobald eine Anfrage über Website, Messe oder Telefon eingeht, ordnet der Algorithmus den Kontakt automatisch dem passenden Sales Rep zu und plant den ersten Follow-up-Termin.',
    icon: Zap,
    metrics: { speed: '< 2 Sek.', accuracy: '100%', autoTasks: 'Ja' }
  },
  {
    id: 'scoring',
    title: '2. KI-Scoring & Deal-Priorisierung',
    duration: '0:20',
    headline: 'Fokus auf Opportunities mit höchster Abschlusswahrscheinlichkeit',
    description: 'Die KI analysiert Unternehmensgröße, Branche und Interaktionsmuster, um jedem Deal einen Score von 0–100 zuzuweisen. Heiße Deals (>80) wandern sofort an die Spitze.',
    icon: Sparkles,
    metrics: { winRateBoost: '+22%', prioritisedLeads: 'Top 20%', wasteTime: '-60%' }
  },
  {
    id: 'forecast',
    title: '3. Pipeline-Funnel & YoY Trajektorie',
    duration: '0:25',
    headline: 'Echtzeit-Transparenz über alle Umsatzstufen und Jahresziele',
    description: 'Vergleichen Sie aktuelle Ist-Umsätze mit dem Vorjahr (YoY), testen Sie Conversion-Szenarien per Slider und erkennen Sie Staus im Funnel frühzeitig.',
    icon: TrendingUp,
    metrics: { forecastAccuracy: '94.2%', yoyGrowth: '+22.8%', stages: '5 Phasen' }
  },
  {
    id: 'workflows',
    title: '4. Automatische Wiedervorlagen & Follow-Ups',
    duration: '0:15',
    headline: 'Keine vergessenen Leads mehr bei Krankheit oder Urlaub',
    description: 'Individuelle Follow-up-Regeln erinnern das Team automatisch vor dem Abkühlen eines Kontakts. Urlaubsübergaben gelingen mit einem Klick.',
    icon: CheckCircle2,
    metrics: { timeToContact: '-85%', forgottenLeads: '0%', dsgvo: '100% DE' }
  }
];

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(true);
      setProgress(0);
      setActiveChapter(0);
      return;
    }

    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev: number) => {
          if (prev >= 100) {
            setActiveChapter((curr: number) => (curr + 1) % chapters.length);
            return 0;
          }
          return prev + 2;
        });
      }, 150);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isPlaying]);

  const handleChapterClick = (index: number) => {
    setActiveChapter(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleJumpToDashboard = () => {
    onClose();
    setTimeout(() => {
      const dashboard = document.getElementById('dashboard');
      if (dashboard) {
        dashboard.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const current = chapters[activeChapter];
  const ChapterIcon = current.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 overflow-y-auto"
          onClick={(e: MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-5xl bg-[#1A1A1A] border-4 border-white shadow-2xl overflow-hidden text-white flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E56014] animate-pulse" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-white/80">
                  LeadPilot 2.4 — Interaktive Produktdemo
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded transition-colors"
                title="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0c0c0c] via-[#161616] to-[#0c0c0c] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Subtle background tech grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                  backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Watermark in corner */}
              <div className="absolute right-6 top-6 text-2xl font-serif italic text-white/10 font-bold select-none pointer-events-none">
                LeadPilot.
              </div>

              {/* Dynamic Simulated Interactive View */}
              <div className="relative z-10 my-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-3xl"
                  >
                    <div className="inline-flex items-center gap-2 bg-[#E56014]/20 border border-[#E56014]/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#E56014] mb-4">
                      <ChapterIcon className="w-3.5 h-3.5 text-[#E56014]" />
                      <span>Kapitel {activeChapter + 1} von {chapters.length}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3 text-white leading-tight font-sans">
                      {current.headline}
                    </h2>

                    <p className="text-sm sm:text-base text-white/70 font-serif italic leading-relaxed mb-6 max-w-2xl">
                      {current.description}
                    </p>

                    {/* Feature metric tags */}
                    <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10">
                      {Object.entries(current.metrics).map(([key, val]) => (
                        <div key={key} className="bg-white/5 border border-white/10 px-4 py-2 rounded">
                          <span className="text-[9px] uppercase tracking-widest text-white/40 block">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <span className="text-lg font-mono font-bold text-[#23BAA4]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar & Media Controls */}
              <div className="relative z-10 pt-4">
                {/* Scrubbing Bar */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4 cursor-pointer">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#E56014] to-[#23BAA4]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-[#E56014] hover:bg-[#c95310] text-white flex items-center justify-center transition-colors shadow-lg shadow-[#E56014]/20"
                      title={isPlaying ? 'Pause' : 'Abspielen'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <button
                      onClick={() => setProgress(0)}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      title="Kapitel neu starten"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono text-white/50 ml-2">
                      {current.title}
                    </span>
                  </div>

                  <button
                    onClick={handleJumpToDashboard}
                    className="flex items-center gap-2 bg-[#23BAA4] hover:bg-[#1fa390] text-white text-xs uppercase tracking-widest font-bold py-2.5 px-5 rounded transition-all shadow-md group cursor-pointer"
                  >
                    <span>Im Live-CRM testen</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chapter Selection Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10 bg-black/60">
              {chapters.map((ch, idx) => {
                const isCurrent = idx === activeChapter;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterClick(idx)}
                    className={`p-4 text-left transition-all relative ${
                      isCurrent
                        ? 'bg-white/10 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isCurrent && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#E56014]" />
                    )}
                    <span className="text-[9px] uppercase tracking-widest font-bold block mb-1 text-white/40">
                      {ch.duration}
                    </span>
                    <span className="text-xs font-bold line-clamp-1 block">
                      {ch.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
