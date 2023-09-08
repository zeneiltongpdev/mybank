const express = require("express");
const router = express.Router();
const transactionSchema = require("../config/transactionSchema");
const { withdrawAmount } = require("../models/transHelper");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

router.post("/withdraw", async (req, res) => {
  const { perior, amount, accountNum } = req.body;

  const result = await withdrawAmount(accountNum, amount);

  if (result == null) {
    return res.status(500).send("Error: Account not found!");
  }

  const Transaction = new transactionSchema({
    perior,
    type: "WITHDRAW",
    amount,
    accountNum,
    date,
    hour,
  });

  Transaction.save()
    .then((data) => {
      res.send(
        `Successful Withdraw!\nAccount: ${data.accountNum} | Amount: ${data.amount}`
      );
      //res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Failed Withdraw!\nError: ${err}`);
      //res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
