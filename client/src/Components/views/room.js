import Editor from "../Editor/Editor"
import VideoCall from "../VideoCall/VideoCall"
import Questionbank from "../Utitlities/Questionbank"
import './style.css'
import Utilities from "../Utitlities/Utitlities"

export default function Room(){
    return(<>
    <div className="container-md" id="room-view">
    <div className="navbar" id="room-nav">
        <div className="container-fluid">
            <a class="navbar-brand" href="/home">
                <img src="https://i.imgur.com/HTLGops.png" alt="logo" width="24" height="24" className="d-inline-block align-text-top"/>
            </a>
        </div>
    </div>
     <div className="row" >
        <div className="col-6 border" id="editor">
            <Editor/>
        </div>
        <div className="col-6" id="utility">
                <Utilities />
        </div>
        <div className="position-absolute" id="video-call">
                <VideoCall/>
        </div>
    </div>

    </div>

        </>)
}