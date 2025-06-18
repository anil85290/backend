const path = require('path');
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const db = require('./helper/database')

app.use(bodyparser.urlencoded({extended: false}));

const bookroutes = require('./routes/addbook')

app.use('/', bookroutes);









app.listen(5000);