const Sequelize = require('sequelize');
const sequelize = require('../../../services/database');


class Comments_arm extends Sequelize.Model{



}



Comments_arm.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    blog_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    }



}, {
    sequelize,
    modelName: 'comments_arm',
    timestamps: false
});


Comments_arm.sync();

module.exports = Comments_arm;
