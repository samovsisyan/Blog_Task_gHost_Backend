const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const checkSignIn = require('../../middleware/checkSignIn');



router.get('/', async (req, res, next) => {
    try {

        res.render('user/signup/Create');

    } catch (e) {
        next(e)
    }
});

router.post('/signup', function(req, res){
    if(!req.body.id || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        Users.filter(function(user){
            if(user.id === req.body.id){
                res.render('user/signup/Create', {
                    message: "User Already Exists! Login or choose another user id"});
            }
        });
        const newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('user/signup/Protected_page');
    }
});





//
// router.get('/protected_page', checkSignIn, function(req, res){
//     res.render('user/signup/protected_page', {id: req.session.user.id})
// });
//
//
// router.get('/login', function(req, res){
//     res.render('login');
// });



module.exports = router;
