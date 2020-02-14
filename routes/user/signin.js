const Sequelize = require('sequelize');
// const models = require('../../models/Users');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        // const blogs = await models.findAll({});

        res.render('user/signin/Create');
    } catch (e) {
        next(e)
    }
});


module.exports = router;
