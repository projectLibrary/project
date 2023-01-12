
const express = require('express');
const user = require('../controllers/userController');
const router = express.Router();

//user routes for get profile and book history
router.get('/profile',user.getUserProfile);
router.get('/myBook', user.getMyBook);
router.post('/feedback', user.feedbackCreate);
router.post('/applyBook', user.applyBook);
router.get('/bookIndex',user.getAllBooks)
router.get('/applyBook/:id', user.getOneBookDetails);
module.exports = router;