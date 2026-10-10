import { packages } from "@/data/packages";

export interface ROIInput {
  weeklyManualHours: number;
  hourlyCostTry: number;
  packageId: string;
}

export interface ROIResult {
  monthlySavedHours: number;
  monthlyFinancialSavingsTry: number;
  paybackPeriodWeeks: number;
}

/** Haftalık manuel işin kaçta kaçı otomasyona alınabilir (varsayılan %75). */
export const AUTOMATION_RATE = 0.75;

/** Ayda ortalama hafta sayısı (52/12). */
export const WEEKS_PER_MONTH = 4.33;

/**
 * Paketin temsilî kurulum bedeli (₺).
 * packages.ts aralıklarının orta noktası:
 * ai-asistan 25–45K → 35K, surec-otomasyonu 40–90K → 65K, ai-website 30–50K → 40K.
 */
const SETUP_COST_TRY: Record<string, number> = {
  "ai-asistan": 35000,
  "surec-otomasyonu": 65000,
  "ai-website": 40000,
};

export function getSetupCostTry(packageId: string): number {
  return SETUP_COST_TRY[packageId] ?? 35000;
}

export function getPackageIds(): string[] {
  return packages.map((p) => p.id);
}

export function calculateAutomationROI(input: ROIInput): ROIResult {
  const weeklyHours =
    Number.isFinite(input.weeklyManualHours) && input.weeklyManualHours > 0
      ? input.weeklyManualHours
      : 0;
  const hourlyCost =
    Number.isFinite(input.hourlyCostTry) && input.hourlyCostTry > 0
      ? input.hourlyCostTry
      : 0;

  if (weeklyHours === 0 || hourlyCost === 0) {
    return {
      monthlySavedHours: 0,
      monthlyFinancialSavingsTry: 0,
      paybackPeriodWeeks: 0,
    };
  }

  const weeklySavedHours = weeklyHours * AUTOMATION_RATE;
  const monthlySavedHours = weeklySavedHours * WEEKS_PER_MONTH;
  const monthlyFinancialSavingsTry = Math.round(monthlySavedHours * hourlyCost);

  const weeklySavingsTry = weeklySavedHours * hourlyCost;
  const paybackPeriodWeeks =
    weeklySavingsTry > 0
      ? getSetupCostTry(input.packageId) / weeklySavingsTry
      : 0;

  return {
    monthlySavedHours,
    monthlyFinancialSavingsTry,
    paybackPeriodWeeks,
  };
}

export type CompanyPriority = "leads" | "workflows" | "website" | string;

export function getRecommendedPackage(priority: CompanyPriority): string {
  switch (priority) {
    case "leads":
      return "ai-asistan";
    case "workflows":
      return "surec-otomasyonu";
    case "website":
      return "ai-website";
    default:
      return "ai-asistan";
  }
}
