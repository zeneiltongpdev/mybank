const express = require("express");
const router = express.Router();
const userSchema = require("../config/userSchema");

router.post("/register", (req, res) => {
  const { name, email, username, password } = req.body;

  const User = new userSchema({
    name,
    email,
    username,
    password,
  });

  User.save()
    .then((data) => {
      res
        .status(201)
        .send(`User registered successfully, welcome ${data.name}`);
      //res.send(User);
    })
    .catch((err) => {
      res.status(400).send(`User already exists | Error: ${err}`);
      //res.send(err);
    });
});

module.exports = router;
