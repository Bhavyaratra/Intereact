import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ques from '../../data/ques.json';

export default function Questionbank(){
    return(<>
    <div className="container-md p-0" style={{"overflow-y":"auto","max-height":'51vh'}} >
        {ques && ques.length!==0 && ques.map((item,i)=>(
        <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>{item.ques}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                     {item.desc}
                </p>
                <code style={{"white-space": "pre-line"}}>
                  {item.sample}
                </code>
            </AccordionDetails>
        </Accordion>
        ))}
    </div>

        </>)
}