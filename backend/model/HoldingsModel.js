const { model } = require('mongoose');

const HoldingsSchema = require('../schemas/HoldingsSchema');

// ✅ Correct usage — no `new`
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = HoldingsModel;
