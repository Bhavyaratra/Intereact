//socket operations
const socketOp = (io)=> {

    io.on("connect", (socket) =>{
        console.log("socket connected : " + socket.id);

        socket.on('write-text',(data)=>{
            io.emit('updated-text',data);
        })

        socket.on('send-output',(output)=>{
            io.emit('recieve-output',output);
        })
    })
}

module.exports = socketOp;
