var express = require('express');
const Trip = require('../models/trips');
var router = express.Router();
const moment = require('moment')
const { checkBody } = require('../modules/checkBody');



router.get("/all", (req, res) => {
    Trip.find().then((allTrips) => res.json({ result : true, allTrips }))
})


//FIXME : TIMEZONE IS FUCKED UP
router.post("/", (req, res) => {
    if (!checkBody(req.body, ["departure","arrival","date"])){
        res.json({result : false, error :  'Missing or empty fields' })
    } else {
        const { date, arrival, departure } = req.body

        const fixedDate = moment(date);
        const startDate = fixedDate.startOf('day').toDate();
        const endDate = fixedDate.endOf('day').toDate();

        Trip.find({ date: { $gte: startDate, $lte: endDate }, arrival, departure }).then(trips => {
            console.log(trips)
            if (!trips){
                res.json({result : false, error : 'No trips available'})
            } else {
                res.json({result : true, trips, time:moment(trips.date).format('LT')})
            }
        })
    }
})







module.exports = router;