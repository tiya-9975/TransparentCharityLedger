import axios from "axios";

const PINATA_JWT = process.env.PINATA_JWT;

export const uploadToPinata = async (data) => {
  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data,
      { headers: { Authorization: `Bearer ${PINATA_JWT}` } }
    );
    console.log("✅ Uploaded to Pinata:", res.data.IpfsHash);
    return res.data;
  } catch (err) {
    console.error("❌ Pinata upload failed:", err.message);
  }
};
