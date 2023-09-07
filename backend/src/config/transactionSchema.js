const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  perior: {
    type: String,
    required: true,
  },
  type: {
    // 1: deposit, 2: withdraw, 3: transfer
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  accountNum: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
