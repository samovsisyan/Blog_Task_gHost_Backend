const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage }).single('profileImage')


router.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // Случилась ошибка Multer при загрузке.
        }
        res.json({
            success: true,
            message: "Image uploads"
        })
    })
});


module.exports = router;
