const express = require('express');

const connectToDB = require('./mongodb.utils');

const app = express();

app.use(express.json());

connectToDB();

const port = 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})