const Sequelize = require('sequelize');
const models = require('../models/Users');
const express = require('express');
const md5 = require('md5');

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



router.post('/create', async (req, res, next) => {
    try {

        // const { name, description, user_id, blog_id } = req.param("id");
        // const name = req.param("name");
        // const description = req.param("description");
        // const user_id = req.param("user_id");
        // const blog_id = req.param("blog_id");
        const {  username, password, email, role, img } = req.body;

        const users = await models.create({
            username,
            password: md5(req.body.password),
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


// router.post('/', async (req, res, next) => {
//     try {
//         const {
//             id,
//             username,
//             password,
//             email,
//             role,
//         } = req.body;
//         const users = await models.update({
//             username,
//             password,
//             email,
//             role,
//         }, {where: {id}});
//         res.json({
//             status: 'ok',
//             users: {
//                 id,
//                 username,
//                 password,
//                 email,
//                 role,
//             },
//         });
//
//     } catch (e) {
//         next(e)
//     }
//
// });


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
