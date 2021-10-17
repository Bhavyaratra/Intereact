import {Tabs,Tab} from 'react-bootstrap';
import Questionbank from "./Questionbank"
import Notes from './Notes';
import './utilities.css'

export default function Utilities(){

    return(<>
    <div className="" id="util-cntnr">

           <Tabs defaultActiveKey="ques" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="ques" title="Questions">
                    <Questionbank/>
                </Tab>
                <Tab eventKey="notes" title="Notes">
                    <Notes/>
                </Tab>
                <Tab eventKey="resume" title="Resume">
                    hello
                </Tab>
            </Tabs>
        </div>
        </>)
}