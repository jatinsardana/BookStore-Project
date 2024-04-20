const express = require("express")
const signup = require("../controller/user.controller.js");
const login = require("../controller/user.controller.js");
const router = express.Router();

router.post("/signup" , signup)
router.post("/login" , login)

module.exports = router;