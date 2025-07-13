require('dotenv').config({ quiet: true });

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// ✅ Correctly destructure all models
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ Get all holdings
app.get('/allHoldings', async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).json({ error: "Failed to fetch holdings" });
    }
});

// ✅ Get all positions
app.get('/allPositions', async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).json({ error: "Failed to fetch positions" });
    }
});

// ✅ Create a new order
app.post('/newOrder', async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        // ✅ Simple validation
        if (!name || !qty || !price || !mode) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newOrder = new OrdersModel({
            name,
            qty,
            price,
            mode,
        });

        console.log("📦 Saving order:", newOrder); // Debug log

        await newOrder.save();

        res.status(201).json({ message: "Order saved successfully" });
    } catch (error) {
        console.error("❌ Error saving order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Start the server and connect to MongoDB
app.listen(PORT, async () => {
    try {
        await mongoose.connect(uri);
        console.log("✅ MongoDB connected");
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
});
