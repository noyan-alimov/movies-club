const ObjectID = require('mongodb').ObjectID;

const deleteMovie = async (req, res, client) => {
    try {
        const movieObjectID = new ObjectID(req.params.id)

        await client.connect();
        const db = client.db('MoviesClub');
        const collection = db.collection('Movies');
        await collection.deleteOne({ _id: movieObjectID });

        res.status(200).json({
            success: true,
            data: req.params.id
        });

        await client.close();
    } catch (error) {
        console.log('Error deleting a movie: ', error);

        res.status(500).json({
            success: false
        });
    }
};

module.exports = deleteMovie;