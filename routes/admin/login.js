const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const md5 = require('md5');


router.get('/', async (req, res, next) => {
    try {

        res.render('admin/signup/Login');

    } catch (e) {
        next(e)
    }
});


router.post('/', async (req, res) => {
    try {
        console.log(Users);
        if (!req.body.username || !req.body.password) {
            res.render('login', {message: "Please enter both id and password"});
        } else {

            const user  =  await Users.findOne(
                {
                    where: {
                        username: req.body.username,
                        password: md5(req.body.password),
                    }
                });

            if (user) {
                req.session.user = user;
                res.redirect('/admin/home');
            } else {
                res.redirect("/admin/login");
            }


            // Users.findOne(function(user){
            //     if(user.username === req.body.username && user.password === md5(req.body.password)){
            //         req.session.user = user;
            //         res.redirect('signup/protected_page');
            //     }
            // });
            // res.render('signup/Protected_page', {message: "Invalid credentials!"});
        }
    } catch (e) {
        next(e)
    }
});

router.get('/logout', function(req, res){
    req.session.destroy(function(){
        console.log("user logged out.")
    });
    res.redirect('/admin/login');
});


module.exports = router;
