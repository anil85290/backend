// const http = require('http');
// const routes = require('./routes')
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const db = require('./helper/database');
const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop');
const contactroute = require('./routes/contact');

db.execute('SELECT * FROM products')
    .then((result) => {
        console.l0g(result)
    })
    .catch((err) => console.log(err))

app.use(bodyparser.urlencoded({extended: false}));
app.use('/admin', adminroutes);
app.use(shoproutes);
app.use(contactroute)
app.get('/success', (req, res, next) => {
    res.send('<h1>Form Filled Successfully</h1>');
});

app.use( (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.htm'));
});

app.listen(3000);
console.log('hello world');