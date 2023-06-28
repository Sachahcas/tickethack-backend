const mongoose = require('mongoose');
const moment = require('moment')

const bookingSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
    price: Number,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;