import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ques from '../../data/ques.json';

export default function Questionbank(){
    return(<>
    <div className="container-md" style={{"overflow-y":"scroll","max-height":'60vh'}} >
        {ques && ques.length!==0 && ques.map((item,i)=>(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5>{item.ques}</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                     {item.desc}
                </Typography>
                <code style={{"white-space": "pre-line"}}>
                  {item.sample}
                </code>
            </AccordionDetails>
        </Accordion>
        ))}
    </div>

        </>)
}