import { Router } from "express";
import agentRouter from "./agentRoute.js";

const router = Router();

router.use(agentRouter);

export default router;
