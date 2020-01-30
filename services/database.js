const Sequelize = require('sequelize');
const config = require('../config');

const {database, user, password} = config.mysql;

const sequelize = new Sequelize(database, user, password, {
    // host,
    dialect: "mysql",
    timestamps: false,
    operatorsAliases: false,
});

module.exports = sequelize;

