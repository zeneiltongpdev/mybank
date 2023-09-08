const express = require("express");
const router = express.Router();
const transactionSchema = require("../config/transactionSchema");
const { depositAmount } = require("../utils/transHelper");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

router.post("/deposit", async (req, res) => {
  const { perior, amount, accountNum } = req.body;

  const result = await depositAmount(accountNum, amount);

  if (result == null) {
    return res.status(500).send("Error: Account not found!");
  }

  const Transaction = new transactionSchema({
    perior,
    type: "DEPOSIT",
    amount,
    accountNum,
    date,
    hour,
  });

  Transaction.save()
    .then((data) => {
      res.send(
        `Successful Deposit!\nAccount: ${data.accountNum} | Amount: ${data.amount}`
      );
      //res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Failed Deposit!\nError: ${err}`);
      //res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
