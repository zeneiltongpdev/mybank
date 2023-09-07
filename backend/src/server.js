const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/publicRoutes");
const login = require("./routes/login");

require("./db/connect");


const port = 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use("/", login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;