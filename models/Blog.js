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
    slug: {
        type: Sequelize.STRING,
        allowNull: false

    },


}, {
    sequelize,
    modelName: 'blog',
    timestamps: false
});

Blog.sync();

module.exports = Blog;
