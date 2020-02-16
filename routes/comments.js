const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const {description, user_id, blog_id, name} = req.body;

        await models.create({
            name,
            description,
            user_id,
            blog_id,
        });

        res.send({
            status: "ok",
            message: "create comments"
        })

    } catch (e) {
        next(e)

    }
});


module.exports = router;
