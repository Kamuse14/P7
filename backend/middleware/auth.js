const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		// on sait quelle forme a ce token : on récupère (avec split) 
		// la partie qui nous intéresse (après "Bearer")
		const token = req.headers.authorization.split(' ')[1]; 
		const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
		const userId = decodedToken.userId;
		// si on a un userId dans la requête, on vérifie qu'il correspond bien à celui du token
		if (req.body.userId && req.body.userId !== userId) {
            // on n'authentifie pas la requête
			throw 'User ID non valable'; 
		} else {
            // sinon on authentifie la requête
			next(); 
		}

	} catch (error) {
		res.status(401).json({ error: error | 'Requête non authentifiée'});
	}
};