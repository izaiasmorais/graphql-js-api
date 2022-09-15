const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  created: {
    type: String,
    trim: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Transaction };
