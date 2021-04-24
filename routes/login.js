const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


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
        return res.json({ msg: "User doesn't exist!" });
      }

      bcrypt.compare(password, user.password)
        .then((matches) => {

          if (!matches) {
            return res.json({msg: "incorrect password"});
          }
          // generate a token for this user
          return res.json({msg: "user logs in!"});

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