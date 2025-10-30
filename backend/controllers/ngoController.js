import NGO from "../models/NGO.js";

export const registerNGO = async (req, res) => {
  try {
    const ngo = await NGO.create(req.body);
    res.status(201).json(ngo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllNGOs = async (req, res) => {
  const ngos = await NGO.find();
  res.json(ngos);
};

