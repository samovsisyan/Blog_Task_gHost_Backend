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

        res.render('admin/comments/Home', {comments: comments});
    } catch (e) {
        next(e)
    }
});


router.get('/create', async (req, res, next) => {
    try {

        const comments = await models.findAll({});
        res.render('admin/comments/Create', {comments:comments} )
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

        res.redirect('/admin/comments')

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























//
// router.get('/update/:id', async (req, res, next) => {
//     try {
//         const {id} = req.params;
//
//         const comment = await models.findOne({where: {id:id}});
//         res.render('admin/comment/Update', {comment:comment})
//     } catch (e) {
//         next(e)
//     }
// });


// router.post('/', async (req, res, next) => {
//     try {
//         const blog = await models.findOne({});
//
//         const {description, user_id, blog_id, name} = req.body;
//
//         await models.create({
//             name,
//             description,
//             user_id,
//             blog_id,
//         });
//
//         res.redirect(`blog/details/${blog.id}`)
//
//     } catch (e) {
//         next(e)
//
//     }
// });
//




module.exports = router;
