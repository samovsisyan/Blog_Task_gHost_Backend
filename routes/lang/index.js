module.exports = {
    types: require('./am'),
    types: require('./ru'),
    types: require('./en'),


};

const express = require('express');
const router = express.Router();

router.use('/am', require('./am'));
router.use('/en', require('./en'));
router.use('/ru', require('./ru'));



router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Express' });
});


module.exports = router;
