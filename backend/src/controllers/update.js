const express = require("express");
const accountSchema = require("../config/accountSchema");
const router = express.Router();

router.put("/update/:accNum", (req, res) => {
  const accNum = req.params.accNum;
  const { name, email } = req.body;

  accountSchema
    .findOneAndUpdate(
      { accountNum: accNum },
      {
        holderName: name,
        holderEmail: email,
      },
      { new: true }
    )
    .then((data) => {
      if (data) {
        return res
          .status(200)
          .send(
            `Successful Updated Information!\nNew name: ${data.holderName}\nNew email: ${data.holderEmail}`
          );
      } else {
        return res.status(400).send(`Error: ${err}`);
      }
    })
    .catch((err) => {
      return res.status(400).send(`Error: ${err}`);
    });
});

module.exports = router;
