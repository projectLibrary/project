const express = require('express');
const books = require('../controllers/bookController');
const returnBook = require('../controllers/returnController');
const librarian = require('../controllers/librarianController');

const router = express.Router();
router.get('/bookIndex',books.getAllBooks)
router.post('/addBook', books.addBook);
router.get('/deleteBook/:id', books.deleteBook);
router.post('/updateBook/:id', books.updateBook);
router.get('/returnBook/:id', returnBook.returnBookGet);
router.post('/returnBook', returnBook.returnBookPost);
router.get('/lateFee/:id', returnBook.lateFee);
router.post('/lateFee', returnBook.lateFeePost);
router.get('/allUsers', librarian.allUsers);
router.get('/issuedBooks', librarian.allIssued);
router.get('/currentIssued', librarian.currentissuedbooks);
router.get('/feedback', librarian.viewfeedback);


module.exports = router;