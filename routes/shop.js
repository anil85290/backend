const express = require('express');
const path = require('path')
const router = express.Router();
const rootdir = require('../helper/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.htm'));
});
module.exports=router;