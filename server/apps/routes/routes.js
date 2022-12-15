const express = require('express');
const books = require('../controllers/bookController');

const router = express.Router();
router.get('/bookIndex',books.getAll)
router.post('/addBook', books.addBook);
router.get('/deleteBook/:id', books.deleteBook);

module.exports = router;