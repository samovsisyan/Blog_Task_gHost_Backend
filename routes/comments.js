const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res, next) => {
    try {
        const {description, blog_id, user_id} = req.body;

        // console.log('description - ' + description);
        // console.log('blog_id -' + blog_id);
        // console.log('user_id -' + user_id);

        await models.create({
            description,
            user_id,
            blog_id,
        });

        res.send({status: "ok"})

    } catch (e) {
        next(e)

    }
});




module.exports = router;
