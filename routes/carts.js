var express = require('express');
const Cart = require('../models/carts');
var router = express.Router();
const moment = require('moment')

router.get("/", (req, res) => {
    Cart.find().then(tripsInCart => {
        res.json({ result : true, tripsInCart, time : tripsInCart.map(e=>moment(e.date).format('HH:mm'))})
    })
})

router.post("/", (req, res) => {
    
    const newCart = new Cart({
        departure : req.body.departure,
        arrival : req.body.arrival,
        date : req.body.date,
        price : req.body.price
    })
    newCart.save().then(data => {
        res.json({result : true, data})
    })
})

router.delete("/", (req, res) => {

    Cart.findOne(req.body).then((tripFound) => {
        if (!tripFound) {
            return res.json({ result: false, error: "Trip not found" })
        } else {
            Cart.deleteOne(req.body).then((tripDeleted) => {
                return res.json({ result: true, tripDeleted })
            })
        }
    })
})

router.delete("/all", (req,res) => {
    Cart.deleteMany().then(()=>{
        return res.json({result : true})
    })
})



module.exports = router;