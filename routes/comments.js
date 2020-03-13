const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


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

        // const { name, description, user_id, blog_id } = req.param("id");
        // const name = req.param("name");
        // const description = req.param("description");
        // const user_id = req.param("user_id");
        // const blog_id = req.param("blog_id");

        const { name, description, user_id, blog_id } = req.body;


        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({auth: false, message: 'No token provided.'});

        jwt.verify(token, config.secret, async (err, decoded) =>  {
            if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

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
        });


        res.status(401).send({status: "No Autorization"});




    } catch (e) {
        next(e)

    }
});



module.exports = router;
