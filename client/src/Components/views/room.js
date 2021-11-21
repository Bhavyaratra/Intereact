import { useEffect, useState } from 'react'
import Editor from "../Editor/Editor"
import VideoCall from "../VideoCall/VideoCall"
import './style.css'
import Utilities from "../Utitlities/Utitlities"
import { Container, Row ,Button } from 'react-bootstrap'
import socket from '../../socket'
export default function Room(){
    const [roomId,setRoomId] = useState('');
    const [access,setAccess] = useState(false);
    
    useEffect(() => {
        const url = window.location.href;
        const id = url.substr(url.lastIndexOf('/')+1,url.length);
        console.log(id);
        setRoomId(id);
        socket.emit('join-room', id, )
    }, [])

    if(access){
    return(<>
    <Container fluid className="p-0" id="room-view">
    <div className="navbar" id="room-nav">
        <div className="container-fluid">
            <a className="navbar-brand site-name" href="/home">
               Intereact
                {/* <img src="https://i.imgur.com/HTLGops.png" alt="logo" width="24" height="24" className="d-inline-block align-text-top"/> */}
            </a>
            <Container >
                <a className="float-end"  href="/home" style={{marginLeft:"10px"}}>
                    <Button variant="danger">Exit</Button>
                </a>
                <Button className="float-end" onClick={(e)=>{navigator.clipboard.writeText(`https://intereact-ee0ef.web.app/room/${roomId}`)}}>copy room link</Button>
            </Container>

        </div>

    </div>
    <div className="container-fluid ">
        <Row className="" id="room-row1">
            <div className="col" id="editor">
                <Editor/>
            </div>
            <div className="col" id="utility">
                    <Utilities/>
            </div>
        </Row>
        <div className="position-absolute" id="video-call">
                    <VideoCall/>
            </div>
    </div>
     
    </Container>

        </>)
        }else{
            return(<>
                <Container fluid className="joining-room">
                    <div>
                    <h2>Ready to join ?</h2> 
                    <Button className="rounded-pill" onClick={()=>{
                        setAccess(true);
                    }}>Join now</Button>
                    </div>
                </Container>
            
                    </>)
        }
}