const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../helper/path');

router.get( '/contactus',(req, res, next) => {
    
    res.sendFile(path.join(rootdir, 'views', 'contact.htm'));
});

router.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success').send('<h1>Form successfully filled</h1>');

});

module.exports=router;