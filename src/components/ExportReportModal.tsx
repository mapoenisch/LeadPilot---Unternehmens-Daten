import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileSpreadsheet,
  FileText,
  Printer,
  CheckCircle2,
  Calendar,
  Layers,
  TrendingUp,
  Activity,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import {
  ExportReportData,
  downloadCSVFile,
  generateFunnelCSV,
  generateForecastCSV,
  generateDealsCSV,
  generateMasterCSV,
  printExecutiveReport
} from '../utils/crmExportUtils';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExportReportData;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'csv-current' | 'csv-master' | 'pdf'>('csv-current');
  const [csvDelimiter, setCsvDelimiter] = useState<';' | ','>(';');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentTabLabel =
    data.activeTab === 'funnel'
      ? 'Pipeline Funnel & Conversion'
      : data.activeTab === 'forecast'
      ? 'Revenue Forecast & Trajektorie'
      : 'Echtzeit Live-Deals';

  const timeRangeLabel =
    data.timeRange === '30d'
      ? '30 Tage'
      : data.timeRange === '90d'
      ? 'Quartal (Q3)'
      : '12 Monate';

  const handleExport = () => {
    const timestamp = new Date().toISOString().slice(0, 10);

    if (selectedFormat === 'pdf') {
      printExecutiveReport(data);
      setDownloadSuccess('PDF-Druckdialog geöffnet');
      setTimeout(() => setDownloadSuccess(null), 4000);
      return;
    }

    if (selectedFormat === 'csv-current') {
      let csvContent = '';
      let filename = '';

      if (data.activeTab === 'funnel') {
        csvContent = generateFunnelCSV(data);
        filename = `leadpilot-pipeline-funnel-${data.timeRange}-${timestamp}.csv`;
      } else if (data.activeTab === 'forecast') {
        csvContent = generateForecastCSV(data);
        filename = `leadpilot-revenue-forecast-${data.timeRange}-${timestamp}.csv`;
      } else {
        csvContent = generateDealsCSV(data);
        filename = `leadpilot-live-deals-${data.timeRange}-${timestamp}.csv`;
      }

      if (csvDelimiter === ',') {
        csvContent = csvContent.replace(/;/g, ',');
      }

      downloadCSVFile(csvContent, filename);
      setDownloadSuccess(`CSV "${filename}" heruntergeladen`);
      setTimeout(() => setDownloadSuccess(null), 4000);
    } else if (selectedFormat === 'csv-master') {
      let csvContent = generateMasterCSV(data);
      const filename = `leadpilot-crm-master-dataset-${data.timeRange}-${timestamp}.csv`;

      if (csvDelimiter === ',') {
        csvContent = csvContent.replace(/;/g, ',');
      }

      downloadCSVFile(csvContent, filename);
      setDownloadSuccess(`Master-CSV "${filename}" heruntergeladen`);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="bg-white border border-[#1A1A1A] w-full max-w-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Header Bar */}
          <div className="bg-[#1A1A1A] text-white p-6 sm:p-7 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E56014] flex items-center justify-center text-white shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#E56014] font-bold">
                    Executive Export Engine
                  </span>
                  <span className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 font-mono">
                    {timeRangeLabel}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1">
                  CRM Daten & Berichte exportieren
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Schließen"
              aria-label="Modal schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Live Context Card */}
            <div className="bg-[#F9F8F6] border border-[#1A1A1A]/10 p-4 sm:p-5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 block mb-2">
                Aktueller Dashboard-Zustand
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-[#1A1A1A]/50 block text-[10px]">Aktiver Tab</span>
                  <strong className="text-[#1A1A1A] font-bold block truncate">{currentTabLabel}</strong>
                </div>
                <div>
                  <span className="text-[#1A1A1A]/50 block text-[10px]">Pipeline-Volumen</span>
                  <strong className="text-[#E56014] font-mono font-bold block">
                    €{data.kpis.totalPipelineValue.toLocaleString('de-DE')}
                  </strong>
                </div>
                <div>
                  <span className="text-[#1A1A1A]/50 block text-[10px]">Win Rate</span>
                  <strong className="text-[#23BAA4] font-mono font-bold block">
                    {data.kpis.winRate}%
                  </strong>
                </div>
                <div>
                  <span className="text-[#1A1A1A]/50 block text-[10px]">Stand</span>
                  <strong className="text-[#1A1A1A] font-mono font-bold block truncate">
                    {data.generatedAt}
                  </strong>
                </div>
              </div>
            </div>

            {/* Export Format Selector */}
            <div>
              <label className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A] block mb-3">
                Format & Umfang wählen:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Option 1: CSV Current View */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat('csv-current')}
                  className={`p-4 border text-left transition-all relative flex flex-col justify-between ${
                    selectedFormat === 'csv-current'
                      ? 'border-[#E56014] bg-[#E56014]/5 ring-1 ring-[#E56014]'
                      : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <FileSpreadsheet
                        className={`w-5 h-5 ${
                          selectedFormat === 'csv-current' ? 'text-[#E56014]' : 'text-[#1A1A1A]/60'
                        }`}
                      />
                      {selectedFormat === 'csv-current' && (
                        <span className="w-2 h-2 rounded-full bg-[#E56014]"></span>
                      )}
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A1A1A] block">
                      Aktuelle Ansicht
                    </span>
                    <p className="text-[11px] text-[#1A1A1A]/60 mt-1 leading-snug">
                      CSV-Tabelle der aktiven Ansicht ({currentTabLabel}).
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#E56014] font-bold mt-3 block">
                    .CSV (Excel-kompatibel)
                  </span>
                </button>

                {/* Option 2: Full Master Dataset CSV */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat('csv-master')}
                  className={`p-4 border text-left transition-all relative flex flex-col justify-between ${
                    selectedFormat === 'csv-master'
                      ? 'border-[#E56014] bg-[#E56014]/5 ring-1 ring-[#E56014]'
                      : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Layers
                        className={`w-5 h-5 ${
                          selectedFormat === 'csv-master' ? 'text-[#E56014]' : 'text-[#1A1A1A]/60'
                        }`}
                      />
                      {selectedFormat === 'csv-master' && (
                        <span className="w-2 h-2 rounded-full bg-[#E56014]"></span>
                      )}
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A1A1A] block">
                      Master-Datensatz
                    </span>
                    <p className="text-[11px] text-[#1A1A1A]/60 mt-1 leading-snug">
                      Alle KPIs, 5 Funnel-Stufen, 12 Forecast-Monate & Live-Deals.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#E56014] font-bold mt-3 block">
                    .CSV (Komplett)
                  </span>
                </button>

                {/* Option 3: Printable PDF Report */}
                <button
                  type="button"
                  onClick={() => setSelectedFormat('pdf')}
                  className={`p-4 border text-left transition-all relative flex flex-col justify-between ${
                    selectedFormat === 'pdf'
                      ? 'border-[#E56014] bg-[#E56014]/5 ring-1 ring-[#E56014]'
                      : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <FileText
                        className={`w-5 h-5 ${
                          selectedFormat === 'pdf' ? 'text-[#E56014]' : 'text-[#1A1A1A]/60'
                        }`}
                      />
                      {selectedFormat === 'pdf' && (
                        <span className="w-2 h-2 rounded-full bg-[#E56014]"></span>
                      )}
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A1A1A] block">
                      Executive PDF Report
                    </span>
                    <p className="text-[11px] text-[#1A1A1A]/60 mt-1 leading-snug">
                      Druckfertiger Vorstands- und Investorenbericht (A4).
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#23BAA4] font-bold mt-3 block">
                    .PDF / Druckansicht
                  </span>
                </button>
              </div>
            </div>

            {/* CSV Config Option (If CSV chosen) */}
            {selectedFormat.startsWith('csv') && (
              <div className="bg-[#F9F8F6] border border-[#1A1A1A]/10 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="text-xs">
                  <span className="font-bold text-[#1A1A1A] block">Trennzeichen-Konfiguration</span>
                  <span className="text-[#1A1A1A]/60 text-[11px]">
                    Semikolon (;) empfohlen für deutsches Microsoft Excel.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCsvDelimiter(';')}
                    className={`px-3 py-1 text-xs font-mono font-bold border transition-colors ${
                      csvDelimiter === ';'
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:bg-gray-100'
                    }`}
                  >
                    ; (DE/EU)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCsvDelimiter(',')}
                    className={`px-3 py-1 text-xs font-mono font-bold border transition-colors ${
                      csvDelimiter === ','
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:bg-gray-100'
                    }`}
                  >
                    , (US/Standard)
                  </button>
                </div>
              </div>
            )}

            {/* Success Feedback Alert */}
            <AnimatePresence>
              {downloadSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#23BAA4]/15 border border-[#23BAA4] text-[#13695d] p-3.5 flex items-center gap-2.5 text-xs font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#23BAA4] shrink-0" />
                  <span>{downloadSuccess}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] text-[#1A1A1A]/50">
              <ShieldCheck className="w-4 h-4 text-[#23BAA4]" />
              <span>Daten werden lokal generiert & nicht an Dritte übertragen</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-gray-100 transition-colors"
              >
                Abbrechen
              </button>
              <button
                type="button"
                id="btn-confirm-export"
                onClick={handleExport}
                className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#E56014] hover:bg-[#c94f0d] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                {selectedFormat === 'pdf' ? (
                  <>
                    <Printer className="w-4 h-4" />
                    <span>PDF Bericht erstellen</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    <span>CSV herunterladen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
