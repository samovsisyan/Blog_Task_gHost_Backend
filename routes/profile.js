const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage }).single('profileImage')


router.post('/profile', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // Случилась ошибка Multer при загрузке.
        } else {
            // При загрузке произошла неизвестная ошибка.
        }

        // Все прекрасно загрузилось.
    })
});


module.exports = router;
