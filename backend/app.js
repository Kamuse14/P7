const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path'); // donne le chemin du fichier (image)

const env = require('dotenv');
env.config();

const commentsRoutes = require('./routes/comment')
const postsRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// connexion à la base de données mongoDB
mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-q8tcw.mongodb.net/Groupomania?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  mongoose.set('useCreateIndex', true);

// ajout de headers pour permettre la communication des deux origines (3000 et 8080)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images'))); // (__dirname= nom du dossier)

app.use('/api/comments', commentsRoutes);
// ou bien ??? app.use('/api/posts/:id/comments', commentsRoutes);
// mais dans ce cas-là, on doit en tenir compte
app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;