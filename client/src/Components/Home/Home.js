import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container ,Button } from 'react-bootstrap'
import './home.css'

export default function Home(){
    const [id,setId] = useState('');
    useEffect(()=>{
        setId(uuidv4());
    },[])
    return(
        <Container fluid >
            <div>
                <h1>HOME PAGE</h1>
                <Link to="/editor">
                    <Button className="btn btn-success">Editor</Button>
                </Link>
                <Link to={`/room/${id}`}>
                    <Button className="btn btn-info">Create Room</Button>
                </Link>
            </div>
        </Container>
       
    )
}