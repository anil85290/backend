// const http = require('http');
// const routes = require('./routes')
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop');



app.use(bodyparser.urlencoded({extended: false}));
app.use('/admin', adminroutes);
app.use(shoproutes);

app.use( (req,res,next) => {
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);