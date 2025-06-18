const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../helper/path');
const addbookcontroller = require('../controllers/addbook');

router.get('/' , addbookcontroller.getaddbook);

router.post('/', addbookcontroller.postaddbook);

module.exports=router;