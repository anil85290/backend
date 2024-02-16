// const http = require('http');
// const routes = require('./routes')
const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}));


app.use( '/add-product',(req, res, next) => {
    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="price">  <button type="submit">Add Product </button> </form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log('in the middleware');
});
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);