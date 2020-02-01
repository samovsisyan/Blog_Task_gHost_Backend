module.exports = {
  users: require('./users'),
  blog: require('./blog'),
};

const express = require('express');
const router = express.Router();

router.use('/blog', require('./blog'));

router.get('/blog', function(req, res, next) {
  res.render('Hello');
});
module.exports = router;

