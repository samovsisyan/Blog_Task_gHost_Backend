const Sequelize = require('sequelize');
const models = require('../models/Users');
const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try {
        const users = await models.findAll();
        res.json({
            status: 'ok',
            users,
        })
    } catch (e) {
        next(e)
    }
});

module.exports = router;
