module.exports = {
    blog: require('./blog'),
    user: require('./user'),
    comments: require('./comments'),


};

const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
router.use('/user', require('./user'));
router.use('/login', require('./login'));
router.use('/home', require('./home'));
router.use('/comments', require('./comments'));




router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Express' });
});


module.exports = router;
