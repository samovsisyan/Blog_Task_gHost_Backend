const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const comments = await models.findAll();
        res.json({
            status: 'ok',
            comments,
        })
    } catch (e) {
        next(e)

    }
});




module.exports = router;
