const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const app = express();
const authRouter = require('./routes/auth');
const tasksRouter = require('./routes/tasks');
const productionsRouter = require('./routes/prods');
const port = 3001;

// Connection à MongoDB
mongoose.connect('mongodb://localhost:27017/tasks');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middlewares
// Middleware pour parcourir la charge utile de la requête http
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Mettre à true en production avec https
}));

// Routage
// Les requêtes sur /api/auth sont routées par authRouter
app.use('/api/auth', authRouter);
app.use('/api/prods', productionsRouter);


// Page par défaut du serveur
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});