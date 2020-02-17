const Sequelize = require('sequelize');
const models = require('../../models/Comments');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const comments = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });

        res.render('admin/comments/Home', {comments: comments});
    } catch (e) {
        next(e)
    }
});


router.post('/', async (req, res, next) => {
    try {
        const {description, user_id, blog_id, name} = req.body;

        await models.create({
            name,
            description,
            user_id,
            blog_id,
        });

        res.send({
            status: "ok",
            message: "create comments"
        })

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
