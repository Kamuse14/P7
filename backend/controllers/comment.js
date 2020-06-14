const Comment = require('../models/Comment');

// création d'un nouveau commentaire
exports.createComment = (req, res, next) => {
	const commentObject = JSON.parse(req.body.comment);
    delete commentObject._id;
	const comment = new Comment({
	    ...commentObject, 	  
    });
  comment.save() 
	  .then(() => res.status(201).json({ message: 'Commentaire enregistré'}))  
	  .catch(error => res.status(400).json({ error }));
};

// modification d'un commentaire (si l'utilisateur en est le créateur)
exports.modifyComment = (req, res, next) => {
  const commentObject = new Comment({
    ...commentObject, 	  
    });
    Comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
    .then(comment => res.status(200).json({ message: 'Commentaire modifié'}))
    .catch(error => res.status(400).json({ error })); 
};

// suppression d'un commentaire (si l'utilisateur en est le créateur)
exports.deleteComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id })
    .then(comment => {
        Comment.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Commentaire supprimé'}))
          .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// lecture d'un commentaire
exports.getOneComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id})
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({ error })); 
};

// lecture de tous les commentaires
exports.getAllComments = (req, res, next) => { 
    Comment.find()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
};

      
  


