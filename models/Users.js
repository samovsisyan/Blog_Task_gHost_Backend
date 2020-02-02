const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Users extends Sequelize.Model {

}

Users.init({
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
    modelName: 'users',
    timestamps: false
});

Users.sync();


module.exports = Users;
