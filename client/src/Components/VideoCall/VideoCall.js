import Videos from './Videos';
import './video.css'

export default function VideoCall(){
    return(
            <div className="">
                <div id="video-wrapper"> 
                    video
                </div>
                    <Videos/>
                <div id="video-wrapper">
                    options
                </div>
            </div>
        )
}