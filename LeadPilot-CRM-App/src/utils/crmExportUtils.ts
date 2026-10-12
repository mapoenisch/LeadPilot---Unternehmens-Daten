import { StageData } from '../components/CRMDashboard';

export interface ExportReportData {
  timeRange: '30d' | '90d' | '12m';
  activeTab: 'funnel' | 'forecast' | 'deals';
  kpis: {
    winRate: string;
    totalPipelineValue: number;
    totalProjectedARR: number;
    salesVelocity: string;
    totalInboundLeads: number;
    totalWonDeals: number;
  };
  stages: StageData[];
  projections: Array<{
    month: string;
    actual: number | null;
    projected: number;
    target: number;
    optimistic: number;
    baseline: number;
  }>;
  deals: Array<{
    id: string;
    company: string;
    value: string;
    stage: string;
    prob: string;
    rep: string;
    nextAction: string;
    status: string;
  }>;
  generatedAt: string;
}

// Generate CSV for Funnel Stages
export const generateFunnelCSV = (data: ExportReportData): string => {
  const headers = [
    'Phase ID',
    'Phasen-Name',
    'Kurzbezeichnung',
    'Aktive Leads (Anzahl)',
    'Phasen-Volumen (EUR)',
    'Conversion-Rate (%)',
    'Durchschnittliche Verweildauer (Tage)',
    'Abwanderungsquote (%)',
    'Top Eingangskanäle'
  ];

  const rows = data.stages.map((stg) => [
    `"${stg.id}"`,
    `"${stg.stage.replace(/"/g, '""')}"`,
    `"${stg.shortName}"`,
    stg.leads,
    stg.value,
    `${stg.conversionRate}%`,
    stg.avgDays,
    `${stg.dropOffRate}%`,
    `"${stg.topChannels.map((c) => `${c.channel} (${c.share})`).join('; ')}"`
  ]);

  return [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
};

// Generate CSV for Revenue Projections
export const generateForecastCSV = (data: ExportReportData): string => {
  const headers = [
    'Monat',
    'Realisierter Ist-Umsatz (EUR)',
    'KI-Prognose (EUR)',
    'Quartalsziel / Target (EUR)',
    'Optimistisches Szenario (EUR)',
    'Basis-Trend ohne Optimierung (EUR)'
  ];

  const rows = data.projections.map((p) => [
    `"${p.month}"`,
    p.actual !== null ? p.actual : 'N/A',
    p.projected,
    p.target,
    p.optimistic,
    p.baseline
  ]);

  return [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
};

// Generate CSV for Deals
export const generateDealsCSV = (data: ExportReportData): string => {
  const headers = [
    'Deal-ID',
    'Unternehmen',
    'Deal-Volumen',
    'Aktuelle Phase',
    'Abschluss-Chance (%)',
    'Zuständiger Rep',
    'Nächster automatisierter Schritt',
    'Prioritäts-Status'
  ];

  const rows = data.deals.map((d) => [
    `"${d.id}"`,
    `"${d.company.replace(/"/g, '""')}"`,
    `"${d.value.replace(/"/g, '""')}"`,
    `"${d.stage.replace(/"/g, '""')}"`,
    `"${d.prob}"`,
    `"${d.rep}"`,
    `"${d.nextAction.replace(/"/g, '""')}"`,
    `"${d.status}"`
  ]);

  return [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
};

// Generate Full Master CRM Dataset CSV
export const generateMasterCSV = (data: ExportReportData): string => {
  const lines: string[] = [];

  // Header & Meta
  lines.push('=== LEADPILOT CRM EXECUTIVE METRICS EXPORT ===');
  lines.push(`Erstellt am:;${data.generatedAt}`);
  lines.push(`Betrachteter Zeitraum:;${data.timeRange.toUpperCase()}`);
  lines.push('');

  // Top KPIs
  lines.push('--- EXECUTIVE KEY PERFORMANCE INDICATORS ---');
  lines.push(`End-to-End Win Rate:;${data.kpis.winRate}%`);
  lines.push(`Gesamtes Pipeline-Volumen:;EUR ${data.kpis.totalPipelineValue.toLocaleString('de-DE')}`);
  lines.push(`Prognostizierter ARR (Jahresumsatz):;EUR ${Math.round(data.kpis.totalProjectedARR).toLocaleString('de-DE')}`);
  lines.push(`Durchschnittliche Zykluszeit:;${data.kpis.salesVelocity}`);
  lines.push(`Inbound Leads Total:;${data.kpis.totalInboundLeads}`);
  lines.push(`Gewonnene Neukunden:;${data.kpis.totalWonDeals}`);
  lines.push('');

  // Funnel Section
  lines.push('--- SALES FUNNEL & CONVERSION ANALYSE ---');
  lines.push(generateFunnelCSV(data));
  lines.push('');

  // Forecast Section
  lines.push('--- REVENUE PROGNOSE & MONATLICHE TRAJEKTORIE ---');
  lines.push(generateForecastCSV(data));
  lines.push('');

  // Deals Section
  lines.push('--- AKTIVE PIPELINE DEALS & SMART CADENCES ---');
  lines.push(generateDealsCSV(data));

  return lines.join('\r\n');
};

// Trigger direct browser CSV download with UTF-8 BOM for Excel compatibility
export const downloadCSVFile = (csvContent: string, filename: string) => {
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Trigger printable Executive Report for PDF export
export const printExecutiveReport = (data: ExportReportData) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  const rangeLabel =
    data.timeRange === '30d'
      ? 'Letzte 30 Tage'
      : data.timeRange === '90d'
      ? 'Aktuelles Quartal (Q3)'
      : 'Letzte 12 Monate';

  const html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>LeadPilot CRM Executive Report - ${data.generatedAt}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1A1A1A;
      background: #FFFFFF;
      padding: 40px;
      line-height: 1.5;
      font-size: 12px;
    }
    @page {
      size: A4;
      margin: 15mm;
    }
    .header {
      border-bottom: 2px solid #1A1A1A;
      padding-bottom: 20px;
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .brand {
      font-size: 24px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }
    .brand span {
      color: #E56014;
    }
    .meta {
      text-align: right;
      font-size: 11px;
      color: #666;
    }
    .meta strong {
      color: #1A1A1A;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      background: #F9F8F6;
      border: 1px solid #E56014;
      color: #E56014;
      font-weight: 700;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }
    h2 {
      font-size: 16px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 25px;
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #E5E5E5;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 25px;
    }
    .kpi-card {
      background: #F9F8F6;
      border: 1px solid #E5E5E5;
      padding: 12px;
    }
    .kpi-label {
      font-size: 9px;
      text-transform: uppercase;
      font-weight: 700;
      color: #777;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .kpi-value {
      font-size: 18px;
      font-weight: 900;
      font-family: 'JetBrains Mono', monospace;
      color: #1A1A1A;
    }
    .kpi-trend {
      font-size: 10px;
      color: #23BAA4;
      font-weight: 700;
      margin-top: 2px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
      font-size: 11px;
    }
    th {
      background: #F9F8F6;
      border-top: 1px solid #1A1A1A;
      border-bottom: 1px solid #1A1A1A;
      padding: 8px 10px;
      text-align: left;
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #555;
    }
    td {
      padding: 8px 10px;
      border-bottom: 1px solid #EAEAEA;
    }
    .text-right {
      text-align: right;
    }
    .mono {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #E5E5E5;
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #888;
    }
    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="badge">Vertriebs- & Umsatzbericht</div>
      <div class="brand">Lead<span>Pilot</span> CRM Analytics</div>
      <p style="color: #666; font-size: 12px; margin-top: 4px;">Automatisierte B2B Pipeline- & Prognoseauswertung</p>
    </div>
    <div class="meta">
      <div>Zeitraum: <strong>${rangeLabel}</strong></div>
      <div>Erstellt am: <strong>${data.generatedAt}</strong></div>
      <div>Status: <strong>Verifiziert (Echtzeit-Sync)</strong></div>
    </div>
  </div>

  <h2>1. Executive Key Performance Indicators</h2>
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-label">End-to-End Win Rate</div>
      <div class="kpi-value" style="color: #23BAA4;">${data.kpis.winRate}%</div>
      <div class="kpi-trend">+5.2% vs. Vormonat</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Aktive Pipeline</div>
      <div class="kpi-value" style="color: #E56014;">€${data.kpis.totalPipelineValue.toLocaleString('de-DE')}</div>
      <div class="kpi-trend">+28.4% Wachstum</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Prognostizierter ARR</div>
      <div class="kpi-value">€${Math.round(data.kpis.totalProjectedARR).toLocaleString('de-DE')}</div>
      <div class="kpi-trend">+18.7% Trajektorie</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Vertriebs-Zykluszeit</div>
      <div class="kpi-value">${data.kpis.salesVelocity}</div>
      <div class="kpi-trend" style="color: #23BAA4;">-42% durch KI-Speed</div>
    </div>
  </div>

  <h2>2. Pipeline Funnel & Stufen-Conversion</h2>
  <table>
    <thead>
      <tr>
        <th>Phase</th>
        <th class="text-right">Aktive Leads</th>
        <th class="text-right">Volumen (EUR)</th>
        <th class="text-right">Conversion-Rate</th>
        <th class="text-right">Ø Verweildauer</th>
        <th>Haupteingangsquelle</th>
      </tr>
    </thead>
    <tbody>
      ${data.stages
        .map(
          (stg) => `
        <tr>
          <td><strong>${stg.stage}</strong></td>
          <td class="text-right mono">${stg.leads.toLocaleString('de-DE')}</td>
          <td class="text-right mono" style="color: #E56014;">€${stg.value.toLocaleString('de-DE')}</td>
          <td class="text-right mono" style="color: #23BAA4;">${stg.conversionRate}%</td>
          <td class="text-right mono">${stg.avgDays} Tage</td>
          <td>${stg.topChannels[0]?.channel || 'Direkt'} (${stg.topChannels[0]?.share || '100%'})</td>
        </tr>
      `
        )
        .join('')}
    </tbody>
  </table>

  <h2>3. Umsatz-Prognose & Monatliche Trajektorie</h2>
  <table>
    <thead>
      <tr>
        <th>Monat</th>
        <th class="text-right">Realisierter Ist-Umsatz</th>
        <th class="text-right">KI-Prognose</th>
        <th class="text-right">Quartals-Ziel</th>
        <th class="text-right">Optimistischer Case</th>
      </tr>
    </thead>
    <tbody>
      ${data.projections
        .map(
          (p) => `
        <tr>
          <td><strong>${p.month} 2026</strong></td>
          <td class="text-right mono">${p.actual !== null ? `€${p.actual.toLocaleString('de-DE')}` : '<span style="color:#999;">-</span>'}</td>
          <td class="text-right mono" style="color: #E56014;">€${p.projected.toLocaleString('de-DE')}</td>
          <td class="text-right mono">€${p.target.toLocaleString('de-DE')}</td>
          <td class="text-right mono" style="color: #23BAA4;">€${p.optimistic.toLocaleString('de-DE')}</td>
        </tr>
      `
        )
        .join('')}
    </tbody>
  </table>

  <h2>4. Aktuelle Hot Deals & Cadence-Status</h2>
  <table>
    <thead>
      <tr>
        <th>Deal-ID</th>
        <th>Unternehmen</th>
        <th class="text-right">Volumen</th>
        <th>Aktuelle Phase</th>
        <th class="text-right">Chance</th>
        <th>Nächste geplante Aktion</th>
        <th>Zuständig</th>
      </tr>
    </thead>
    <tbody>
      ${data.deals
        .map(
          (d) => `
        <tr>
          <td class="mono" style="color:#777;">${d.id}</td>
          <td><strong>${d.company}</strong></td>
          <td class="text-right mono" style="color: #E56014;">${d.value}</td>
          <td>${d.stage}</td>
          <td class="text-right mono" style="color: #23BAA4;">${d.prob}</td>
          <td>${d.nextAction}</td>
          <td>${d.rep}</td>
        </tr>
      `
        )
        .join('')}
    </tbody>
  </table>

  <div class="footer">
    <div>Generiert durch <strong>LeadPilot B2B CRM Engine</strong> • Vertraulicher interner Bericht</div>
    <div>Seite 1 von 1</div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
};
