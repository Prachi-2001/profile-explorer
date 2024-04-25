// In your routes file
const express = require("express");
const userRoutes = require("../controllers/index");
const router = express.Router();

router.get("/users", userRoutes.userController.getAllUsers);

router.post("/add", userRoutes.userController.addUser);

module.exports = router;
