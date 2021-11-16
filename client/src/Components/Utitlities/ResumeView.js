import { useState ,useEffect} from "react";
import { Container, Button } from "react-bootstrap"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import socket from '../../socket';
import './ResumeView.css'

export default function ResumeView(){
  
    const [resumeUrl,setResumeUrl] = useState('');
    const [file,setFile] = useState({});

    useEffect(()=>{
        socket.on('updated-file-url',data=>{setResumeUrl(data);})
    }
    ,[])

    async function handleFileChange(e){
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            console.log(reader.result)
            setResumeUrl(reader.result);
            socket.emit('update-file-url',reader.result)
          };
    }

    return(<>
    <Container className="p-0" style={{"overflow-y":"auto","max-height":'60vh'}} >
        {resumeUrl ? 
            <div>
                <iframe title = "pdf-veiwer"style ={{width:"100%",height:"45vh"}}src={resumeUrl} />
                <Button onClick={(e)=>{setResumeUrl('');setFile({})}}>Remove file</Button>
            </div>
                :
                    <Container className="d-flex" style ={{width:"100%",height:"50vh",justifyContent:"center",alignItems:"center"}}>
                            
                            <input accept='.pdf' type="file" id="file" className="input-file" style ={{display:"none"}}
                                onChange={(e)=>{handleFileChange(e)}}
                            />
                                <label className="input-file" htmlFor="file">
                                    <FileUploadIcon/>Select file
                                    {file ? <p>{file.name}</p>:<span></span>}
                                </label>
                    </Container>
        }
        
        </Container>
        </>)
}