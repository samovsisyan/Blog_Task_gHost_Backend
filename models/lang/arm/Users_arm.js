const Sequelize = require('sequelize');
const sequelize = require('../../../services/database');
const md5 = require('md5');


class Users_arm extends Sequelize.Model {


}

Users_arm.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'username'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        // get() {
        //     return undefined
        // },
        // set(val) {
        //     return md5(val)
        // }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email'

    },
    role: {
        type: Sequelize.ENUM('admin', 'user'),
        allowNull: false,
    },
    // slug: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    //
    // }

}, {
    sequelize,
    modelName: 'users_arm',
    timestamps: false
});

Users_arm.sync();


module.exports = Users_arm;
