// ================= IMPORT =================
const express = require("express");
const mongoose = require("mongoose");

// ================= APP =================
const app = express();
app.use(express.json()); // ✅ REQUIRED to read req.body

// ================= MONGODB CONNECT =================
mongoose
  .connect("mongodb://127.0.0.1:27017/basicDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ================= SCHEMA =================
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

// ================= MODEL =================
const User = mongoose.model("User", userSchema);

// ================= CREATE =================
app.post("/add", async (req, res) => {
  console.log("Request Body:", req.body); // 👈 debug

  // safety check
  if (!req.body.name || !req.body.email || !req.body.phone) {
    return res.send("Please send name, email and phone");
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  const savedUser = await user.save();
  res.send(savedUser);
});

// ================= READ =================
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// ================= UPDATE =================
app.put("/update/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    },
    { new: true }
  );

  res.send(updatedUser);
});

// ================= DELETE =================
app.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
