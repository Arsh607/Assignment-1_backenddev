import express, { Express, Request, Response } from "express";

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


//export default app;