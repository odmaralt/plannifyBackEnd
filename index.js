const express = require("express");
const connect = require("./db/db");
const userRoutes = require("./router/users");
const app = express();
const port = 9000;
// const cronJob = require("./nodecron");
const cors = require("cors");
app.use(cors());
// app.use(cronJob);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());

app.use("/", userRoutes);
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
