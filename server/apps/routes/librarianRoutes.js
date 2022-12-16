const express = require('express');
const librarian = require('../controllers/librarianController');

const router = express.Router();
//all issed books
router.get('/issuedbooks', librarian.allIssued);
router.get('/allusers', librarian.allUsers);
router.get('/currentissued', librarian.currentib);
module.exports = router;