const Sequelize = require('sequelize');
const models = require('../../models/Blog');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        // const blogs = await models.findAll({});

        res.render('lang/Eng', );
    } catch (e) {
        next(e)
    }
});



module.exports = router;
