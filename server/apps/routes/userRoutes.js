
const express = require('express');
const user = require('../controllers/userController');
const book = require('../controllers/applybookController');

const router = express.Router();

//user routes for get profile and book history
router.get('/profile',user.getUserProfile);
router.get('/myBook', user.getMyBook);
router.post('/applyBook/:id', book.applyBook);

module.exports = router;