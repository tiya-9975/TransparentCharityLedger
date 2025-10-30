import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// ✅ Import routes
import paymentRoutes from "./routes/paymentRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import ngoRoutes from "./routes/ngoRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
connectDB();

// ✅ Use routes
app.use("/api/payments", paymentRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/ngos", ngoRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
