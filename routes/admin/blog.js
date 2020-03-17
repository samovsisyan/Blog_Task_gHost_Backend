const Sequelize = require('sequelize');
const models = require('../../models/Blog');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const blogs = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });
        if (req.session.user) {
        res.render('admin/blog/Home', {blogs: blogs});
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});


router.get('/create', async (req, res, next) => {
    try {

        const blog = await models.findAll({});
        if (req.session.user) {
            res.render('admin/blog/Create', {blog:blog} )
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


        const {title, description, short_description, img, } = req.body;

        await models.create({
            title,
            description,
            short_description,
            img,
        });
        if (req.session.user) {
            res.redirect('/admin/blog')
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

        const blog = await models.findOne({where: {id:id}});
        console.log(blog)
        if (req.session.user) {
            res.render('admin/blog/Update', {blog:blog})
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});


router.post('/blog/:id', async (req, res, next) => {
    try {
        const blogID = req.param('id');
        await models.destroy({
            where: {
                "id": blogID
            }
        });
        if (req.session.user) {
            res.redirect('admin/blog')
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
        res.redirect('/admin/blog')


    } catch (e) {
        next(e)
    }
});



module.exports = router;
