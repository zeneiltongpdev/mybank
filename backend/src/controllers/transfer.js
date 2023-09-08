const express = require("express");
const router = express.Router();
const transactionSchema = require("../config/transactionSchema");

const date = new Date().toLocaleDateString();
const hour = new Date().toLocaleTimeString();

router.post("/transfer", async (req, res) => {
  const { perior, amount, accountNum, accountNum2 } = req.body;

  const withTransac = new transactionSchema({
    perior: perior,
    type: "TRANSFER",
    amount: amount,
    accountNum: accountNum,
    accountNum2: accountNum2,
    date: date,
    hour: hour,
  });

  const debTransac = new transactionSchema({
    perior: perior,
    type: "DEBIT",
    amount: amount,
    accountNum: accountNum2,
    accountNum2: accountNum,
    date: date,
    hour: hour,
  });

  //return res.send(withTransac+debTransac);

  try {
    await withTransac.save();
    await debTransac.save()
    return res.send(`Successful Transfer! \n${withTransac} ${debTransac}`);
  } catch (error) {
    return res.send(`Failed Transfer! Error: ${error}`);
  }

  // const withTransacSave = await withTransac.save();
  // const debTransacSave = await debTransac.save();

  // if (withTransacSave != null && debTransacSave != null) {
  //   return res.send("Successful Transfer!");
  //   //return res.status(201).send("Successful Transfer!");
  // } else {
  //   return res.send("Failed Transfer!");
  //   //return res.status(400).send(`Error: ${err}`);
  // }
});

module.exports = router;
