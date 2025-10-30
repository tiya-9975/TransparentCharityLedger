import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  id: String,
  status: String,
  amount: Number,
  donorName: String,
  cause: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Donation", donationSchema);
