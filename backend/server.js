const express = require("express");
const cors = require("cors");
const routes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/v1", routes);

module.exports = app;
