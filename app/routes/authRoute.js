const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");
const {verifyRegister} = require("../middleware")

router.post('/register', [verifyRegister.checkUserNameOrEmail,
verifyRegister.checkRole],
register)

module.exports = router;