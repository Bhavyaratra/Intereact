
import Questionbank from "./Questionbank"
import './utilities.css'

export default function Utilities(){

    return(<>
    <div className="container-md" id="util-cntr">
        <div className="btn-group" id="util-btng">
         <button 
            type="button" 
            className="btn btn-outline-primary"
         >Question Bank</button>
         <button 
            type="button" 
            className="btn btn-outline-primary"
         >Notes</button>
        </div>
        <div className="container-md">
             <Questionbank/>
        </div>
    </div>
        </>)
}