
const Book = require('../models/book');
const ReturnedBook = require('../models/returnedbooks');
const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();
const futuretime = new Date(currentDateTime.getTime() + 10 * 60 * 1000);
const formattedFutureDateTime = futuretime.toLocaleString();

exports.getaddbook = (req, res, next) => {
    Book.findAll()
    .then((result) => {
        console.log(result);
        res.send(result)    
    }).catch((err) => {
        console.log(err);
    });
};


exports.postaddbook = (req, res, next) => {
    const book = req.body.name;
    Book.create({
        title: book,
        date: formattedDateTime,
        futuredate: formattedFutureDateTime
    }).then((result) => {
        console.log(result);
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
};
exports.postreturnedbook =(req, res) => {
    const returnbook = req.body.Title
    const fine = req.body.Fine
    ReturnedBook.create({
        title: returnbook,
        fine: fine,
        date: formattedDateTime
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    
};
exports.getreturnedbook = (req, res, next) => {
    ReturnedBook.findAll()
    .then((result) => {
        console.log(result);
        res.send(result)    
    }).catch((err) => {
        console.log(err);
    });
};
exports.getdeletebook = (req, res) => {
    const bid = req.params.id
    Book.destroy({where:{
        id: bid
    }})
};
