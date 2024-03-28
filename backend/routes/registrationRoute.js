const express = require("express");
const { addCustomer } = require("../controllers/registrationController");
const { logindata } = require("../controllers/loginController");
const router = express.Router();

router.post('/signup',addCustomer)
router.post('/login',logindata)

module.exports = router;
