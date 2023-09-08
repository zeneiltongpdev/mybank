const express = require("express");
const router = express.Router();
const accountSchema = require("../config/accountSchema");
const transactionSchema = require("../config/transactionSchema");

router.get("/accInfo/:accNum", (req, res) => {
  const accountNum = req.params.accNum;

  accountSchema
    .findOne({ accountNum: accountNum })
    .then((data) => {
      if (data) {
        return res.status(200).send(
          `Account Data:\n
           Number: ${data.accountNum}\n
           Balance: ${data.balance}\n
           Name: ${data.holderName}\n
           Email: ${data.holderEmail}`
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

router.get("/accTransations/:accNum", (req, res) => {
  const accountNum = req.params.accNum;

  transactionSchema.find({ accountNum: accountNum }).then((data) => {
    if (data) {
      return res.status(200).send(data.reverse());
    } else {
      return res.status(400).send(`Error: ${err}`);
    }
  });
});

router.delete("/accDelete/:accNum", (req, res) => {
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

router.get("/accListAll", (req, res) => {
  accountSchema.find().then((data) => {
    if (data) {
      return res.status(200).send(`Accounts List:\n${data}`);
      //return res.status(200).send(data);
    } else {
      return res.status(400).send(`Error: ${err}`);
    }
  });
});

module.exports = router;
