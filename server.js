const cors = require("cors");
const express = require("express");
const app = express();

let corsOptions = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOptions));

const initRoutes = require("./");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

const port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
