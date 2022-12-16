const express = require('express');
const books = require('../controllers/bookController');
const returnBook = require('../controllers/returnController');

const router = express.Router();
router.get('/bookIndex',books.getAll)
router.post('/addBook', books.addBook);
router.get('/deleteBook/:id', books.deleteBook);
router.post('/returnBook/:id', returnBook.returnBook);
router.get('/lateFee/:id', returnBook.lateFee);
router.post('/payFee/:id', returnBook.payFee);


module.exports = router;