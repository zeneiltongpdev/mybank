const express = require("express");
const morgan = require("morgan");

// Routes
const routes = require("./routes/publicRoutes");
const admin = require("./routes/adminRoute");
const login = require("./controllers/login");
const info = require("./controllers/accInfo");
const update = require("./controllers/updateAcc");
const deposit = require("./controllers/deposit");

require("./db/connect");

const port = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use("/", login);
app.use("/", admin);
app.use("/", info);
app.use("/", update);
app.use("/", deposit);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
