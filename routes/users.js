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



router.put('/', async (req, res, next) => {
    try {
        const {
            username,
            password,
            email,
            role,

        } = req.body;
        const users = await models.create({
            username,
            password,
            email,
            role,
        });
        res.json({
            status: 'ok',
            users,
        })

    } catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {
            id,
            username,
            password,
            email,
            role,
        } = req.body;
        const users = await models.update({
            username,
            password,
            email,
            role,
        }, {where: {id}});
        res.json({
            status: 'ok',
            users: {
                id,
                username,
                password,
                email,
                role,
            },
        });

    } catch (e) {
        next(e)
    }

});


router.delete('/', async (req, res, next) => {
    try {
        const userID = req.param('id');
        await models.destroy({
            where: {
                "id": userID
            }
        });
        res.json({
            status: 'ok',
        })
    } catch (e) {
        next(e)
    }
});



module.exports = router;
