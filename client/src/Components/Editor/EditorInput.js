import {useEffect, useState} from 'react';
import { compileCode } from '../../functions/realm-fn';
import { Container, Button } from 'react-bootstrap';
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
        try{
            setCompiling(true);
            const resData = await compileCode(code,lang);
            setCompiling(false);
            console.log(resData);
            setOutput(resData.output);
            socket.emit('send-output',resData.output);
        }catch(err){
            setCompiling(false);
            console.log('ERR : compile()', err);
        }
       
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
        <Container className="p-0">
            <div  className="code-runner-cntr">
                <Button
                    className="code-runner"
                    id="code-runner"
                    type="button"
                    onClick={(e)=>{
                        compile();
                    }}
                >
                    <i className="bi bi-play-fill"></i> Run
                </Button>
            </div>
        
         <textarea 
           class="form-control text-monospace border-0" 
           id="editor-textarea"
           spellCheck="false"
           value={code}
           onChange={(e)=>{handleChange(e)}}>
         </textarea>
         
         <div className = "editor-lang-slct-cntr">
            <select id="editor-lang-slct"  value={lang} onChange={(e)=>handleLangChange(e)}>
                <option value="nodejs">NodeJs</option>
                <option value="cpp">C++</option>
                <option value="python3">Python</option>
            </select>
         </div>
       
         <h3>output:</h3>
        
        <div className="output" style={{"overflow-y": "auto", "height":"20vh"}}>
            {compiling ? <p>compiling...</p> : <span></span>}
            {output? <samp className="">{output}</samp> : <span></span> }
        </div>
        </Container>
        
    </>)
}