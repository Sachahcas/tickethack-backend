var express = require('express');
const Cart = require('../models/carts');
var router = express.Router();
const moment = require('moment')
const { checkBody } = require('../modules/checkBody');

router.post("/", (req, res) => {
   
        // const { date, arrival, departure, price} = req.body

    const newCart = new Cart(req.body);

    newCart.save().then(newDoc => {
        res.json({ result: true, newDoc : newDoc});
    });
})



module.exports = router;