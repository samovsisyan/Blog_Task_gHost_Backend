const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Blog extends Sequelize.Model{

    }

Blog.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    short_description: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },


}, {
    sequelize,
    modelName: 'blog',
    timestamps: false
});

Blog.sync();


module.exports = Blog;
