import React, { useEffect, useState, useLayoutEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container ,Button, Row, Col ,Navbar} from 'react-bootstrap'
import logo from '../../Assets/logo/intereactLogo.png'
import homeImg from '../../Assets/logo/homeImg.svg'

import './home.css'

export default function Home(){
    const [id,setId] = useState('');
    const divRef = useRef();
    
    useLayoutEffect(()=>{
        const bgcontainer = divRef.current;

        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

        const numBalls = 50;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);
        bgcontainer.append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        let anim = el.animate(
            [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
            duration: (Math.random() + 1) * 4000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
            }
        );
        });
    },[])

    useEffect(()=>{
        setId(uuidv4());
    },[])
    return(
        <Container fluid >
            <div>
                <div id="bg" ref = {divRef}/>  
                <Navbar expand="lg" className="site-container">
                  
                        <Navbar.Brand href="/home">
                            <img alt="" src={logo} width="30px" className="d-inline-block align-top" /> 
                            {' '}Intereact
                        </Navbar.Brand>
                    
                </Navbar> 
 
                <Container>
                    <Row lg={2} sm={1}>
                        <Col className="d-grid" style={{placeItems:'center'}}>
                            <div>
                                <div>
                                    <h2>Live coding environment with built-in video calls</h2>
                                </div>
                                <Link to={`/room/${id}`} style={{bottom:0}}>
                                    <Button className="btn btn-info">Create Room</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col className="d-grid" style={{placeItems:'center'}}>
                            <img alt="" src={homeImg} width="330px"/>

                        </Col>
                    
                    </Row>
                </Container>

            </div>


        </Container>
       
    )
}