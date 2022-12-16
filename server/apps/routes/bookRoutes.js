const express = require('express');
const books = require('../controllers/bookdetailController');
const feedback = require('../controllers/feedbackController');


const router = express.Router();
router.get('/books', books.getAll);
router.get('/bookdetail/:id', books.getOne);
router.post('/feedback/:id', feedback.create);
router.get('/viewfeedback', feedback.viewfeedback);
module.exports = router;