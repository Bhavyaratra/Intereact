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
            myVideo.current.srcObject = currentStream;
            try{
                navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true
                }).then(current2Stream=>{
                    userVideo.current.srcObject = current2Stream;
                })
        }catch(err){
            console.log("second stream: ",err)
        }
            setStream(currentStream);

        })
       
    },[])

    return(<>
    {/* <div className="container"> */}
        <div className="row justify-content-center">   
            <div className="col" id="video-col">
                <video id="my-video" playsInline mute autoPlay ref={myVideo} width='236px' height='135px'/>
            </div>
            <div className="col" id="video-col">
                <video id="user-video" playsInline mute autoPlay ref={userVideo} width='236px' height='135px' />
            </div>
        </div>
    {/* </div> */}
       
    </>)
}