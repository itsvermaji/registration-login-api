const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.json({msg: "get request registration successfull!"});
});



router.post('/', async (req, res) => {
  let { name, email, password, password2 } = req.body;
  // Validate each field
  // After validating field save the user
  // After successfully saving hash the passwords

  User.findOne({ email })
    .then((user) => {
      if (user) {
        console.log(user);
        return res.json({ msg: "User already exists!" });
      }

      // hash before saving
      bcrypt.genSalt(12, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hashedPassword) {
          if (err) {
            console.log(err);
            return res.json({ msg: "An error occured, please try again" })
          }

          // else create that user
          password = hashedPassword;
          const newUser = new User({ name, email, password });
          
          // save the user
          newUser.save((err, newUser) => {
            if (err) {
              console.log(err);
              return res.json({ msg: "Unable to save user, please try again!" });
            }
            console.log(newUser, 'User saved Successfully');


            // user is saved
            
            return res.json(newUser);
          })

        });
      });
  
    })
    .catch(err => {
      return res.status(400).json({ msg: "An error occured, Please try again!" });
    })

});

module.exports = router;