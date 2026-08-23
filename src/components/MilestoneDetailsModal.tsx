import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Megaphone,
  Rocket,
  Target,
  Zap,
  Calendar,
  DollarSign,
  TrendingUp,
  Share2,
  CheckCircle2,
  ExternalLink,
  Layers
} from 'lucide-react';
import { MilestoneAnnotation } from '../data/milestonesData';

interface MilestoneDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  milestone: MilestoneAnnotation | null;
}

export function MilestoneDetailsModal({
  isOpen,
  onClose,
  milestone
}: MilestoneDetailsModalProps) {
  if (!isOpen || !milestone) return null;

  const getIcon = () => {
    switch (milestone.type) {
      case 'campaign':
        return <Megaphone className="w-5 h-5" style={{ color: milestone.color }} />;
      case 'launch':
        return <Rocket className="w-5 h-5" style={{ color: milestone.color }} />;
      case 'target':
        return <Target className="w-5 h-5" style={{ color: milestone.color }} />;
      case 'sla':
        return <Zap className="w-5 h-5" style={{ color: milestone.color }} />;
      default:
        return <TrendingUp className="w-5 h-5" style={{ color: milestone.color }} />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1A1A1A]/70 backdrop-blur-sm">
        {/* Backdrop click dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white border border-[#1A1A1A]/20 shadow-2xl z-10 overflow-hidden text-[#1A1A1A]"
        >
          {/* Top Brand Accent Bar */}
          <div
            className="w-full h-1.5"
            style={{ backgroundColor: milestone.color }}
          />

          {/* Header */}
          <div className="p-6 pb-4 border-b border-[#1A1A1A]/10 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: `${milestone.color}15`,
                  borderColor: `${milestone.color}40`
                }}
              >
                {getIcon()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${milestone.color}15`,
                      color: milestone.color
                    }}
                  >
                    {milestone.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#1A1A1A]/50 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {milestone.dateLabel}
                  </span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-[#1A1A1A] mt-1">
                  {milestone.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#1A1A1A]/50 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Impact Banner */}
            <div
              className="p-3.5 border flex items-center justify-between gap-3 rounded"
              style={{
                backgroundColor: `${milestone.color}0D`,
                borderColor: `${milestone.color}33`
              }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 shrink-0" style={{ color: milestone.color }} />
                <span className="text-xs font-bold text-[#1A1A1A]">Erzielter Business Impact:</span>
              </div>
              <span
                className="font-mono font-black text-xs px-2.5 py-1 rounded shadow-xs"
                style={{
                  backgroundColor: milestone.color,
                  color: '#FFFFFF'
                }}
              >
                {milestone.impact}
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/50 mb-1.5">
                Kontext & Beschreibung
              </h4>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed bg-[#F9F8F6] p-3.5 border border-[#1A1A1A]/5">
                {milestone.details}
              </p>
            </div>

            {/* Key Metrics Grid if available */}
            {milestone.metrics && milestone.metrics.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/50 mb-2">
                  Leistungsdaten & Kennzahlen
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {milestone.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#F9F8F6] border border-[#1A1A1A]/10 text-center">
                      <span className="text-[10px] text-[#1A1A1A]/60 block leading-tight mb-1">
                        {m.label}
                      </span>
                      <span className="font-mono font-bold text-xs text-[#1A1A1A]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Channels & Attribution */}
            {milestone.channels && milestone.channels.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A]/50 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#E56014]" />
                  Aktivierte Kanäle & Touchpoints
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {milestone.channels.map((chan, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10 rounded flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#23BAA4]" />
                      {chan}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Budget if available */}
            {milestone.budget && (
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#1A1A1A]/10 text-[#1A1A1A]/70">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#E56014]" />
                  Budget / Investition:
                </span>
                <span className="font-mono font-bold text-[#1A1A1A]">
                  {milestone.budget}
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 flex justify-between items-center">
            <span className="text-[11px] text-[#1A1A1A]/50 font-mono">
              LeadPilot CRM Event-Tag
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1A1A1A] text-white text-xs uppercase font-bold tracking-wider hover:bg-[#E56014] transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
