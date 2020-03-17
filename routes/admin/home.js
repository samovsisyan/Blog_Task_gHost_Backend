const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        if (req.session.user) {
            res.render("/admin/Home");
        }else {
            res.redirect("/admin/login");
        }
    } catch (e) {
        next(e)
    }
});


module.exports = router;
