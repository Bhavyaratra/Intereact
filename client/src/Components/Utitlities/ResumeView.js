import { useState ,useEffect} from "react";
import { Container, Button } from "react-bootstrap"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {sendFile, textract} from '../../functions/util-srvc';


import './ResumeView.css'

export default function ResumeView({socket}){
    const skills = ["cpp","c++","javascript","js","python","py"];
          
    const [resumeUrl,setResumeUrl] = useState('');
    const [roomId,setRoomId] = useState('');
    const [file,setFile] = useState({});

    useEffect(()=>{
        socket.on('updated-file-url',data=>{setResumeUrl(data);})
        const url = window.location.href;
        const id = url.substr(url.lastIndexOf('/')+1,url.length);
        console.log(id);
        setRoomId(id);
    }
    ,[])

    async function handleFileChange(e){
        setFile(e.target.files[0]);
        try{
            const fileurl = await sendFile(e.target.files[0],{rmid:roomId});
            console.log(fileurl);
            setResumeUrl(fileurl);
            socket.emit('update-file-url',fileurl)
            const res =await textract(fileurl);
            //todo nlu on extracted text 
            console.log(res);
            if(res.success){
                const text = res.text.toLowerCase();
                let skillArr=[];
                skills.forEach((skill)=>{
                    if(text.includes(skill)){
                        skillArr.push(skill);
                    }
                })
                console.log(skillArr)
                socket.emit('add-skills',skillArr);
            } 
        }catch(err){
            console.log('handleFileChange error',err)
        }

    }

    return(<>
    <Container className="p-0" style={{"overflowY":"auto","maxHeight":'60vh'}} >
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