const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/login', (req, res) => {
    const { address } = req.body;
    User.findOne({ address: address})
        .then(user => {
            if(!user){
                let n_user = new User({
                    address: address,
                    name: "",
                    coin: null
                });
                n_user.save();
                res.json({status: true, auth: n_user});
            } else {
                res.json({status: true, auth: user});
            }
        }).catch(err => res.json({status: false, message: err}));
})

module.exports = router;