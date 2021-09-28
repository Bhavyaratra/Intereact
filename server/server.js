const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.use(express.json({limit:"30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended: true}));

app.listen(port,function(err){
        if(err) console.error('connection error',err);
        else console.log(`listening to port ${port} [http://localhost:${port}]`)
})

app.use('/',(req,res)=>{
    res.send('welcome to server');
})

app.use((req,res)=>{
    res.json({sucess: false,
    error: 404})
})