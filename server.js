const express = require('express');
const path = require('path');
const cors = require('cors');
const client = require('./mongodb.utils').client;
const jwtCheck = require('./auth0.utils');

const getMovies = require('./controllers/getMovies');
const addMovie = require('./controllers/addMovie');
const deleteMovie = require('./controllers/deleteMovie');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/get-movies', (req, res) => {
    getMovies(req, res, client);
});

app.post('/add-movie', jwtCheck, (req, res) => {
    addMovie(req, res, client);
});

app.delete('/delete-movie', jwtCheck, (req, res) => {
    deleteMovie(req, res, client);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});