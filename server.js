
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}) .then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

const app = express();
const port = 3001;

const internshipScehma = new mongoose.Schema({
    title: String,
    position: String,
    link: String,
    status: Integer,
})

module.exports = mongoose.model('Internship', internshipScehma);



app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port)


