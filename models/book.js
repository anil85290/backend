
const fs = require('fs');
const path = require('path');
const rootdir = require('../helper/path');
const bodyparser = require('body-parser')

module.exports = class Book {
    constructor(title) {
        this.title =title;
    }
    save (){
        
        const p = path.join(rootdir, 'data', 'books.json');
        fs.readFile(p, (err, data) => {
            let books= [];
            if (!err) {
                books = JSON.parse(data);
            }
            books.push(this.title);
            fs.writeFile(p, JSON.stringify(books), (err) => {
                console.log(err);
            })
            
        })
    }
    static fetchall(cb) {
        const p = path.join(rootdir, 'data', 'books.json');
        fs.readFile(p, (err, data) => {
            if (err) {
                // cb([]);
                return [];
            }
            // cb( JSON.parse(data));
            return JSON.parse(data);
        })
    }
}


    