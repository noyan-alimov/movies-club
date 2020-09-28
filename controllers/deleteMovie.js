const ObjectID = require('mongodb').ObjectID;

const deleteMovie = async (req, res, client) => {
    try {
        const movieObjectID = new ObjectID(req.body.movieId);
        const userId = req.body.userId;

        await client.connect();
        const db = client.db('MoviesClub');
        const collection = db.collection('Movies');
        const movie = await collection.findOne({ _id: movieObjectID });

        if (!movie) {
            res.status(404).json({
                success: false,
                reason: 'The movie does not exist'
            })
        }

        if (movie.userId !== userId) {
            res.status(401).json({
                success: false,
                reason: 'You are unauthorized to delete this movie'
            })
        }
        
        await collection.deleteOne({ _id: movieObjectID });

        res.status(200).json({
            success: true,
            data: req.body.id
        });
    } catch (error) {
        console.log('Error deleting a movie: ', error);

        res.status(500).json({
            success: false
        });
    }
};

module.exports = deleteMovie;