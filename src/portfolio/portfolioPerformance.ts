import { PortfolioResult } from "../app"

export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): PortfolioResult {

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;


    const summaries = [
        { check: percentageChange > 30, text: "Excellent performance! Your investments are doing great." },
        { check: percentageChange >= 10, text: "Solid gain. Keep monitoring your investments." },
        { check: percentageChange > 0, text: "Modest gain. Your portfolio is growing slow." },
        { check: percentageChange === 0, text: "No change. Your portfolio is holding steady." },
        { check: percentageChange >= -10, text: "Minor loss. Stay calm and review your options." },
        { check: percentageChange < -10, text: "Significant loss. Review your portfolio strategy." }
    ];


    const performanceSummary = summaries.find(s => s.check)?.text || "Status unknown";


    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}