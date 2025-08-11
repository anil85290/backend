const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();
const fs = require('fs');
const path = require('path');
const util = require('../helper/path');
const p = path.join(util, 'data', 'returnbooks.json')

const getbooksfromfile = (cb) => {
    fs.readFile(p, (err, data) => {
            if(err) {
                cb([]);
            }else{
                cb(JSON.parse(data));
            }
            
        })
}
module.exports = class ReturnedBook {
    constructor(title,fine){
        this.title = title
        this.fine = fine
    }
    saved() {
        this.date = formattedDateTime;
        getbooksfromfile(books => {
            books.push(this)
            fs.writeFile(p, JSON.stringify(books), (err) => console.log(err))
        })
            
        };
    
    static getreturnedbook(cb) {
        getbooksfromfile(cb);
    };
};