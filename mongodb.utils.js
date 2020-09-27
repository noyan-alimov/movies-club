const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:
    ${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/
    ${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const connectToDB = async () => {
    try {
        await client.connect();
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;
