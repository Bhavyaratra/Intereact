import React, { useEffect, useRef, useState } from "react"
import { IconButton } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';

import Peer from 'peerjs';
import socket from "../../socket";
import './video.css'

export default function Videos(){

    const [ stream, setStream ] = useState()
    const myVideo = useRef();
	const userVideo = useRef();

    const [roomId,setRoomId] = useState('');

    useEffect(()=>{
        const url = window.location.href;
        const room_id = url.substr(url.lastIndexOf('/')+1,url.length);
        setRoomId(room_id);
        const peer = new Peer();
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        .then(currentStream=>{
            myVideo.current.srcObject = currentStream;
           
            peer.on('call', call => {
                call.answer(currentStream);
                call.on('stream', userVideoStream => {
                    userVideo.current.srcObject = userVideoStream;
                })
              })
            
              peer.on('open', id => {
                socket.emit('join-room', room_id, id)
              })
             
            socket.on('user-connected', userId => {
                const call = peer.call(userId, currentStream)
                call.on('stream', userVideoStream => {
                  userVideo.current.srcObject = userVideoStream;
                })
              })

            setStream(currentStream);
        })
        .catch(err=>{
            console.log("stream error",err);
        })
    },[])

    function toggleVideoOpt(e,trackKind){
        e.preventDefault();
        try{
            const currentStream = myVideo.current.srcObject
            if(trackKind==='video'){
                currentStream.getVideoTracks().forEach(function(track) {
                    if (track.kind === 'video') {
                        if (track.enabled) {
                            //track.stop();
                            track.enabled = false; 
                        }else{
                            track.enabled = true; 
                        }
                    }
                });
            }else if(trackKind==='audio'){
                currentStream.getAudioTracks().forEach(function(track) {
                    if (track.kind === 'audio') {
                        if (track.enabled) {
                            //track.stop();
                            track.enabled = false; 
                        }else{
                            track.enabled = true; 
                        }
                    }
                });
            }
        }catch(err){
            console.log("No video/audio stream")
        }
    }
    
    return(<>
    {/* <div className="container"> */}
       
        <div className="shadow" id="video-player">
            <div className="row justify-content-center " >   
                <div className = "col" id="video-opt">
                    <IconButton className="" onClick={(e)=>{toggleVideoOpt(e,'video')}}>
                        <VideocamIcon className="icon-btn"/>
                    </IconButton>
                    <IconButton className="" onClick={(e)=>{toggleVideoOpt(e,'audio')}}>
                        <MicIcon className="icon-btn"/>
                    </IconButton>
                </div>
                <div className="col" id="video-col">
                    <video id="my-video" playsInline mute autoPlay ref={myVideo} width='236px' height='135px'/>
                </div>
                <div className="col" id="video-col">
                    <video id="user-video" playsInline mute autoPlay ref={userVideo} width='236px' height='135px' />
                </div>
            </div>
        </div>
    {/* </div> */}
       
    </>)
}