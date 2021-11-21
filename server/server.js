const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');
const router = require('./routes/router');
require('dotenv').config();

const port = process.env.PORT || 8000;

const socketOp = require('./middleware/socketOp');

const app = express();

app.use(cors());

app.use(express.json({limit:"30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended: true}));

const server = http.createServer(app);

const io = socketio(server,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

//handles socket operations
socketOp(io);

server.listen(port,function(err){
        if(err) console.error('connection error',err);
        else console.log(`listening to port ${port} [http://localhost:${port}]`)
})


app.use('/api',router);


app.use('/',(req,res)=>{
    res.send('welcome to server');
})

app.use((req,res)=>{
    res.json({sucess: false,
    error: 404})
})