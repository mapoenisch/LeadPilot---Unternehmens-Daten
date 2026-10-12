export interface MilestoneAnnotation {
  id: string;
  type: 'campaign' | 'launch' | 'target' | 'sla';
  chart: 'forecast' | 'funnel' | 'both';
  x?: string;
  y?: number;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  badgeBg: string;
  impact: string;
  dateLabel: string;
  details: string;
  metrics?: { label: string; value: string }[];
  channels?: string[];
  budget?: string;
}

export const chartMilestones: MilestoneAnnotation[] = [
  {
    id: 'm-q1-google',
    type: 'campaign',
    chart: 'forecast',
    x: 'Mär',
    title: 'Google Ads Blitz',
    subtitle: 'B2B Search & High-Intent Skalierung',
    category: 'Marketing Kampagne',
    color: '#E56014',
    badgeBg: '#E56014',
    impact: '+28% qualifizierte MQLs',
    dateLabel: 'März 2026',
    details: 'Verdopplung des B2B-Suchbudgets mit zielgerichteten Longtail-Keywords für Maschinenbau, MedTech & B2B-Tech.',
    metrics: [
      { label: 'Budget-Volumen', value: '€14.500 / Monat' },
      { label: 'CPA Reduktion', value: '-32%' },
      { label: 'Zusatz-Leads', value: '+142 MQLs' }
    ],
    channels: ['Google Search Ads', 'Performance Max B2B', 'Retargeting Display'],
    budget: '€14.500'
  },
  {
    id: 'm-q2-linkedin',
    type: 'campaign',
    chart: 'forecast',
    x: 'Mai',
    title: 'LinkedIn Omnichannel',
    subtitle: 'ABM Kampagne & Webinar Series',
    category: 'Marketing Kampagne',
    color: '#8B5CF6',
    badgeBg: '#8B5CF6',
    impact: '+45% Enterprise Anfragen',
    dateLabel: 'Mai 2026',
    details: 'Account-Based-Marketing auf LinkedIn mit 120 priorisierten Enterprise Target-Accounts und Co-Marketing Live-Webinaren.',
    metrics: [
      { label: 'Target Accounts', value: '120 Konzerne & Mittelstand' },
      { label: 'Webinar-Teilnehmer', value: '430 Entscheider' },
      { label: 'Pipeline Einfluss', value: '+€320k Pipeline' }
    ],
    channels: ['LinkedIn InMail', 'Sponsored Content', 'C-Level Webinare', 'Direct Mailings'],
    budget: '€22.000'
  },
  {
    id: 'm-ai-sdr-launch',
    type: 'launch',
    chart: 'forecast',
    x: 'Jun',
    title: 'AI SDR Go-Live',
    subtitle: 'Automatisierte Qualifizierung & Instant-Booking',
    category: 'Produkt-Launch & Automatisierung',
    color: '#23BAA4',
    badgeBg: '#23BAA4',
    impact: 'Speed-to-Lead < 4.2 Min.',
    dateLabel: 'Juni 2026',
    details: 'Vollständiger Rollout des LeadPilot KI-Routing-Agenten: 100% aller Inbounds werden in unter 5 Minuten automatisch validiert und mit Terminslots verknüpft.',
    metrics: [
      { label: 'Reaktionszeit', value: '4.2 Min. (vorher 4 Std.)' },
      { label: 'Show-Up Rate', value: '91.4%' },
      { label: 'SDR Kapazität', value: '3.4x mehr Demos' }
    ],
    channels: ['LeadPilot Voice Engine', 'Speed-Dial API', 'DocuSign + CRM Webhooks'],
    budget: 'Core Tech Rollout'
  },
  {
    id: 'm-100k-mrr',
    type: 'target',
    chart: 'forecast',
    y: 100000,
    title: '€100k MRR Milestone',
    subtitle: 'Strategische 6-stellige Monatsschwelle',
    category: 'Umsatzziel & Benchmark',
    color: '#2563EB',
    badgeBg: '#2563EB',
    impact: '€1.2 Mio. ARR Run-Rate',
    dateLabel: 'Meilenstein (Sommer 2026)',
    details: 'Strategischer Zielkorridor für nachhaltige Profitabilität und Series-A Wachstumsrate mit 128% Net Revenue Retention.',
    metrics: [
      { label: 'ARR Äquivalent', value: '€1.200.000' },
      { label: 'LTV/CAC Ratio', value: '4.8 : 1' },
      { label: 'Payback Period', value: '5.2 Monate' }
    ],
    channels: ['Kombiniertes Neugeschäft + Expansion Revenue'],
    budget: 'Corporate Goal'
  },
  {
    id: 'm-q4-roadshow',
    type: 'campaign',
    chart: 'forecast',
    x: 'Okt',
    title: 'Enterprise Summit',
    subtitle: 'DACH Roadshow & Partner-Days',
    category: 'Marketing Kampagne',
    color: '#E56014',
    badgeBg: '#E56014',
    impact: 'Q4 Pipeline-Booster (+€480k)',
    dateLabel: 'Oktober 2026',
    details: 'Exklusive Executive Roundtables in München, Frankfurt und Zürich für Vor-Ort Vertragsabschlüsse mit Großkunden.',
    metrics: [
      { label: 'Städte', value: 'München, Frankfurt, Zürich' },
      { label: 'VIP-Gäste', value: '75 C-Level Führungskräfte' },
      { label: 'Closing Rate', value: '42% Vor-Ort Vorabverträge' }
    ],
    channels: ['VIP Einladungen', 'Exklusive Dinner', 'Partner-Ecosystem'],
    budget: '€35.000'
  },
  {
    id: 'm-funnel-sla',
    type: 'sla',
    chart: 'funnel',
    x: 'Erstkontakt',
    title: 'SLA < 5min',
    subtitle: 'Speed-Call Automation',
    category: 'SLA & Prozess-Benchmark',
    color: '#23BAA4',
    badgeBg: '#23BAA4',
    impact: '76% Phase-2 Conversion',
    dateLabel: 'Phase 2 Benchmark',
    details: 'Garantierte Kontaktaufnahme innerhalb von 5 Minuten nach Formularabsendung sichert überdurchschnittliche 76% Erstkontakt-Conversion.',
    metrics: [
      { label: 'Reaktionszeit', value: '< 5 Minuten' },
      { label: 'Erreichbarkeit', value: '88.4%' },
      { label: 'Branchen-Benchmark', value: 'Nur 23% < 24h' }
    ],
    channels: ['LeadPilot Instant Speed-Dial', 'WhatsApp Business API'],
    budget: 'Automatisierung'
  },
  {
    id: 'm-funnel-demo-ai',
    type: 'launch',
    chart: 'funnel',
    x: 'Demo',
    title: 'AI Decision Maker Check',
    subtitle: 'Vorgeprüfte B2B Entscheidungsträger',
    category: 'Qualitäts-Benchmark',
    color: '#F59E0B',
    badgeBg: '#F59E0B',
    impact: '72% Demo-zu-Angebot',
    dateLabel: 'Phase 3 Benchmark',
    details: 'KI analysiert vorab Budget, Autorität und BANT-Kriterien. Nur hochqualifizierte Leads erhalten Live-Demos beim Senior Account Executive.',
    metrics: [
      { label: 'BANT Validierung', value: '94% Genauigkeit' },
      { label: 'Deal Size Schnitt', value: '€2.850 / Monat' },
      { label: 'No-Show Rate', value: '< 4%' }
    ],
    channels: ['LeadPilot Pre-Scoring', 'LinkedIn Enrichment API'],
    budget: 'KI-Qualifizierung'
  }
];
