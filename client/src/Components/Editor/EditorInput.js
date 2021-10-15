import {useEffect, useState} from 'react';
import { compileCode } from '../../functions/edtr-cplr';

import socket from '../../socket';

export default function EditorInput(props){

    const [code,setCode] = useState("");
    const [output,setOutput] = useState("");
    const [compiling,setCompiling] = useState(false);
    const [lang, setLang] = useState('nodejs');

    useEffect(()=>{
        socket.on('updated-text',data=>{
            setCode(data);
        })
        socket.on('recieve-output',(data)=>{
            setOutput(data);
        })
    },[])
   

    async function compile(){

        setCompiling(true);
        const resData = await compileCode(code,lang);
        setCompiling(false);
        setOutput(resData.output)
        socket.emit('send-output',resData.output);
    }

    const handleLangChange = (event) => {
        setLang(event.target.value);
      };

    const handleChange=(e)=>{
        e.preventDefault();
        socket.emit('write-text',e.target.value);
        setCode(e.target.value);
    }

    return(<>
        <div className="container-md">
        <button
                class="btn btn-primary float-right"
                id="code-runner"
                type="button"
                onClick={(e)=>{
                    compile();
                }}
            >
                <i class="bi bi-play-fill"></i> Run
            </button>
         <textarea 
           class="form-control text-monospace border-0" 
           id="editor-textarea"
           spellCheck="false"
           value={code}
           onChange={(e)=>{handleChange(e)}}>
         </textarea>
         
         <div className="">
          
         </div> 
         <select id="editor-lang-slct"  value={lang} onChange={(e)=>handleLangChange(e)}>
            <option value="nodejs">NodeJs</option>
            <option value="cpp">C++</option>
            <option value="python3">Python</option>
         </select>
         <h3>output:</h3>
        
        <div className="output" style={{"overflow-y": "auto", "height":"20vh"}}>
            {compiling ? <p>compiling...</p> : <span></span>}
            {output? <samp className="">{output}</samp> : <span></span> }
        </div>
        </div>
        
    </>)
}