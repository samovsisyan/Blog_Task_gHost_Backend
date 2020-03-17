// module.exports = {
//     user: require('../admin/user'),
//
//     signup: require('./signup'),
//     login: require('./login'),
//
//
// };
//
// const express = require('express');
// const router = express.Router();
//
// router.use('/user', require('../admin/user'));
//
//
// router.use('/signup', require('./signup'));
// router.use('/login', require('./login'));
//
//
//
// router.get('/', function(req, res, next) {
//     res.render('Home', { title: 'Express' });
// });
//
//
// module.exports = router;


module.exports = {
    login: require('./login'),
    // signin: require('./signin'),
    // signup: require('./signup'),

};
