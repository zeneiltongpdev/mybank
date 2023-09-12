const express = require("express");
const router = express.Router();
const accountSchema = require("../config/accountSchema");
//const server = require("../../../frontend/src/App")

router.post("/createAccount", (req, res) => {
//server.post("/createAccount", (req, res) => {
  const { name, email, initBalance } = req.body;
  const accountNum = Math.floor(Math.random() * 1000000);
  const pin = Math.floor(Math.random() * 10000);

  const Account = new accountSchema({
    holderName: name,
    holderEmail: email,
    accountNum: accountNum,
    balance: initBalance,
    pin: pin,
  });

  //return res.send(Account);
  Account.save()
    .then((data) => {
      // res
      //   .status(201)
      //   .send(
      //     `Account created successfully!\n\nAccount Number: ${data.accountNum}\nName of the holder: ${data.holderName}\nEmail of the holder: ${data.holderEmail}\nPin: ${data.pin}`
      //   );
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
