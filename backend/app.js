const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();



// connexion à la base de données mongoDB
mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0-q8tcw.mongodb.net/Groupomania?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  mongoose.set('useCreateIndex', true);

//ajout de headers pour permettre la communication des deux origines (3000 et 8080)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/posts', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });

app.use('/api/posts', (req, res, next) => {
    const post = [
      {
        _id: '2',
        titre: 'Mon premier sujet',
        texte: 'Les infos de mon premier sujet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        userId: 'qsomihvqios',
        pseudo: 'Mimi',
        created_at : 'le 11/06/2020',
      },
      {
        _id: '1',
        titre: 'Mon deuxième sujet',
        texte: 'Les infos de mon deuxième sujet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        userId: 'qsomihvqios',
        pseudo: 'Mimi',
        created_at : 'le 10/06/2020',
      },
    ];
    res.status(200).json(post);
  });

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;