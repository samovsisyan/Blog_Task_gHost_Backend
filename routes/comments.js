const Sequelize = require('sequelize');
const models = require('../models/Comments');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {secret} = require('../config');


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
        const {name, description, blog_id} = req.body;
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401).send({auth: false, message: 'No token provided.'});

        let user_id = jwt.verify(token, secret, function (err, decoded) {
            if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

            return decoded.id;
        });

        const comments = await models.create({
            name,
            description,
            user_id,
            blog_id,
        });

        return res.send({status: "ok", comments})
    } catch (e) {
        next(e)
    }
});


module.exports = router;
