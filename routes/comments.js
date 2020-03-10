const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const comments = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });

        res.send({
            status: "ok",
            comments
        })
    } catch (e) {
        next(e)
    }
});


router.post('/create', async (req, res, next) => {
    try {

        const {name, description, user_id, blog_id} = req.body;

        const comments = await models.create({
            name,
            description,
            user_id,
            blog_id,

        });

        res.send({
            status: "ok",
            comments
        })

    } catch (e) {
        next(e)

    }
});



module.exports = router;
