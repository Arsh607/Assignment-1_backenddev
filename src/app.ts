import express, { Express, Request, Response } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

export const app: Express = express(); //changed to a name export because default export was giving an error

//Health checkpoint
app.get("/health", (req: Request, res: Response) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    })
})

//Interface
export interface PortfolioResult {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

app.get("/performance", (req: Request, res: Response) => {
    const initial = Number(req.query.initialInvestment);
    const current = Number(req.query.currentValue);

    if (isNaN(initial) || isNaN(current)) {
        return res.status(400).json({ 
            error: "Invalid input. Please provide initialInvestment and currentValue as numbers." 
        });
    }

    const result = calculatePortfolioPerformance(initial, current);

    // 5. Send the JSON result back to the client
    res.json(result);
});

//export default app;