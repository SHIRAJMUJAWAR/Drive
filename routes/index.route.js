const mongoose = require('mongoose');
const express = require('express');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/home', auth , (req, res) => {
    res.render('home');
});

module.exports = router;     