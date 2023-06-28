var express = require('express');
const Cart = require('../models/carts');
var router = express.Router();

router.post("/", (req, res) => {
    const newCart = new Cart(req.body);
    newCart.save().then(newDoc => {
        res.json({ result: true, newDoc : newDoc});
    });
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