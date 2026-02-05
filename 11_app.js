const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./11_routes/userRoutes");

const app = express();
app.use(express.json());

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/basicDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/", userRoutes);

// Server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
