const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')


router.get('/', (req, res) => {
    res.json({msg: "get request successfull!"});
    
});
router.post('/', (req, res) => {
    console.log(req.body);
    // res.json({msg: "get request successfull!"});
    res.json(req.body);
    
});

module.exports = router;
