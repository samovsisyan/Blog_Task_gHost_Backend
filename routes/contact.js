const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {


        res.render('Contact');
    } catch (e) {
        next(e)
    }
});


module.exports = router;
