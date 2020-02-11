const Sequelize = require('sequelize');
const models = require('../../models/Blog');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const blogs = await models.findAll({});

        res.render('admin/blog/Home', {blogs: blogs});
    } catch (e) {
        next(e)
    }
});



router.get('/create', async (req, res, next) => {
    try {
        const blog = await models.findAll();
        res.render('admin/blog/Create', )
    } catch (e) {
        next(e)
    }
});


router.get('/update', async (req, res, next) => {
    try {
        const blog = await models.findAll();
        res.render('admin/blog/Update', )
    } catch (e) {
        next(e)
    }
});



router.post('/create', async (req, res, next) => {
    try {
        const {title, description, short_description, img, } = req.body;
        const created_at = new Date();

        await models.create({
            title,
            description,
            short_description,
            created_at,
            img,
        });

        res.render('admin/blog/Create')

    } catch (e) {
        next(e)

    }
});



router.post('/update/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        const {
            title,
            description,
            short_description,
            img,
        } = req.body;

        const blog = await models.update({
            title,
            description,
            short_description,
            img,
        }, {where: {id}});

        res.render('admin/blog/Update')

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
        res.send({
            status: "ok",
        })
    } catch (e) {
        next(e)
    }
});




module.exports = router;
