const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    //userPseudo: { type: String, required: true }, // = user.pseudo
	txt: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);