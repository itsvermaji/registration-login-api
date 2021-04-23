const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "get request registration successfull!"});
    
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const { email, password } = req.body;
    

    
});

module.exports = router;