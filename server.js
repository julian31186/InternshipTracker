
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const internship = require('./internshipScehma');

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}) .then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.use("/",require("./noteRoute"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

  

