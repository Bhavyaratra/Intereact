import {useEffect, useState} from 'react';
import socket from '../../socket';

export default function EditorInput(props){

    const [code,setCode] = useState("");
    const [output,setOutput] = useState("");
    const [compiling,setCompiling] = useState(false);

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
        const res = await fetch(
            `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(code)}&lang=${encodeURIComponent("nodejs-head")}`
          );
        const resData = await res.json();
        console.log(resData);
        setCompiling(false);
        setOutput(resData.program_message)
        socket.emit('send-output',resData.program_message);
    }

   

    const handleChange=(e)=>{
        e.preventDefault();
        socket.emit('write-text',e.target.value);
        setCode(e.target.value);
    }

    return(<>
        <div className="container-md">
        <button
                class="btn btn-success float-right"
                id="code-runner"
                type="button"
                onClick={(e)=>{
                    compile();
                }}
            >
                <i class="bi bi-play-fill"></i> Run
            </button>
         <textarea 
           class="form-control text-monospace" 
           id="editor-textarea"
           value={code}
           onChange={(e)=>{handleChange(e)}}>
         </textarea>
         
         <div className="">
          
         </div> 
         <h3>output:</h3>
        <div className="border output" style={{"overflow-y": "auto", "height":"20vh"}}>
            {compiling ? <p>compiling...</p> : <span></span>}
            {output? <samp className="">{output}</samp> : <span></span> }
        </div>
        </div>
        
    </>)
}