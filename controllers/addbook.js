
const Book = require('../models/book');
const ReturnedBook = require('../models/returnedbooks');


exports.getaddbook = (req, res, next) => {
    Book.fetchall((books) => {
        res.send(books);
    });

};


exports.postaddbook = (req, res, next) => {
    

    const book = new Book(req.body.name);

    book.save()
};
exports.postreturnedbook =(req, res) => {
    const returnbook = new ReturnedBook(req.body.Title, req.body.Fine);
    returnbook.saved();
    
}
exports.getreturnedbook = (req, res, next) => {
    const returnedbook = ReturnedBook.getreturnedbook((books) => {
        res.send(books);
        
    })
};
exports.getdeletebook = (req, res) => {
    Book.deletebyid(req.params.id);
}
