require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
    mongoose.connect(uri);
    console.log('MongoDB connected');
});