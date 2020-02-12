const Sequelize = require('sequelize');
const models = require('../../models/Users');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const user = await models.findAll({});

        res.render('user/signup/Create', { user: user });
    } catch (e) {
        next(e)
    }
});


// router.get('/update/:id', async (req, res, next) => {
//     try {
//         const {id} = req.params;
//
//         const user = await models.findOne({id: id});
//         res.render('admin/blog/Update', {user: user})
//     } catch (e) {
//         next(e)
//     }
// });


router.post('/create', async (req, res, next) => {
    try {

        const {username, password, email, role,} = req.body;

        await models.create({
            username,
            password,
            email,
            role,
        });

        res.send({
            status: "ok",
        })

    } catch (e) {
        next(e)

    }
});


module.exports = router;
