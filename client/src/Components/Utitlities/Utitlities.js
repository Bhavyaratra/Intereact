
import Questionbank from "./Questionbank"
import './utilities.css'

export default function Utilities(){

    return(<>
    <div className="" id="util-cntnr">
        <div className="nav" id="utility-nav">
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
        </div>
        
        <div className="container-md">
             <Questionbank/>
        </div>
    </div>
        </>)
}