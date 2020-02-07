const Sequelize = require('sequelize');
const models = require('../models/Blog');
const comments = require('../models/Comments');
const express = require('express');
const router = express.Router();




/* GET blog listing. */
router.get('/', async (req, res, next) => {
    try {
        const blog = await models.findAll({});


        res.render('pages/Section', {blog: blog});
    } catch (e) {
        next(e)
    }
});


router.get('/details/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const blog = await models.findOne(
            {
                where: {
                    id: id
                }});

        const model_comments = await comments.findAll(
            {
                where: {
                    blog_id: id,
                }});

        res.render('blog/Details', {blog: blog, comments:model_comments });
    } catch (e) {
        next(e)
    }
});









// router.get('/', async (req, res, next) => {
//     try {
//         const blog = await models.findAll();
//         res.json({
//            blog,
//         })
//     } catch (e) {
//         next(e)
//
//     }
// });



router.put('/', async (req, res, next) => {
    try {
        const {
            title,
            description,
            short_description,
            slug,

        } = req.body;
        const blog = await models.create({
            title,
            description,
            short_description,
            slug,
        });
        res.json({
            status: 'ok',
            blog,
        })

    } catch (e) {
        next(e)
    }
});


router.post('/create', async (req, res, next) => {
    try {
        const {
            id,
            title,
            description,
            short_description,
            slug,
        } = req.body;
        const blog = await models.update({
            title,
            description,
            short_description,
            slug,
        }, {where: {id}});
        res.json({
            status: 'ok',
            blog: {
                id,
                title,
                description,
                short_description,
                slug,
            },
        });

    } catch (e) {
        next(e)
    }

});


router.delete('/', async (req, res, next) => {
    try {
        const blogID = req.param('id');
        await models.destroy({
            where: {
                "id": blogID
            }
        });
        res.json({
            status: 'ok',
        })
    } catch (e) {
        next(e)
    }
});



router.post('/search', async (req, res, next) => {
    const Op = Sequelize.Op;
    const search = req.param('search');

    try {
        const blog = await models.findAll(
            {
                where:
                    {
                        [Op.or]:
                            [
                                {
                                    'id':
                                        {
                                            [Op.like]: '%' + search + '%',
                                        },
                                },
                                {
                                    'title':
                                        {
                                            [Op.like]: '%' + search + '%',
                                        },
                                },
                                {
                                    'description':
                                        {
                                            [Op.like]: '%' + search + '%',
                                        }
                                },
                                {
                                    'short_description':
                                        {
                                            [Op.like]: '%' + search + '%',
                                        }
                                },
                                {
                                    'slug':
                                        {
                                            [Op.like]: '%' + search + '%',
                                        }
                                }
                            ]
                    },
                // include: [models.Region]
            }
        );
        console.log(blog);
        res.json({
            status: 'ok',
            blog
        })
    } catch (e) {
        next(e)
    }
});



module.exports = router;
