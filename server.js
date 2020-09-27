const express = require('express');
const cors = require('cors');

const connectToDB = require('./mongodb.utils');

const app = express();

app.use(express.json());
app.use(cors());

connectToDB();



const port = 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})