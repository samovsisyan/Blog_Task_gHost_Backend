const Sequelize = require('sequelize');
const models = require('../../models/Blog');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        // const blogs = await models.findAll({});

        res.render('lang/Arm', );
    } catch (e) {
        next(e)
    }
});

// router.get('/am', async (req, res, next) => {
//     try {
//
//         const blog = await models.findAll({});
//         res.render('lang/am' )
//     } catch (e) {
//         next(e)
//     }
// });



module.exports = router;
