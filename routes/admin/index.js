module.exports = {

    blog: require('./blog'),
    user: require('./user'),


};

const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
router.use('/user', require('./user'));
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));



router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Express' });
});


module.exports = router;
