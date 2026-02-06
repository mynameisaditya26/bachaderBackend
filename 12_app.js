const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./11_routes/urlRoutes");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/urlShortener")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use("/", urlRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
