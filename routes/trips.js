var express = require('express');
const Trip = require('../models/trips');
var router = express.Router();
const moment = require('moment');
const { checkBody } = require('../modules/checkBody');

//get all trips (mostly for tests)
router.get("/all", (req, res) => {
    Trip.find().then((allTrips) => res.json({ result : true, allTrips }))
})

//get trips from departure, arrival & date
router.post("/", (req, res) => {
    if (!checkBody(req.body, ["departure","arrival","date"])){
        res.json({result : false, error :  'Missing or empty fields' })
    } else {
        const { date, arrival, departure } = req.body

        const fixedDate = moment(date);
        const startDate = fixedDate.startOf('day').toDate();
        const endDate = fixedDate.endOf('day').toDate();

        Trip.find({ date: { $gte: startDate, $lte: endDate }, arrival, departure }).then(tripsData => {
            console.log(tripsData)
            if (!tripsData){
                res.json({result : false, error : 'No trips available'})
            } else {
                res.json({result : true, tripsData, time: tripsData.map(e=>moment(e.date).format('HH:mm'))})
            }
        })
    }
})







module.exports = router;