const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../helper/path');

router.get( '/add-product',(req, res, next) => {
    
    res.sendFile(path.join(rootdir, 'views', 'add-product.htm'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;