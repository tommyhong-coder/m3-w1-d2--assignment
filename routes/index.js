const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.render('form', { title: 'Registration form'});
});

router.post('/', function(req,res) {
    res.render('form', { title: 'Registration form'});
});

module.exports = router;