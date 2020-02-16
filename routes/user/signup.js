const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const checkSignIn = require('../../middleware/checkSignIn');
const md5 = require('md5');




router.get('/', async (req, res, next) => {
    try {

        res.render('user/signup/Create');

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

// router.get('/protected_page', checkSignIn, function(req, res){
//     res.render('user/signup/Protected_page', {username: req.session.user.username})
// });

router.get('/protected_page', checkSignIn, async (req, res, next) => {
    try {

        res.render('user/signup/Protected_page', {username: req.session.user.username})

    } catch (e) {
        next(e)
    }
});


router.get('/login', async (req, res, next) => {
    try {

        res.render('user/signup/Login');

    } catch (e) {
        next(e)
    }
});


// app.post('/login', function(req, res){
//     console.log(Users);
//     if(!req.body.id || !req.body.password){
//         res.render('login', {message: "Please enter both id and password"});
//     } else {
//         Users.filter(function(user){
//             if(user.id === req.body.id && user.password === req.body.password){
//                 req.session.user = user;
//                 res.redirect('/protected_page');
//             }
//         });
//         res.render('login', {message: "Invalid credentials!"});
//     }
// });






module.exports = router;
