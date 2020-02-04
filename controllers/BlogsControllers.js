const Commentds = require('../models/Comments');

CommentsController = {};

CommentsController.getComments = async (body) => {
    const {data} = body;
    return await Commentds.getComments(data);
};

module.exports = CommentsController;
