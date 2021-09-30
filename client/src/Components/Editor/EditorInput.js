import {useEffect, useState} from 'react';
import socket from '../../socket';

export default function EditorInput(){

    const [code,setCode] = useState("");
    const [output,setOutput] = useState("");
    const [compiling,setCompiling] = useState(false);

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

    useEffect(()=>{
        socket.on('updated-text',data=>{
            setCode(data);
        })

        socket.on('recieve-output',(data)=>{
            setOutput(data);
        })
    },[])

    const handleChange=(e)=>{
        e.preventDefault();
        socket.emit('write-text',e.target.value);
        setCode(e.target.value);
    }

    return(<>
        <div className="">

         <textarea 
           class="form-control text-monospace" 
           id="textarea"
           rows="15"
           value={code}
           onChange={(e)=>{handleChange(e)}}>
         </textarea>

         <div className="">
            <button
                class="btn btn-success "
                type="button"
                onClick={(e)=>{
                    compile();
                }}
            >
                Run
            </button>
         </div> 

        <div className="">
            <h3>output:</h3>
            {compiling ? <p>compiling...</p> : <span></span>}
            {output? <samp>{output}</samp> : <span></span> }
        </div>
        </div>
        
    </>)
}