const express = require("express");
const router = express.Router();
const transactionSchema = require("../config/transactionSchema");
const { depositAmount } = require("../models/transHelper");
//const accountSchema = require("../config/accountSchema");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

router.post("/deposit", (req, res) => {
  const { perior, amount, accountNum } = req.body;

  try {
    depositAmount(accountNum, amount);
  } catch (error) {
    return res.status(400).send(`Error: ${error}`);
  }

  const Transaction = new transactionSchema({
    perior: perior,
    type: "DEPOSIT",
    amount: amount,
    accountNum: accountNum,
    date: date,
    hour: hour,
  });

  //return res.send(Transaction);
  Transaction.save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
