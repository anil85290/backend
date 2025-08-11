const path = require('path');
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors');
const sequelize = require('./helper/database');
app.use(cors());
app.use(express.json());


app.use(bodyparser.urlencoded({extended: false}));

const bookroutes = require('./routes/addbook')

app.use('/', bookroutes);

app.listen(5000);

