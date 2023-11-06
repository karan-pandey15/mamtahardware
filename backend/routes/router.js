import express from "express";
import employeeRoutes from "./employeeRoutes.js";

const router = express.Router();

router.use("/", employeeRoutes);

export default router;
