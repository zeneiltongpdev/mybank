const express = require("express");
const router = express.Router();
const accountSchema = require("../config/accountSchema");
const transactionSchema = require("../config/transactionSchema");

// List account information
router.get("/info/:accNum", (req, res) => {
  const accountNum = req.params.accNum;

  accountSchema
    .findOne({ accountNum: accountNum })
    .then((data) => {
      if (data) {
        return res
          .status(200)
          .send(
            `Account Informations:\n\nNumber: ${data.accountNum}\nBalance: ${data.balance}\nName: ${data.holderName}\nEmail: ${data.holderEmail}`
          );
        //return res.status(200).send(data);
      } else {
        return res.status(400).send(`Error: The account was not found`);
      }
    })
    .catch((err) => {
      return res.status(400).send(`Error: ${err}`);
    });
});

// List all transactions
router.get("/transations/:accNum", (req, res) => {
  const accountNum = req.params.accNum;

  transactionSchema.find({ accountNum: accountNum }).then((data) => {
    if (data) {
      return res.status(200).send(data.reverse());
    } else {
      return res.status(400).send(`Error: ${err}`);
    }
  });
});

// Delete a account
router.delete("/delete/:accNum", (req, res) => {
  const accountNum = req.params.accNum;
  transactionSchema.deleteMany({ accountNum: accountNum }).then((data) => {
    if (data) {
      accountSchema
        .findOneAndDelete({ accountNum: accountNum })
        .then((data) => {
          if (data) {
            return res
              .status(200)
              .send(`The Account ${accountNum} was deleted`);
          } else {
            return res.status(404).send(`Error: The account was not found`);
          }
        });
    } else {
      return res
        .status(400)
        .send(`Error: The server cannot process the request`);
      //return res.status(400).send(`Error-400: Requisition Error`);
    }
  });
});

// List all accounts
router.get("/list", (req, res) => {
  accountSchema.find().then((data) => {
    if (data) {
      return res.status(200).send(data);
    } else {
      return res.status(400).send(`Error: ${err}`);
    }
  });
});

module.exports = router;
