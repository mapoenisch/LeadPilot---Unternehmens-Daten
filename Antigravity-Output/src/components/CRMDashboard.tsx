import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  ComposedChart,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import {
  TrendingUp,
  Activity,
  Sliders,
  DollarSign,
  Users,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Layers,
  Calendar,
  CheckCircle2,
  RefreshCw,
  Zap,
  Info,
  Search,
  ExternalLink,
  MousePointerClick,
  Download,
  Check,
  FileSpreadsheet,
  FileText,
  Printer,
  ChevronDown,
  GitCompare,
  History,
  Eye,
  EyeOff
} from 'lucide-react';
import { LeadSourcesModal } from './LeadSourcesModal';
import { ExportReportModal } from './ExportReportModal';
import { ExportReportData, downloadCSVFile, generateFunnelCSV, generateForecastCSV, generateDealsCSV } from '../utils/crmExportUtils';
import {
  getLeadSourcesForStage,
  getLeadSourcesForMonth,
  DataPointLeadSources
} from '../data/leadSourcesData';

export interface StageData {
  id: string;
  stage: string;
  shortName: string;
  leads: number;
  value: number;
  conversionRate: number;
  avgDays: number;
  color: string;
  dropOffRate: number;
  topChannels: { channel: string; share: string }[];
  previousYearLeads?: number;
  previousYearValue?: number;
  previousYearConv?: number;
}

const basePipelineStages: StageData[] = [
  {
    id: 'inbound',
    stage: '1. Inbound Leads',
    shortName: 'Inbound',
    leads: 1240,
    value: 1860000,
    conversionRate: 100,
    avgDays: 1.2,
    color: '#23BAA4',
    dropOffRate: 24,
    topChannels: [
      { channel: 'Web-Formular', share: '45%' },
      { channel: 'LinkedIn Kampagnen', share: '35%' },
      { channel: 'Empfehlungen', share: '20%' }
    ],
    previousYearLeads: 780,
    previousYearValue: 1090000,
    previousYearConv: 100
  },
  {
    id: 'contacted',
    stage: '2. Qualifiziert & Erstkontakt',
    shortName: 'Erstkontakt',
    leads: 942,
    value: 1554000,
    conversionRate: 76.0,
    avgDays: 2.8,
    color: '#34D399',
    dropOffRate: 28,
    topChannels: [
      { channel: 'Automatischer Speed-Call', share: '62%' },
      { channel: 'E-Mail Sequenz', share: '38%' }
    ],
    previousYearLeads: 510,
    previousYearValue: 816000,
    previousYearConv: 65.4
  },
  {
    id: 'demo',
    stage: '3. Produkt-Demo & Pitch',
    shortName: 'Demo',
    leads: 678,
    value: 1288000,
    conversionRate: 72.0,
    avgDays: 5.4,
    color: '#FBBF24',
    dropOffRate: 22,
    topChannels: [
      { channel: 'Live-Demo (Zoom/Teams)', share: '85%' },
      { channel: 'Vor-Ort Termin', share: '15%' }
    ],
    previousYearLeads: 320,
    previousYearValue: 576000,
    previousYearConv: 62.7
  },
  {
    id: 'proposal',
    stage: '4. Angebot & Verhandlung',
    shortName: 'Angebot',
    leads: 528,
    value: 1056000,
    conversionRate: 77.9,
    avgDays: 7.1,
    color: '#FB923C',
    dropOffRate: 18,
    topChannels: [
      { channel: 'Standard SaaS Lizenz', share: '60%' },
      { channel: 'Enterprise Custom', share: '40%' }
    ],
    previousYearLeads: 215,
    previousYearValue: 387000,
    previousYearConv: 67.2
  },
  {
    id: 'won',
    stage: '5. Abschluss (Closed Won)',
    shortName: 'Abschluss',
    leads: 412,
    value: 824000,
    conversionRate: 78.0,
    avgDays: 14.5,
    color: '#E56014',
    dropOffRate: 0,
    topChannels: [
      { channel: 'Jahresvertrag (Voraus)', share: '70%' },
      { channel: 'Monatsabrechnung', share: '30%' }
    ],
    previousYearLeads: 148,
    previousYearValue: 266000,
    previousYearConv: 68.8
  }
];

const baseMonthlyProjection = [
  { month: 'Jan', actual: 48000, projected: 48000, target: 45000, optimistic: 51000, baseline: 46000, previousYear: 31000 },
  { month: 'Feb', actual: 54000, projected: 54000, target: 50000, optimistic: 58000, baseline: 52000, previousYear: 34500 },
  { month: 'Mär', actual: 63000, projected: 63000, target: 56000, optimistic: 67000, baseline: 60000, previousYear: 39000 },
  { month: 'Apr', actual: 72000, projected: 72000, target: 62000, optimistic: 76000, baseline: 68000, previousYear: 44000 },
  { month: 'Mai', actual: 85000, projected: 85000, target: 70000, optimistic: 89000, baseline: 80000, previousYear: 51000 },
  { month: 'Jun', actual: 98000, projected: 98000, target: 78000, optimistic: 104000, baseline: 92000, previousYear: 58000 },
  { month: 'Jul', actual: null, projected: 112000, target: 86000, optimistic: 122000, baseline: 104000, previousYear: 66000 },
  { month: 'Aug', actual: null, projected: 128000, target: 95000, optimistic: 141000, baseline: 118000, previousYear: 75000 },
  { month: 'Sep', actual: null, projected: 146000, target: 105000, optimistic: 164000, baseline: 132000, previousYear: 84000 },
  { month: 'Okt', actual: null, projected: 168000, target: 116000, optimistic: 191000, baseline: 150000, previousYear: 95000 },
  { month: 'Nov', actual: null, projected: 192000, target: 128000, optimistic: 220000, baseline: 170000, previousYear: 108000 },
  { month: 'Dez', actual: null, projected: 224000, target: 140000, optimistic: 258000, baseline: 195000, previousYear: 124000 }
];

const sampleDeals = [
  { id: 'D-801', company: 'Maschinenbau Weber GmbH', value: '€42.000', stage: 'Angebot & Verhandlung', prob: '85%', rep: 'Sarah M.', nextAction: 'Vertragsprüfung via DocuSign', status: 'hot' },
  { id: 'D-802', company: 'LogiFlow Solutions AG', value: '€28.500', stage: 'Produkt-Demo', prob: '60%', rep: 'Julian K.', nextAction: 'Technisches Deep-Dive Follow-up', status: 'warm' },
  { id: 'D-803', company: 'Klausen Precision Parts', value: '€64.000', stage: 'Erstkontakt qualifiziert', prob: '45%', rep: 'Elena B.', nextAction: 'Entscheider-Call Terminierung', status: 'active' },
  { id: 'D-804', company: 'Bavaria SolarTech KG', value: '€19.200', stage: 'Abschlussphase', prob: '95%', rep: 'Sarah M.', nextAction: 'Onboarding Termin bestätigen', status: 'closing' }
];

// Custom Branded Tooltip for Sales Pipeline Funnel
interface FunnelTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: StageData }>;
}

const CustomFunnelTooltip = ({ active, payload }: FunnelTooltipProps) => {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0].payload;
  const avgDealValuePerLead = item.leads > 0 ? Math.round(item.value / item.leads) : 0;
  const hasYoy = item.previousYearLeads !== undefined && item.previousYearLeads > 0;
  const yoyLeadDiff = hasYoy ? item.leads - item.previousYearLeads! : 0;
  const yoyLeadPct = hasYoy ? ((yoyLeadDiff / item.previousYearLeads!) * 100).toFixed(1) : '0.0';

  return (
    <div className="bg-[#141414] text-white p-4 shadow-2xl border border-white/20 min-w-[280px] max-w-[340px] select-none">
      {/* Top Accent Line */}
      <div
        className="w-full h-1 mb-3 rounded-full"
        style={{ backgroundColor: item.color }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-2 pb-2.5 mb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#E56014] block">
            LeadPilot Funnel Phase
          </span>
          <h4 className="font-bold text-sm text-white mt-0.5">
            {item.stage}
          </h4>
        </div>
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-white/10 text-[#23BAA4] rounded-sm whitespace-nowrap">
          {item.conversionRate}% Conv.
        </span>
      </div>

      {/* Primary Metrics */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-baseline">
          <span className="text-white/60">Aktive Leads:</span>
          <span className="font-mono font-black text-sm text-white">
            {item.leads.toLocaleString('de-DE')} <span className="text-[10px] font-normal text-white/50">Kontakte</span>
          </span>
        </div>

        {hasYoy && (
          <div className="flex justify-between items-center py-1 px-2 bg-white/5 border border-white/10 rounded text-[11px]">
            <div className="flex items-center gap-1.5 text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span>Vorjahr (gleicher Zeitraum):</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-white/80">{item.previousYearLeads?.toLocaleString('de-DE')}</span>
              <span className="text-[#23BAA4] font-bold text-[10px]">
                (+{yoyLeadPct}%)
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-baseline">
          <span className="text-white/60">Pipeline-Gesamtwert:</span>
          <span className="font-mono font-bold text-[#E56014]">
            €{item.value.toLocaleString('de-DE')}
          </span>
        </div>

        <div className="flex justify-between items-baseline">
          <span className="text-white/60">Ø Deal-Wert pro Lead:</span>
          <span className="font-mono text-white/90">
            €{avgDealValuePerLead.toLocaleString('de-DE')}
          </span>
        </div>

        <div className="flex justify-between items-baseline">
          <span className="text-white/60">Ø Verweildauer in Phase:</span>
          <span className="font-mono text-[#23BAA4] font-semibold">
            {item.avgDays} Tage
          </span>
        </div>

        {/* Mini Conversion Progress */}
        <div className="pt-1.5 pb-1">
          <div className="flex justify-between text-[10px] text-white/50 mb-1">
            <span>Stufen-Effizienz</span>
            <span className="font-mono text-white/80">{item.conversionRate}%</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(100, item.conversionRate)}%`,
                backgroundColor: item.color
              }}
            />
          </div>
        </div>

        {item.dropOffRate > 0 && (
          <div className="flex justify-between items-baseline pt-1.5 border-t border-white/5 text-[11px]">
            <span className="text-white/50">Abwanderungsquote:</span>
            <span className="font-mono text-red-400 font-semibold">
              {item.dropOffRate}% Drop-Off
            </span>
          </div>
        )}
      </div>

      {/* Top Channel */}
      {item.topChannels && item.topChannels.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-white/10">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 block mb-1">
            Top Akquise-Kanal
          </span>
          <div className="flex items-center justify-between text-[11px] bg-white/5 px-2 py-1">
            <span className="text-white/80 truncate mr-2">{item.topChannels[0].channel}</span>
            <span className="font-mono font-bold text-[#23BAA4] whitespace-nowrap">{item.topChannels[0].share}</span>
          </div>
        </div>
      )}

      {/* Click Hint for Lead Sources Modal */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/80 bg-white/10 px-2.5 py-1.5 rounded">
        <span className="flex items-center gap-1.5 font-bold text-[#E56014]">
          <MousePointerClick className="w-3.5 h-3.5" />
          Klicken für Lead-Quellen Breakdown
        </span>
        <span className="text-white font-mono font-bold">➔</span>
      </div>
    </div>
  );
};

// Custom Branded Tooltip for Revenue Projections & Forecasting
interface ForecastTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number | null;
    dataKey: string;
    color?: string;
  }>;
  label?: string;
}

const CustomForecastTooltip = ({ active, payload, label }: ForecastTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const actualItem = payload.find((p) => p.dataKey === 'actual');
  const projectedItem = payload.find((p) => p.dataKey === 'projected');
  const optimisticItem = payload.find((p) => p.dataKey === 'optimistic');
  const targetItem = payload.find((p) => p.dataKey === 'target');
  const previousYearItem = payload.find((p) => p.dataKey === 'previousYear');

  const hasActual = actualItem && actualItem.value !== null && actualItem.value !== undefined;
  const currentRevenue = hasActual && actualItem.value !== null ? actualItem.value : (projectedItem?.value ?? 0);
  const targetVal = targetItem?.value ?? 0;
  const deltaTarget = targetVal > 0 ? currentRevenue - targetVal : 0;
  const deltaPercent = targetVal > 0 ? ((deltaTarget / targetVal) * 100).toFixed(1) : '0.0';

  const prevYearVal = previousYearItem?.value ?? 0;
  const yoyDelta = prevYearVal > 0 ? currentRevenue - prevYearVal : 0;
  const yoyGrowthPct = prevYearVal > 0 ? ((yoyDelta / prevYearVal) * 100).toFixed(1) : '0.0';

  const monthNamesFull: Record<string, string> = {
    Jan: 'Januar',
    Feb: 'Februar',
    Mär: 'März',
    Apr: 'April',
    Mai: 'Mai',
    Jun: 'Juni',
    Jul: 'Juli',
    Aug: 'August',
    Sep: 'September',
    Okt: 'Oktober',
    Nov: 'November',
    Dez: 'Dezember'
  };

  const fullMonth = label && monthNamesFull[label] ? `${monthNamesFull[label]} 2026` : `${label} 2026`;

  return (
    <div className="bg-[#141414] text-white p-4 shadow-2xl border border-white/20 min-w-[290px] max-w-[360px] select-none">
      {/* Top Brand Accent */}
      <div className="w-full h-1 mb-3 rounded-full bg-gradient-to-r from-[#1A1A1A] via-[#E56014] to-[#23BAA4]" />

      {/* Header */}
      <div className="flex items-start justify-between gap-2 pb-2.5 mb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#E56014] block">
            Umsatz-Projektion
          </span>
          <h4 className="font-bold text-sm text-white mt-0.5">
            {fullMonth}
          </h4>
        </div>
        <span
          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm whitespace-nowrap ${
            hasActual ? 'bg-white/15 text-white' : 'bg-[#E56014]/20 text-[#E56014]'
          }`}
        >
          {hasActual ? 'Ist-Zahlen realisiert' : 'KI-Prognose'}
        </span>
      </div>

      {/* Exact Values Breakdown */}
      <div className="space-y-2 text-xs">
        {hasActual && actualItem.value !== null && (
          <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 border border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
              <span className="text-white font-semibold">Ist-Umsatz:</span>
            </div>
            <span className="font-mono font-black text-sm text-white">
              €{actualItem.value.toLocaleString('de-DE')}
            </span>
          </div>
        )}

        {projectedItem && projectedItem.value !== null && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E56014]" />
              <span className="text-white/80">Erwartete Prognose:</span>
            </div>
            <span className="font-mono font-bold text-[#E56014]">
              €{projectedItem.value.toLocaleString('de-DE')}
            </span>
          </div>
        )}

        {/* Previous Year Comparison Value */}
        {previousYearItem && previousYearItem.value !== null && (
          <div className="flex items-center justify-between bg-[#3B82F6]/10 px-2.5 py-1 border border-[#3B82F6]/20 rounded">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 border-2 border-dashed border-[#3B82F6] inline-block" />
              <span className="text-blue-200 font-semibold">Vorjahr (2025):</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="font-bold text-blue-300">
                €{previousYearItem.value.toLocaleString('de-DE')}
              </span>
              <span className="text-[10px] text-[#23BAA4] font-bold">
                (+{yoyGrowthPct}%)
              </span>
            </div>
          </div>
        )}

        {optimisticItem && optimisticItem.value !== null && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23BAA4]" />
              <span className="text-white/80">Optimistisches Szenario:</span>
            </div>
            <span className="font-mono font-bold text-[#23BAA4]">
              €{optimisticItem.value.toLocaleString('de-DE')}
            </span>
          </div>
        )}

        {targetItem && targetItem.value !== null && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 border border-dashed border-gray-400 inline-block" />
              <span className="text-white/60">Quartals-Zielvorgabe:</span>
            </div>
            <span className="font-mono text-white/70">
              €{targetItem.value.toLocaleString('de-DE')}
            </span>
          </div>
        )}
      </div>

      {/* Target Comparison Delta Badge */}
      {targetVal > 0 && (
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
          <span className="text-white/60">Delta zu Budget-Ziel:</span>
          <span
            className={`font-mono font-bold flex items-center gap-1 ${
              deltaTarget >= 0 ? 'text-[#23BAA4]' : 'text-red-400'
            }`}
          >
            {deltaTarget >= 0 ? `+€${deltaTarget.toLocaleString('de-DE')}` : `-€${Math.abs(deltaTarget).toLocaleString('de-DE')}`}
            <span className="text-[10px] opacity-80">({deltaTarget >= 0 ? `+${deltaPercent}%` : `${deltaPercent}%`})</span>
          </span>
        </div>
      )}

      {/* Click Hint for Lead Sources Modal */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/80 bg-white/10 px-2.5 py-1.5 rounded">
        <span className="flex items-center gap-1.5 font-bold text-[#E56014]">
          <MousePointerClick className="w-3.5 h-3.5" />
          Klicken für Lead-Quellen für {label}
        </span>
        <span className="text-white font-mono font-bold">➔</span>
      </div>
    </div>
  );
};

export function CRMDashboard() {
  const [activeTab, setActiveTab] = useState<'funnel' | 'forecast' | 'deals'>('funnel');
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '12m'>('90d');
  const [selectedStage, setSelectedStage] = useState<StageData>(basePipelineStages[0]);
  
  // Lead Sources Breakdown Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<DataPointLeadSources | null>(null);

  // Handlers to open Lead Sources Breakdown Modal
  const handleOpenStageSources = (stage: StageData) => {
    setSelectedStage(stage);
    setModalData(getLeadSourcesForStage(stage, timeMultiplier));
    setIsModalOpen(true);
  };

  const handleOpenMonthSources = (monthPayload: any) => {
    setModalData(getLeadSourcesForMonth(monthPayload));
    setIsModalOpen(true);
  };
  
  // Export Modal & CSV State
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  // Quick Direct CSV Export Handler
  const handleQuickExportCSV = () => {
    setIsExporting(true);

    let csvContent = '';
    const timestamp = new Date().toISOString().split('T')[0];
    let filename = `leadpilot-crm-${activeTab}-${timeRange}-${timestamp}.csv`;

    if (activeTab === 'funnel') {
      csvContent = generateFunnelCSV(exportDataPayload);
    } else if (activeTab === 'forecast') {
      csvContent = generateForecastCSV(exportDataPayload);
    } else {
      csvContent = generateDealsCSV(exportDataPayload);
    }

    downloadCSVFile(csvContent, filename);

    setIsExporting(false);
    setExportSuccess(true);
    setTimeout(() => {
      setExportSuccess(false);
    }, 2500);
  };

  // Refresh & Live-Reload Simulation State
  const [isReloading, setIsReloading] = useState<boolean>(false);
  const [refreshCount, setRefreshCount] = useState<number>(0);
  const [lastSyncTime, setLastSyncTime] = useState<string>('gerade eben');

  const handleRefresh = () => {
    if (isReloading) return;
    setIsReloading(true);
    setTimeout(() => {
      setRefreshCount((prev) => prev + 1);
      const now = new Date();
      const formatted = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSyncTime(`${formatted} Uhr`);
      setIsReloading(false);
    }, 750);
  };
  
  // Interactive Simulation Controls for Revenue Projection
  const [leadBoost, setLeadBoost] = useState<number>(15); // +15% leads
  const [convBoost, setConvBoost] = useState<number>(20); // +20% conversion
  const [dealSizeBoost, setDealSizeBoost] = useState<number>(10); // +10% deal size
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Year-over-Year (YoY) Visual Comparison Toggle
  const [showYoYComparison, setShowYoYComparison] = useState<boolean>(true);

  // Filter multiplier based on time range
  const timeMultiplier = useMemo(() => {
    switch (timeRange) {
      case '30d': return 0.38;
      case '90d': return 1.0;
      case '12m': return 3.6;
    }
  }, [timeRange]);

  // Scaled pipeline stages with YoY values
  const calculatedStages = useMemo(() => {
    const boostFactor = isSimulating ? 1 + (leadBoost / 100) : 1;
    const convFactor = isSimulating ? 1 + (convBoost / 100) : 1;
    const dealFactor = isSimulating ? 1 + (dealSizeBoost / 100) : 1;

    return basePipelineStages.map((stage, idx) => {
      const baseLeads = Math.round(stage.leads * timeMultiplier * boostFactor);
      // compound conversion gains downstream
      const stageConv = Math.min(96, Math.round(stage.conversionRate * (idx > 0 ? convFactor : 1) * 10) / 10);
      const stageValue = Math.round(stage.value * timeMultiplier * boostFactor * dealFactor);
      
      // Scaled YoY comparison baseline (historical data before AI optimization)
      const prevLeads = stage.previousYearLeads
        ? Math.round(stage.previousYearLeads * timeMultiplier)
        : Math.round(stage.leads * timeMultiplier * 0.62);
      const prevValue = stage.previousYearValue
        ? Math.round(stage.previousYearValue * timeMultiplier)
        : Math.round(stage.value * timeMultiplier * 0.58);
      const prevConv = stage.previousYearConv ?? Math.round(stage.conversionRate * 0.85 * 10) / 10;

      return {
        ...stage,
        leads: baseLeads,
        value: stageValue,
        conversionRate: stageConv,
        previousYearLeads: prevLeads,
        previousYearValue: prevValue,
        previousYearConv: prevConv
      };
    });
  }, [timeMultiplier, isSimulating, leadBoost, convBoost, dealSizeBoost]);

  // Dynamic Revenue Projections with YoY baseline
  const dynamicProjections = useMemo(() => {
    const boost = isSimulating ? (1 + (leadBoost * 0.007) + (convBoost * 0.012) + (dealSizeBoost * 0.008)) : 1;
    return baseMonthlyProjection.map((item) => {
      const projected = Math.round(item.projected * boost);
      const optimistic = Math.round(item.optimistic * boost * 1.08);
      const baseline = Math.round(item.baseline * (boost * 0.92));
      const previousYear = item.previousYear ?? Math.round(item.projected * 0.64);
      return {
        ...item,
        projected,
        optimistic,
        baseline,
        previousYear
      };
    });
  }, [isSimulating, leadBoost, convBoost, dealSizeBoost]);

  // Overall overall cumulative win rate
  const totalInbound = calculatedStages[0].leads;
  const totalWon = calculatedStages[calculatedStages.length - 1].leads;
  const cumulativeWinRate = totalInbound > 0 ? ((totalWon / totalInbound) * 100).toFixed(1) : '0.0';
  const totalPipelineValue = calculatedStages.reduce((acc, curr) => acc + curr.value, 0);
  const totalProjectedARR = useMemo(() => {
    const lastSixMonths = dynamicProjections.slice(6);
    const avgMonthly = lastSixMonths.reduce((a, b) => a + b.projected, 0) / 6;
    return avgMonthly * 12;
  }, [dynamicProjections]);

  // Dynamic Year-over-Year (YoY) Totals for Revenue Projections
  const totalProjectedAnnual = useMemo(() => {
    return dynamicProjections.reduce((acc, curr) => acc + (curr.actual !== null ? curr.actual : curr.projected), 0);
  }, [dynamicProjections]);

  const totalPreviousYearAnnual = useMemo(() => {
    return dynamicProjections.reduce((acc, curr) => acc + (curr.previousYear ?? 0), 0);
  }, [dynamicProjections]);

  const yoyAnnualGrowthPercent = useMemo(() => {
    if (!totalPreviousYearAnnual) return '0.0';
    return (((totalProjectedAnnual - totalPreviousYearAnnual) / totalPreviousYearAnnual) * 100).toFixed(1);
  }, [totalProjectedAnnual, totalPreviousYearAnnual]);

  // Export Data Payload for CSV & PDF generation
  const exportDataPayload: ExportReportData = useMemo(() => ({
    timeRange,
    activeTab,
    kpis: {
      winRate: cumulativeWinRate,
      totalPipelineValue,
      totalProjectedARR,
      salesVelocity: '8.4 Tage',
      totalInboundLeads: totalInbound,
      totalWonDeals: totalWon
    },
    stages: calculatedStages,
    projections: dynamicProjections,
    deals: sampleDeals,
    generatedAt: `${new Date().toLocaleDateString('de-DE')} (${lastSyncTime})`
  }), [timeRange, activeTab, cumulativeWinRate, totalPipelineValue, totalProjectedARR, totalInbound, totalWon, calculatedStages, dynamicProjections, lastSyncTime]);

  return (
    <section id="dashboard" className="py-24 bg-white border-b border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8 border-b border-[#1A1A1A]/10 pb-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E56014]/10 text-[#E56014] text-[10px] uppercase font-bold tracking-widest rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#E56014] animate-pulse"></span>
                Echtzeit CRM Dashboard
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#23BAA4]"></span>
                Live Analytics & Forecasting
              </span>
              <span className="text-[10px] text-[#1A1A1A]/40 font-mono hidden sm:inline">
                • Sync: {lastSyncTime}
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[0.95] font-black uppercase tracking-tighter">
              Pipeline Conversion &<br />
              <span className="font-serif italic font-normal text-[#23BAA4]">Umsatz-Prognosen.</span>
            </h2>
          </div>

          {/* Time, View Switcher & Refresh Button */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Refresh Button */}
            <button
              id="btn-refresh-dashboard"
              onClick={handleRefresh}
              disabled={isReloading}
              title="Metriken und Pipeline-Daten neu laden"
              aria-label="Metriken und Pipeline-Daten neu laden"
              className={`flex items-center gap-2 px-3.5 py-2.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm group disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              <RefreshCw
                className={`w-4 h-4 text-[#E56014] group-hover:text-[#E56014] transition-transform ${
                  isReloading ? 'animate-spin text-[#E56014]' : 'group-hover:rotate-180 duration-500'
                }`}
              />
              <span className="text-[11px] font-bold tracking-widest">
                {isReloading ? 'Lädt Daten...' : 'Refresh'}
              </span>
            </button>

            {/* Export Data Button (CSV & PDF Options) */}
            <div className="flex items-center">
              <button
                id="btn-export-data"
                onClick={() => setIsExportModalOpen(true)}
                title="Dashboard-Metriken als CSV oder PDF exportieren"
                aria-label="Dashboard-Metriken als CSV oder PDF exportieren"
                className="flex items-center gap-2 px-3.5 py-2.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#E56014] group-hover:text-[#E56014] group-hover:translate-y-0.5 transition-all" />
                <span className="text-[11px] font-bold tracking-widest uppercase">Export Data</span>
                <span className="text-[9px] font-mono font-bold bg-[#E56014]/10 text-[#E56014] group-hover:bg-[#E56014] group-hover:text-white px-1.5 py-0.5 rounded transition-colors">
                  CSV / PDF
                </span>
              </button>
            </div>

            {/* Visual YoY Comparison Toggle Button */}
            <button
              id="btn-toggle-yoy-comparison"
              onClick={() => setShowYoYComparison(!showYoYComparison)}
              title={showYoYComparison ? "Vorjahres-Vergleichslinien ausblenden" : "Vorjahres-Vergleichslinien (YoY) auf Diagrammen einblenden"}
              aria-label="Vorjahres-Vergleich ein- oder ausschalten"
              className={`flex items-center gap-2 px-3.5 py-2.5 border text-xs font-bold uppercase tracking-wider transition-all shadow-sm group cursor-pointer ${
                showYoYComparison
                  ? 'bg-[#3B82F6]/10 border-[#3B82F6]/40 text-[#1D4ED8]'
                  : 'bg-[#F9F8F6] border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              <GitCompare className={`w-4 h-4 transition-colors ${showYoYComparison ? 'text-[#2563EB]' : 'text-[#1A1A1A]/60 group-hover:text-white'}`} />
              <span className="text-[11px] font-bold tracking-widest uppercase">
                {showYoYComparison ? 'YoY: Aktiv' : 'YoY Vergleich'}
              </span>
              <span
                className={`w-2 h-2 rounded-full transition-all ${
                  showYoYComparison ? 'bg-[#2563EB] shadow-[0_0_8px_#3B82F6]' : 'bg-[#1A1A1A]/20 group-hover:bg-white/40'
                }`}
              />
            </button>

            {/* Time interval filter */}
            <div className="flex items-center bg-[#F9F8F6] border border-[#1A1A1A]/10 p-1">
              <button
                id="btn-range-30d"
                onClick={() => setTimeRange('30d')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  timeRange === '30d' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                30 Tage
              </button>
              <button
                id="btn-range-90d"
                onClick={() => setTimeRange('90d')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  timeRange === '90d' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Quartal (Q3)
              </button>
              <button
                id="btn-range-12m"
                onClick={() => setTimeRange('12m')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  timeRange === '12m' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                12 Monate
              </button>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center bg-[#F9F8F6] border border-[#1A1A1A]/10 p-1">
              <button
                id="btn-tab-funnel"
                onClick={() => setActiveTab('funnel')}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === 'funnel' ? 'bg-[#E56014] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Pipeline Funnel
              </button>
              <button
                id="btn-tab-forecast"
                onClick={() => setActiveTab('forecast')}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === 'forecast' ? 'bg-[#E56014] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Revenue Forecast
              </button>
              <button
                id="btn-tab-deals"
                onClick={() => setActiveTab('deals')}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeTab === 'deals' ? 'bg-[#E56014] text-white shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Live Deals
              </button>
            </div>
          </div>
        </div>

        {/* Loading progress bar simulation */}
        <AnimatePresence>
          {isReloading && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mb-6 -mt-6"
            >
              <div className="w-full bg-[#1A1A1A]/5 h-1 relative overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                  className="w-1/2 bg-gradient-to-r from-[#E56014] to-[#23BAA4] h-full"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]/60 mt-1.5 px-1">
                <span className="flex items-center gap-1.5 text-[#E56014] font-bold">
                  <RefreshCw className="w-3 h-3 animate-spin" /> Synchronisiere CRM-Pipelines...
                </span>
                <span>API Latenz: 42ms</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Highlight KPI Bar with Percentage Change Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {[
            {
              title: 'End-to-End Win Rate',
              icon: Target,
              iconColor: 'text-[#23BAA4]',
              mainValue: `${cumulativeWinRate}%`,
              changePercent: timeRange === '12m' ? '+14.2%' : timeRange === '30d' ? '+3.4%' : '+5.2%',
              comparisonLabel: timeRange === '12m' ? 'vs. Vorjahr' : 'vs. Vormonat',
              isPositive: true,
              subtext: 'Branchenschnitt liegt bei 18%'
            },
            {
              title: 'Aktive Pipeline',
              icon: DollarSign,
              iconColor: 'text-[#E56014]',
              mainValue: `€${(totalPipelineValue / 1000).toLocaleString('de-DE', { maximumFractionDigits: 0 })}k`,
              changePercent: timeRange === '12m' ? '+84.0%' : timeRange === '30d' ? '+19.4%' : '+28.4%',
              comparisonLabel: timeRange === '12m' ? 'vs. Vorjahr' : 'vs. Vormonat',
              isPositive: true,
              subtext: 'Gewichteter Pipeline-Gesamtwert'
            },
            {
              title: 'Prognostizierter ARR',
              icon: TrendingUp,
              iconColor: 'text-[#23BAA4]',
              mainValue: `€${(totalProjectedARR / 1000000).toFixed(2)}M`,
              changePercent: timeRange === '12m' ? '+64.5%' : timeRange === '30d' ? '+12.6%' : '+18.7%',
              comparisonLabel: timeRange === '12m' ? 'vs. Vorjahr' : 'vs. Vormonat',
              isPositive: true,
              subtext: 'Jahres-Umsatzlaufzeit (Run-Rate)'
            },
            {
              title: 'Vertriebs-Geschwindigkeit',
              icon: Zap,
              iconColor: 'text-[#E56014]',
              mainValue: '14.5 T.',
              changePercent: '-42.0%',
              comparisonLabel: 'Zykluszeit vs. Vormonat',
              isPositive: true, // Reduced cycle time is positive growth trend
              subtext: 'Lead bis Abschluss (Vorher: 25 T.)'
            }
          ].map((kpi, idx) => (
            <motion.div
              key={`${kpi.title}-${refreshCount}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="p-6 bg-[#F9F8F6] border border-[#1A1A1A]/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#1A1A1A]/30 transition-all"
            >
              <div className="flex items-center justify-between text-[#1A1A1A]/50 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-widest">{kpi.title}</span>
                <kpi.icon className={`w-4 h-4 ${kpi.iconColor}`} />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A] flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span>{kpi.mainValue}</span>
                  {/* Percentage Change Indicator Pill */}
                  <span
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[11px] font-bold font-mono tracking-tight ${
                      kpi.isPositive
                        ? 'bg-[#23BAA4]/15 text-[#1a8575]'
                        : 'bg-red-500/10 text-red-600'
                    }`}
                  >
                    {kpi.isPositive ? (
                      <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 stroke-[2.5]" />
                    )}
                    {kpi.changePercent}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1 text-[11px] text-[#1A1A1A]/60 mt-1.5">
                  <span className="truncate">{kpi.subtext}</span>
                  <span className="text-[10px] font-semibold text-[#1A1A1A]/40 whitespace-nowrap hidden sm:inline">
                    {kpi.comparisonLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic View Tab 1: Pipeline Funnel Breakdown */}
        {activeTab === 'funnel' && (
          <motion.div
            key={`tab-funnel-${timeRange}-${refreshCount}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Funnel Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-8 bg-white border border-[#1A1A1A]/10 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                    Stufen-Conversion & Lead-Volumen
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1">
                    Klicken Sie auf einen Balken oder Datenpunkt, um den detaillierten Lead-Quellen Breakdown zu öffnen.
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {showYoYComparison && (
                    <div className="text-[11px] font-bold text-[#1D4ED8] bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                      <span>Vorjahr vs. Aktuell</span>
                    </div>
                  )}
                  <div
                    onClick={() => handleOpenStageSources(selectedStage)}
                    className="text-[11px] font-bold text-[#E56014] bg-[#E56014]/10 hover:bg-[#E56014]/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer transition-colors"
                    title="Klicken für Lead-Quellen Breakdown"
                  >
                    <MousePointerClick className="w-3.5 h-3.5" />
                    <span>Quellen-Breakdown öffnen</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#23BAA4] bg-[#23BAA4]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Routing aktiv
                  </div>
                </div>
              </div>

              {/* Recharts Funnel Representation with Entrance Animations */}
              <div key={`funnel-wrapper-${timeRange}-${leadBoost}-${convBoost}-${refreshCount}-${showYoYComparison}`} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={calculatedStages}
                    margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                    onClick={(data: unknown) => {
                      const chartData = data as { activePayload?: { payload: StageData }[] } | null;
                      if (chartData?.activePayload && chartData.activePayload.length > 0) {
                        handleOpenStageSources(chartData.activePayload[0].payload);
                      }
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1A1A1A" strokeOpacity={0.08} />
                    <XAxis
                      dataKey="shortName"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1A1A1A', fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1A1A1A', fontSize: 11, opacity: 0.6 }}
                      tickFormatter={(val) => `${val}`}
                    />
                    <Tooltip
                      cursor={{ fill: '#1A1A1A', opacity: 0.04 }}
                      content={<CustomFunnelTooltip />}
                    />
                    {showYoYComparison && (
                      <Bar
                        dataKey="previousYearLeads"
                        name="Vorjahres-Vergleich (YoY)"
                        fill="#93C5FD"
                        radius={[3, 3, 0, 0]}
                        opacity={0.7}
                        isAnimationActive={true}
                        animationDuration={1100}
                        animationEasing="ease-out"
                        animationBegin={100}
                      />
                    )}
                    <Bar
                      dataKey="leads"
                      name="Aktuelle Periode"
                      radius={[4, 4, 0, 0]}
                      cursor="pointer"
                      onClick={(data: unknown) => {
                        const item = (data as { payload?: StageData })?.payload;
                        if (item) handleOpenStageSources(item);
                      }}
                      isAnimationActive={true}
                      animationDuration={1300}
                      animationEasing="ease-out"
                      animationBegin={200}
                    >
                      {calculatedStages.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={selectedStage.id === entry.id ? '#E56014' : entry.color}
                          opacity={selectedStage.id === entry.id ? 1 : 0.85}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Step Transition Pills with percentage growth trends */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6 pt-6 border-t border-[#1A1A1A]/10">
                {calculatedStages.map((stg) => (
                  <button
                    key={stg.id}
                    onClick={() => setSelectedStage(stg)}
                    className={`p-3 text-left border transition-all ${
                      selectedStage.id === stg.id
                        ? 'border-[#E56014] bg-[#E56014]/5 shadow-sm'
                        : 'border-[#1A1A1A]/10 bg-[#F9F8F6] hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-bold text-[#1A1A1A]/60 tracking-wider truncate">
                      {stg.shortName}
                    </div>
                    <div className="text-lg font-black text-[#1A1A1A] mt-0.5">
                      {stg.leads} <span className="text-[11px] font-normal text-[#1A1A1A]/50">Leads</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#23BAA4] mt-1 flex items-center justify-between gap-1">
                      <span>Conv: {stg.conversionRate}%</span>
                      <span className="inline-flex items-center text-[9px] font-mono text-[#1a8575] bg-[#23BAA4]/15 px-1 py-0.5 rounded font-bold">
                        <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +{(stg.conversionRate * 0.12).toFixed(1)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Stage Inspector Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#23BAA4]">
                      Phasen-Inspektor
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 font-mono text-white/80">
                      {selectedStage.shortName}
                    </span>
                  </div>
                  <h4 className="text-2xl font-serif italic text-white mb-2">
                    {selectedStage.stage}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                    In dieser Phase sorgt LeadPilot für automatisierte Erinnerungen und sofortiges Wiedervorlegen, sobald ein Interessent inaktiv wird.
                  </p>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Aktive Interessenten:</span>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-white font-mono text-sm">{selectedStage.leads} Leads</strong>
                        <span className="inline-flex items-center text-[10px] font-mono font-bold text-[#23BAA4] bg-white/10 px-1.5 py-0.5 rounded">
                          <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +5.4%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Gesamtwert in Phase:</span>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-[#E56014] font-mono text-sm">€{selectedStage.value.toLocaleString()}</strong>
                        <span className="inline-flex items-center text-[10px] font-mono font-bold text-[#23BAA4] bg-white/10 px-1.5 py-0.5 rounded">
                          <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +8.1%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Durchschnittliche Verweildauer:</span>
                      <strong className="text-white font-mono text-sm">{selectedStage.avgDays} Tage</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/60">Gefahr von Lead-Dropoff:</span>
                      <strong className="text-emerald-400 font-mono text-sm">Minimal ({selectedStage.dropOffRate}% durch Auto-Follow-Up)</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/50">
                      Haupteingangsquellen für diese Stufe
                    </span>
                    <button
                      onClick={() => handleOpenStageSources(selectedStage)}
                      className="text-[10px] text-[#E56014] hover:text-white font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Alle ansehen</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {selectedStage.topChannels.map((chn, i) => (
                      <div key={i} className="flex justify-between text-xs items-center bg-white/5 p-2 rounded">
                        <span className="text-white/80">{chn.channel}</span>
                        <span className="font-bold text-[#23BAA4]">{chn.share}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenStageSources(selectedStage)}
                    className="w-full mt-4 py-2.5 px-4 bg-[#E56014] hover:bg-[#c94f0d] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer group"
                  >
                    <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>Quellen für {selectedStage.shortName} aufschlüsseln</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Dynamic View Tab 2: Monthly Revenue Projections with Interactive Scenario Simulator */}
        {activeTab === 'forecast' && (
          <motion.div
            key={`tab-forecast-${timeRange}-${refreshCount}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Forecast Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-8 bg-white border border-[#1A1A1A]/10 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                    Monatliche Umsatzprognose & ARR Trajektorie
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1">
                    Vergleich zwischen realisiertem Ist-Umsatz, Modellprognose und Zielen (Klicken Sie auf einen Monat für Lead-Quellen).
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    id="btn-forecast-yoy-toggle"
                    onClick={() => setShowYoYComparison(!showYoYComparison)}
                    title={showYoYComparison ? "Vorjahres-Vergleichskurve ausblenden" : "Vorjahres-Vergleichskurve (2025 YoY) im Diagramm einblenden"}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border transition-all cursor-pointer ${
                      showYoYComparison
                        ? 'text-[#1D4ED8] bg-[#3B82F6]/10 border-[#3B82F6]/30 hover:bg-[#3B82F6]/20'
                        : 'text-[#1A1A1A]/60 bg-[#F9F8F6] border-[#1A1A1A]/10 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                    }`}
                  >
                    <GitCompare className={`w-3.5 h-3.5 ${showYoYComparison ? 'text-[#2563EB]' : 'text-[#1A1A1A]/50'}`} />
                    <span>{showYoYComparison ? 'YoY: Aktiv (2025)' : '+ YoY Vergleich'}</span>
                  </button>
                  <div
                    onClick={() => handleOpenMonthSources(dynamicProjections[5] || dynamicProjections[0])}
                    className="text-[11px] font-bold text-[#E56014] bg-[#E56014]/10 hover:bg-[#E56014]/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer transition-colors"
                    title="Klicken für Lead-Quellen Breakdown"
                  >
                    <MousePointerClick className="w-3.5 h-3.5" />
                    <span>Monats-Quellen öffnen</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#1A1A1A] flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-[#1A1A1A]"></span> Ist-Umsatz
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-[#E56014]"></span> Prognose
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-[#23BAA4]"></span> Optimistisch
                    </div>
                    {showYoYComparison && (
                      <div className="flex items-center gap-1.5 text-[#2563EB]">
                        <span className="w-2.5 h-2.5 border-2 border-dashed border-[#3B82F6] rounded-xs inline-block"></span> Vorjahr (2025)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Recharts Composed Area & Line Chart with Entrance Animations */}
              <div key={`forecast-wrapper-${timeRange}-${leadBoost}-${convBoost}-${dealSizeBoost}-${refreshCount}-${showYoYComparison}`} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={dynamicProjections}
                    margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
                    onClick={(data: unknown) => {
                      const chartData = data as { activePayload?: { payload: any }[] } | null;
                      if (chartData?.activePayload && chartData.activePayload.length > 0) {
                        handleOpenMonthSources(chartData.activePayload[0].payload);
                      }
                    }}
                  >
                    <defs>
                      <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E56014" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#E56014" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#23BAA4" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#23BAA4" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorPreviousYear" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1A1A1A" strokeOpacity={0.08} />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1A1A1A', fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#1A1A1A', fontSize: 11, opacity: 0.6 }}
                      tickFormatter={(val) => `€${val / 1000}k`}
                    />
                    <Tooltip
                      content={<CustomForecastTooltip />}
                    />
                    {/* Previous Year Comparison Line and Area */}
                    {showYoYComparison && (
                      <Area
                        type="monotone"
                        dataKey="previousYear"
                        name="Vorjahr (YoY)"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        strokeDasharray="4 3"
                        fillOpacity={1}
                        fill="url(#colorPreviousYear)"
                        cursor="pointer"
                        isAnimationActive={true}
                        animationDuration={1300}
                        animationEasing="ease-out"
                        animationBegin={100}
                      />
                    )}
                    <Area
                      type="monotone"
                      dataKey="optimistic"
                      name="Optimistisches Szenario"
                      stroke="#23BAA4"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#colorOptimistic)"
                      cursor="pointer"
                      isAnimationActive={true}
                      animationDuration={1500}
                      animationEasing="ease-out"
                      animationBegin={150}
                    />
                    <Area
                      type="monotone"
                      dataKey="projected"
                      name="Erwartete Prognose"
                      stroke="#E56014"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorProjected)"
                      cursor="pointer"
                      isAnimationActive={true}
                      animationDuration={1800}
                      animationEasing="ease-out"
                      animationBegin={250}
                    />
                    {showYoYComparison && (
                      <Line
                        type="monotone"
                        dataKey="previousYear"
                        name="Vorjahr (2025)"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        strokeDasharray="5 4"
                        dot={{ fill: '#3B82F6', r: 3.5, strokeWidth: 1.5, stroke: '#fff', cursor: 'pointer' }}
                        activeDot={{ r: 6, fill: '#1D4ED8', stroke: '#fff', strokeWidth: 2 }}
                        isAnimationActive={true}
                        animationDuration={1400}
                        animationEasing="ease-out"
                        animationBegin={200}
                      />
                    )}
                    <Line
                      type="monotone"
                      dataKey="actual"
                      name="Realisierter Ist-Umsatz"
                      stroke="#1A1A1A"
                      strokeWidth={3}
                      dot={{ fill: '#1A1A1A', r: 5, strokeWidth: 2, stroke: '#fff', cursor: 'pointer' }}
                      activeDot={{ r: 8, fill: '#E56014', stroke: '#fff', strokeWidth: 2, cursor: 'pointer' }}
                      cursor="pointer"
                      isAnimationActive={true}
                      animationDuration={2000}
                      animationEasing="ease-out"
                      animationBegin={400}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      name="Quartals-Zielvorgabe"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={1600}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Forecast Insight Summary with Growth Trend Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#1A1A1A]/10 text-xs">
                <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/5">
                  <span className="text-[#1A1A1A]/50 uppercase tracking-wider font-bold block mb-1">
                    Zielerreichung (Q3/Q4)
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-black text-[#23BAA4]">+124.6%</span>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold font-mono text-[#1a8575] bg-[#23BAA4]/15 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +8.4% vs. Plan
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/60 mt-1">Über Plan durch konsequentes Follow-Up</p>
                </div>
                <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/5">
                  <span className="text-[#1A1A1A]/50 uppercase tracking-wider font-bold block mb-1">
                    Monatlicher Zuwachs
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-black text-[#E56014]">+€18.400 / Mo</span>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold font-mono text-[#1a8575] bg-[#23BAA4]/15 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +14.5% vs. Vormonat
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/60 mt-1">Durchschnittliches Wachstumstempo</p>
                </div>
                <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/5">
                  <span className="text-[#1A1A1A]/50 uppercase tracking-wider font-bold block mb-1">
                    Geschätzter Jahresabschluss
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-black text-[#1A1A1A]">
                      €{(totalProjectedAnnual / 1000000).toFixed(2)} Mio.
                    </span>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold font-mono text-[#1a8575] bg-[#23BAA4]/15 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" /> +{yoyAnnualGrowthPercent}% vs. Vorjahr
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/60 mt-1">
                    Vorjahr (2025): €{(totalPreviousYearAnnual / 1000000).toFixed(2)} Mio.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive Simulation Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#E56014]" />
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]">
                      Szenarien-Simulator
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      setLeadBoost(15);
                      setConvBoost(20);
                      setDealSizeBoost(10);
                    }}
                    className="text-[10px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 hover:text-[#E56014] flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                </div>

                <p className="text-xs text-[#1A1A1A]/70 mb-6 leading-relaxed">
                  Passen Sie die Hebel an, um sofort die Auswirkungen von LeadPilot-Optimierungen auf Ihren Umsatz zu simulieren:
                </p>

                {/* Slider 1: Lead Volume */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-[#1A1A1A]">Lead-Volumen Steigerung:</span>
                    <span className="text-[#E56014]">+{leadBoost}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={leadBoost}
                    onChange={(e) => setLeadBoost(Number(e.target.value))}
                    className="w-full accent-[#E56014] cursor-pointer h-1.5 bg-[#1A1A1A]/10 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-[#1A1A1A]/40 mt-1">
                    <span>0%</span>
                    <span>+25%</span>
                    <span>+50%</span>
                  </div>
                </div>

                {/* Slider 2: Conversion Boost */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-[#1A1A1A]">Conversion-Rate Optimierung:</span>
                    <span className="text-[#23BAA4]">+{convBoost}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={convBoost}
                    onChange={(e) => setConvBoost(Number(e.target.value))}
                    className="w-full accent-[#23BAA4] cursor-pointer h-1.5 bg-[#1A1A1A]/10 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-[#1A1A1A]/40 mt-1">
                    <span>0% (Status Quo)</span>
                    <span>+20% (LeadPilot Ø)</span>
                    <span>+40%</span>
                  </div>
                </div>

                {/* Slider 3: Deal Size */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-[#1A1A1A]">Deal-Größe (Upselling):</span>
                    <span className="text-[#1A1A1A]">+{dealSizeBoost}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={dealSizeBoost}
                    onChange={(e) => setDealSizeBoost(Number(e.target.value))}
                    className="w-full accent-[#1A1A1A] cursor-pointer h-1.5 bg-[#1A1A1A]/10 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-[#1A1A1A]/40 mt-1">
                    <span>0%</span>
                    <span>+15%</span>
                    <span>+30%</span>
                  </div>
                </div>
              </div>

              {/* Simulation Result Card */}
              <div className="p-5 bg-[#1A1A1A] text-white">
                <div className="flex items-center gap-2 text-[#23BAA4] text-[10px] uppercase font-bold tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Kalkulierter Mehrumsatz
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
                  +€{Math.round(((totalProjectedARR - 1100000) / 1000)).toLocaleString('de-DE')}k / Jahr
                </div>
                <p className="text-[11px] text-white/60 leading-normal">
                  Zusätzlicher Ertrag durch strukturierte Wiedervorlage und 0% Lead-Verlust.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Dynamic View Tab 3: Real-Time Active Deals */}
        {activeTab === 'deals' && (
          <motion.div
            key={`tab-deals-${refreshCount}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#1A1A1A]/10 overflow-hidden"
          >
            <div className="p-6 sm:p-8 border-b border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                  Echtzeit Lead-Feed & Automatische Aufgaben
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 mt-1">
                  Jeder Lead im System besitzt einen lückenlos zugewiesenen nächsten Schritt.
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-[#F9F8F6] border border-[#1A1A1A]/10 px-3 py-1.5">
                4 Deals mit Priorität 1
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#F9F8F6] border-b border-[#1A1A1A]/10 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50">
                    <th className="py-4 px-6">ID & Unternehmen</th>
                    <th className="py-4 px-6">Deal-Wert</th>
                    <th className="py-4 px-6">Phase</th>
                    <th className="py-4 px-6">Abschluss-Chance</th>
                    <th className="py-4 px-6">Nächster automatischer Schritt</th>
                    <th className="py-4 px-6">Zuständig</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10">
                  {sampleDeals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-[#F9F8F6] transition-colors">
                      <td className="py-5 px-6 font-bold text-[#1A1A1A]">
                        <span className="text-[10px] font-mono text-[#1A1A1A]/40 block">{deal.id}</span>
                        {deal.company}
                      </td>
                      <td className="py-5 px-6 font-black font-mono text-sm text-[#E56014]">
                        {deal.value}
                      </td>
                      <td className="py-5 px-6">
                        <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#1A1A1A]/5 text-[#1A1A1A]">
                          {deal.stage}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#23BAA4]">{deal.prob}</span>
                          <div className="w-16 h-1.5 bg-[#1A1A1A]/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#23BAA4]"
                              style={{ width: deal.prob }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#E56014] shrink-0"></span>
                          {deal.nextAction}
                        </div>
                      </td>
                      <td className="py-5 px-6 font-semibold text-[#1A1A1A]/70">
                        {deal.rep}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#1A1A1A]/60">
                <Info className="w-4 h-4 text-[#23BAA4]" />
                <span>LeadPilot generiert für überfällige Aktivitäten automatische Push-Nachrichten an Ihr Vertriebsteam.</span>
              </div>
              <a
                href="#preise"
                className="bg-[#1A1A1A] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-[#E56014] transition-colors"
              >
                Pipeline selbst testen
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Interactive Lead Sources Modal Overlay */}
      <LeadSourcesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />

      {/* Interactive CRM Metrics Export Modal (CSV & PDF) */}
      <ExportReportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        data={exportDataPayload}
      />
    </section>
  );
}
