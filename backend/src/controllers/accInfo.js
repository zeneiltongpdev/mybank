const express = require("express");
const accountSchema = require("../config/accountSchema");
const router = express.Router();

router.get("/accInfo/:accNum", (req, res) => {
  const accountNum = req.params.accNum;

  accountSchema
    .findOne({ accountNum: accountNum })
    .then((data) => {
      if (data) {
        return res.status(200).send(data);
      } else {
        return res.status(400).send(`Error: ${err}`);
      }
    })
    .catch((err) => {
      return res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
