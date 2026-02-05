const express = require("express");
const router = express.Router();
const userController = require("../11_controllers/userController");

router.post("/add", userController.addUser);
router.get("/users", userController.getUsers);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
