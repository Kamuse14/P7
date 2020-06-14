const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    //userPseudo: { type: String, required: true }, // = user.pseudo
	title: { type: String, required: true },
	txt: { type: String, required: true },
    imageUrl: { type: String },
    created_at: { type: Date, default: Date.now },
    //comment: [{userId: String, userPseudo: String, txt: String, created_at: Date}]
});

module.exports = mongoose.model('Post', postSchema);