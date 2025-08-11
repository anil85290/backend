const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();
const futuretime = new Date(currentDateTime.getTime() + 10 * 60 * 1000);
const formattedFutureDateTime = futuretime.toLocaleString();
const fs = require('fs');
const path = require('path');
const util = require('../helper/path');
const p = path.join(util, 'data', 'books.json')

const getbooksfromfile = (cb) => {
    fs.readFile(p, (err, data) => {
            if(err) {
                cb([]);
            }else{
                cb(JSON.parse(data));
            }
            
        })
}
module.exports = class Book {
    constructor(title){
        this.title = title
    }
    save() {
        this.id = Math.random().toString();
        this.date = formattedDateTime;
        this.futuredate= formattedFutureDateTime;
        getbooksfromfile(books => {
            books.push(this)
            fs.writeFile(p, JSON.stringify(books), (err) => console.log(err))
        })
            
        };
    
    static fetchall(cb) {
        getbooksfromfile(cb);
    };
    static deletebyid(id) {
        getbooksfromfile((books) =>{
            let book = books.filter(b => b.id !== id);
            fs.writeFile(p, JSON.stringify(book), (err) => console.log(err))
        })
    }
};