const path = require('path');

const rootdir = require('../helper/path');
const Book = require('../models/book')

exports.getaddbook = (req, res, next) => {
    const book = Book.fetchall();
    res.sendFile(path.join(rootdir, 'views', 'addbook.htm'));
    console.log(book);
};

exports.postaddbook = (req, res, next) => {
    // console.log(req.body.bookName);
    const book = new Book(req.body.bookName);
    book.save();
    res.redirect('/');
}