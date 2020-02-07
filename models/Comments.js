const Sequelize = require('sequelize');
const sequelize = require('../services/database');


class Comments extends Sequelize.Model{



}



Comments.init({
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
    modelName: 'comments',
    timestamps: false
});


Comments.sync();

module.exports = Comments;