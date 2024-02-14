// const http = require('http');
// const routes = require('./routes')
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('in the middleware')
    next();
});
app.use((req, res, next) => {
    console.log('2nd the middleware')
    res.send('<h1> hello from express </h1>')
});
const server = http.createServer(app);
server.listen(3000);