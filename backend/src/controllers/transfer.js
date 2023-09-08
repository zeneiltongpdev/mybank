const express = require("express");
const router = express.Router();
const transactionSchema = require("../config/transactionSchema");
const { transferAmount } = require("../utils/transHelper");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

router.post("/transfer", async (req, res) => {
  const { perior, amount, accountNum, accountNum2 } = req.body;

  const result = await transferAmount(accountNum, accountNum2, amount);

  if (result == null) {
    return res
      .status(500)
      .send("Error: Failed Transfer!\nThe account balance is insufficient!");
  }

  const withTransac = new transactionSchema({
    perior,
    type: "TRANSFER",
    amount,
    accountNum,
    accountNum2,
    date,
    hour,
  });

  const debTransac = new transactionSchema({
    perior,
    type: "DEBIT",
    amount,
    accountNum2,
    accountNum,
    date,
    hour,
  });

  try {
    await withTransac.save();
    await debTransac.save();

    if (
      withTransac.accountNum === withTransac.accountNum2 ||
      debTransac.accountNum === debTransac.accountNum2
    ) {
      return res.send(`Error: Failed Transfer, Accounts are equal!`);
    }
    return res.send(
      `Successful Transfer!\nThe amount of: ${withTransac.amount}, was sent account: ${debTransac.accountNum2}`
    );
    //res.status(200).send(`${withTransac}\n${debTransac}`);
  } catch (err) {
    return res.send(`Failed Transfer! Error: ${err}`);
    //res.status(400).send(`Error: ${err}`);
  }
});

module.exports = router;
