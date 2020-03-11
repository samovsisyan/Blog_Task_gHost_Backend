const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const {jwtSecret} = require('../../config');
const {secret} = require('../../config');
const md5 = require('md5');
const jwt = require('jsonwebtoken');



router.get('/', async (req, res, next) => {
    try {

        res.render('user/signup/Login');

    } catch (e) {
        next(e)
    }
});


router.post('/register', function (req, res,next) {
    try {
        // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const token = jwt.sign({id: Users.id}, secret, {
            expiresIn: 86400 // expires in 24 hours
        })

        Users.create({
            username: req.body.username,
            password: md5(req.body.password),

        }),


            res.status(200).send({auth: true, token: token});


    } catch (e) {
        next(e)
    }
});



router.get('/logout', function(req, res){
    req.session.destroy(function(){
        console.log("user logged out.")
    });
    res.redirect('/user/login');
});


module.exports = router;
