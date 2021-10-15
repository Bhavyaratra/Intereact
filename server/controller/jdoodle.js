const axios = require('axios');

const execute = async (req,res) =>{
    const program = req.body
    try{
    const response = await axios.post('https://api.jdoodle.com/v1/execute', program)
    console.log(response.data);
    res.status(200).json({success: true, response:response.data});
    }catch(err){
        console.log(err);
        res.status(500).json({success: false, error:err});
    }
} 

module.exports= {execute};