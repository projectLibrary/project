const express = require('express');
const accounts = require('../controllers/accountsController');

const router = express.Router();
router.post('/register', accounts.registerNewUser);
router.post('/login', accounts.loginUser);
router.post("/send-otp", accounts.sendOtp);

module.exports = router;