const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const checkSignIn = require('../../middleware/checkSignIn');
const md5 = require('md5');




router.get('/', async (req, res, next) => {
    try {

        res.render('admin/signup/Create');

    } catch (e) {
        next(e)
    }
});

router.post('/', function(req, res){
    if(!req.body.username || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    }
    const newUser = {
                    username: req.body.username,
                    password: md5(req.body.password),
                    email: req.body.email};

    Users.create(newUser);
    req.session.user = newUser;
    res.redirect('signup/Login');

});



router.get('/protected_page', checkSignIn, async (req, res, next) => {
    try {

        res.render('admin/signup/Protected_page', {username: req.session.user.username})

    } catch (e) {
        next(e)
    }
});


router.get('/login', async (req, res, next) => {
    try {

        res.render('admin/signup/Login');

    } catch (e) {
        next(e)
    }
});





module.exports = router;
