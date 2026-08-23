import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  Download,
  Filter,
  ArrowUpRight,
  TrendingUp,
  Layers,
  Calendar,
  Globe,
  Mail,
  Phone,
  Users,
  Zap,
  CheckCircle2,
  Share2,
  DollarSign,
  Briefcase,
  SlidersHorizontal,
  ChevronRight,
  Info
} from 'lucide-react';
import { DataPointLeadSources, LeadSourceItem } from '../data/leadSourcesData';

interface LeadSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DataPointLeadSources | null;
}

export function LeadSourcesModal({ isOpen, onClose, data }: LeadSourcesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'volume' | 'leads' | 'conversion' | 'cac'>('volume');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [downloadNotification, setDownloadNotification] = useState<boolean>(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset filters on data change
  useEffect(() => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('volume');
  }, [data]);

  const categories = useMemo(() => {
    if (!data) return [];
    const set = new Set(data.leadSources.map((s) => s.category));
    return ['all', ...Array.from(set)];
  }, [data]);

  const filteredAndSortedSources = useMemo(() => {
    if (!data) return [];

    let list = data.leadSources.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.sourceName.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.sampleDealCompany.toLowerCase().includes(q) ||
        item.topSalesRep.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === 'volume') return b.revenueVolume - a.revenueVolume;
      if (sortBy === 'leads') return b.leadsCount - a.leadsCount;
      if (sortBy === 'conversion') return b.conversionRate - a.conversionRate;
      if (sortBy === 'cac') return a.cac - b.cac; // Lower CAC first
      return 0;
    });

    return list;
  }, [data, selectedCategory, searchQuery, sortBy]);

  if (!isOpen || !data) return null;

  const totalCalculatedVolume = data.leadSources.reduce((sum, s) => sum + s.revenueVolume, 0) || data.totalVolume;
  const topSource = [...data.leadSources].sort((a, b) => b.revenueVolume - a.revenueVolume)[0];

  const handleDownloadCSV = () => {
    // Generate CSV Content
    const headers = ['Kanal / Quelle', 'Kategorie', 'Anzahl Leads/Deals', 'Umsatz/Volumen (€)', 'Conversion-Rate (%)', 'CAC (€)', 'Ø Deal-Größe (€)', 'Top Deal / Beispiel', 'Zuständiger Rep'];
    const rows = data.leadSources.map((s) => [
      `"${s.sourceName.replace(/"/g, '""')}"`,
      `"${s.category}"`,
      s.leadsCount,
      s.revenueVolume,
      `${s.conversionRate}%`,
      `€${s.cac}`,
      `€${s.avgDealSize}`,
      `"${s.sampleDealCompany.replace(/"/g, '""')}"`,
      `"${s.topSalesRep}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `LeadPilot_Quellen_${data.pointTitle.replace(/[^a-zA-Z0-9]/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotification(true);
    setTimeout(() => setDownloadNotification(false), 3000);
  };

  const handleCopySummary = () => {
    const summaryText = `LeadPilot Breakdown: ${data.pointTitle}\nGesamtvolumen: €${data.totalVolume.toLocaleString('de-DE')}\nAktive Leads: ${data.totalLeads}\nTop Kanal: ${topSource ? topSource.sourceName : '-'}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const renderIcon = (type: LeadSourceItem['channelIconType']) => {
    switch (type) {
      case 'linkedin':
      case 'search':
      case 'globe':
        return <Globe className="w-4 h-4 text-[#23BAA4]" />;
      case 'mail':
        return <Mail className="w-4 h-4 text-[#E56014]" />;
      case 'phone':
        return <Phone className="w-4 h-4 text-[#23BAA4]" />;
      case 'calendar':
        return <Calendar className="w-4 h-4 text-[#FBBF24]" />;
      case 'users':
        return <Users className="w-4 h-4 text-[#34D399]" />;
      case 'zap':
      default:
        return <Zap className="w-4 h-4 text-[#E56014]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#141414]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white text-[#1A1A1A] w-full max-w-4xl shadow-2xl border border-[#1A1A1A]/15 my-8 overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          {/* Top Brand Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#23BAA4] via-[#E56014] to-[#1A1A1A]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-7 border-b border-[#1A1A1A]/10 bg-[#F9F8F6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 mt-0.5">
                {data.type === 'stage' ? (
                  <Layers className="w-5 h-5 text-[#23BAA4]" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-[#E56014]" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E56014] bg-[#E56014]/10 px-2 py-0.5 rounded">
                    Lead-Quellen Breakdown
                  </span>
                  <span
                    className="text-[10px] font-bold font-mono px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${data.badgeColor || '#1A1A1A'}15`,
                      color: data.badgeColor || '#1A1A1A'
                    }}
                  >
                    {data.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] mt-1 tracking-tight">
                  {data.pointTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/60 mt-0.5">
                  {data.pointSubtitle}
                </p>
              </div>
            </div>

            {/* Top Right Action & Close */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={handleDownloadCSV}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-white hover:bg-gray-100 border border-[#1A1A1A]/15 text-[#1A1A1A] transition-colors"
                title="Quellen als CSV exportieren"
              >
                <Download className="w-3.5 h-3.5 text-[#23BAA4]" />
                <span className="hidden sm:inline">CSV Export</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5 transition-colors"
                aria-label="Modal schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-white border-b border-[#1A1A1A]/10 text-xs">
            <div className="p-3 bg-[#F9F8F6] border border-[#1A1A1A]/5">
              <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 tracking-wider block">
                Zugeordnete Leads
              </span>
              <div className="text-lg sm:text-xl font-black text-[#1A1A1A] mt-0.5">
                {data.totalLeads.toLocaleString('de-DE')}
              </div>
              <span className="text-[10px] text-[#23BAA4] font-bold flex items-center gap-0.5 mt-0.5">
                <ArrowUpRight className="w-3 h-3" /> 100% Attribuiert
              </span>
            </div>

            <div className="p-3 bg-[#F9F8F6] border border-[#1A1A1A]/5">
              <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 tracking-wider block">
                Pipeline / Volumen
              </span>
              <div className="text-lg sm:text-xl font-black text-[#E56014] mt-0.5 font-mono">
                €{data.totalVolume.toLocaleString('de-DE')}
              </div>
              <span className="text-[10px] text-[#1A1A1A]/60 mt-0.5 block">
                Aus {data.leadSources.length} Hauptkanälen
              </span>
            </div>

            <div className="p-3 bg-[#F9F8F6] border border-[#1A1A1A]/5">
              <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 tracking-wider block">
                Ø Conversion Rate
              </span>
              <div className="text-lg sm:text-xl font-black text-[#23BAA4] mt-0.5 font-mono">
                {data.avgConversion}%
              </div>
              <span className="text-[10px] text-[#1A1A1A]/60 mt-0.5 block">
                Über alle Touchpoints
              </span>
            </div>

            <div className="p-3 bg-[#F9F8F6] border border-[#1A1A1A]/5">
              <span className="text-[10px] uppercase font-bold text-[#1A1A1A]/50 tracking-wider block truncate">
                Stärkster Kanal
              </span>
              <div className="text-sm font-bold text-[#1A1A1A] mt-0.5 truncate" title={topSource?.sourceName}>
                {topSource?.sourceName.split('(')[0] || 'Direct'}
              </div>
              <span className="text-[10px] text-[#E56014] font-bold font-mono mt-0.5 block">
                {topSource ? `${((topSource.revenueVolume / totalCalculatedVolume) * 100).toFixed(0)}% Volumenanteil` : ''}
              </span>
            </div>
          </div>

          {/* Toast / Notification feedback */}
          {downloadNotification && (
            <div className="mx-6 mt-4 p-2.5 bg-[#23BAA4]/15 border border-[#23BAA4]/30 text-[#1a8575] text-xs font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#23BAA4]" />
                <span>CSV-Exportdatei wurde erfolgreich heruntergeladen.</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider">Excel / BI Ready</span>
            </div>
          )}

          {copiedNotification && (
            <div className="mx-6 mt-4 p-2.5 bg-[#1A1A1A] text-white text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#23BAA4]" />
              <span>Zusammenfassung in Zwischenablage kopiert.</span>
            </div>
          )}

          {/* Filter, Search & Sort Toolbar */}
          <div className="p-4 sm:px-6 bg-white border-b border-[#1A1A1A]/10 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
              <input
                type="text"
                placeholder="Quelle, Kategorie oder Unternehmen suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F9F8F6] border border-[#1A1A1A]/15 focus:outline-none focus:border-[#E56014] transition-colors placeholder:text-[#1A1A1A]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills & Sort Dropdown */}
            <div className="flex items-center gap-2 flex-wrap justify-between md:justify-end">
              <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-[11px] font-bold whitespace-nowrap border transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-[#F9F8F6] text-[#1A1A1A]/70 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    {cat === 'all' ? 'Alle Kanäle' : cat}
                  </button>
                ))}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-1.5 text-xs text-[#1A1A1A]/60">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F9F8F6] border border-[#1A1A1A]/15 text-[11px] font-semibold py-1 px-2 focus:outline-none focus:border-[#E56014]"
                >
                  <option value="volume">Nach Volumen (€)</option>
                  <option value="leads">Nach Lead-Anzahl</option>
                  <option value="conversion">Nach Conversion (%)</option>
                  <option value="cac">Nach CAC Effizienz</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sources List Table / Cards */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            {filteredAndSortedSources.length === 0 ? (
              <div className="text-center py-12 text-xs text-[#1A1A1A]/50">
                <Filter className="w-8 h-8 mx-auto mb-2 text-[#1A1A1A]/30" />
                <p className="font-bold text-[#1A1A1A]">Keine Quellen für diese Filterkriterien gefunden.</p>
                <p className="mt-1">Versuchen Sie einen anderen Suchbegriff oder wählen Sie 'Alle Kanäle'.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-bold text-[#E56014] hover:underline"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              filteredAndSortedSources.map((source, index) => {
                const sharePercent = ((source.revenueVolume / totalCalculatedVolume) * 100).toFixed(1);

                return (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      {/* Left: Source Icon, Name & Category */}
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded bg-white border border-[#1A1A1A]/10 flex items-center justify-center shrink-0 mt-0.5">
                          {renderIcon(source.channelIconType)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-xs sm:text-sm text-[#1A1A1A] group-hover:text-[#E56014] transition-colors truncate">
                              {source.sourceName}
                            </h4>
                            <span className="text-[10px] font-semibold px-2 py-0.5 bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/70 rounded">
                              {source.category}
                            </span>
                            <span
                              className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                source.status === 'Top Performer'
                                  ? 'bg-[#23BAA4]/15 text-[#1a8575]'
                                  : source.status === 'Skalierend'
                                  ? 'bg-[#E56014]/15 text-[#E56014]'
                                  : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/70'
                              }`}
                            >
                              {source.status}
                            </span>
                          </div>

                          {/* Secondary Meta: Sample company & Sales Rep */}
                          <div className="flex items-center gap-3 text-[11px] text-[#1A1A1A]/60 mt-1 flex-wrap">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3 text-[#1A1A1A]/40" />
                              Beispiel-Deal: <strong className="text-[#1A1A1A]">{source.sampleDealCompany}</strong>
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-[#1A1A1A]/40" />
                              Lead-Owner: <strong className="text-[#1A1A1A]">{source.topSalesRep}</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Key Figures & Share Bar */}
                      <div className="flex items-center gap-4 sm:gap-6 self-end md:self-center shrink-0 text-right">
                        <div>
                          <span className="text-[10px] text-[#1A1A1A]/50 block">Volumen</span>
                          <span className="font-mono font-black text-sm sm:text-base text-[#E56014]">
                            €{source.revenueVolume.toLocaleString('de-DE')}
                          </span>
                          <span className="text-[10px] font-semibold text-[#1A1A1A]/50 block">
                            {sharePercent}% Anteil
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] text-[#1A1A1A]/50 block">Leads / Deals</span>
                          <span className="font-mono font-bold text-xs sm:text-sm text-[#1A1A1A]">
                            {source.leadsCount.toLocaleString('de-DE')}
                          </span>
                          <span className="text-[10px] font-mono text-[#23BAA4] font-bold flex items-center justify-end gap-0.5">
                            <ArrowUpRight className="w-2.5 h-2.5" /> {source.trend}
                          </span>
                        </div>

                        <div className="hidden sm:block">
                          <span className="text-[10px] text-[#1A1A1A]/50 block">Conv. / CAC</span>
                          <span className="font-mono font-bold text-xs text-[#23BAA4]">
                            {source.conversionRate}%
                          </span>
                          <span className="text-[10px] font-mono text-[#1A1A1A]/60 block">
                            CAC €{source.cac}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar of Volume Contribution */}
                    <div className="mt-3 pt-2.5 border-t border-[#1A1A1A]/5 flex items-center gap-3 text-[10px] text-[#1A1A1A]/60">
                      <span>Anteil am Gesamtergebnis ({sharePercent}%):</span>
                      <div className="flex-1 bg-white h-1.5 rounded-full overflow-hidden border border-[#1A1A1A]/10">
                        <div
                          className="h-full bg-gradient-to-r from-[#23BAA4] to-[#E56014]"
                          style={{ width: `${Math.min(100, Math.max(4, parseFloat(sharePercent)))}%` }}
                        />
                      </div>
                      <span className="font-mono text-[#1A1A1A] font-semibold">
                        Ø Deal: €{source.avgDealSize.toLocaleString('de-DE')}
                      </span>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#1A1A1A]/60 text-[11px]">
              <Info className="w-4 h-4 text-[#23BAA4] shrink-0" />
              <span>
                Automatische Multi-Touch Attribuierung durch die integrierte LeadPilot KI-Pipeline.
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleCopySummary}
                className="px-4 py-2 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] font-bold text-xs hover:bg-gray-100 transition-colors"
              >
                Zusammenfassung kopieren
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E56014] transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
