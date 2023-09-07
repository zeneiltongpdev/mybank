const mongoose = require("mongoose");

const localDB = "mongodb://localhost:27017/bank-of-cubos";

mongoose
  .connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
