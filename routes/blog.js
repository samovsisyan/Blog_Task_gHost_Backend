const express = require('express');
const router = express.Router();
const models = require('../models/Blog');




/* GET users listing. */
router.get('/', async (req, res, next) => {

    try {
        const blog = await models.findAll();
        console.log(blog);
        res.json({
            status: 'ok',
            blog,
        })
    } catch (e) {
        next(e)
    }
});

module.exports = router;



