import Donation from "../models/Donation.js";
import { uploadToPinata } from "../utils/pinata.js";

export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    await uploadToPinata(donation); // optional — store proof on IPFS
    res.status(201).json({ message: "Donation created", donation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
