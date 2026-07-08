import express from "express";
import { adminOnly } from "../middlewares/authMiddleware.js";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", adminOnly, getDashboardStats);

export default router;