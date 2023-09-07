const express = require("express");
const router = express.Router();
const accountSchema = require("../config/accountSchema");

router.post("/createAccount", (req, res) => {
  const { name, email, initBalance } = req.body;
  const accountNum = Math.floor(Math.random() * 1000000);
  const pin = Math.floor(Math.random() * 1000);

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
      //     `Account created successfully!\nThis is your account number: ${data.accountNum}, and your Pin: ${data.pin}`
      //   );
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
