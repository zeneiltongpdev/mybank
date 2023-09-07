const express = require("express");
const morgan = require("morgan");

// Routes
const routes = require("./routes/publicRoutes");
const login = require("./routes/login");
const admin = require("./routes/adminRoute");

require("./db/connect");

const port = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use("/", login);
app.use("/", admin);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
