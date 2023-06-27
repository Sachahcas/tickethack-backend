var express = require('express');
const Trip = require('../models/trips');
var router = express.Router();
const moment = require('moment')


const date = moment("2044-07-12")
const date2 = moment("2023-06-27T08:46:29.809Z")
console.log(date)
console.log(date2)



router.get("/all", (req, res) => {
    Trip.find().then((allTrips) => res.json({ result : true, allTrips }))
})





//FIXME : TIMEZONE IS FUCKED UP
router.get("/", (req, res) => {

    
    const fixedDate = moment(req.body.date);
    const startDate = fixedDate.startOf('day').toDate();
    const endDate = fixedDate.endOf('day').toDate();

    Trip.find({ date: { $gte: startDate, $lte: endDate } }).then(dbData => {
        res.json({ tripsNumber : dbData.length, dbData })
    })
})





module.exports = router;