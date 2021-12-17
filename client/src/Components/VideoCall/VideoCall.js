import Videos from './Videos';
import './video.css'

export default function VideoCall({socket}){
    return(
            <div className="">
                    <Videos socket={socket}/>
            </div>
        )
}