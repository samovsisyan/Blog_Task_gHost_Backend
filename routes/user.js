const Sequelize = require('sequelize');
const models = require('../models/Users');
const express = require('express');

const router = express.Router();

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

// router.post('/create', async (req, res, next) => {
//     try {
//         const {
//             username,
//             password,
//             email,
//             role,
//             img,
//
//         } = req.body;
//         const users = await models.create({
//             username,
//             password,
//             email,
//             role,
//             img
//         });
//         res.json({
//             status: 'ok',
//             users,
//         })
//
//     } catch (e) {
//         next(e)
//     }
// });


router.post('/', async (req, res, next) => {
    try {

        // const { name, description, user_id, blog_id } = req.param("id");
        // const name = req.param("name");
        // const description = req.param("description");
        // const user_id = req.param("user_id");
        // const blog_id = req.param("blog_id");
        const {  username, password, email, role, img } = req.body;

        const users = await models.create({
            username,
            password,
            email,
            role,
            img
        });

        res.send({
            status: "ok",
            users
        })

    } catch (e) {
        next(e)

    }
});


module.exports = router;
