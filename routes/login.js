const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session')
const jwt = require('jsonwebtoken');
// const privateKey = require('')



router.get('/', (req, res) => {
  res.json({ msg: "get request registration successfull!" });
});



router.post('/', async (req, res) => {
  let { email, password } = req.body;
  // Validate each field
  // After validating field save the user
  // After successfully saving hash the passwords

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json({ msg: "Invalid Email or Password" });
      }

      bcrypt.compare(password, user.password)
        .then((matches) => {

          if (!matches) {
            return res.json({msg: "Invalid Email or Password"});
          }

          // generate a token for this user
          // jwt.sign(payload, secretOrPrivateKey, [options, callback])


          jwt.sign({ userid: user.id }, process.env.SECRET_KEY, 
          { expiresIn: '1h' },
          (err, token) => {
            if(err) {
              console.log(err);
              return res.json({msg: 'Error occured while logging in'});
            }
            return res.json({msg: token});
          });



        })
        .catch((err) => {
          console.log(err);
          res.json({ msg: "Some error occured" })
        });

    })
    .catch(err => {
      return res.status(400).json({ msg: "An error occured, Please try again!" });
    })

});

module.exports = router;