import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// POST /api/payments/donate
router.post("/donate", async (req, res) => {
  try {
    const { amount, donorName, cause } = req.body;

    // Simple dummy transaction object
    const transaction = {
      id: "dummy_" + Date.now(),
      status: "success",
      amount,
      donorName,
      cause,
    };

    // Save donation to MongoDB (optional)
    await new Donation(transaction).save();

    res.json({
      success: true,
      message: "Donation recorded successfully (dummy mode)",
      data: transaction,
    });
  } catch (error) {
    console.error("Error in /donate:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
