const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

const checkTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};
app.use(checkTime);

app.get("/", (req, res) => {
  res.send(`Requested at: ${req.requestTime}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});