const path = require('path');
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors');
const sequelize = require('./helper/database');
app.use(cors());
app.use(express.json());

const bookroutes = require('./routes/addbook')

app.use('/', bookroutes);

sequelize.sync().then((result) => {
    //console.log(result);
    
}).catch((err) => {
    console.log(err);
});
app.listen(5000);



