const Sequelize = require('sequelize');
const sequelize = require('../services/database');


class Arm extends Sequelize.Model{



}

Arm.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false

    },
    short_description: {
        type: Sequelize.STRING,
        allowNull: false

    },

    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },



}, {
    sequelize,
    modelName: 'arm',
    timestamps: false
});

Arm.sync();

module.exports = Arm;
