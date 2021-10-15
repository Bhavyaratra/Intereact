const express = require("express");
const router = express.Router();
const jdoodle = require('../controller/jdoodle');

router.get('/',(req,res)=>{
    res.status(404).json({error: "get request not supported"})
})

router.post('/execute',jdoodle.execute)

module.exports= router;