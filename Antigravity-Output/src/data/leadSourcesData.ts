import { StageData } from '../components/CRMDashboard';

export interface LeadSourceItem {
  id: string;
  sourceName: string;
  category: 'Inbound' | 'Paid Ads' | 'Outbound' | 'Events & Messen' | 'Partner & Referrals';
  channelIconType: 'search' | 'linkedin' | 'globe' | 'users' | 'mail' | 'calendar' | 'phone' | 'zap';
  leadsCount: number;
  revenueVolume: number;
  conversionRate: number;
  cac: number;
  avgDealSize: number;
  status: 'Top Performer' | 'Skalierend' | 'Stabil' | 'Optimierungsbedarf';
  sampleDealCompany: string;
  topSalesRep: string;
  trend: string;
  growthPositive: boolean;
}

export interface DataPointLeadSources {
  pointTitle: string;
  pointSubtitle: string;
  type: 'stage' | 'month';
  badge: string;
  badgeColor?: string;
  totalLeads: number;
  totalVolume: number;
  avgConversion: number;
  leadSources: LeadSourceItem[];
}

// Pre-configured lead sources for pipeline funnel stages
export const getLeadSourcesForStage = (stage: StageData, multiplier: number = 1): DataPointLeadSources => {
  const scaledLeads = stage.leads;
  const scaledValue = stage.value;

  const stageSourcesMap: Record<string, LeadSourceItem[]> = {
    inbound: [
      {
        id: 'src-inb-1',
        sourceName: 'Google Search Ads (High-Intent B2B "CRM Mittelstand")',
        category: 'Paid Ads',
        channelIconType: 'search',
        leadsCount: Math.round(scaledLeads * 0.32),
        revenueVolume: Math.round(scaledValue * 0.34),
        conversionRate: 84.5,
        cac: 145,
        avgDealSize: Math.round((scaledValue * 0.34) / Math.max(1, Math.round(scaledLeads * 0.32))),
        status: 'Top Performer',
        sampleDealCompany: 'Maschinenbau Weber GmbH',
        topSalesRep: 'Sarah M.',
        trend: '+28.4%',
        growthPositive: true
      },
      {
        id: 'src-inb-2',
        sourceName: 'LinkedIn Account-Based Ads (Geschäftsführer & Vertriebsleiter)',
        category: 'Paid Ads',
        channelIconType: 'linkedin',
        leadsCount: Math.round(scaledLeads * 0.28),
        revenueVolume: Math.round(scaledValue * 0.30),
        conversionRate: 78.2,
        cac: 210,
        avgDealSize: Math.round((scaledValue * 0.30) / Math.max(1, Math.round(scaledLeads * 0.28))),
        status: 'Skalierend',
        sampleDealCompany: 'Klingele Automotive AG',
        topSalesRep: 'Felix K.',
        trend: '+34.1%',
        growthPositive: true
      },
      {
        id: 'src-inb-3',
        sourceName: 'Organische Suche & Content Hub (Whitepaper & ROI-Rechner)',
        category: 'Inbound',
        channelIconType: 'globe',
        leadsCount: Math.round(scaledLeads * 0.18),
        revenueVolume: Math.round(scaledValue * 0.16),
        conversionRate: 72.0,
        cac: 45,
        avgDealSize: Math.round((scaledValue * 0.16) / Math.max(1, Math.round(scaledLeads * 0.18))),
        status: 'Stabil',
        sampleDealCompany: 'Bauer Logistik Systeme',
        topSalesRep: 'Elena R.',
        trend: '+12.6%',
        growthPositive: true
      },
      {
        id: 'src-inb-4',
        sourceName: 'Systemhaus & ERP-Partner Empfehlungen (DATEV/SAP Ökosystem)',
        category: 'Partner & Referrals',
        channelIconType: 'users',
        leadsCount: Math.round(scaledLeads * 0.14),
        revenueVolume: Math.round(scaledValue * 0.13),
        conversionRate: 91.0,
        cac: 85,
        avgDealSize: Math.round((scaledValue * 0.13) / Math.max(1, Math.round(scaledLeads * 0.14))),
        status: 'Top Performer',
        sampleDealCompany: 'MedTech Solutions Bayern',
        topSalesRep: 'Tobias W.',
        trend: '+45.0%',
        growthPositive: true
      },
      {
        id: 'src-inb-5',
        sourceName: 'Live-Webinar "KI-Sales Workflows im Mittelstand"',
        category: 'Events & Messen',
        channelIconType: 'calendar',
        leadsCount: Math.round(scaledLeads * 0.08),
        revenueVolume: Math.round(scaledValue * 0.07),
        conversionRate: 65.5,
        cac: 110,
        avgDealSize: Math.round((scaledValue * 0.07) / Math.max(1, Math.round(scaledLeads * 0.08))),
        status: 'Stabil',
        sampleDealCompany: 'Vanguard Sensoren KG',
        topSalesRep: 'Sarah M.',
        trend: '+8.3%',
        growthPositive: true
      }
    ],
    contacted: [
      {
        id: 'src-con-1',
        sourceName: 'Automatisierter KI-Speed-Call (< 90 Sek. Reaktionszeit)',
        category: 'Inbound',
        channelIconType: 'phone',
        leadsCount: Math.round(scaledLeads * 0.42),
        revenueVolume: Math.round(scaledValue * 0.44),
        conversionRate: 82.5,
        cac: 65,
        avgDealSize: Math.round((scaledValue * 0.44) / Math.max(1, Math.round(scaledLeads * 0.42))),
        status: 'Top Performer',
        sampleDealCompany: 'Hydraulik Pro Regensburg',
        topSalesRep: 'Felix K.',
        trend: '+42.0%',
        growthPositive: true
      },
      {
        id: 'src-con-2',
        sourceName: 'Personalisierte Smart E-Mail Sequenz (Decision-Maker Trigger)',
        category: 'Outbound',
        channelIconType: 'mail',
        leadsCount: Math.round(scaledLeads * 0.32),
        revenueVolume: Math.round(scaledValue * 0.30),
        conversionRate: 74.0,
        cac: 90,
        avgDealSize: Math.round((scaledValue * 0.30) / Math.max(1, Math.round(scaledLeads * 0.32))),
        status: 'Skalierend',
        sampleDealCompany: 'OptiLogistics AG',
        topSalesRep: 'Sarah M.',
        trend: '+19.5%',
        growthPositive: true
      },
      {
        id: 'src-con-3',
        sourceName: 'Senior SDR Direkt-Telefonie (Cold Calling Top-Accounts)',
        category: 'Outbound',
        channelIconType: 'phone',
        leadsCount: Math.round(scaledLeads * 0.16),
        revenueVolume: Math.round(scaledValue * 0.16),
        conversionRate: 68.0,
        cac: 180,
        avgDealSize: Math.round((scaledValue * 0.16) / Math.max(1, Math.round(scaledLeads * 0.16))),
        status: 'Stabil',
        sampleDealCompany: 'Nordic Clean Energy GmbH',
        topSalesRep: 'Tobias W.',
        trend: '+6.2%',
        growthPositive: true
      },
      {
        id: 'src-con-4',
        sourceName: 'LinkedIn 1:1 Executive Message Follow-Ups',
        category: 'Paid Ads',
        channelIconType: 'linkedin',
        leadsCount: Math.round(scaledLeads * 0.10),
        revenueVolume: Math.round(scaledValue * 0.10),
        conversionRate: 71.5,
        cac: 130,
        avgDealSize: Math.round((scaledValue * 0.10) / Math.max(1, Math.round(scaledLeads * 0.10))),
        status: 'Stabil',
        sampleDealCompany: 'Sensorik Süd GmbH',
        topSalesRep: 'Elena R.',
        trend: '+15.3%',
        growthPositive: true
      }
    ],
    demo: [
      {
        id: 'src-dem-1',
        sourceName: 'Interaktive Live-Demo (Produkt-Präsentation Zoom & Teams)',
        category: 'Inbound',
        channelIconType: 'zap',
        leadsCount: Math.round(scaledLeads * 0.62),
        revenueVolume: Math.round(scaledValue * 0.64),
        conversionRate: 76.5,
        cac: 120,
        avgDealSize: Math.round((scaledValue * 0.64) / Math.max(1, Math.round(scaledLeads * 0.62))),
        status: 'Top Performer',
        sampleDealCompany: 'Maschinenbau Weber GmbH',
        topSalesRep: 'Sarah M.',
        trend: '+26.8%',
        growthPositive: true
      },
      {
        id: 'src-dem-2',
        sourceName: 'Vor-Ort Vorstandspräsentation & Deep-Dive Workshop',
        category: 'Events & Messen',
        channelIconType: 'users',
        leadsCount: Math.round(scaledLeads * 0.23),
        revenueVolume: Math.round(scaledValue * 0.25),
        conversionRate: 85.0,
        cac: 350,
        avgDealSize: Math.round((scaledValue * 0.25) / Math.max(1, Math.round(scaledLeads * 0.23))),
        status: 'Top Performer',
        sampleDealCompany: 'Klingele Automotive AG',
        topSalesRep: 'Tobias W.',
        trend: '+18.4%',
        growthPositive: true
      },
      {
        id: 'src-dem-3',
        sourceName: 'Geführte Self-Service Sandbox & Test-Instanz',
        category: 'Inbound',
        channelIconType: 'globe',
        leadsCount: Math.round(scaledLeads * 0.15),
        revenueVolume: Math.round(scaledValue * 0.11),
        conversionRate: 61.0,
        cac: 75,
        avgDealSize: Math.round((scaledValue * 0.11) / Math.max(1, Math.round(scaledLeads * 0.15))),
        status: 'Skalierend',
        sampleDealCompany: 'TechVentures Dach',
        topSalesRep: 'Elena R.',
        trend: '+31.0%',
        growthPositive: true
      }
    ],
    proposal: [
      {
        id: 'src-prop-1',
        sourceName: 'Enterprise SaaS Lizenzpaket (Vollautomatisierte CRM Suite)',
        category: 'Inbound',
        channelIconType: 'zap',
        leadsCount: Math.round(scaledLeads * 0.55),
        revenueVolume: Math.round(scaledValue * 0.58),
        conversionRate: 79.4,
        cac: 190,
        avgDealSize: Math.round((scaledValue * 0.58) / Math.max(1, Math.round(scaledLeads * 0.55))),
        status: 'Top Performer',
        sampleDealCompany: 'OptiLogistics AG',
        topSalesRep: 'Sarah M.',
        trend: '+22.5%',
        growthPositive: true
      },
      {
        id: 'src-prop-2',
        sourceName: 'Custom AI API & ERP Integration Proposal',
        category: 'Partner & Referrals',
        channelIconType: 'users',
        leadsCount: Math.round(scaledLeads * 0.30),
        revenueVolume: Math.round(scaledValue * 0.30),
        conversionRate: 75.0,
        cac: 240,
        avgDealSize: Math.round((scaledValue * 0.30) / Math.max(1, Math.round(scaledLeads * 0.30))),
        status: 'Skalierend',
        sampleDealCompany: 'Bauer Logistik Systeme',
        topSalesRep: 'Felix K.',
        trend: '+14.2%',
        growthPositive: true
      },
      {
        id: 'src-prop-3',
        sourceName: 'Standard Professional Multi-User Lizenz',
        category: 'Inbound',
        channelIconType: 'globe',
        leadsCount: Math.round(scaledLeads * 0.15),
        revenueVolume: Math.round(scaledValue * 0.12),
        conversionRate: 74.0,
        cac: 110,
        avgDealSize: Math.round((scaledValue * 0.12) / Math.max(1, Math.round(scaledLeads * 0.15))),
        status: 'Stabil',
        sampleDealCompany: 'Alpen Pharma Logistics',
        topSalesRep: 'Elena R.',
        trend: '+5.7%',
        growthPositive: true
      }
    ],
    won: [
      {
        id: 'src-won-1',
        sourceName: 'Enterprise Jahresvertrag mit Vorauszahlung (12 Monate)',
        category: 'Inbound',
        channelIconType: 'zap',
        leadsCount: Math.round(scaledLeads * 0.60),
        revenueVolume: Math.round(scaledValue * 0.62),
        conversionRate: 94.0,
        cac: 160,
        avgDealSize: Math.round((scaledValue * 0.62) / Math.max(1, Math.round(scaledLeads * 0.60))),
        status: 'Top Performer',
        sampleDealCompany: 'Maschinenbau Weber GmbH',
        topSalesRep: 'Sarah M.',
        trend: '+38.0%',
        growthPositive: true
      },
      {
        id: 'src-won-2',
        sourceName: 'Mehrjährige Rahmenverträge (36 Monate Enterprise SLA)',
        category: 'Partner & Referrals',
        channelIconType: 'users',
        leadsCount: Math.round(scaledLeads * 0.25),
        revenueVolume: Math.round(scaledValue * 0.26),
        conversionRate: 98.0,
        cac: 280,
        avgDealSize: Math.round((scaledValue * 0.26) / Math.max(1, Math.round(scaledLeads * 0.25))),
        status: 'Top Performer',
        sampleDealCompany: 'Klingele Automotive AG',
        topSalesRep: 'Tobias W.',
        trend: '+45.2%',
        growthPositive: true
      },
      {
        id: 'src-won-3',
        sourceName: 'Monatliches Flex-Abonnement (Mittelstands-Booster)',
        category: 'Inbound',
        channelIconType: 'globe',
        leadsCount: Math.round(scaledLeads * 0.15),
        revenueVolume: Math.round(scaledValue * 0.12),
        conversionRate: 88.0,
        cac: 85,
        avgDealSize: Math.round((scaledValue * 0.12) / Math.max(1, Math.round(scaledLeads * 0.15))),
        status: 'Stabil',
        sampleDealCompany: 'Nordic Clean Energy GmbH',
        topSalesRep: 'Felix K.',
        trend: '+11.8%',
        growthPositive: true
      }
    ]
  };

  const sources = stageSourcesMap[stage.id] || stageSourcesMap.inbound;

  return {
    pointTitle: `Funnel-Phase: ${stage.stage}`,
    pointSubtitle: `${scaledLeads.toLocaleString('de-DE')} aktive Leads • €${scaledValue.toLocaleString('de-DE')} Pipeline-Volumen`,
    type: 'stage',
    badge: `${stage.conversionRate}% Conversion`,
    badgeColor: stage.color,
    totalLeads: scaledLeads,
    totalVolume: scaledValue,
    avgConversion: stage.conversionRate,
    leadSources: sources
  };
};

// Pre-configured lead sources for month forecast/actual points
export const getLeadSourcesForMonth = (monthData: {
  month: string;
  actual?: number | null;
  projected?: number;
  target?: number;
  optimistic?: number;
}): DataPointLeadSources => {
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

  const monthLabel = monthNamesFull[monthData.month] || monthData.month;
  const isActual = monthData.actual !== null && monthData.actual !== undefined;
  const effectiveVolume = isActual ? monthData.actual! : (monthData.projected ?? 90000);
  
  // Approximate number of closed deals / high-intent leads in this monthly cohort
  const avgMonthlyDeal = 3800;
  const totalCohortLeads = Math.max(12, Math.round(effectiveVolume / avgMonthlyDeal));

  const monthSources: LeadSourceItem[] = [
    {
      id: `m-src-${monthData.month}-1`,
      sourceName: 'LinkedIn Account-Based Marketing (Entscheider Industrie & IT)',
      category: 'Paid Ads',
      channelIconType: 'linkedin',
      leadsCount: Math.round(totalCohortLeads * 0.36),
      revenueVolume: Math.round(effectiveVolume * 0.38),
      conversionRate: 32.4,
      cac: 420,
      avgDealSize: Math.round((effectiveVolume * 0.38) / Math.max(1, Math.round(totalCohortLeads * 0.36))),
      status: 'Top Performer',
      sampleDealCompany: 'Maschinenbau Weber GmbH',
      topSalesRep: 'Sarah M.',
      trend: '+24.5%',
      growthPositive: true
    },
    {
      id: `m-src-${monthData.month}-2`,
      sourceName: 'Inbound Google Search & Organische Demo-Anfragen',
      category: 'Inbound',
      channelIconType: 'search',
      leadsCount: Math.round(totalCohortLeads * 0.30),
      revenueVolume: Math.round(effectiveVolume * 0.31),
      conversionRate: 28.0,
      cac: 260,
      avgDealSize: Math.round((effectiveVolume * 0.31) / Math.max(1, Math.round(totalCohortLeads * 0.30))),
      status: 'Top Performer',
      sampleDealCompany: 'OptiLogistics AG',
      topSalesRep: 'Felix K.',
      trend: '+18.2%',
      growthPositive: true
    },
    {
      id: `m-src-${monthData.month}-3`,
      sourceName: 'B2B Branchen-Events & Messe-Kampagnen (SPS & Hannover Messe)',
      category: 'Events & Messen',
      channelIconType: 'calendar',
      leadsCount: Math.round(totalCohortLeads * 0.18),
      revenueVolume: Math.round(effectiveVolume * 0.17),
      conversionRate: 35.0,
      cac: 510,
      avgDealSize: Math.round((effectiveVolume * 0.17) / Math.max(1, Math.round(totalCohortLeads * 0.18))),
      status: 'Skalierend',
      sampleDealCompany: 'Klingele Automotive AG',
      topSalesRep: 'Tobias W.',
      trend: '+31.0%',
      growthPositive: true
    },
    {
      id: `m-src-${monthData.month}-4`,
      sourceName: 'Partner & Systemhaus Netzwerk-Referrals',
      category: 'Partner & Referrals',
      channelIconType: 'users',
      leadsCount: Math.round(totalCohortLeads * 0.10),
      revenueVolume: Math.round(effectiveVolume * 0.09),
      conversionRate: 48.0,
      cac: 150,
      avgDealSize: Math.round((effectiveVolume * 0.09) / Math.max(1, Math.round(totalCohortLeads * 0.10))),
      status: 'Stabil',
      sampleDealCompany: 'MedTech Solutions Bayern',
      topSalesRep: 'Elena R.',
      trend: '+9.4%',
      growthPositive: true
    },
    {
      id: `m-src-${monthData.month}-5`,
      sourceName: 'KI Outbound Cold E-Mail & Phone Smart Cadences',
      category: 'Outbound',
      channelIconType: 'mail',
      leadsCount: Math.round(totalCohortLeads * 0.06),
      revenueVolume: Math.round(effectiveVolume * 0.05),
      conversionRate: 19.5,
      cac: 310,
      avgDealSize: Math.round((effectiveVolume * 0.05) / Math.max(1, Math.round(totalCohortLeads * 0.06))),
      status: 'Stabil',
      sampleDealCompany: 'Vanguard Sensoren KG',
      topSalesRep: 'Sarah M.',
      trend: '+12.0%',
      growthPositive: true
    }
  ];

  return {
    pointTitle: `Monats-Kohorte: ${monthLabel} 2026`,
    pointSubtitle: isActual 
      ? `€${effectiveVolume.toLocaleString('de-DE')} Realisierter Ist-Umsatz • ${totalCohortLeads} Deals/Kunden`
      : `€${effectiveVolume.toLocaleString('de-DE')} KI-Prognostizierter Umsatz • ${totalCohortLeads} prognostizierte Abschlüsse`,
    type: 'month',
    badge: isActual ? 'Ist-Ergebnis' : 'Prognose-Mix',
    badgeColor: isActual ? '#1A1A1A' : '#E56014',
    totalLeads: totalCohortLeads,
    totalVolume: effectiveVolume,
    avgConversion: 31.8,
    leadSources: monthSources
  };
};
