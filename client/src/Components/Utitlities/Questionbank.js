import { useState,useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {ques} from '../../data/ques.js';
//todo remove skills from localstorage after setting the ques
export default function Questionbank({socket}){

  const [skills,setSkills] = useState([]); 

  useEffect(() => {
    socket.on('added-skills',data=>{setSkills(data);})

  },[])

  return(<>
    <div className="container-md p-0" style={{"overflow-y":"auto","max-height":'51vh'}} >
        {ques && ques.length!==0 && ques.map((item,i)=>(
          <div>
            {item.ctgr.some(r=> skills.indexOf(r) >= 0) && 
              <Accordion TransitionProps={{ unmountOnExit: true }}>
            
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className='d-flex justify-content-between w-100'>
                        <p><strong>{item.ques}</strong></p>
                        <code>
                          {item.ctgr[0]}
                        </code>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p style={{"white-space": "pre-line"}}>
                          {item.answ}
                      </p>
                  </AccordionDetails>
              </Accordion>
          }
        </div>
        ))}
      
    </div>

        </>)
}