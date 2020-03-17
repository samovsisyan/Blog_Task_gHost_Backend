const Sequelize = require('sequelize');
const sequelize = require('../services/database');
// const md5 = require('md5');


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
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: 'email'

    },
    role: {
        // type: Sequelize.ENUM('admin', 'user'),
        type: Sequelize.STRING,
        allowNull: true,
        // defaultValue: "user",
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true

    }

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
