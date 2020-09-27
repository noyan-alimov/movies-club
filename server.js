const express = require('express');
const cors = require('cors');

const client = require('./mongodb.utils').client;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/get-movies', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('MoviesClub');
        const collection = db.collection('Movies');
        const cursor = collection.find();
        const movies = await cursor.toArray();

        res.status(200).json({
            success: true,
            data: movies
        });

        await client.close();
    } catch (error) {
        console.log('Error with get request all movies: ', error);

        res.status(500).json({
            success: false
        })
    }
})

app.post('/add-movie', async (req, res) => {
    try {
        const movie = req.body;

        await client.connect();
        const db = client.db('MoviesClub');
        const collection = db.collection('Movies');
        await collection.insertOne(movie);

        res.status(201).json({
            success: true,
            data: movie
        });

        await client.close();
    } catch (error) {
        console.log('Error with post request add movie: ', error);

        res.status(500).json({
            success: false
        });
    }
})

const port = 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})