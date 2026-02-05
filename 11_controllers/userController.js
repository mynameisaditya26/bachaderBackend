const User = require("../11_models/User");

// CREATE
exports.addUser = async (req, res) => {
  console.log("Request Body:", req.body);

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
};

// READ
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

// UPDATE
exports.updateUser = async (req, res) => {
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
};

// DELETE
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
};
