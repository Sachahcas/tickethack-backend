var express = require('express');
const Booking = require('../models/bookings');
var router = express.Router();

router.post("/", (req, res) => {
    const newBooking = new Booking(req.body);
    newBooking.save().then(newDoc => {
        res.json({ result: true, newDoc : newDoc});
    });
})


router.delete("/all", (req, res) => {
    Booking.deleteMany().then(()=> {
    return res.json({result : true})
    })
})

module.exports = router