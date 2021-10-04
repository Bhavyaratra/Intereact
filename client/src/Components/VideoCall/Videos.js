import React, { useEffect, useRef, useState } from "react"

export default function Videos(){

    const [ stream, setStream ] = useState()
    const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef= useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(currentStream=>{
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
        })
        navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        }).then(currentStream=>{
            userVideo.current.srcObject = currentStream;
        })
    },[])

    return(<>
    {/* <div className="container"> */}
        <div className="row justify-content-center">   
            <div className="col" id="video-col">
                <video id="my-video" playsInline autoPlay ref={myVideo} width='236px' height='135px'/>
            </div>
            <div className="col" id="video-col">
                <video id="user-video" playsInline autoPlay ref={userVideo} width='236px' height='135px' />
            </div>
        </div>
    {/* </div> */}
       
    </>)
}