const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  holderName: {
    type: String,
    required: true,
  },
  holderEmail: {
    type: String,
    required: true,
    unique: true,
  },
  accountNum: {
    type: Number,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  pin: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Account", accountSchema);
