const mongoose = require('mongoose');


const internshipScehma = new mongoose.Schema({
    title: String,
    position: String,
    link: String,
    status: String,
})

const internship = mongoose.model('Internship', internshipScehma);

module.exports = internship;
