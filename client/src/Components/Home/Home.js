import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Home(){
    const [id,setId] = useState('');
    useEffect(()=>{
        setId(uuidv4());
    },[])
    return(<>
       <h1>HOME PAGE</h1>
        <Link to="/editor">
            <button className="btn btn-success">Editor</button>
        </Link>
        <Link to={`/room/${id}`}>
            <button className="btn btn-info">Room</button>
        </Link>
    </>)
}