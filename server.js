const express = require('express');
const cors = require('cors');

const client = require('./mongodb.utils').client;

const app = express();

app.use(express.json());
app.use(cors());

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
        console.log('error with post request add movie: ', error);
        res.status(500).json({
            success: false
        });
    }
})

const port = 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})