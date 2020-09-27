const getMovies = async (req, res, client) => {
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
}

module.exports = getMovies;