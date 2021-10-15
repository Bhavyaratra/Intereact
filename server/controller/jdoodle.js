const axios = require('axios');

const execute = async (req,res) =>{
    const program = req.body
    program.clientId = "a3ff0a426efbf5f3e1c55a9ee31fbedf"
    program.clientSecret = "9350deb056b7f5a897504bacc983d4155a8b9e45c1d62b8bec052405190894e1"
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