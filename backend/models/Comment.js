const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    userPseudo: { type: String, required: true }, // = user.pseudo
	body: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);