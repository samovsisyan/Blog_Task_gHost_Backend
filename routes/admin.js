const Sequelize = require('sequelize');
const models = require('../models/Blog');
const express = require('express');
const router = express.Router();




/* GET blog listing. */
router.post('/', async (req, res, next) => {
    try {
        const {title, description, short_description, slug} = req.body;

        await models.create({
            title,
            description,
            short_description,
            slug,
        });

        res.send({
            status: "ok",
            message: "Create New Blog"
        })

    } catch (e) {
        next(e)

    }
});





module.exports = router;
