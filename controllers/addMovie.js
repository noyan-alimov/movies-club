const addMovie = async (req, res, client) => {
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
    } catch (error) {
        console.log('Error with post request add movie: ', error);

        res.status(500).json({
            success: false
        });
    }
};

module.exports = addMovie;