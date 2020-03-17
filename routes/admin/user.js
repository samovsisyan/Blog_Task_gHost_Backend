const Sequelize = require('sequelize');
const models = require('../../models/Users');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const user = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });
        if (req.session.user) {
            res.render('admin/user/Home', {user: user});
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});

router.get('/create', async (req, res, next) => {
    try {

        const user = await models.findAll({});
        if (req.session.user) {
            res.render('admin/user/Create', {user:user} )
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});


router.post('/create', async (req, res, next) => {
    try {
        // const created_at = new Date();


        const {username, password, email, role, img } = req.body;

        await models.create({
            username,
            password,
            email,
            role,
            img,
        });
        if (req.session.user) {
            res.redirect('/admin/user')
        }else {
            res.redirect("/admin/login");
        }

    } catch (e) {
        next(e)

    }
});


router.get('/update/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        const user = await models.findOne({where: {id:id}});
        if (req.session.user) {
            res.render('admin/user/Update', {user:user})
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});

router.get('/delete/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        await models.destroy({where: {id: id}});
        res.redirect('/admin/user')


    } catch (e) {
        next(e)
    }
});


module.exports = router;
