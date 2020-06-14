// package de cryptage pour les mdp 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const emailValidator = require("email-validator"); // format email

// Création de nouveaux Users dans la db à partir de la connexion de l'inscription 
const User = require('../models/User');

// inscription d'un nouvel utilisateur
exports.signup = (req, res, next) => { 
	if (!emailValidator.validate(req.body.email)) {
		 return res.status(400).json({ error: "Format de l'email invalide" });
	}
	//on hash le mdp en async
	bcrypt.hash(req.body.password, 10) 
		.then(hash => {
			const user = new User({
                pseudo: req.body.pseudo,
				email: req.body.email, // adresse dans le corps de la requête
				password: hash //mdp crypté
			});
			user.save() //pour enregistrer ds la db
				.then(() => res.status(201).json({ message: 'Utilisateur créé'}))
				.catch(error => res.status(400).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

// connexion d'un utilisateur ayant déjà un compte
exports.login = (req, res, next) => {
	User.findOne({ pseudo: req.body.pseudo })
		.then(user => { 
			if (!user) { // on vérifie si l'U existe déjà
				return res.status(401).json({ error: 'Utilisateur non trouvé'});
			}
	
			// on compare le mdp rentré par l'U  et celui hashé
			bcrypt.compare(req.body.password, user.password)
				.then(valid => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect'});
					}
					res.status(200).json({
						userId: user._id, 
						token: jwt.sign(
							{ userId: user._id },
							'RANDOM_TOKEN_SECRET', // clé secrète pour l'encodage
							{ expiresIn: '24h'}  // argument de configuration (expiration)
						)
					});
				})
				.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};

// suppression d'un compte utilisateur
exports.delacount = (req, res, next) => {
    User.findOne({ pseudo: req.body.pseudo })
		.then(user => { 
			if (!user) { 
				return res.status(401).json({ error: 'Utilisateur non trouvé'});
			}
			bcrypt.compare(req.body.password, user.password)
				.then(valid => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect'});
					}
					User.deleteOne({ _id: req.body.id })
                        .then(() => res.status(200).json({ message: 'Compte supprimé'}))
                        .catch(error => res.status(400).json({ error }));
                    })
				.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(500).json({ error }));
};