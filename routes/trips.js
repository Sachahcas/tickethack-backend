var express = require('express');
const Trip = require('../models/trips');
var router = express.Router();


router.get("/all", (req, res) => {
    Trip.find().then((allTrips) => res.json({ result : true, allTrips }))
})

router.get("/", (req, res) => {
    const { departure, arrival, date, price } = req.body
    Trip.find({departure : req.body.departure , arrival : req.body.arrival}).then(dbData => {
        res.json({ tripsNumber : dbData.length, dbData})
    })
})

module.exports = router;