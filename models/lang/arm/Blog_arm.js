const Sequelize = require('sequelize');
const sequelize = require('../../../services/database');


class Blog_arm extends Sequelize.Model{



}

Blog_arm.init({
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
    // updated_at: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },

    img: {
        type: Sequelize.STRING,
        allowNull: false

    }


}, {
    sequelize,
    modelName: 'blog_arm',
    timestamps: false
});

Blog_arm.sync();

module.exports = Blog_arm;