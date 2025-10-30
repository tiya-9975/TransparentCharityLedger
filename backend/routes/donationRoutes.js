import express from "express";
import { createDonation, getAllDonations } from "../controllers/donationController.js";
const router = express.Router();

router.post("/", createDonation);
router.get("/", getAllDonations);

export default router;
