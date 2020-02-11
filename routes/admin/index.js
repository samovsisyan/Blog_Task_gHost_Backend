module.exports = {
    // users: require('./users'),
    types: require('./blog'),
    // regions: require('./comments'),
    // regions: require('./profile'),
    // regions: require('./admin'),

};

const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
// router.use('/users', require('./users'));
// router.use('/comments', require('./comments'));
// router.use('/profile', require('./profile'));
// router.use('/admin', require('./admin'));


router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Express' });
});


module.exports = router;
