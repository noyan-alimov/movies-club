const express = require('express');
const cors = require('cors');
const client = require('./mongodb.utils').client;
const getMovies = require('./controllers/getMovies');
const addMovie = require('./controllers/addMovie');
const deleteMovie = require('./controllers/deleteMovie');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/get-movies', (req, res) => {
    getMovies(req, res, client);
});

app.post('/add-movie', (req, res) => {
    addMovie(req, res, client);
});

app.delete('/delete-movie/:id', (req, res) => {
    deleteMovie(req, res, client);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});