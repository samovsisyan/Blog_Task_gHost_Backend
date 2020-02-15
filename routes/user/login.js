const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();






router.get('/', async (req, res, next) => {
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
