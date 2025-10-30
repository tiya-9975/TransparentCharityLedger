import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: String,
  description: String,
  walletAddress: String,
  verified: { type: Boolean, default: false },
});

export default mongoose.model("NGO", ngoSchema);
