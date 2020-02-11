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
















module.exports = router;
