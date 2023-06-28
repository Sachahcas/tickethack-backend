const mongoose = require('mongoose');
const moment = require('moment')

const cartSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
    price: Number,
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;