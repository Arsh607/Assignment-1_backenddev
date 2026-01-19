import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    
    test("should return 'Excellent' message when gain is over 30%", () => {
        const result = calculatePortfolioPerformance(100, 140); // 40% gain
        expect(result.percentageChange).toBe(40);
        expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great.");
    });

    test("should return 'Solid gain' message when gain is between 10% and 30%", () => {
        const result = calculatePortfolioPerformance(100, 120); // 20% gain
        expect(result.percentageChange).toBe(20);
        expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments.");
    });

    test("should return 'Modest gain' message when gain is between 0% and 10%", () => {
        const result = calculatePortfolioPerformance(100, 105); // 5% gain
        expect(result.performanceSummary).toBe("Modest gain. Your portfolio is growing slow.");
    });

    test("should return 'No change' message when gain is exactly 0%", () => {
        const result = calculatePortfolioPerformance(100, 100);
        expect(result.performanceSummary).toBe("No change. Your portfolio is holding steady.");
    });

    test("should return 'Minor loss' message when loss is between 0% and -10%", () => {
        const result = calculatePortfolioPerformance(100, 95); // -5% loss
        expect(result.performanceSummary).toBe("Minor loss. Stay calm and review your options.");
    });

    test("should return 'Significant loss' message when loss is more than -10%", () => {
        const result = calculatePortfolioPerformance(100, 80); // -20% loss
        expect(result.performanceSummary).toBe("Significant loss. Review your portfolio strategy.");
    });

    test("should return the correct structure and types", () => {
        const result = calculatePortfolioPerformance(1000, 1100);
        expect(result).toHaveProperty("initialInvestment");
        expect(result).toHaveProperty("profitOrLoss");
        expect(typeof result.performanceSummary).toBe("string");
    });
});