const express = require('express');
const books = require('../controllers/bookdetailController');

const router = express.Router();


router.get('/bookdetail/:id',books.getOne);


module.exports = router;