require('dotenv').config({ quiet: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ GET Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("❌ Error fetching holdings:", err);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// ✅ GET Positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    console.log("✅ Positions found:", allPositions);
    res.json(allPositions);
  } catch (err) {
    console.error("❌ Error fetching positions:", err);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});


// ✅ POST Order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    console.log("📩 Order received:", req.body); // ✅ Add this

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    res.status(201).json({ message: "Order saved!" });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.get("/", (req, res) => {
  res.send("🟢 Zerodha Backend is running!");
});

// ✅ Connect to DB first, then start server
async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB Connection Failed:", err);
  }
}

startServer();
