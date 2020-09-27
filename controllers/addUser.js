const addUser = async (req, res, client) => {
    try {
        const user = req.body;

        await client.connect();
        const db = client.db('MoviesClub');
        const collection = db.collection('Users');
        const existingUser = await collection.findOne(user);

        if (!existingUser) {
            await collection.insertOne(user);
        }

        res.status(201).json({
            success: true,
            data: user
        });

        await client.close();
    } catch (error) {
        console.log('Error with post request add movie: ', error);

        res.status(500).json({
            success: false
        });
    }
};

module.exports = addUser;