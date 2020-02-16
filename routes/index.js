// // module.exports = {
// //   users: require('./users'),
// //   blog: require('./blog'),
// // };
//
// const express = require('express');
// const router = express.Router();
//
// router.use('/blog', require('./blog'));
// router.use('/users', require('./users'));
//
// // router.get('/blog', function(req, res, next) {
// //   res.render('Hello');
// // });
// module.exports = router;
//


module.exports = {
  users: require('./users'),
  types: require('./blog'),
  regions: require('./comments'),
  regions: require('./profile'),
  // regions: require('./admin'),

};

const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
router.use('/adminblog', require('./adminblog'));
router.use('/users', require('./users'));
router.use('/comments', require('./comments'));
router.use('/profile', require('./profile'));
// router.use('/admin', require('./admin'));
router.use('/admin', require('./admin/index'));
router.use('/admin/blog', require('./admin/blog'));

router.use('/admin', require('./admin/index'));
router.use('/admin/user', require('./admin/user'));


router.use('/user/signin', require('./user/signin'));
router.use('/user/signup', require('./user/signup'));
router.use('/user/login', require('./user/login'));

// router.use('/lang', require('./lang/index'));
// router.use('/lang/am', require('./lang/am'));
// router.use('/lang/en', require('./lang/en'));
// router.use('/lang/ru', require('./lang/ru'));
// router.use('/lang/ru', require('./lang/ru'));


router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});


module.exports = router;
