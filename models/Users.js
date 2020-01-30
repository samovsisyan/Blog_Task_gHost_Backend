const Sequelize = require('sequelize');
const sequelize = require('../services/database');
const md5 = require('md5');

class Users extends Sequelize.Model {

    static async getUser(data) {
        const user = await this.findOne({
            where: {
                username: data.username,
                password: data.password
            },
        });

        return user;
    }

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
        get() {
            return undefined
        },
        set(val) {
            return md5(val)
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email'

    },
    role: {
        type: Sequelize.ENUM('admin', 'manager', 'payer'),
        allowNull: false,
    }

}, {
    sequelize,
    modelName: 'users',
    timestamps: false
});

Users.sync();


module.exports = Users;
