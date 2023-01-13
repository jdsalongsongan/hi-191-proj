const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
let initialPath = path.join(__dirname);

app.use(bodyParser.json());
app.use(express.static(initialPath));

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "view/index.html"))
})

app.get('/demographics', (req, res) => {
    res.sendFile(path.join(initialPath, "view/demographics.html"))
})

app.get('/search', (req, res) => {
    res.sendFile(path.join(initialPath, "view/search.html"))
})

app.get('/count', (req, res) => {
    res.sendFile(path.join(initialPath, "view/count.html"))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})