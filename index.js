const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
const userRoutes = require("./router/users");
const app = express();
const port = 9000;
const cronJob = require("node-cron");
const { restart } = require("./controller/restart");

// const job = cronJob.schedule("0 0 0 * * *", function () {
//   restart();
// });
app.use(cors());
// app.use(job.start);
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
