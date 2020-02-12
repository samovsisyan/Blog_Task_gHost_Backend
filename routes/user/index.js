module.exports = {
    user: require('../admin/user'),

    signin: require('./signin'),
    signup: require('./signup'),


};

const express = require('express');
const router = express.Router();

router.use('/user', require('../admin/user'));


router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));



router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Express' });
});


module.exports = router;
