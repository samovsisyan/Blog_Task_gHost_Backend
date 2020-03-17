const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/comment', require('./user'));
router.use('/user', require('./user'));

module.exports = router;



// module.exports = {
//   users: require('./users'),
//   types: require('./blog'),
//   regions: require('./admin/comments'),
//   comments: require('./comments'),
//   user: require('./user'),
//   // regions: require('./admin'),
//
// };


router.use('/blog', require('./blog'));
router.use('/admin/home', require('./home'));
router.use('/users', require('./users'));
router.use('/user', require('./user'));

router.use('/admin_comments', require('./admin/comments'));
router.use('/profile', require('./profile'));
// router.use('/admin', require('./admin'));
router.use('/admin', require('./admin/index'));
router.use('/admin/blog', require('./admin/blog'));
router.use('/admin/login', require('./admin/login'));


router.use('/admin', require('./admin/index'));
router.use('/admin/user', require('./admin/user'));


router.use('/user/signin', require('./user/signin'));
router.use('/user/signup', require('./user/signup'));
router.use('/user/login', require('./user/login'));
router.use('/contact', require('./contact'));
router.use('/admin/comments', require('./admin/comments'));
router.use('/comments', require('./comments'));



router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});


module.exports = router;






























// const express = require('express');
// const router = express.Router();
//
// router.use('/blog', require('./blog'));
// router.use('/users', require('./users'));
// router.use('/user', require('./user'));
// router.use('/profile', require('./profile'));
// router.use('/contact', require('./contact'));
// router.use('/comments', require('./comments'));
//
// router.use('/admin', require('./admin/index'));
// router.use('/admin/blog', require('./admin/blog'));
// router.use('/admin/login', require('./admin/login'));
// router.use('/admin/user', require('./admin/user'));
// router.use('/admin/comments', require('./admin/comments'));
// router.use('/admin_comments', require('./admin/comments'));
// router.use('/admin/home', require('./home'));
//
// router.use('/user/signin', require('./user/signin'));
// router.use('/user/signup', require('./user/signup'));
// router.use('/user/login', require('./user/login'));
//
//
// module.exports = router;
// router.use('/user/signin', require('./user/signin'));
// router.use('/user/signup', require('./user/signup'));
// router.use('/user/login', require('./user/login'));
// router.use('/contact', require('./contact'));
// router.use('/admin/comments', require('./admin/comments'));
// router.use('/comments', require('./comments'));
//
//
//
// router.use('/blog', require('./blog'));
// router.use('/admin/home', require('./home'));
// router.use('/users', require('./users'));
// router.use('/user', require('./user'));
//
// router.use('/admin_comments', require('./admin/comments'));
// router.use('/profile', require('./profile'));
// router.use('/admin', require('./admin/index'));
// router.use('/admin/blog', require('./admin/blog'));
// router.use('/admin/login', require('./admin/login'));
//
//
// router.use('/admin', require('./admin/index'));
// router.use('/admin/user', require('./admin/user'));
//
//
//
//
//
//
//
//
//
//
// module.exports = {
//   users: require('./users'),
//   types: require('./blog'),
//   regions: require('./admin/comments'),
//   comments: require('./comments'),
//   user: require('./user'),
//
// };
//
//
//
//
//
// router.get('/', function(req, res, next) {
//   res.render('Home', { title: 'Express' });
// });
//
//
// module.exports = router;
//

