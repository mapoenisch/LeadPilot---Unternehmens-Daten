// Zentrale Datenzugriffsschicht. Heute: statische Module. Später: hier echte fetch()-Aufrufe
// gegen eine API einsetzen — die Rückgabeform (Promise mit denselben Feldern) bleibt gleich,
// der Rest des Dashboards muss dafür nicht angefasst werden.

import { NAV } from './nav-data.js';
import * as Exec from './exec-data.js';
import * as Unternehmen from './unternehmen-data.js';
import * as Produkt from './produkt-data.js';
import * as Markt from './markt-data.js';
import * as Kunden from './kunden-data.js';
import * as Geschaeftsmodell from './geschaeftsmodell-data.js';
import * as Vertrieb from './vertrieb-data.js';
import * as Finanzen from './finanzen-data.js';
import * as Organisation from './organisation-data.js';
import * as Strategie from './strategie-data.js';
import * as Recht from './recht-data.js';
import * as Projektkontext from './projektkontext-data.js';

// export const API_BASE = 'https://api.leadpilot.example.com';

export async function getNav() {
  // TODO live: return fetch(`${API_BASE}/nav`).then(r => r.json());
  return NAV;
}

export async function getExecOverview() {
  return {
    hero: Exec.HERO, kpis1: Exec.EXEC_KPIS_1, kpis2: Exec.EXEC_KPIS_2,
    chartArr: Exec.CHART_ARR, chartMrr: Exec.CHART_MRR, chartQuartal: Exec.CHART_QUARTAL, chartTier: Exec.CHART_TIER,
    noteExec: Exec.NOTE_EXEC, profileRows: Exec.PROFILE_ROWS, notePofil: Exec.NOTE_PROFIL,
    highlightsGood: Exec.HIGHLIGHTS_GOOD_ROWS, highlightsBad: Exec.HIGHLIGHTS_BAD_ROWS, noteHighlights: Exec.NOTE_HIGHLIGHTS,
    bridgesRows: Exec.BRIDGES_ROWS, sourcesRows: Exec.SOURCES_ROWS, noteDaten: Exec.NOTE_DATEN,
  };
}

export async function getUnternehmen() {
  return { idee: Unternehmen.IDEE, value: Unternehmen.VALUE, historie: Unternehmen.HISTORIE, standort: Unternehmen.STANDORT };
}
export async function getProdukt() {
  return { funktion: Produkt.FUNKTION, pricing: Produkt.PRICING, perf: Produkt.PERF, roadmap: Produkt.ROADMAP, integr: Produkt.INTEGR };
}
export async function getMarkt() {
  return { markt: Markt.MARKT, wettbewerb: Markt.WETTBEWERB, swot: Markt.SWOT };
}
export async function getKunden() {
  return { icp: Kunden.ICP, persona: Kunden.PERSONA, empathy: Kunden.EMPATHY, segmente: Kunden.SEGMENTE, top10: Kunden.TOP10, cs: Kunden.CS };
}
export async function getGeschaeftsmodell() {
  return { bmc: Geschaeftsmodell.BMC, logik: Geschaeftsmodell.LOGIK };
}
export async function getVertrieb() {
  return {
    funnel: Vertrieb.FUNNEL, sla: Vertrieb.SLA, kanaele: Vertrieb.KANAELE, mbudget: Vertrieb.MBUDGET,
    brand: Vertrieb.BRAND, content: Vertrieb.CONTENT, tools: Vertrieb.TOOLS, planung: Vertrieb.PLANUNG, kampagne: Vertrieb.KAMPAGNE,
  };
}
export async function getFinanzen() {
  return { guv: Finanzen.GUV, bilanz: Finanzen.BILANZ, unit: Finanzen.UNIT, budget: Finanzen.BUDGET };
}
export async function getOrganisation() {
  return { headcount: Organisation.HEADCOUNT, hr: Organisation.HR, team: Organisation.TEAM };
}
export async function getStrategie() {
  return { okr: Strategie.OKR, bsc: Strategie.BSC, massnahmen: Strategie.MASSNAHMEN, treiber: Strategie.TREIBER, risiko: Strategie.RISIKO };
}
export async function getRecht() {
  return { satzung: Recht.SATZUNG, gesellschafter: Recht.GESELLSCHAFTER, handelsregister: Recht.HANDELSREGISTER, gf: Recht.GF_VERTRAG, mietvertrag: Recht.MIETVERTRAG };
}
export async function getProjektkontext() {
  return { projekt: Projektkontext.PROJEKT, quellen: Projektkontext.QUELLEN };
}
