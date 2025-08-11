const express = require('express');
const router = express.Router();
const addbookcontroller = require('../controllers/addbook');

// get all books
router.get('/', addbookcontroller.getaddbook);

// get all returned books
router.get('/getreturnbook', addbookcontroller.getreturnedbook);

// add a new book
router.post('/book', addbookcontroller.postaddbook);

// return a book
router.post('/postreturnbook', addbookcontroller.postreturnedbook);



// delete a book by id
router.delete('/deletebyid/:id', addbookcontroller.getdeletebook);


module.exports = router;
