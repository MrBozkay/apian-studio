import { describe, it, expect } from "vitest";
import {
  calculateAutomationROI,
  getRecommendedPackage,
  type ROIInput,
} from "./calculator";

describe("Automation ROI Calculator", () => {
  it("should calculate monthly saved hours and financial savings correctly", () => {
    const input: ROIInput = {
      weeklyManualHours: 20, // 20 hours/week
      hourlyCostTry: 300, // 300 TL/hour
      packageId: "surec-otomasyonu",
    };

    const result = calculateAutomationROI(input);

    // 20 hours * 4.33 weeks = ~86.6 hrs/month. If 75% automated -> ~65 hrs saved.
    expect(result.monthlySavedHours).toBeGreaterThan(60);
    expect(result.monthlySavedHours).toBeLessThan(70);

    // Monthly savings = saved hours * 300 TL
    expect(result.monthlyFinancialSavingsTry).toBe(
      Math.round(result.monthlySavedHours * 300)
    );

    // Payback period should be reasonable (e.g. 8-16 weeks for a 65k setup)
    expect(result.paybackPeriodWeeks).toBeGreaterThan(0);
    expect(result.paybackPeriodWeeks).toBeLessThan(52);
  });

  it("should gracefully handle 0 or negative hours by clamping to zero", () => {
    const result = calculateAutomationROI({
      weeklyManualHours: -5,
      hourlyCostTry: 200,
      packageId: "ai-asistan",
    });

    expect(result.monthlySavedHours).toBe(0);
    expect(result.monthlyFinancialSavingsTry).toBe(0);
    expect(result.paybackPeriodWeeks).toBe(0);
  });

  it("should recommend the right package based on company priority", () => {
    expect(getRecommendedPackage("leads")).toBe("ai-asistan");
    expect(getRecommendedPackage("workflows")).toBe("surec-otomasyonu");
    expect(getRecommendedPackage("website")).toBe("ai-website");
  });
});
