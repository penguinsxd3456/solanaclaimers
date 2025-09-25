
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const HELIUS_KEY = process.env.HELIUS_KEY || "missing";
const COMMISSION_ADDRESS = process.env.COMMISSION_ADDRESS || "missing";

app.use(cors());
app.get("/status", (req, res) => {
  res.json({ status: "ok", helius: HELIUS_KEY !== "missing", commission: COMMISSION_ADDRESS });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
