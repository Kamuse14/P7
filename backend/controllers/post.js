const Post = require('../models/Post');
const fs = require('fs'); //fs: filesystem

// création d'un nouveau sujet
exports.createPost = (req, res, next) => {
	const postObject = JSON.parse(req.body.post);
    delete postObject._id;
	const post = new Post({
	    ...postObject, 
	    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
  });
	// enregistre l'objet dans la bd et retourne une promesse
  post.save() 
	  .then(() => res.status(201).json({ message: 'Post enregistré'}))  
	  .catch(error => res.status(400).json({ error }));
};

// modification d'un sujet (si l'utilisateur en est le créateur)
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ? 
    { 
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
    } : { ...req.body };
  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(post => res.status(200).json({ message: 'Post modifié'}))
    .catch(error => res.status(400).json({ error })); 
};

// suppression d'un sujet (si l'utilisateur en est le créateur)
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post supprimé'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

// lecture d'un sujet
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id})
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error })); // 404 (objet non trouvé)
};

// lecture de tous les sujets
exports.getAllPosts = (req, res, next) => { 
 Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};

      
  


