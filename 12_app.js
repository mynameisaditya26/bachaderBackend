const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./12_routes/urlRoutes");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/urlShortener");

// Routes
app.use("/", urlRoutes);

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});