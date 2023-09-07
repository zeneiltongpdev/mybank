const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/publicRoute.tsx");





const port = 3000;
const app = express();
app.use(morgan("dev"));

app.use("/", routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
