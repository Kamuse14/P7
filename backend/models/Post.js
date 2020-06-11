const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userPseudo: { type: String, required: true }, // = user.pseudo
	title: { type: String, required: true },
	body: { type: String, required: true },
    imageUrl: { type: String },
    date: { type: Date, default: Date.now },
    comments: [{ userPseudo: String, body: String, date: Date }],
    // ou bien ?
    // comments: {
    //     userPseudo: { type: String, required: true },
    //     body: { type: String, required: true },
    //     date: { type: Date }
    // }
});

module.exports = mongoose.model('Post', postSchema);