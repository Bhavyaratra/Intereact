//socket operations
const socketOp = (io)=> {

    io.on("connect", (socket) =>{
        console.log("socket connected : " + socket.id);

        socket.on('join-room',(roomId, userId)=>{
            socket.join(roomId);
            console.log('user id ',userId);
            socket.to(roomId).emit('user-connected', userId)

            socket.on('write-text',(data)=>{
                socket.to(roomId).emit('updated-text',data);
            })
    
            socket.on('send-output',(output)=>{
                socket.to(roomId).emit('recieve-output',output);
            })

            socket.on('update-file-url',(output)=>{
                socket.to(roomId).emit('updated-file-url',output);
            })

            socket.on('add-skills',(output)=>{
                console.log(output)
                io.in(roomId).emit('added-skills',output);
            })
        })
        
    })
}

module.exports = socketOp;
