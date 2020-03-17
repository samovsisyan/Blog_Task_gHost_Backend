const Sequelize = require('sequelize');
const models = require('../../models/Comments');
const blog = require('../../models/Blog');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const comments = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });
        if (req.session.user) {
            res.render('admin/comments/Home', {comments: comments});
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});


router.get('/create', async (req, res, next) => {
    try {

        const comments = await models.findAll({});
        if (req.session.user) {
            res.render('admin/comments/Create', {comments:comments} )
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


        const {description, user_id, blog_id, name } = req.body;

        await models.create({
            description,
            user_id,
            blog_id,
            name,
        });
        if (req.session.user) {
            res.redirect('/admin/comments')
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
        res.redirect('/admin/comments')


    } catch (e) {
        next(e)
    }
});



module.exports = router;
