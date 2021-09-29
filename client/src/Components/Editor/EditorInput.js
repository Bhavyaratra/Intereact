import {useEffect, useState} from 'react';

export default function EditorInput(){

    const [code,setCode] = useState("");
    const [output,setOutput] = useState("");
    const [compiling,setCompiling] = useState(false);

    async function run(e){
        e.preventDefault();
        setCompiling(true);
        const res = await fetch(
            `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(code)}&lang=${encodeURIComponent("nodejs-head")}`
          );
        const resData = await res.json();
        console.log(resData);
        setCompiling(false);
        setOutput(resData.program_message)
    }


    return(<>
        <div className="">

         <textarea 
           class="form-control text-monospace" 
           id="textarea"
           rows="15"
           value={code}
           onChange={(e)=>setCode(e.target.value)}>
         </textarea>

         <div className="">
            <button
                class="btn btn-success "
                type="button"
                onClick={(e)=>run(e)}
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