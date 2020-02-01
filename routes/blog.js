const Sequelize = require('sequelize');
const models = require('../models/Blog');
const express = require('express');

const router = express.Router();

/* GET blog listing. */
router.get('/', async (req, res, next) => {
    try {
        const blog = await models.findAll();
        res.json({
            status: 'ok',
            blog,
        })
    } catch (e) {
        next(e)

    }
});

module.exports = router;