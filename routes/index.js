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


const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));
router.use('/users', require('./users'));

router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});








module.exports = router;
