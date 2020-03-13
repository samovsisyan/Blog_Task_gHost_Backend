const Sequelize = require('sequelize');
const Users = require('../../models/Users');
const express = require('express');
const router = express.Router();
const {jwtSecret} = require('../../config');
const {secret} = require('../../config');
const md5 = require('md5');
const jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs');


// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({extended: false}));
// router.use(bodyParser.json());

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({
            status: 'ok',
            users,
        })
    } catch (e) {
        next(e)
    }
});


router.post('/register', function (req, res, next) {
    try {

        Users.create({
            username: req.body.username,
            password: req.body.password,

        });

        // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const token = jwt.sign({id: Users.id}, secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        req.session.token = token;
        return res.status(200).send({auth: true, token: token});


    } catch (e) {
        next(e)
    }
});


router.get('/me', function (req, res, next) {
    try {

        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({auth: false, message: 'No token provided.'});

        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

            res.status(200).send(decoded);

            Users.findById(decoded.id, function (err, user) {
                if (err) return res.status(500).send("There was a problem finding the user.");
                if (!user) return res.status(404).send("No user found.");

                res.status(200).send(user);
            });

        });

    } catch (e) {
        next(e)
    }
});


router.post('/login', async (req, res, next) => {
    try {
        let users = await Users.findOne({
            where: {
                username: req.body.username,
                password: md5(req.body.password)
            }
        });

        const token = jwt.sign({id: users.id}, secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        jwt.verify(token, secret, function (err, decoded) {
            req.session.token = token;
            return res.status(200).send({auth: true, token: token, user: users});
        });

        res.status(401).send({status: "error"});
    } catch (e) {
        next(e)
    }
});


module.exports = router;
