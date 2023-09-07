const express = require("express");
const router = express.Router();
const userSchema = require("../config/userSchema");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username == "" || password == "") {
    return res
      .status(401)
      .send(`The user is not authenticated (logged in) : ${data._id}`);
  }

  const user = await userSchema
    .findOne({
      username: username,
      password: password,
    })
    .then((data) => {
      res
        .status(201)
        .send(`Successfully logged, Welcome to your Bank: ${data.name}`);
      //res.send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error: ${err}`);
      //res.send(err);
    });
});

module.exports = router;
