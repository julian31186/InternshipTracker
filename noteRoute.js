const express = require('express');
const router = express.Router();
const internship = require('./internshipScehma');


router.post("/create" , (req, res) => {
    console.log("Internship added!")
    const title = req.body.title;
    const position = req.body.position;
    const link = req.body.link;
    const status = req.body.status;
    const newInternship = new internship({
        title,
        position,
        link,
        status
    })

    newInternship.save()

})

module.exports = router;