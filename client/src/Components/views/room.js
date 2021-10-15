import { useEffect, useState } from 'react'
import Editor from "../Editor/Editor"
import VideoCall from "../VideoCall/VideoCall"
import Questionbank from "../Utitlities/Questionbank"
import './style.css'
import Utilities from "../Utitlities/Utitlities"
import socket from '../../socket';

export default function Room(){
    const [roomId,setRoomId] = useState('');
    useEffect(() => {
        const url = window.location.href;
        const id = url.substr(url.lastIndexOf('/')+1,url.length);
        console.log(id);
        setRoomId(id);

        socket.emit('join-room', id,"user-id")

    }, [])

    return(<>
    <div className="" id="room-view">
    <div className="navbar" id="room-nav">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home">
               Intereact
                {/* <img src="https://i.imgur.com/HTLGops.png" alt="logo" width="24" height="24" className="d-inline-block align-text-top"/> */}
            </a>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row" id="room-row1">
            <div className="col" id="editor">
                <Editor/>
            </div>
            <div className="col" id="utility">
                    <Utilities/>
            </div>
            <div className="position-absolute" id="video-call">
                    <VideoCall/>
            </div>
        </div>
    </div>
     
    </div>

        </>)
}