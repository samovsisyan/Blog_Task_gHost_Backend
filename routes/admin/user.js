const Sequelize = require('sequelize');
const models = require('../../models/Users');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const user = await models.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });

        res.render('admin/user/Home', {user: user});
    } catch (e) {
        next(e)
    }
});

router.get('/create', async (req, res, next) => {
    try {

        const user = await models.findAll({});
        res.render('admin/user/Create', {user:user} )
    } catch (e) {
        next(e)
    }
});


router.post('/create', async (req, res, next) => {
    try {
        // const created_at = new Date();


        const {username, password, email, role, img } = req.body;

        await models.create({
            username,
            password,
            email,
            role,
            img,
        });

        res.redirect('/admin/user')

    } catch (e) {
        next(e)

    }
});


router.get('/update/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        const user = await models.findOne({where: {id:id}});
        res.render('admin/user/Update', {user:user})
    } catch (e) {
        next(e)
    }
});

router.get('/delete/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        await models.destroy({where: {id: id}});
        res.redirect('/admin/user')


    } catch (e) {
        next(e)
    }
});



























// router.get('/create', async (req, res, next) => {
//     try {
//
//         const user = await models.findAll({});
//         res.render('admin/user', {user: user})
//     } catch (e) {
//         next(e)
//     }
// });


// router.post('/create', async (req, res, next) => {
//     try {
//         // const created_at = new Date();
//
//
//         const {username, password, email, role, img,} = req.body;
//
//         await models.create({
//             username,
//             password,
//             email,
//             role,
//             img,
//         });
//
//         res.redirect('/admin/user')
//
//     } catch (e) {
//         next(e)
//
//     }
// });


// router.get('/update/:id', async (req, res, next) => {
//     try {
//         const {id} = req.params;
//
//         const user = await models.findOne({id: id});
//         res.render('admin/user/Update', {user: user})
//     } catch (e) {
//         next(e)
//     }
// });
//
//
//
//
// router.post('/update/:id', async (req, res, next) => {
//     try {
//         const {id} = req.params;
//
//         const {
//             username,
//             password,
//             email,
//             role,
//             img,
//         } = req.body;
//
//         await models.update({
//             username,
//             password,
//             email,
//             role,
//             img,
//         }, {where: {id: id}});
//
//         res.redirect('/admin/user')
//
//     } catch (e) {
//         next(e)
//     }
//
// });
//
//
// router.post('/user/:id', async (req, res, next) => {
//     try {
//         const userID = req.param('id');
//         await models.destroy({
//             where: {
//                 "id": userID
//             }
//         });
//         res.redirect('admin/user')
//     } catch (e) {
//         next(e)
//     }
// });
//



module.exports = router;
