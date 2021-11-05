import { useEffect, useState } from 'react'
import Editor from "../Editor/Editor"
import VideoCall from "../VideoCall/VideoCall"
import Questionbank from "../Utitlities/Questionbank"
import './style.css'
import Utilities from "../Utitlities/Utitlities"
import { Container, Row ,Button} from 'react-bootstrap'

export default function Join(){


    return(<>
    <Container fluid>
        <h2>Join now</h2> 
        <Button>Join</Button>
    </Container>

        </>)
}