import Editor from "../Editor/Editor"
import VideoCall from "../VideoCall/VideoCall"
import Questionbank from "../Utitlities/Questionbank"
import './style.css'

export default function Room(){
    return(<>
    <div className="" id="room-view">
    <div className="navbar" id="room-nav">
        <div className="container-fluid">
            <a class="navbar-brand" href="/home">
                <img src="https://i.imgur.com/HTLGops.png" alt="logo" width="24" height="24" className="d-inline-block align-text-top"/>
            </a>
        </div>
    </div>
     <div className="row " >
        <div className="col-7 border" id="editor">
            <Editor/>
        </div>
        <div className="col">
            <div className="row" id="utility">
                {/* utilities component */}
                <Questionbank/>
            </div>
        </div>
        <div className="position-absolute" id="video-call">
                <VideoCall/>
        </div>
    </div>

    </div>

        </>)
}