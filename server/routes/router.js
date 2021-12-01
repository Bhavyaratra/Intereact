const express = require("express");
const router = express.Router();
const {execute} = require('../controller/jdoodle');
const {textract} = require('../controller/textract');

router.get('/',(req,res)=>{
    res.status(404).json({error: "get request not supported"})
})

router.post('/execute',execute)
router.post('/textract',textract);

module.exports= router;